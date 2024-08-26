<?php

namespace App\Controller;

use App\Entity\Animal;
use App\Entity\Habitat;
use App\Form\HabitatType;
use App\Service\ImageUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HabitatsController extends AbstractController
{
    #[Route('/habitats', name: 'app_habitats')]
    public function index(EntityManagerInterface $entityManager): Response
    {
        $habitatRepository = $entityManager->getRepository(Habitat::class);
        $habitats = $habitatRepository->findAll();

        // $habitats = $habitatRepository->findByExampleField($id);

        return $this->render('habitat/index.html.twig', [
            'habitats' => $habitats,
        ]);
    }
    
    #[Route('/admin/habitat', name: 'administrator_habitat')]
    public function new(EntityManagerInterface $entityManager, Request $request, ImageUploader $imageUploader, SluggerInterface $slugger): Response
    {
        $frameId = $request->headers->get('Turbo-Frame');
        $habitatRepository = $entityManager->getRepository(Habitat::class);
        $habitats = $habitatRepository->findAll();
        $habitat = new Habitat();

        $form = $this->createForm(HabitatType::class, $habitat);
        $form->handleRequest($request);
        $errorMessage = '';

        if ($frameId === 'show_habitat') {
            return $this->render('administrator/habitat.html.twig', [
                'controller_name' => 'AdministratorController',
                'habitats' => $habitats,
            ]);
        }   

        if ($form->isSubmitted() && $form->isValid()) {
            $imageFile = $form->get('imageFilename')->getData();
            if ($imageFile) {
                try {
                    $newFilename = $imageUploader->uploadProd($imageFile);
                    $habitat->setImageFilename($newFilename);
                } catch (\Exception $e) {
                    $errorMessage = $e->getMessage();
                }
            }

            if (empty($errorMessage)) {
                $entityManager->persist($habitat);
                $entityManager->flush();
                $this->addFlash('success', 'Service added successfully!');
            }
        }

        return $this->render('administrator/habitat.html.twig', [
            'form' => $form->createView(),
            'habitats' => $habitats,
            'errorMessage' => $errorMessage,
        ]);
    }
}
