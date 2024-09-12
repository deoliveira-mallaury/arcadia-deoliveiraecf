<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240909143246 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE log_repport_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE veterinary_repport_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE log_repport (id INT NOT NULL, date DATE NOT NULL, value VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE veterinary_repport (id INT NOT NULL, animal_id INT DEFAULT NULL, date DATE NOT NULL, detail VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_1587F5F18E962C16 ON veterinary_repport (animal_id)');
        $this->addSql('ALTER TABLE veterinary_repport ADD CONSTRAINT FK_1587F5F18E962C16 FOREIGN KEY (animal_id) REFERENCES animal (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE repport_logs ADD modified_by_id INT NOT NULL');
        $this->addSql('ALTER TABLE repport_logs ADD CONSTRAINT FK_1DCAD8AB99049ECE FOREIGN KEY (modified_by_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_1DCAD8AB99049ECE ON repport_logs (modified_by_id)');
        $this->addSql('ALTER TABLE "user" DROP CONSTRAINT fk_8d93d649813c1315');
        $this->addSql('DROP INDEX idx_8d93d649813c1315');
        $this->addSql('ALTER TABLE "user" DROP repport_logs_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE log_repport_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE veterinary_repport_id_seq CASCADE');
        $this->addSql('ALTER TABLE veterinary_repport DROP CONSTRAINT FK_1587F5F18E962C16');
        $this->addSql('DROP TABLE log_repport');
        $this->addSql('DROP TABLE veterinary_repport');
        $this->addSql('ALTER TABLE "user" ADD repport_logs_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE "user" ADD CONSTRAINT fk_8d93d649813c1315 FOREIGN KEY (repport_logs_id) REFERENCES repport_logs (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_8d93d649813c1315 ON "user" (repport_logs_id)');
        $this->addSql('ALTER TABLE repport_logs DROP CONSTRAINT FK_1DCAD8AB99049ECE');
        $this->addSql('DROP INDEX IDX_1DCAD8AB99049ECE');
        $this->addSql('ALTER TABLE repport_logs DROP modified_by_id');
    }
}
