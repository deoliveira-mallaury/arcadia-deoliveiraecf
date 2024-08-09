<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240809161443 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE image_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE image (id INT NOT NULL, data_image BYTEA NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE animal_image (animal_id INT NOT NULL, image_id INT NOT NULL, PRIMARY KEY(animal_id, image_id))');
        $this->addSql('CREATE INDEX IDX_E4CEDDAB8E962C16 ON animal_image (animal_id)');
        $this->addSql('CREATE INDEX IDX_E4CEDDAB3DA5256D ON animal_image (image_id)');
        $this->addSql('CREATE TABLE habitat_image (habitat_id INT NOT NULL, image_id INT NOT NULL, PRIMARY KEY(habitat_id, image_id))');
        $this->addSql('CREATE INDEX IDX_9AD7E031AFFE2D26 ON habitat_image (habitat_id)');
        $this->addSql('CREATE INDEX IDX_9AD7E0313DA5256D ON habitat_image (image_id)');
        $this->addSql('CREATE TABLE service_image (service_id INT NOT NULL, image_id INT NOT NULL, PRIMARY KEY(service_id, image_id))');
        $this->addSql('CREATE INDEX IDX_6C4FE9B8ED5CA9E6 ON service_image (service_id)');
        $this->addSql('CREATE INDEX IDX_6C4FE9B83DA5256D ON service_image (image_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE image_id_seq CASCADE');
        $this->addSql('DROP TABLE image');
        $this->addSql('ALTER TABLE animal_image DROP CONSTRAINT FK_E4CEDDAB8E962C16');
        $this->addSql('ALTER TABLE animal_image DROP CONSTRAINT FK_E4CEDDAB3DA5256D');
        $this->addSql('ALTER TABLE habitat_image DROP CONSTRAINT FK_9AD7E031AFFE2D26');
        $this->addSql('ALTER TABLE habitat_image DROP CONSTRAINT FK_9AD7E0313DA5256D');
        $this->addSql('ALTER TABLE service_image DROP CONSTRAINT FK_6C4FE9B8ED5CA9E6');
        $this->addSql('ALTER TABLE service_image DROP CONSTRAINT FK_6C4FE9B83DA5256D');
        $this->addSql('DROP TABLE animal_image');
        $this->addSql('DROP TABLE habitat_image');
        $this->addSql('DROP TABLE service_image');
    }
}
