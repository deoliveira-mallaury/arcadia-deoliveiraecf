<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240831104053 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE image_habitat (image_id INT NOT NULL, habitat_id INT NOT NULL, PRIMARY KEY(image_id, habitat_id))');
        $this->addSql('CREATE INDEX IDX_AE27E5343DA5256D ON image_habitat (image_id)');
        $this->addSql('CREATE INDEX IDX_AE27E534AFFE2D26 ON image_habitat (habitat_id)');
        $this->addSql('CREATE TABLE image_animal (image_id INT NOT NULL, animal_id INT NOT NULL, PRIMARY KEY(image_id, animal_id))');
        $this->addSql('CREATE INDEX IDX_C5B67DD73DA5256D ON image_animal (image_id)');
        $this->addSql('CREATE INDEX IDX_C5B67DD78E962C16 ON image_animal (animal_id)');
        $this->addSql('CREATE TABLE image_service (image_id INT NOT NULL, service_id INT NOT NULL, PRIMARY KEY(image_id, service_id))');
        $this->addSql('CREATE INDEX IDX_748DCD0E3DA5256D ON image_service (image_id)');
        $this->addSql('CREATE INDEX IDX_748DCD0EED5CA9E6 ON image_service (service_id)');
        $this->addSql('ALTER TABLE image_habitat ADD CONSTRAINT FK_AE27E5343DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image_habitat ADD CONSTRAINT FK_AE27E534AFFE2D26 FOREIGN KEY (habitat_id) REFERENCES habitat (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image_animal ADD CONSTRAINT FK_C5B67DD73DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image_animal ADD CONSTRAINT FK_C5B67DD78E962C16 FOREIGN KEY (animal_id) REFERENCES animal (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image_service ADD CONSTRAINT FK_748DCD0E3DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image_service ADD CONSTRAINT FK_748DCD0EED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE image ADD data_image BYTEA NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE image_habitat DROP CONSTRAINT FK_AE27E5343DA5256D');
        $this->addSql('ALTER TABLE image_habitat DROP CONSTRAINT FK_AE27E534AFFE2D26');
        $this->addSql('ALTER TABLE image_animal DROP CONSTRAINT FK_C5B67DD73DA5256D');
        $this->addSql('ALTER TABLE image_animal DROP CONSTRAINT FK_C5B67DD78E962C16');
        $this->addSql('ALTER TABLE image_service DROP CONSTRAINT FK_748DCD0E3DA5256D');
        $this->addSql('ALTER TABLE image_service DROP CONSTRAINT FK_748DCD0EED5CA9E6');
        $this->addSql('DROP TABLE image_habitat');
        $this->addSql('DROP TABLE image_animal');
        $this->addSql('DROP TABLE image_service');
        $this->addSql('ALTER TABLE image DROP data_image');
    }
}
