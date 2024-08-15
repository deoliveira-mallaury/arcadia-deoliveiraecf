<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Image;
use App\Form\UserType;
use App\Entity\Service;
use App\Form\ServiceType;
use App\Service\ImageUploader;
use App\Repository\ServiceRepository;
use Symfony\Component\Form\FormError;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

#[Route('/services')]
class ServicesController extends AbstractController
{
    #[Route('/', name: 'app_services')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        // Récupérer l'entité Service
        $serviceRepository = $entityManager->getRepository(Service::class);
        $services = $serviceRepository->findAll();

        return $this->render('services/index.html.twig', [
            'services' => $services,
        ]);
    }

    private function getServicesWithBase64Images(ServiceRepository $serviceRepository): array
    {
        $services = $serviceRepository->findAll();

        foreach ($services as $service) {
            foreach ($service->getImage() as $image) {
                $image->base64Data = base64_encode(stream_get_contents($image->getDataImage()));
            }
        }

        return $services;
    }

    #[Route('/admin/service', name: 'administrator_service')]
    public function service(Request $request, ServiceRepository $serviceRepository, ImageUploader $imageUploader, EntityManagerInterface $entityManager, SluggerInterface $slugger): Response
    {
        $frameId = $request->headers->get('Turbo-Frame');
        $services = $this->getServicesWithBase64Images($serviceRepository);
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
