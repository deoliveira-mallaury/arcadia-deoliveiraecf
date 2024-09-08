<?php

namespace App\Controller;

use App\Entity\Opinion;
use App\Form\OpinionType;
use App\Repository\HabitatRepository;
use App\Repository\OpinionRepository;
use App\Repository\ServiceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomepageController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(Request $request, HabitatRepository $habitatRepository,OpinionRepository $opinionRepository,EntityManagerInterface $entityManager, ServiceRepository $serviceRepository): Response
    {
        $habitats = $habitatRepository->findAll();
        $services = $serviceRepository->findAll();
        $opinions = $opinionRepository->findAll();
        $opinion = new Opinion();
        $form = $this->createForm(OpinionType::class, $opinion);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager->persist($opinion);
            $entityManager->flush();

            return $this->redirectToRoute('app_homepage');
        }
        return $this->render('homepage/index.html.twig', [
            'controller_name' => 'HomepageController',
            'habitats' => $habitats,
            'services' => $services,
            'form' => $form->createView(),
            'opinions'=>$opinions
        ]);
    }
}
