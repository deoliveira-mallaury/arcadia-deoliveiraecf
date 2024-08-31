<?php

namespace App\Form;

use App\Entity\Race;
use App\Entity\Animal;
use App\Entity\Habitat;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

use Symfony\Component\Form\Extension\Core\Type\FileType;

class AnimalType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Nom de l\'animal',
                'attr' => [
                    'class' => 'form-control ',
                ],
            ])
            ->add('etat', TextType::class, [
                'label' => 'Etat de l\'animal',
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('foodType', TextType::class, [
                'label' => 'Type de nourriture',
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('foodQty', TextType::class, [
                'label' => 'Quantité de nourriture',
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('height', TextType::class, [
                'label' => 'Taille',
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('size', TextType::class, [
                'label' => 'Poid',
                'attr' => [
                    'class' => 'form-control',
                ],
            ])
            ->add('data_image', FileType::class, [
                'label' => 'Image (JPEG or PNG file)',
                'mapped' => false,
                'required' => false,
                'constraints' => [
                    new File([
                        'maxSize' => '2M',
                        'mimeTypes' => [
                            'image/jpeg',
                            'image/png',
                            'image/jpg',
                        ],
                        'mimeTypesMessage' => 'Please upload a valid image file (JPEG or PNG).',
                    ])
                ],
            ])
            ->add('race', EntityType::class, [
                'class' => Race::class,
                'choice_label' => 'label',
                'label' => 'Race',
                'attr' => [
                    'class' => '',
                ],
            ])
            ->add('newRace', RaceType::class, [
                'mapped' => false,
                'label' => 'Nouvelle race',
                'required' => false,
                'attr' => [
                    'class' => '',
                ],
            ])
            ->add('habitat', EntityType::class, [
                'class' => Habitat::class,
                'choice_label' => 'name',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Animal::class,
        ]);
    }
}
