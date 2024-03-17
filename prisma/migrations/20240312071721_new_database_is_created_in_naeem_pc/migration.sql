/*
  Warnings:

  - You are about to alter the column `dateofBirth` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `dateofBirth` VARCHAR(10) NOT NULL;
