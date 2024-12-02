/*
  Warnings:

  - You are about to drop the column `data_final` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `data_inicio` on the `empresas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `empresas` DROP COLUMN `data_final`,
    DROP COLUMN `data_inicio`;
