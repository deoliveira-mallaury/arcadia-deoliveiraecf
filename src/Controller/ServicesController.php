<?php

namespace App\Controller;

use App\Entity\Image;
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
        $serviceRepository = $entityManager->getRepository(Service::class);
        $services = $serviceRepository->findAll();
        $service = new Service();

        $form = $this->createForm(ServiceType::class, $service);
        $form->handleRequest($request);

        $errorMessage = '';

        if ($form->isSubmitted() && $form->isValid()) {
            $imageFile = $form->get('data_image')->getData();
            if ($imageFile) {
                try {
                    // Read the file content
                    $imageData = file_get_contents($imageFile->getPathname());

                    // Create a new Image entity and set its data_image property
                    $image = new Image();
                    $image->setDataImage($imageData);

                    // Add the Image entity to the Service
                    $service->addImage($image);

                    // Persist the Image entity
                    $entityManager->persist($image);
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
