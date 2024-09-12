<?php

namespace App\Controller;

use App\Entity\RepportLogs;
use App\Form\RepportLogsType;
use App\Repository\UserRepository;
use App\Repository\AnimalRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\RepportLogsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/repport/logs')]
final class RepportLogsController extends AbstractController
{
    #[Route(name: 'app_repport_logs_index', methods: ['GET'])]
    public function index(RepportLogsRepository $repportLogsRepository): Response
    {
        return $this->render('repport_logs/index.html.twig', [
            'repport_logs' => $repportLogsRepository->findAll(),
        ]);
    }


    #[Route('/new', name: 'app_repport_logs_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, UserRepository $userRepository): Response
    {
        $repportLog = new RepportLogs();
        $userId = $this->getUser()->getId();
        $user = $userRepository->find($userId);

        $form = $this->createForm(RepportLogsType::class, $repportLog);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // Debugging: Check form data
            $user->addRepportLog($repportLog);

            $entityManager->persist($repportLog);
            $entityManager->flush();

            return $this->redirectToRoute('app_repport_logs_index', [], Response::HTTP_SEE_OTHER);
        }

        // Debugging: Check if form is submitted

        return $this->render('repport_logs/new.html.twig', [
            'repport_log' => $repportLog,
            'form' => $form,
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
