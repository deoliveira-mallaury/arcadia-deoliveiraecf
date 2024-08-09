<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[Route('/user')]
class UserController extends AbstractController
{
    #[Route('/', name: 'app_user_index', methods: ['GET'])]
    public function index(UserRepository $userRepository): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        return $this->render('user/index.html.twig', [
            'users' => $userRepository->findAll(),
            'form' => $form->createView(),

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

    #[Route('/user/new', name: 'app_user_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher): Response
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $plaintextPassword = $form->get('password')->getData();

            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $plaintextPassword
            );

            $roleID = $form->get('role')->getData();

            switch ($roleID->getId()) {
                case 1:
                    $role = 'ROLE_ADMIN';
                    break;
                case 2:
                    $role = 'ROLE_VETERINARIAN';
                    break;
                case 3:
                    $role = 'ROLE_EMPLOYEE';
                    break;
                default:
                    $role = 'ROLE_USER';
            }
            $user->setRoles($role);
            $user->setPassword($hashedPassword);
            $entityManager->persist($user);
            $entityManager->flush();

            if ($request->isXmlHttpRequest()) {
                return new JsonResponse([
                    'success' => true,
                    'user' => [
                        'id' => $user->getId(),
                        'name' => $user->getName(),
                        'lastname' => $user->getLastname(),
                        'email' => $user->getEmail(),
                        'roles' => $this->getRoleLabel($role),
                    ]
                ]);
            }
        }

        return $this->render('user/index.html.twig', [
            'form' => $form->createView(),
            'user' => $user,
        ]);
    }

    #[Route('/{id}', name: 'app_user_show', methods: ['GET'])]
    public function show(User $user): Response
    {
        return $this->render('user/show.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_user_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_user_delete', methods: ['POST'])]
    public function delete(Request $request, User $user, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_administrator', [], Response::HTTP_SEE_OTHER);
    }
}
