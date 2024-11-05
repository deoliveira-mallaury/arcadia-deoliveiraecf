<?php

namespace App\Repository;

use App\Entity\Animal;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Animal>
 */
class AnimalRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Animal::class);
    }

    /**
     * @return Animal[] Returns an array of Animal objects
     */
    public function getFieldNames(): array
    {
        $classMetadata = $this->getEntityManager()->getClassMetadata(Animal::class);
        return $classMetadata->getFieldNames();
    }

    public function modifySomeField($modifiedField, $newValue, $animalId): ?Animal
    {
        $entityManager = $this->getEntityManager();
        $query = $entityManager->createQuery(
            'UPDATE App\Entity\Animal a SET a.' . $modifiedField . ' = :val WHERE a.id = :animalId'
        );
        $query->setParameter('val', $newValue);
        $query->setParameter('animalId', $animalId);

        $query->execute();

        return $entityManager->getRepository(Animal::class)->find($animalId);
    }
}
