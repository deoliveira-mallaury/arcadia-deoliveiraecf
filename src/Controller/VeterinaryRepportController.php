<?php

namespace App\Controller;

use App\Entity\VeterinaryRepport;
use App\Form\VeterinaryRepportType;
use App\Repository\VeterinaryRepportRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/veterinary/repport')]
class VeterinaryRepportController extends AbstractController
{
    #[Route('/', name: 'app_veterinary_repport_index', methods: ['GET'])]
    public function index(VeterinaryRepportRepository $veterinaryRepportRepository): Response
    {
        return $this->render('veterinary_repport/index.html.twig', [
            'veterinary_repports' => $veterinaryRepportRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_veterinary_repport_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $veterinaryRepport = new VeterinaryRepport();
        $form = $this->createForm(VeterinaryRepportType::class, $veterinaryRepport);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($veterinaryRepport);
            $entityManager->flush();

            return $this->redirectToRoute('app_veterinary_repport_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('veterinary_repport/new.html.twig', [
            'veterinary_repport' => $veterinaryRepport,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_veterinary_repport_show', methods: ['GET'])]
    public function show(VeterinaryRepport $veterinaryRepport): Response
    {
        return $this->render('veterinary_repport/show.html.twig', [
            'veterinary_repport' => $veterinaryRepport,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_veterinary_repport_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, VeterinaryRepport $veterinaryRepport, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(VeterinaryRepportType::class, $veterinaryRepport);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_veterinary_repport_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('veterinary_repport/edit.html.twig', [
            'veterinary_repport' => $veterinaryRepport,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_veterinary_repport_delete', methods: ['POST'])]
    public function delete(Request $request, VeterinaryRepport $veterinaryRepport, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $veterinaryRepport->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($veterinaryRepport);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_veterinary_repport_index', [], Response::HTTP_SEE_OTHER);
    }
}
