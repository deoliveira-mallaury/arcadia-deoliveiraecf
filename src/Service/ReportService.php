<?php
// src/Service/ReportService.php

namespace App\Service;

use App\Entity\Animal;
use App\Entity\RepportLogs;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

class ReportService
{
    public function newRepportLogs(Request $request, EntityManagerInterface $entityManager, UserRepository $userRepository, $userId, RepportLogs $repportLog)
    {
        $user = $userRepository->find($userId);

        // Handle JSON request
        if ($request->isMethod('POST')) {
            $data = json_decode($request->getContent(), true);
            $animalId = $data['animalId'] ?? null;

            if ($animalId) {
                $animal = $entityManager->getRepository(Animal::class)->find($animalId);
                if ($animal) {
                    $repportLog->addAnimal($animal);
                }
            }
        }

        // Set the date field
        $user->addRepportLog($repportLog);
        $entityManager->persist($repportLog);
        $entityManager->flush();

        return $repportLog;
    }
}
