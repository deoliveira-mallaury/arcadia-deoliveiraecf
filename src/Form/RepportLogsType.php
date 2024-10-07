<?php

namespace App\Form;

use App\Entity\Animal;
use App\Entity\Habitat;
use App\Entity\RepportLogs;
use App\Repository\AnimalRepository;
use App\Security\LoginFormAuthenticator;
use Symfony\Component\Form\AbstractType;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;

class RepportLogsType extends AbstractType
{
    private $animalRepository;
    private $security;


    public function __construct(AnimalRepository $animalRepository, Security $security)
    {
        $this->animalRepository = $animalRepository;
        $this->security = $security;
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $user = $this->security->getUser();
        $userRole = $user->getRole()->getId();
        $fieldNames = $this->animalRepository->getFieldNames();

        switch ($userRole) {
            case '3':
                $choices = [
                    'Nourriture proposée' => $fieldNames[3],
                    'Quantité données' => $fieldNames[4],
                ];
                break;
            case '2':
                $choices = [
                    'Nourriture proposée' => $fieldNames[3],
                    'Quantité données' => $fieldNames[4],
                    'Etat animal' => $fieldNames[2],
                ];
                break;
            default:
                $choices = [];
                break;
        }

        $builder
            ->add('date', DateTimeType::class, [
                'label' => 'Date',
                'widget' => 'single_text',
                'data' => new \DateTime(), // Définit la date et l'heure actuelles par défaut
            ])
            ->add('modified_field', ChoiceType::class, [
                'label' => 'Champ à modifier',
                'choices' => $choices,
            ])
            ->add(
                'new_value',
                TextType::class,
                [
                    'label' => 'Nouvelle valeur',
                ]
            )
            ->add('modifiedAnimal', EntityType::class, [
                'label' => 'Choix animal',
                'class' => Animal::class,
                'choice_label' => 'name', // or any other property
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => RepportLogs::class,
        ]);
    }
}
