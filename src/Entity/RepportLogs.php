<?php

namespace App\Entity;

use App\Repository\RepportLogsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RepportLogsRepository::class)]
class RepportLogs
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'datetime')]
    private ?\DateTimeInterface $date = null;


    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'repportLogs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $modifiedBy = null;

    #[ORM\ManyToOne(targetEntity: Animal::class, inversedBy: 'repportLogs')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Animal $modifiedAnimal = null;

    #[ORM\ManyToOne(targetEntity: Habitat::class, inversedBy: 'repportLogs')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Habitat $modifiedHabitat = null;

    #[ORM\Column(length: 255)]
    private ?string $modified_field = null;

    #[ORM\Column(length: 255)]
    private ?string $new_value = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): static
    {
        $this->date = $date;

        return $this;
    }

    public function getModifiedBy(): ?User
    {
        return $this->modifiedBy;
    }

    public function setModifiedBy(?User $modifiedBy): static
    {
        $this->modifiedBy = $modifiedBy;

        return $this;
    }

    public function getModifiedAnimal(): ?Animal
    {
        return $this->modifiedAnimal;
    }

    public function setModifiedAnimal(?Animal $modifiedAnimal): static
    {
        $this->modifiedAnimal = $modifiedAnimal;

        return $this;
    }
    
    public function getModifiedHabitat(): ?Habitat
    {
        return $this->modifiedHabitat;
    }

    public function setModifiedHabitat(?Habitat $modifiedHabitat): static
    {
        $this->modifiedHabitat = $modifiedHabitat;

        return $this;
    }

    public function getModifiedField(): ?string
    {
        return $this->modified_field;
    }

    public function setModifiedField(string $modified_field): static
    {
        $this->modified_field = $modified_field;

        return $this;
    }

    public function getNewValue(): ?string
    {
        return $this->new_value;
    }

    public function setNewValue(string $new_value): static
    {
        $this->new_value = $new_value;

        return $this;
    }

}
