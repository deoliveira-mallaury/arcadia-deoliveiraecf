<?php

namespace App\Controller;

use App\Entity\Race;
use App\Entity\Animal;
use App\Form\AnimalType;
use App\Service\ImageUploader;
use App\Repository\AnimalRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/animal')]
class AnimalController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    #[Route('/', name: 'app_animal_index', methods: ['GET'])]
    public function index(Request $request, AnimalRepository $animalRepository): Response
    {

        return $this->render('animal/index.html.twig', [
            'animals' => $animalRepository->findAll(),
        ]);
    }

    #[Route('/administrator/animal', name: 'administrator_animal', methods: ['GET', 'POST'])]
    public function new(Request $request, AnimalRepository $animalRepository, ImageUploader $imageUploader): Response
    {
        $animal = new Animal();
        $form = $this->createForm(AnimalType::class, $animal);
        $form->handleRequest($request);

        $errorMessage = '';
        $animals = $animalRepository->findAll();

        if ($form->isSubmitted() && $form->isValid()) {
            $newRaceData = $form->get('newRace')->getData();
            if ($newRaceData) {
                $newRace = new Race();
                $newRace->setLabel($newRaceData->getLabel());
                $this->entityManager->persist($newRace);
                $animal->setRace($newRace);
            }

            $imageFile = $form->get('imageFilename')->getData();
            if ($imageFile) {
                try {
                    $newFilename = $imageUploader->upload($imageFile);
                    $animal->setImageFilename($newFilename);
                } catch (\Exception $e) {
                    $errorMessage = $e->getMessage();
                }
            }

            if (empty($errorMessage)) {
                $this->entityManager->persist($animal);
                $this->entityManager->flush();
                $this->addFlash('success', 'Service added successfully!');
            }
            return $this->render('administrator/animal.html.twig', [
                'animals' => $animal,
                'form' => $form,
                'errorMessage' => $errorMessage,

            ]);
        }
        return $this->render('administrator/animal.html.twig', [
            'animals' => $animals,
            'form' => $form,
            'errorMessage' => $errorMessage,

        ]);
    }
       
    #[Route('/{id}', name: 'app_animal_show', methods: ['GET'])]
    public function show(Animal $animal): Response
    {
        return $this->render('animal/show.html.twig', [
            'animal' => $animal,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_animal_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Animal $animal): Response
    {
        $form = $this->createForm(AnimalType::class, $animal);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // Save the changes to the database
            $this->entityManager->flush();

            return $this->redirectToRoute('app_animal_index');
        }

        return $this->render('animal/edit.html.twig', [
            'animal' => $animal,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'app_animal_delete', methods: ['POST'])]
    public function delete(Request $request, Animal $animal, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $animal->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($animal);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_animal_index', [], Response::HTTP_SEE_OTHER);
    }
}
