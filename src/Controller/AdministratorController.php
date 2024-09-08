<?php
// src/Controller/AdministratorController.php
namespace App\Controller;

use App\Entity\User;
use App\Entity\Image;
use App\Form\UserType;
use App\Entity\Habitat;
use App\Form\HabitatType;
use App\Service\ImageUploader;
use App\Controller\UserController;
use App\Repository\UserRepository;
use App\Repository\AnimalRepository;
use App\Repository\ServiceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/administrator')]
#[IsGranted('ROLE_ADMIN')]
class AdministratorController extends AbstractController
{
    #[Route('/', name: 'app_admin_dashboard')]
    public function dashboard(): Response
    {
        return $this->render('administrator/dashboard.html.twig', [
            'controller_name' => 'AdministratorController',
        ]);
    }
    #[Route('/service', name: 'administrator_service')]
    public function service(Request $request, ServiceRepository $serviceRepository): Response
    {
        $frameId = $request->headers->get('Turbo-Frame');
        $services = $serviceRepository->findAll();
        dd($frameId);
        if ($frameId === 'show_services') {
            dd($frameId);
            return $this->render('administrator/services.html.twig', [
                'controller_name' => 'AdministratorController',
                'services' => $services,
            ]);
        }

        return $this->render('administrator/service.html.twig');
    }
    #[Route('/user', name: 'administrator_user')]
    public function user(Request $request, UserRepository $userRepository): Response
    {
        $frameId = $request->headers->get('Turbo-Frame');
        $users = $userRepository->findAll();
        $user = new User();
        $form = $this->createForm(UserType::class, $user);

        if ($frameId === 'index_user') {
            return $this->render('administrator/user.html.twig', [
                'controller_name' => 'AdministratorController',
                'users' => $users,
                'form' => $form->createView(),
            ]);
        }
        // return $this->render('administrator/user.html.twig');

        return $this->render('administrator/user.html.twig', [
            'controller_name' => 'AdministratorController',
            'users' => $users,
            'form' => $form->createView(),
        ]);
    }
    #[Route('/animal', name: 'administrator_animal')]
    public function animal(Request $request, AnimalRepository $animalRepository): Response
    {
        $frameId = $request->headers->get('Turbo-Frame');
        $animals = $animalRepository->findAll();

        if ($frameId === 'index_animal') {
            dd($frameId);
            return $this->render('administrator/animal.html.twig', [
                'controller_name' => 'AdministratorController',
                'animals' => $animals,
            ]);
        }
        return $this->render('administrator/animal.html.twig');
    }
    #[Route('/health', name: 'administrator_health')]
    public function health(): Response
    {
        return $this->render('administrator/health.html.twig');
    }
    #[Route('/habitat', name: 'administrator_habitat')]
    public function new(EntityManagerInterface $entityManager, Request $request, ImageUploader $imageUploader, SluggerInterface $slugger): Response
    {
        $frameId = $request->headers->get('Turbo-Frame');
        $habitatRepository = $entityManager->getRepository(Habitat::class);
        $habitats = $habitatRepository->findAll();
        $habitat = new Habitat();

        $form = $this->createForm(HabitatType::class, $habitat);
        $form->handleRequest($request);
        $errorMessage = '';

        if ($frameId === 'show_habitat') {
            return $this->render('administrator/habitat.html.twig', [
                'controller_name' => 'AdministratorController',
                'habitats' => $habitats,
            ]);
        }   

        if ($form->isSubmitted() && $form->isValid()) {
            $imageFile = $form->get('data_image')->getData();
            if ($imageFile) {
                try {
                    // Read the file content
                    $imageData = file_get_contents($imageFile->getPathname());

                    // Create a new Image entity and set its data_image property
                    $image = new Image();
                    $image->setDataImage($imageData);

                    // Add the Image entity to the Service
                    $habitat->addImage($image);

                    // Persist the Image entity
                    $entityManager->persist($image);
                } catch (\Exception $e) {
                    $errorMessage = $e->getMessage();
                }
            }
            if (empty($errorMessage)) {
                $entityManager->persist($habitat);
                $entityManager->flush();
                $this->addFlash('success', 'Service added successfully!');
            }
        }

        return $this->render('administrator/habitat.html.twig', [
            'form' => $form->createView(),
            'habitats' => $habitats,
            'errorMessage' => $errorMessage,
        ]);
    }
}
