/*
  Warnings:

  - You are about to drop the column `id_aluno` on the `Telefone` table. All the data in the column will be lost.
  - You are about to drop the column `id_professor` on the `Telefone` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Telefone` DROP FOREIGN KEY `Telefone_id_aluno_fkey`;

-- DropForeignKey
ALTER TABLE `Telefone` DROP FOREIGN KEY `Telefone_id_professor_fkey`;

-- AlterTable
ALTER TABLE `Telefone` DROP COLUMN `id_aluno`,
    DROP COLUMN `id_professor`,
    ADD COLUMN `aluno_id` INTEGER NULL,
    ADD COLUMN `professor_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Telefone` ADD CONSTRAINT `Telefone_professor_id_fkey` FOREIGN KEY (`professor_id`) REFERENCES `Professor`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Telefone` ADD CONSTRAINT `Telefone_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Aluno`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
