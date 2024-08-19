<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240818110529 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE image_id_seq CASCADE');
        $this->addSql('ALTER TABLE service_image DROP CONSTRAINT fk_6c4fe9b8ed5ca9e6');
        $this->addSql('ALTER TABLE service_image DROP CONSTRAINT fk_6c4fe9b83da5256d');
        $this->addSql('ALTER TABLE habitat_image DROP CONSTRAINT fk_9ad7e031affe2d26');
        $this->addSql('ALTER TABLE habitat_image DROP CONSTRAINT fk_9ad7e0313da5256d');
        $this->addSql('ALTER TABLE animal_image DROP CONSTRAINT fk_e4ceddab8e962c16');
        $this->addSql('ALTER TABLE animal_image DROP CONSTRAINT fk_e4ceddab3da5256d');
        $this->addSql('DROP TABLE service_image');
        $this->addSql('DROP TABLE habitat_image');
        $this->addSql('DROP TABLE image');
        $this->addSql('DROP TABLE animal_image');
        $this->addSql('ALTER TABLE animal ADD image_filename VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE habitat ADD image_filename VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('CREATE SEQUENCE image_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE service_image (service_id INT NOT NULL, image_id INT NOT NULL, PRIMARY KEY(service_id, image_id))');
        $this->addSql('CREATE INDEX idx_6c4fe9b83da5256d ON service_image (image_id)');
        $this->addSql('CREATE INDEX idx_6c4fe9b8ed5ca9e6 ON service_image (service_id)');
        $this->addSql('CREATE TABLE habitat_image (habitat_id INT NOT NULL, image_id INT NOT NULL, PRIMARY KEY(habitat_id, image_id))');
        $this->addSql('CREATE INDEX idx_9ad7e0313da5256d ON habitat_image (image_id)');
        $this->addSql('CREATE INDEX idx_9ad7e031affe2d26 ON habitat_image (habitat_id)');
        $this->addSql('CREATE TABLE image (id INT NOT NULL, data_image BYTEA NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE animal_image (animal_id INT NOT NULL, image_id INT NOT NULL, PRIMARY KEY(animal_id, image_id))');
        $this->addSql('CREATE INDEX idx_e4ceddab3da5256d ON animal_image (image_id)');
        $this->addSql('CREATE INDEX idx_e4ceddab8e962c16 ON animal_image (animal_id)');
        $this->addSql('ALTER TABLE service_image ADD CONSTRAINT fk_6c4fe9b8ed5ca9e6 FOREIGN KEY (service_id) REFERENCES service (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE service_image ADD CONSTRAINT fk_6c4fe9b83da5256d FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE habitat_image ADD CONSTRAINT fk_9ad7e031affe2d26 FOREIGN KEY (habitat_id) REFERENCES habitat (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE habitat_image ADD CONSTRAINT fk_9ad7e0313da5256d FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE animal_image ADD CONSTRAINT fk_e4ceddab8e962c16 FOREIGN KEY (animal_id) REFERENCES animal (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE animal_image ADD CONSTRAINT fk_e4ceddab3da5256d FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE animal DROP image_filename');
        $this->addSql('ALTER TABLE habitat DROP image_filename');
    }
}
