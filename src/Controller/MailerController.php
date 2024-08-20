<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\Mime\Email;
use PhpParser\Node\Expr\AssignOp\Mod;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MailerController extends AbstractController
{
    #[Route('/email', name: 'app_mailer')]
    public function index(?Response $response, MailerInterface $mailer): Response
    {
        // $email = (new Email())
        //     ->from('mallaufb@gmail.com')
        //     ->to('projectarcadia.deoliveira@gmail.com')
        //     //->cc('cc@example.com')
        //     //->bcc('bcc@example.com')
        //     //->replyTo('fabien@example.com')
        //     //->priority(Email::PRIORITY_HIGH)
        //     ->subject('Time for Symfony Mailer!')
        //     ->text('Sending emails is fun again!')
        //     ->html('<p>See Twig integration for better HTML integration!</p>');

        $email = (new TemplatedEmail())
            ->from('arcadia@zoo.com')
            ->to('projectarcadia.deoliveira@gmail.com')
            ->subject('Experimenting with Symfony Mailer and Mailtrap')
            // path to your Twig template
            ->htmlTemplate('mailer/signup.html.twig');
        $mailer->send($email);

        return new Response('Email sent successfully!');
    }
}
