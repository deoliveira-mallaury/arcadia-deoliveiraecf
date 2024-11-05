<?php

namespace App\Controller;

use App\Entity\Animal;
use App\Entity\RepportLogs;
use App\Form\RepportLogsType;
use App\Repository\UserRepository;
use App\Repository\AnimalRepository;
use App\Repository\HabitatRepository;
use Symfony\Component\Form\FormError;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\RepportLogsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/repportlogs')]
final class RepportLogsController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    #[Route('/', name: 'app_repport_logs_index', methods: ['GET'])]
    public function index(RepportLogsRepository $repportLogsRepository, AnimalRepository $animalRepository): Response
    {
        // dd($repportLogsRepository->findAll());
        return $this->render('repport_logs/index.html.twig', [
            'repport_logs' => $repportLogsRepository->findAll(),
            // 'animals'=>$animals
        ]);
    }
    #[Route('/new', name: 'app_repport_logs_new', methods: ['GET', 'POST'])]
    public function new(Request $request, AnimalRepository $animalRepository, HabitatRepository $habitatRepository, UserRepository $userRepository, EntityManagerInterface $entityManager): Response
    {

        // return $response;
        $repportLog = new RepportLogs();
        $userId = $this->getUser()->getId();
        $user = $userRepository->find($userId);
        $animals = $animalRepository->findAll();

        $data = json_decode($request->getContent(), true);
        $animalId = $data["data"]['modifiedAnimal'] ?? null;
        $habitatId = $data["data"]['modifiedHabitat'] ?? null;
        $date = new \DateTime($data["data"]['date']);
        $modifiedField = $data["data"]['modifiedField'] ?? null;
        $newValue = $data["data"]['newValue'] ?? null;
        $repportLog = new RepportLogs();
        $repportLog->setDate($date);
        $repportLog->setModifiedField($modifiedField);
        $repportLog->setNewValue($newValue);

        $user = $userRepository->find($this->getUser()->getId());
        $repportLog->setModifiedBy($user);

        if ($animalId) {
            $animal = $animalRepository->find($animalId);
            $repportLog->setModifiedAnimal($animal);
        }
        if ($habitatId) {
            $habitat = $habitatRepository->find($habitatId);
            $repportLog->setModifiedHabitat($habitat);
        }
        $entityManager->persist($repportLog);
        $entityManager->flush();
        if ($animalId) {
            $animalRepository->modifySomeField($modifiedField, $newValue, $animalId);
        }
        if ($habitatId) {
            $habitatRepository->modifySomeField($modifiedField, $newValue, $habitatId);
        }
        // Handle form submission and validation
        $form = $this->createForm(RepportLogsType::class, $repportLog);
        $form->handleRequest($request);


        return $this->render('employee/_content.html.twig', [
            'repport_log' => $repportLog,
            'form' => $form->createView(),
            'animals' => $animalRepository->findAll(),
            'habitats' => $habitatRepository->findAll()
        ]);
    }


    #[Route('/{id}', name: 'app_repport_logs_show', methods: ['GET'])]
    public function show(RepportLogs $repportLog): Response
    {
        return $this->render('repport_logs/show.html.twig', [
            'repport_log' => $repportLog,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_repport_logs_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, RepportLogs $repportLog, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(RepportLogsType::class, $repportLog);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_repport_logs_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('repport_logs/edit.html.twig', [
            'repport_log' => $repportLog,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_repport_logs_delete', methods: ['POST'])]
    public function delete(Request $request, RepportLogs $repportLog, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $repportLog->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($repportLog);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_repport_logs_index', [], Response::HTTP_SEE_OTHER);
    }
}
