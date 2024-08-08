<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use App\Repository\UserRepository;

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
        // var_dump($users);
        if ($frameId === 'new_user') {
            $subRequest = $this->requestStack->getCurrentRequest()->duplicate([], null, ['_controller' => 'App\Controller\UserController::new']);
            $response = $this->httpKernel->handle($subRequest, HttpKernelInterface::SUB_REQUEST);

            return new Response($response->getContent());
        }
        if ($frameId === 'show_user') {
            return $this->render('administrator/_content.html.twig', [
                'controller_name' => 'AdministratorController',
                'users' => $users,
            ]);
        }

        return $this->render('administrator/index.html.twig', [
            'controller_name' => 'AdministratorController',
            'users' => $users,
        ]);
    }
}
