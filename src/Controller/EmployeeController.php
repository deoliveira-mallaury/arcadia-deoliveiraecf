<?php

namespace App\Controller;

use App\Repository\AnimalRepository;
use App\Repository\OpinionRepository;
use App\Repository\ServiceRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\VeterinaryRepportRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/employee')]
#[IsGranted('ROLE_EMPLOYEE')]
class EmployeeController extends AbstractController
{
    #[Route('/employee', name: 'app_employee_dashboard')]
    public function index(): Response
    {
        return $this->render('employee/dashboard.html.twig', [
            'controller_name' => 'EmployeeController',
        ]);
    }
    #[Route('/service', name: 'employee_service')]
    public function service(Request $request, ServiceRepository $serviceRepository): Response
    {
        $frameId = $request->headers->get('Turbo-Frame');
        $services = $serviceRepository->findAll();
        if ($frameId === 'index_services') {
            return $this->render('employee/services.html.twig', [
                'controller_name' => 'EmployeeController',
                'services' => $services,
            ]);
        }
        return $this->render('employee/service.html.twig', [
            'controller_name' => 'EmployeeController',
            'services' => $services
        ]);
    }
    #[Route('/opinion', name: 'employee_opinion')]
    public function opinion(Request $request, OpinionRepository $opinionRepository): Response
    {
        $opinions = $opinionRepository->findAll();

        return $this->render('employee/opinion.html.twig', [
            'controller_name' => 'EmployeeController',
            'opinions' => $opinions,
        ]);
    }
    #[Route('/employee/health', name: 'employee_health')]
    public function health(AnimalRepository $animalRepository, VeterinaryRepportRepository $veterinaryRepportRepository): Response
    {
        $animals = $animalRepository->findAll();
        $vetRepports = $veterinaryRepportRepository->findAll();
        return $this->render('employee/health.html.twig', [
            'controller_name' => 'EmployeeController',
            'animals' => $animals,
            'vetRepports' => $vetRepports,
        ]);
    }
}
