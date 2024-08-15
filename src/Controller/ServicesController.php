<?php
namespace App\Controller;

use App\Entity\Service;
use App\Form\ServiceType;
use App\Service\ImageUploader;
use App\Repository\ServiceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ServicesController extends AbstractController
{
    #[Route('/services', name: 'app_services')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        $serviceRepository = $entityManager->getRepository(Service::class);
        $services = $serviceRepository->findAll();

        return $this->render('services/index.html.twig', [
            'services' => $services,
        ]);
    }

    #[Route('/administrator/service', name: 'administrator_service')]
    public function service(Request $request, ImageUploader $imageUploader, EntityManagerInterface $entityManager, SluggerInterface $slugger): Response
    {
        $frameId = $request->headers->get('Turbo-Frame');
        $serviceRepository = $entityManager->getRepository(Service::class);
        $services = $serviceRepository->findAll();
        $service = new Service();

        $form = $this->createForm(ServiceType::class, $service);
        $form->handleRequest($request);

        $errorMessage = '';

        if ($frameId === 'show_services') {
            return $this->render('administrator/services.html.twig', [
                'controller_name' => 'AdministratorController',
                'services' => $services,
            ]);
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $imageFile = $form->get('imageFilename')->getData();
            if ($imageFile) {
                try {
                    $newFilename = $imageUploader->upload($imageFile);
                    $service->setImageFilename($newFilename);
                } catch (\Exception $e) {
                    $errorMessage = $e->getMessage();
                }
            }

            if (empty($errorMessage)) {
                $entityManager->persist($service);
                $entityManager->flush();
                $this->addFlash('success', 'Service added successfully!');
            }
        }
        return $this->render('administrator/service.html.twig', [
            'form' => $form->createView(),
            'services' => $services,
            'errorMessage' => $errorMessage,
        ]);
    }
}
