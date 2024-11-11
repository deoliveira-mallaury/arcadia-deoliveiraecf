<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request): Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // Handle form submission, e.g., send an email or save to the database
            $this->addFlash('success', 'Votre message a été envoyé avec succès !');
            return $this->redirectToRoute('app_contact');
        }
        return $this->render(
            'contact/index.html.twig',
            [
                'form' => $form->createView(),
            ]
        );
    }
}
