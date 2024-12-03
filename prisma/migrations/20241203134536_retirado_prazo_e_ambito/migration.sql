/*
  Warnings:

  - You are about to drop the column `ambito_da_sancao` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `prazo` on the `empresas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `empresas` DROP COLUMN `ambito_da_sancao`,
    DROP COLUMN `prazo`;
