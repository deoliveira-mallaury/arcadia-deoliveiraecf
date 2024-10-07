<?php

namespace App\Controller;

use App\Entity\RepportLogs;
use App\Form\RepportLogsType;
use App\Service\ReportService;
use App\Repository\UserRepository;
use App\Repository\AnimalRepository;
use App\Repository\HabitatRepository;
use App\Repository\OpinionRepository;
use App\Repository\ServiceRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\RepportLogsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/employee')]
#[IsGranted('ROLE_EMPLOYEE')]
class EmployeeController extends AbstractController
{
    private $reportService;
    private $entityManager;
    private $userRepository;

    public function __construct(ReportService $reportService, EntityManagerInterface $entityManager, UserRepository $userRepository)
    {
        $this->reportService = $reportService;
        $this->entityManager = $entityManager;
        $this->userRepository = $userRepository;
    }

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
    #[Route('/health', name: 'employee_health', methods: ['GET', 'POST'])]
    public function health(Request $request, AnimalRepository $animalRepository, HabitatRepository $habitatRepository, RepportLogsRepository $repportLogsRepository): Response
    {
        $animals = $animalRepository->findAll();
        $repportLog = $repportLogsRepository->findAll();
        $habitats = $habitatRepository->findAll();

        $form = $this->createForm(RepportLogsType::class, $repportLog, [
            'data_class' => null,
        ]);


        // Check if the request is for JSON response
        return $this->render('employee/health.html.twig', [
            'controller_name' => 'EmployeeController',
            'animals' => $animals,
            'vetRepports' => $repportLog,
            'form' => $form->createView(),
            'habitats' => $habitats,
        ]);
    }
    #[Route('/health/{id}', name: 'employee_health_id', methods: ['GET', 'POST'])]
    public function healthcontent(int $id, AnimalRepository $animalRepository): JsonResponse
    {
        $animals = $animalRepository->findBy(['habitat' => $id]);
      
        $animalData = [];

        foreach ($animals as $animal) {
            $animalData[] = [
                'id' => $animal->getId(),
                'name' => $animal->getName(),
            ];
        }
        // dd($animalData);
        return new JsonResponse(['animals' => $animalData]);
    }
}
