<?php

namespace App\Entity;

use App\Repository\LogRepportRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LogRepportRepository::class)]
class LogRepport
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date = null;

    /**
     * @var Collection<int, UserRoles>
     */
    #[ORM\OneToMany(targetEntity: UserRoles::class, mappedBy: 'input')]
    private Collection $userGroup;

    #[ORM\Column(length: 255)]
    private ?string $value = null;

    public function __construct()
    {
        $this->userGroup = new ArrayCollection();
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

    /**
     * @return Collection<int, UserRoles>
     */
    public function getUserGroup(): Collection
    {
        return $this->userGroup;
    }

    public function addUserGroup(UserRoles $userGroup): static
    {
        if (!$this->userGroup->contains($userGroup)) {
            $this->userGroup->add($userGroup);
            $userGroup->setInput($this);
        }

        return $this;
    }

    public function removeUserGroup(UserRoles $userGroup): static
    {
        if ($this->userGroup->removeElement($userGroup)) {
            // set the owning side to null (unless already changed)
            if ($userGroup->getInput() === $this) {
                $userGroup->setInput(null);
            }
        }

        return $this;
    }

    public function getValue(): ?string
    {
        return $this->value;
    }

    public function setValue(string $value): static
    {
        $this->value = $value;

        return $this;
    }
}
