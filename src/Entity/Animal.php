<?php

namespace App\Entity;

use App\Repository\AnimalRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AnimalRepository::class)]
class Animal
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $name = null;

    #[ORM\Column(length: 250)]
    private ?string $etat = null;

    #[ORM\Column(length: 250)]
    private ?string $foodType = null;

    #[ORM\Column(length: 50)]
    private ?string $foodQty = null;

    #[ORM\Column(length: 50)]
    private ?string $height = null;

    #[ORM\Column(length: 50)]
    private ?string $size = null;

    #[ORM\ManyToOne(inversedBy: 'animals')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Race $race = null;

    #[ORM\ManyToOne(inversedBy: 'animals')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Habitat $habitat = null;

    /**
     * @var Collection<int, Image>
     */
    #[ORM\ManyToMany(targetEntity: Image::class, mappedBy: 'animal')]
    private Collection $images;

    #[ORM\ManyToOne(inversedBy: 'animals')]
    private ?RepportLogs $repport_log = null;

    public function __construct()
    {
        $this->images = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(string $etat): static
    {
        $this->etat = $etat;

        return $this;
    }

    public function getFoodType(): ?string
    {
        return $this->foodType;
    }

    public function setFoodType(string $foodType): static
    {
        $this->foodType = $foodType;

        return $this;
    }

    public function getFoodQty(): ?string
    {
        return $this->foodQty;
    }

    public function setFoodQty(string $foodQty): static
    {
        $this->foodQty = $foodQty;

        return $this;
    }

    public function getHeight(): ?string
    {
        return $this->height;
    }

    public function setHeight(string $height): static
    {
        $this->height = $height;

        return $this;
    }

    public function getSize(): ?string
    {
        return $this->size;
    }

    public function setSize(string $size): static
    {
        $this->size = $size;

        return $this;
    }

    
    public function getRace(): ?Race
    {
        return $this->race;
    }

    public function setRace(?Race $race): static
    {
        $this->race = $race;

        return $this;
    }

    public function getHabitat(): ?Habitat
    {
        return $this->habitat;
    }

    public function setHabitat(?Habitat $habitat): static
    {
        $this->habitat = $habitat;

        return $this;
    }

    /**
     * @return Collection<int, Image>
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): static
    {
        if (!$this->images->contains($image)) {
            $this->images->add($image);
            $image->addAnimal($this);
        }

        return $this;
    }

    public function removeImage(Image $image): static
    {
        if ($this->images->removeElement($image)) {
            $image->removeAnimal($this);
        }

        return $this;
    }

    public function getRepportLog(): ?RepportLogs
    {
        return $this->repport_log;
    }

    public function setRepportLog(?RepportLogs $repport_log): static
    {
        $this->repport_log = $repport_log;

        return $this;
    }
    }
