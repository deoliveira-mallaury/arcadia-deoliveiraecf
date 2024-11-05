<?php

namespace App\Repository;

use App\Entity\Habitat;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Habitat>
 */
class HabitatRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Habitat::class);
    }
    /**
     * @return Habitat[] Returns an array of Animal objects
     */
    public function getFieldNames(): array
    {
        $classMetadata = $this->getEntityManager()->getClassMetadata(Habitat::class);
        return $classMetadata->getFieldNames();
    }

    public function modifySomeField($modifiedField, $newValue, $habitatId): ?Habitat
    {
        $entityManager = $this->getEntityManager();
        $query = $entityManager->createQuery(
            'UPDATE App\Entity\Habitat a SET a.' . $modifiedField . ' = :val WHERE a.id = :habitatId'
        );
        $query->setParameter('val', $newValue);
        $query->setParameter('habitatId', $habitatId);

        $query->execute();

        return $entityManager->getRepository(Habitat::class)->find($habitatId);
    }
}
