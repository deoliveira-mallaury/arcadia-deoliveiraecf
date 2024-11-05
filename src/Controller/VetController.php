<?php

namespace App\Controller;

use App\Form\RepportLogsType;
use App\Repository\AnimalRepository;
use App\Repository\HabitatRepository;
use App\Repository\RepportLogsRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/veterinarian')]
#[IsGranted('ROLE_VETERINARIAN')]
class VetController extends AbstractController
{
    #[Route('/', name: 'app_vet_dashboard')]
    public function index(): Response
    {
        return $this->render('vet/dashboard.html.twig', [
            'controller_name' => 'VetController',
        ]);
    }
    #[Route('/habitat', name: 'vet_habitat')]
    public function habitat(Request $request,RepportLogsRepository $repportLogsRepository, HabitatRepository $habitatRepository): Response
    {
        $frameId = $request->headers->get('Turbo-Frame');
        $habitats = $habitatRepository->findAll();
        $repportLog = $repportLogsRepository->findAll();

        $form = $this->createForm(RepportLogsType::class, $repportLog, [
            'data_class' => null,
        ]);
        if ($frameId === 'index_habitat') {
            return $this->render('vet/habitat.html.twig', [
                'controller_name' => 'EmployeeController',
            ]);
        }

        return $this->render('vet/habitat.html.twig', [
            'controller_name' => 'VeterinarianController',
            'habitats' => $habitats,
            'form' => $form->createView(),

        ]);
    }
    #[Route('/health', name: 'veterinarian_health', methods: ['GET', 'POST'])]
    public function health(Request $request, AnimalRepository $animalRepository, HabitatRepository $habitatRepository, RepportLogsRepository $repportLogsRepository): Response
    {
        $animals = $animalRepository->findAll();
        $repportLog = $repportLogsRepository->findAll();
        $habitats = $habitatRepository->findAll();

        $form = $this->createForm(RepportLogsType::class, $repportLog, [
            'data_class' => null,
        ]);


        // Check if the request is for JSON response
        return $this->render('vet/health.html.twig', [
            'controller_name' => 'EmployeeController',
            'animals' => $animals,
            'vetRepports' => $repportLog,
            'form' => $form->createView(),
            'habitats' => $habitats,
        ]);
    }
    #[Route('/health/{id}', name: 'veterinarian_health_id', methods: ['GET', 'POST'])]
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
