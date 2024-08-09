<?php

namespace App\Entity;

use App\Repository\ImageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ImageRepository::class)]
class Image
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::BLOB)]
    private $data_image;

    /**
     * @var Collection<int, Habitat>
     */
    #[ORM\ManyToMany(targetEntity: Habitat::class, mappedBy: 'image')]
    private Collection $habitats;

    /**
     * @var Collection<int, Animal>
     */
    #[ORM\ManyToMany(targetEntity: Animal::class, mappedBy: 'image')]
    private Collection $animals;

    /**
     * @var Collection<int, Service>
     */
    #[ORM\ManyToMany(targetEntity: Service::class, mappedBy: 'image')]
    private Collection $services;

    public function __construct()
    {
        $this->habitats = new ArrayCollection();
        $this->animals = new ArrayCollection();
        $this->services = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDataImage()
    {
        return $this->data_image;
    }

    public function setDataImage($data_image): static
    {
        $this->data_image = $data_image;

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
            $habitat->addImage($this);
        }

        return $this;
    }

    public function removeHabitat(Habitat $habitat): static
    {
        if ($this->habitats->removeElement($habitat)) {
            $habitat->removeImage($this);
        }

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
            $animal->addImage($this);
        }

        return $this;
    }

    public function removeAnimal(Animal $animal): static
    {
        if ($this->animals->removeElement($animal)) {
            $animal->removeImage($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Service>
     */
    public function getServices(): Collection
    {
        return $this->services;
    }

    public function addService(Service $service): static
    {
        if (!$this->services->contains($service)) {
            $this->services->add($service);
            $service->addImage($this);
        }

        return $this;
    }

    public function removeService(Service $service): static
    {
        if ($this->services->removeElement($service)) {
            $service->removeImage($this);
        }

        return $this;
    }
}
