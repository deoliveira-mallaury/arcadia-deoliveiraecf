<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240805105417 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE animal ADD etat VARCHAR(250) NOT NULL');
        $this->addSql('ALTER TABLE animal ADD food_type VARCHAR(250) NOT NULL');
        $this->addSql('ALTER TABLE animal ADD height VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE animal ADD size VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE animal RENAME COLUMN condition TO food_qty');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA private');
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE animal ADD condition VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE animal DROP etat');
        $this->addSql('ALTER TABLE animal DROP food_type');
        $this->addSql('ALTER TABLE animal DROP food_qty');
        $this->addSql('ALTER TABLE animal DROP height');
        $this->addSql('ALTER TABLE animal DROP size');
    }
}
