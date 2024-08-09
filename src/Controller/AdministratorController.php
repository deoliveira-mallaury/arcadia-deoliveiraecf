<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Controller\UserController;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdministratorController extends AbstractController
{
    private $httpKernel;
    private $requestStack;

    public function __construct(HttpKernelInterface $httpKernel, RequestStack $requestStack)
    {
        $this->httpKernel = $httpKernel;
        $this->requestStack = $requestStack;
    }

    #[Route('/administrator', name: 'app_administrator')]
    public function index(Request $request, UserRepository $userRepository): Response
    {

        $frameId = $request->headers->get('Turbo-Frame');
        $users = $userRepository->findAll();
        // var_dump($userRepository->getRole());
        // var_dump($users);
        if ($frameId === 'new_user') {
            $subRequest = $this->requestStack->getCurrentRequest()->duplicate([], null, ['_controller' => 'App\Controller\UserController::new']);
            $response = $this->httpKernel->handle($subRequest, HttpKernelInterface::SUB_REQUEST);
            // dd($response->getContent());
            return new Response($response->getContent());
        }
        if ($frameId === 'show_user') {
            return $this->render('administrator/user.html.twig', [
                'controller_name' => 'AdministratorController',
                'users' => $users,
            ]);
        }

        return $this->render('administrator/index.html.twig', [
            'controller_name' => 'AdministratorController',
            'users' => $users,
        ]);
    }
    private function getRoleLabel(string $role): string
    {
        $roleLabels = [
            'ROLE_ADMIN' => 'Administrateur',
            'ROLE_VETERINARIAN' => 'Vétérinaire',
            'ROLE_EMPLOYEE' => 'Employé',
            'ROLE_USER' => 'Utilisateur',
        ];

        return $roleLabels[$role] ?? $role;
    }

    #[Route('/admin/user', name: 'administrator_user')]
    public function user(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();
        $formattedUsers = [];
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        foreach ($users as $user) {
            $roles = $user->getRoles();
            $formattedRoles = array_map([$this, 'getRoleLabel'], $roles);
            $formattedUsers[] = [
                'id' => $user->getId(),
                'lastname' => $user->getLastname(),
                'name' => $user->getName(),
                'email' => $user->getEmail(),
                'roles' => implode(', ', $formattedRoles),
                'roleIds' => $user->getRole()
            ];
        }

        return $this->render('administrator/user.html.twig', [
            'users' => $formattedUsers,
            'form' => $form->createView(),
        ]);
    }


    #[Route('/admin/service', name: 'administrator_service')]
    public function service(): Response
    {
        return $this->render('administrator/service.html.twig');
    }

    #[Route('/admin/habitat', name: 'administrator_habitat')]
    public function habitat(): Response
    {
        return $this->render('administrator/habitat.html.twig');
    }

    #[Route('/admin/animal', name: 'administrator_animal')]
    public function animal(): Response
    {
        return $this->render('administrator/animal.html.twig');
    }

    #[Route('/admin/health', name: 'administrator_health')]
    public function health(): Response
    {
        return $this->render('administrator/health.html.twig');
    }
}
