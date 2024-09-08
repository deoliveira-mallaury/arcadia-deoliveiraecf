<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/veterianrian')]
#[IsGranted('ROLE_VETERINARIAN')]
class VetController extends AbstractController
{
    #[Route('/vet', name: 'app_vet_dashboard')]
    public function index(): Response
    {
        return $this->render('vet/index.html.twig', [
            'controller_name' => 'VetController',
        ]);
    }
}
