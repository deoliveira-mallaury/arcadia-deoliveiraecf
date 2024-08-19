<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\UserRoles;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\ChoiceList\ChoiceList;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'label_attr' => [
                    'class' => 'col-3', // Add your custom class here
                ],
                'attr' => [
                    'class' => '',
                ],
            ])
            ->add('password', PasswordType::class, [
                'label' => 'Mot de passe',
                'label_attr' => [
                    'class' => 'col-form-label col-3', // Add your custom class here
                ],
                'attr' => [
                    'onpaste' => 'return false;',
                    'class' => '',
                ],
            ])
            ->add('name', TextType::class, [
                'label' => 'Nom',
                'label_attr' => [
                    'class' => 'col-form-label col-3', // Add your custom class here
                ],
                'attr' => [
                    'class' => '',
                ],
            ])
            ->add('lastname', TextType::class, [
                'label' => 'Prénom',
                'label_attr' => [
                    'class' => 'col-form-label col-3', // Add your custom class here
                ],
                'attr' => [
                    'class' => '',
                ],
            ])
            ->add('role', EntityType::class, [
                'class' => UserRoles::class,
                'choice_label' => 'label',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
