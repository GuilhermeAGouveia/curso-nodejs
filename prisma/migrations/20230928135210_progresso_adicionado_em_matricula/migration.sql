/*
  Warnings:

  - Added the required column `progresso` to the `Matricula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Matricula` ADD COLUMN `progresso` DOUBLE NOT NULL;
