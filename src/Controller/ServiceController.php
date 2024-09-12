<?php

namespace App\Controller;

use App\Entity\Image;
use App\Entity\Service;
use App\Form\ServiceType;
use App\Form\Service1Type;
use App\Repository\ServiceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/service')]
class ServiceController extends AbstractController
{
    #[Route('/', name: 'app_service_index', methods: ['GET'])]
    public function index(ServiceRepository $serviceRepository): Response
    {
        return $this->render('service/index.html.twig', [
            'services' => $serviceRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_service_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
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

    #[Route('/{id}', name: 'app_service_show', methods: ['GET'])]
    public function show(Service $service): Response
    {
        return $this->render('service/show.html.twig', [
            'service' => $service,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_service_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Service $service, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ServiceType::class, $service);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_service_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('service/edit.html.twig', [
            'service' => $service,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_service_delete', methods: ['POST'])]
    public function delete(Request $request, Service $service, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $service->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($service);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_service_index', [], Response::HTTP_SEE_OTHER);
    }
}
