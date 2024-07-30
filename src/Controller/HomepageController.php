<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use MobileDetectBundle\DeviceDetector\MobileDetectorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomepageController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(MobileDetectorInterface $mobileDetector): Response
    {
        $isMobile = $mobileDetector->isMobile();
        $isTablet = $mobileDetector->isTablet();
        $isIphone = $mobileDetector->is('iPhone');
        var_dump($isMobile);
        return $this->render('homepage/index.html.twig', [
            'controller_name' => 'HomepageController',
            'isMobile' => $isMobile,
            'isTablet' => $isTablet,
            'isIphone' => $isIphone,
        ]);
    }
    #[Route('/services', name: 'app_services')]
    public function services(): Response
    {
        return $this->render('services/index.html.twig', [
            'controller_name' => 'ServicesController'
        ]);
    }
}
