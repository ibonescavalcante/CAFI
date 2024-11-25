/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `usuario` on the `User` table. All the data in the column will be lost.
  - Added the required column `user` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `usuario`,
    ADD COLUMN `user` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `empresas` (
    `id` VARCHAR(191) NOT NULL,
    `cpf_cnpj` VARCHAR(191) NOT NULL,
    `razao_social` VARCHAR(191) NOT NULL,
    `nome_fantasia` VARCHAR(191) NOT NULL,
    `tipo_ocorrencia` VARCHAR(191) NOT NULL,
    `motivo` VARCHAR(191) NOT NULL,
    `uasg_sancionadora` VARCHAR(191) NOT NULL,
    `ambito_da_sancao` VARCHAR(191) NOT NULL,
    `prazo` VARCHAR(191) NOT NULL,
    `prazo_inicial` VARCHAR(191) NOT NULL,
    `prazo_final` VARCHAR(191) NOT NULL,
    `numero_do_processo` VARCHAR(191) NOT NULL,
    `numero_do_contrato` VARCHAR(191) NOT NULL,
    `valor_da_multa` VARCHAR(191) NOT NULL,
    `descricao_justificativa` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `data_inicio` DATETIME(3) NOT NULL,
    `data_final` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `empresas` ADD CONSTRAINT `empresas_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
