<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240905175705 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE log_repport_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE log_repport (id INT NOT NULL, date DATE NOT NULL, value VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE user_roles ADD input_id INT NOT NULL');
        $this->addSql('ALTER TABLE user_roles ADD CONSTRAINT FK_54FCD59F36421AD6 FOREIGN KEY (input_id) REFERENCES log_repport (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_54FCD59F36421AD6 ON user_roles (input_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE user_roles DROP CONSTRAINT FK_54FCD59F36421AD6');
        $this->addSql('DROP SEQUENCE log_repport_id_seq CASCADE');
        $this->addSql('DROP TABLE log_repport');
        $this->addSql('DROP INDEX IDX_54FCD59F36421AD6');
        $this->addSql('ALTER TABLE user_roles DROP input_id');
    }
}
