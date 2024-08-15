<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240813115733 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE animal ALTER name TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE animal ALTER food_qty TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE animal_image ADD CONSTRAINT FK_E4CEDDAB8E962C16 FOREIGN KEY (animal_id) REFERENCES animal (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE animal_image ADD CONSTRAINT FK_E4CEDDAB3DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE habitat ALTER description TYPE VARCHAR(250)');
        $this->addSql('ALTER TABLE habitat ALTER habitat_comment TYPE VARCHAR(250)');
        $this->addSql('ALTER TABLE habitat_image ADD CONSTRAINT FK_9AD7E031AFFE2D26 FOREIGN KEY (habitat_id) REFERENCES habitat (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE habitat_image ADD CONSTRAINT FK_9AD7E0313DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE race ALTER label TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE service_image ADD CONSTRAINT FK_6C4FE9B8ED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE service_image ADD CONSTRAINT FK_6C4FE9B83DA5256D FOREIGN KEY (image_id) REFERENCES image (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE "user" ALTER name TYPE VARCHAR(60)');
        $this->addSql('ALTER TABLE "user" ALTER lastname TYPE VARCHAR(60)');
        $this->addSql('ALTER TABLE user_roles ALTER label TYPE VARCHAR(50)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE habitat_image DROP CONSTRAINT FK_9AD7E031AFFE2D26');
        $this->addSql('ALTER TABLE habitat_image DROP CONSTRAINT FK_9AD7E0313DA5256D');
        $this->addSql('ALTER TABLE race ALTER label TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE habitat ALTER description TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE habitat ALTER habitat_comment TYPE VARCHAR(50)');
        $this->addSql('ALTER TABLE animal_image DROP CONSTRAINT FK_E4CEDDAB8E962C16');
        $this->addSql('ALTER TABLE animal_image DROP CONSTRAINT FK_E4CEDDAB3DA5256D');
        $this->addSql('ALTER TABLE user_roles ALTER label TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE animal ALTER name TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE animal ALTER food_qty TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE "user" ALTER name TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE "user" ALTER lastname TYPE VARCHAR(255)');
        $this->addSql('ALTER TABLE service_image DROP CONSTRAINT FK_6C4FE9B8ED5CA9E6');
        $this->addSql('ALTER TABLE service_image DROP CONSTRAINT FK_6C4FE9B83DA5256D');
    }
}
