<?php

namespace App\Controller;

use App\Entity\Opinion;
use App\Form\OpinionType;
use App\Repository\OpinionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/opinion')]
class OpinionController extends AbstractController
{
    #[Route('/', name: 'app_opinion_index', methods: ['GET'])]
    public function index(OpinionRepository $opinionRepository): Response
    {
        return $this->render('opinion/index.html.twig', [
            'opinions' => $opinionRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_opinion_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $opinion = new Opinion();
        $form = $this->createForm(OpinionType::class, $opinion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($opinion);
            $entityManager->flush();

            return $this->redirectToRoute('app_opinion_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('opinion/new.html.twig', [
            'opinion' => $opinion,
            'form' => $form->createView(), // Assurez-vous d'utiliser createView()
        ]);
    }

    #[Route('/{id}', name: 'app_opinion_show', methods: ['GET'])]
    public function show(Opinion $opinion): Response
    {
        return $this->render('opinion/show.html.twig', [
            'opinion' => $opinion,
        ]);
    }

    #[Route('/{id}/edit/{isVisible}', name: 'app_opinion_edit', methods: ['GET', 'POST'])]
    public function edit(EntityManagerInterface $entityManager,int $id, ?bool $isVisible = null, OpinionRepository $opinionRepository): Response
    {
        $opinion = $opinionRepository->find($id);
        if ($opinion && $isVisible !== null) {
            $opinion->setVisible($isVisible);
            $entityManager->persist($opinion);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_opinion_index');
    }


    #[Route('/{id}', name: 'app_opinion_delete', methods: ['POST'])]
    public function delete(Request $request, Opinion $opinion, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $opinion->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($opinion);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_opinion_index', [], Response::HTTP_SEE_OTHER);
    }
}
