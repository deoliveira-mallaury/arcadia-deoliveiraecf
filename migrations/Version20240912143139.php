<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240912143139 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE habitat DROP CONSTRAINT fk_3b37b2e84b95fada');
        $this->addSql('ALTER TABLE animal DROP CONSTRAINT fk_6aab231f4b95fada');
        $this->addSql('DROP SEQUENCE repport_logs_id_seq CASCADE');
        $this->addSql('CREATE TABLE veterinary_repport (id INT NOT NULL, animal_id INT DEFAULT NULL, date DATE NOT NULL, detail VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_1587F5F18E962C16 ON veterinary_repport (animal_id)');
        $this->addSql('ALTER TABLE veterinary_repport ADD CONSTRAINT FK_1587F5F18E962C16 FOREIGN KEY (animal_id) REFERENCES animal (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE repport_logs DROP CONSTRAINT fk_1dcad8ab99049ece');
        $this->addSql('DROP TABLE repport_logs');
        $this->addSql('DROP INDEX idx_6aab231f4b95fada');
        $this->addSql('ALTER TABLE animal DROP repport_log_id');
        $this->addSql('DROP INDEX idx_3b37b2e84b95fada');
        $this->addSql('ALTER TABLE habitat DROP repport_log_id');
        $this->addSql('ALTER TABLE "user" ADD vet_repport_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE "user" ADD CONSTRAINT FK_8D93D649BF5D8E2C FOREIGN KEY (vet_repport_id) REFERENCES veterinary_repport (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_8D93D649BF5D8E2C ON "user" (vet_repport_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE "user" DROP CONSTRAINT FK_8D93D649BF5D8E2C');
        $this->addSql('CREATE SEQUENCE repport_logs_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE repport_logs (id INT NOT NULL, modified_by_id INT NOT NULL, date TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, modified_field VARCHAR(255) NOT NULL, new_value VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX idx_1dcad8ab99049ece ON repport_logs (modified_by_id)');
        $this->addSql('ALTER TABLE repport_logs ADD CONSTRAINT fk_1dcad8ab99049ece FOREIGN KEY (modified_by_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE veterinary_repport DROP CONSTRAINT FK_1587F5F18E962C16');
        $this->addSql('DROP TABLE veterinary_repport');
        $this->addSql('ALTER TABLE habitat ADD repport_log_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE habitat ADD CONSTRAINT fk_3b37b2e84b95fada FOREIGN KEY (repport_log_id) REFERENCES repport_logs (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_3b37b2e84b95fada ON habitat (repport_log_id)');
        $this->addSql('ALTER TABLE user_roles DROP CONSTRAINT FK_54FCD59F36421AD6');
        $this->addSql('DROP INDEX IDX_54FCD59F36421AD6');
        $this->addSql('ALTER TABLE user_roles DROP input_id');
        $this->addSql('ALTER TABLE animal ADD repport_log_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE animal ADD CONSTRAINT fk_6aab231f4b95fada FOREIGN KEY (repport_log_id) REFERENCES repport_logs (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_6aab231f4b95fada ON animal (repport_log_id)');
        $this->addSql('DROP INDEX IDX_8D93D649BF5D8E2C');
        $this->addSql('ALTER TABLE "user" DROP vet_repport_id');
    }
}
