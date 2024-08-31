<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240831105216 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE animal DROP image_filename');
        $this->addSql('ALTER TABLE habitat DROP image_filename');
        $this->addSql('ALTER TABLE service DROP image_filename');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE habitat ADD image_filename VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE animal ADD image_filename VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE service ADD image_filename VARCHAR(255) NOT NULL');
    }
}
