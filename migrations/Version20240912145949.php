<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240912145949 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE log_repport_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE repport_logs_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE log_repport (id INT NOT NULL, date DATE NOT NULL, value VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE repport_logs (id INT NOT NULL, modified_by_id INT NOT NULL, date TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, modified_field VARCHAR(255) NOT NULL, new_value VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_1DCAD8AB99049ECE ON repport_logs (modified_by_id)');
        $this->addSql('ALTER TABLE repport_logs ADD CONSTRAINT FK_1DCAD8AB99049ECE FOREIGN KEY (modified_by_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE animal ADD repport_log_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE animal ADD CONSTRAINT FK_6AAB231F4B95FADA FOREIGN KEY (repport_log_id) REFERENCES repport_logs (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_6AAB231F4B95FADA ON animal (repport_log_id)');
        $this->addSql('ALTER TABLE habitat ADD repport_log_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE habitat ADD CONSTRAINT FK_3B37B2E84B95FADA FOREIGN KEY (repport_log_id) REFERENCES repport_logs (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_3B37B2E84B95FADA ON habitat (repport_log_id)');
        $this->addSql('ALTER TABLE opinion ADD rating INT NOT NULL');
        $this->addSql('ALTER TABLE "user" DROP CONSTRAINT fk_8d93d649bf5d8e2c');
        $this->addSql('DROP INDEX idx_8d93d649bf5d8e2c');
        $this->addSql('ALTER TABLE "user" DROP vet_repport_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE animal DROP CONSTRAINT FK_6AAB231F4B95FADA');
        $this->addSql('ALTER TABLE habitat DROP CONSTRAINT FK_3B37B2E84B95FADA');
        $this->addSql('DROP SEQUENCE log_repport_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE repport_logs_id_seq CASCADE');
        $this->addSql('ALTER TABLE repport_logs DROP CONSTRAINT FK_1DCAD8AB99049ECE');
        $this->addSql('DROP TABLE log_repport');
        $this->addSql('DROP TABLE repport_logs');
        $this->addSql('ALTER TABLE opinion DROP rating');
        $this->addSql('ALTER TABLE "user" ADD vet_repport_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE "user" ADD CONSTRAINT fk_8d93d649bf5d8e2c FOREIGN KEY (vet_repport_id) REFERENCES veterinary_repport (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_8d93d649bf5d8e2c ON "user" (vet_repport_id)');
        $this->addSql('DROP INDEX IDX_6AAB231F4B95FADA');
        $this->addSql('ALTER TABLE animal DROP repport_log_id');
        $this->addSql('DROP INDEX IDX_3B37B2E84B95FADA');
        $this->addSql('ALTER TABLE habitat DROP repport_log_id');
    }
}
