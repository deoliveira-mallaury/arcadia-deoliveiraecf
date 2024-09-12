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

    #[ORM\Column(length: 255)]
    private ?string $modified_field = null;

    #[ORM\Column(length: 255)]
    private ?string $new_value = null;

    /**
     * @var Collection<int, Animal>
     */
    #[ORM\OneToMany(targetEntity: Animal::class, mappedBy: 'repport_log')]
    private Collection $animals;

    /**
     * @var Collection<int, Habitat>
     */
    #[ORM\OneToMany(targetEntity: Habitat::class, mappedBy: 'repport_log')]
    private Collection $habitats;

    public function __construct()
    {
        $this->animals = new ArrayCollection();
        $this->habitats = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, Animal>
     */
    public function getAnimals(): Collection
    {
        return $this->animals;
    }

    public function addAnimal(Animal $animal): static
    {
        if (!$this->animals->contains($animal)) {
            $this->animals->add($animal);
            $animal->setRepportLog($this);
        }

        return $this;
    }

    public function removeAnimal(Animal $animal): static
    {
        if ($this->animals->removeElement($animal)) {
            // set the owning side to null (unless already changed)
            if ($animal->getRepportLog() === $this) {
                $animal->setRepportLog(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Habitat>
     */
    public function getHabitats(): Collection
    {
        return $this->habitats;
    }

    public function addHabitat(Habitat $habitat): static
    {
        if (!$this->habitats->contains($habitat)) {
            $this->habitats->add($habitat);
            $habitat->setRepportLog($this);
        }

        return $this;
    }

    public function removeHabitat(Habitat $habitat): static
    {
        if ($this->habitats->removeElement($habitat)) {
            // set the owning side to null (unless already changed)
            if ($habitat->getRepportLog() === $this) {
                $habitat->setRepportLog(null);
            }
        }

        return $this;
    }
}
