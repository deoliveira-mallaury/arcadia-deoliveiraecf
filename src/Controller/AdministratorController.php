<?php
// src/Controller/AdministratorController.php
namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Controller\UserController;
use App\Repository\UserRepository;
use App\Repository\AnimalRepository;
use App\Repository\ServiceRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/administrator", name="app_administrator")
 * @IsGranted("ROLE_ADMIN")
 */
class AdministratorController extends AbstractController
{
    #[Route('/administrator', name: 'app_admin_dashboard')]
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
    #[Route('/admin/health', name: 'administrator_health')]
    public function health(): Response
    {
        return $this->render('administrator/health.html.twig');
    }
}
    // #[Route('/administrator', name: 'app_administrator')]
    // public function index(Request $request, UserRepository $userRepository): Response
    // {

    //     $frameId = $request->headers->get('Turbo-Frame');
    //     $users = $userRepository->findAll();
    //     // var_dump($userRepository->getRole());
    //     // var_dump($users);
    //     if ($frameId === 'new_user') {
    //         $subRequest = $this->requestStack->getCurrentRequest()->duplicate([], null, ['_controller' => 'App\Controller\UserController::new']);
    //         $response = $this->httpKernel->handle($subRequest, HttpKernelInterface::SUB_REQUEST);
    //         // dd($response->getContent());
    //         return new Response($response->getContent());
    //     }
    //     if ($frameId === 'show_user') {
    //         return $this->render('administrator/user.html.twig', [
    //             'controller_name' => 'AdministratorController',
    //             'users' => $users,
    //         ]);
    //     }

    //     return $this->render('administrator/index.html.twig', [
    //         'controller_name' => 'AdministratorController',
    //         'users' => $users,
    //     ]);
    // }
    // private function getRoleLabel(string $role): string
    // {
    //     $roleLabels = [
    //         'ROLE_ADMIN' => 'Administrateur',
    //         'ROLE_VETERINARIAN' => 'Vétérinaire',
    //         'ROLE_EMPLOYEE' => 'Employé',
    //         'ROLE_USER' => 'Utilisateur',
    //     ];

    //     return $roleLabels[$role] ?? $role;
    // }

    // #[Route('/admin/user', name: 'administrator_user')]
    // public function user(UserRepository $userRepository): Response
    // {
    //     $users = $userRepository->findAll();
    //     $formattedUsers = [];
    //     $user = new User();
    //     $form = $this->createForm(UserType::class, $user);
    //     foreach ($users as $user) {
    //         $roles = $user->getRoles();
    //         $formattedRoles = array_map([$this, 'getRoleLabel'], $roles);
    //         $formattedUsers[] = [
    //             'id' => $user->getId(),
    //             'lastname' => $user->getLastname(),
    //             'name' => $user->getName(),
    //             'email' => $user->getEmail(),
    //             'roles' => implode(', ', $formattedRoles),
    //             'roleIds' => $user->getRole()
    //         ];
    //     }

    //     return $this->render('administrator/user.html.twig', [
    //         'users' => $formattedUsers,
    //         'form' => $form->createView(),
    //     ]);
    // }


    // #[Route('/admin/service', name: 'administrator_service')]
    // public function service(): Response
    // {
    //     return $this->render('administrator/service.html.twig');
    // }

    // #[Route('/admin/habitat', name: 'administrator_habitat')]
    // public function habitat(): Response
    // {
    //     return $this->render('administrator/habitat.html.twig');
    // }

    // #[Route('/admin/animal', name: 'administrator_animal')]
    // public function animal(): Response
    // {
    //     return $this->render('administrator/animal.html.twig');
    // }


// }
