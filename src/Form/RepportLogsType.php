<?php

namespace App\Form;

use App\Entity\Animal;
use App\Entity\Habitat;
use App\Entity\RepportLogs;
use App\Repository\AnimalRepository;
use App\Repository\HabitatRepository;
use App\Security\LoginFormAuthenticator;
use Symfony\Component\Form\AbstractType;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class RepportLogsType extends AbstractType
{
    private $animalRepository;
    private $security;


    public function __construct(AnimalRepository $animalRepository, RequestStack $requestStack, HabitatRepository $habitatRepository, Security $security)
    {
        $this->animalRepository = $animalRepository;
        $this->habitatRepository = $habitatRepository;
        $this->security = $security;
        $this->requestStack = $requestStack;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $this->security->getUser();
        $userRole = $user->getRole()->getId();
        $fieldNamesAnimal = $this->animalRepository->getFieldNames();
        $fieldNamesHabitat = $this->habitatRepository->getFieldNames();
        $currentRoute = $this->requestStack->getCurrentRequest()->attributes->get('_route');

        switch ($userRole) {
            case '3':
                $choices = [
                    'Nourriture proposée' => $fieldNamesAnimal[3],
                    'Quantité données' => $fieldNamesAnimal[4],
                ];
                break;
            case '2':
                $choices = [
                    'Nourriture proposée' => $fieldNamesAnimal[3],
                    'Quantité données' => $fieldNamesAnimal[4],
                    'Etat animal' => $fieldNamesAnimal[2],
                ];
                $choicesHabitat = [
                    'Commentaire Habitat' => $fieldNamesHabitat[3],
                    // 'Quantité données' => $fieldNames[4],
                    // 'Etat animal' => $fieldNames[2],
                ];
                break;
            default:
                $choices = [];
                break;
        }

        if ($currentRoute === 'vet_habitat') {
            $builder->add('modifiedHabitat', EntityType::class, [
                'label' => 'Choix Habitat',
                'class' => Habitat::class,
                'choice_label' => 'name', // or any other property
            ])

                ->add('modified_field', ChoiceType::class, [
                    'label' => 'Champ à modifier',
                    'choices' => $choicesHabitat,
                ]);
        } elseif ($currentRoute === 'employee_health' || $currentRoute === 'veterinarian_health') {
            $builder->add('modifiedAnimal', EntityType::class, [
                'label' => 'Choix animal',
                'class' => Animal::class,
                'choice_label' => 'name', // or any other property
            ])
                ->add('modified_field', ChoiceType::class, [
                    'label' => 'Champ à modifier',
                    'choices' => $choices,
                ]);
        }
        $builder
            ->add('date', DateTimeType::class, [
                'label' => 'Date',
                'widget' => 'single_text',
                'data' => new \DateTime(), // Définit la date et l'heure actuelles par défaut
            ])

            ->add('new_value', TextType::class, [
                'label' => 'Nouvelle valeur',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => RepportLogs::class,
        ]);
    }
}
