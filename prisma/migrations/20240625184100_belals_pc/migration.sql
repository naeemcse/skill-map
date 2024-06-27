/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `Comments_userID_fkey` ON `Comments`;

-- DropIndex
DROP INDEX `Conversation_receiverId_fkey` ON `Conversation`;

-- DropIndex
DROP INDEX `Conversation_senderId_fkey` ON `Conversation`;

-- DropIndex
DROP INDEX `Message_receiverId_fkey` ON `Message`;

-- DropIndex
DROP INDEX `Message_senderId_fkey` ON `Message`;

-- DropIndex
DROP INDEX `Posts_userId_fkey` ON `Posts`;

-- DropIndex
DROP INDEX `ProfileReviews_userIDserviceProvider_fkey` ON `ProfileReviews`;

-- DropIndex
DROP INDEX `ProfileReviews_userIdReviwer_fkey` ON `ProfileReviews`;

-- DropIndex
DROP INDEX `Service_userID_fkey` ON `Service`;

-- DropIndex
DROP INDEX `ServiceReview_userIDreviwer_fkey` ON `ServiceReview`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NULL,
    `lastName` VARCHAR(255) NULL,
    `email` VARCHAR(200) NOT NULL,
    `password` VARCHAR(255) NULL,
    `dateofBirth` VARCHAR(10) NULL,
    `profilePhoto` VARCHAR(255) NULL,
    `divisionName` VARCHAR(255) NULL,
    `districtName` VARCHAR(255) NULL,
    `upzillaName` VARCHAR(255) NULL,
    `location` VARCHAR(255) NULL,
    `profession` VARCHAR(255) NULL,
    `experience` VARCHAR(255) NULL,
    `details` VARCHAR(255) NULL,
    `mobile` VARCHAR(255) NULL,
    `whatsApp` BOOLEAN NULL DEFAULT false,
    `facebookProfile` VARCHAR(255) NULL,
    `linkedInProfile` VARCHAR(255) NULL,
    `otp` VARCHAR(255) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    UNIQUE INDEX `Users_mobile_key`(`mobile`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Conversation` ADD CONSTRAINT `Conversation_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Conversation` ADD CONSTRAINT `Conversation_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfileReviews` ADD CONSTRAINT `ProfileReviews_userIdReviwer_fkey` FOREIGN KEY (`userIdReviwer`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfileReviews` ADD CONSTRAINT `ProfileReviews_userIDserviceProvider_fkey` FOREIGN KEY (`userIDserviceProvider`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comments` ADD CONSTRAINT `Comments_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceReview` ADD CONSTRAINT `ServiceReview_userIDreviwer_fkey` FOREIGN KEY (`userIDreviwer`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
