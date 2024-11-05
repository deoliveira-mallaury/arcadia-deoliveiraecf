<?php

namespace App\Form;

use App\Entity\Habitat;
use App\Entity\Image;
use App\Entity\RepportLogs;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class Habitat1Type extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name')
            ->add('description')
            ->add('habitatComment')
            ->add('images', EntityType::class, [
                'class' => Image::class,
                'choice_label' => 'id',
                'multiple' => true,
            ])
            ->add('repport_log', EntityType::class, [
                'class' => RepportLogs::class,
                'choice_label' => 'id',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Habitat::class,
        ]);
    }
}
