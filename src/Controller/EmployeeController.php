<?php

namespace App\Controller;

use App\Repository\AnimalRepository;
use App\Repository\OpinionRepository;
use App\Repository\ServiceRepository;
use App\Repository\RepportLogsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
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
    public function opinion(OpinionRepository $opinionRepository): Response
    {
        $opinions = $opinionRepository->findAll();

        return $this->render('employee/opinion.html.twig', [
            'controller_name' => 'EmployeeController',
            'opinions' => $opinions,
        ]);
    }
    #[Route('/employee/health', name: 'employee_health')]
    public function health(AnimalRepository $animalRepository, RepportLogsRepository $repportLogsRepository): Response
    {
        $animals = $animalRepository->findAll();
        $vetRepports = $repportLogsRepository->findAll();
        return $this->render('employee/health.html.twig', [
            'controller_name' => 'EmployeeController',
            'animals' => $animals,
            'vetRepports' => $vetRepports,
        ]);
    }
    #[Route('/employee/health/new/{animalId}', name: 'employee_health_new')]
    public function newHealthReport(int $animalId, AnimalRepository $animalRepository, RepportLogsRepository $repportLogsRepository): Response
    {
        $animal = $animalRepository->find($animalId);

        if (!$animal) {
            throw $this->createNotFoundException('Animal not found');
        }

        $repportLog = $repportLogsRepository->createLogForAnimal($animal);

        return $this->redirectToRoute('app_repport_logs_index', [], Response::HTTP_SEE_OTHER);
    }
}
