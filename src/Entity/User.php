<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    /**
     * @var list<string> The user roles
     */
    #[ORM\Column(type: 'json')]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 60)]
    private ?string $name = null;

    #[ORM\Column(length: 60)]
    private ?string $lastname = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    #[ORM\JoinColumn(nullable: false)]
    private ?UserRoles $role = null;

    /**
     * @var Collection<int, RepportLogs>
     */
    #[ORM\OneToMany(targetEntity: RepportLogs::class, mappedBy: 'modifiedBy')]
    private Collection $repportLogs;

    public function __construct()
    {
        $this->repportLogs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     *
     * @return list<string>
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        return array_unique($roles);
    }

    /**
     * @param list<string> $roles
     */
    public function setRoles(string $role): static
    {
        $roles = $this->getRoles();
        $roles[] = $role;
        $this->roles = array_unique($roles);
        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): static
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getRole(): ?UserRoles
    {
        return $this->role;
    }

    public function setRole(?UserRoles $role): static
    {
        $this->role = $role;

        return $this;
    }

    public function getRepportLogs(): Collection
    {
        return $this->repportLogs;
    }

    public function setRepportLogs(Collection $repportLogs): static
    {
        $this->repportLogs = $repportLogs;

        return $this;
    }

    public function addRepportLog(RepportLogs $repportLog): static
    {
        if (!$this->repportLogs->contains($repportLog)) {
            $this->repportLogs[] = $repportLog;
            $repportLog->setModifiedBy($this);
        }

        return $this;
    }

    public function removeRepportLog(RepportLogs $repportLog): static
    {
        if ($this->repportLogs->removeElement($repportLog)) {
            // set the owning side to null (unless already changed)
            if ($repportLog->getModifiedBy() === $this) {
                $repportLog->setModifiedBy(null);
            }
        }

        return $this;
    }
}
