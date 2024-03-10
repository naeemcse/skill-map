-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(200) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `dateofBirth` DATETIME(3) NOT NULL,
    `profilePhoto` VARCHAR(255) NOT NULL,
    `divisionName` VARCHAR(255) NOT NULL,
    `districtName` VARCHAR(255) NOT NULL,
    `upzillaName` VARCHAR(255) NOT NULL,
    `profession` VARCHAR(255) NOT NULL,
    `experience` VARCHAR(255) NOT NULL,
    `details` VARCHAR(255) NOT NULL,
    `mobile` VARCHAR(255) NOT NULL,
    `whatsApp` BOOLEAN NOT NULL DEFAULT false,
    `facebookProfile` VARCHAR(255) NOT NULL,
    `linkedInProfile` VARCHAR(255) NOT NULL,
    `otp` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_email_key`(`email`),
    UNIQUE INDEX `Users_mobile_key`(`mobile`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `sentAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProfileReviews` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userIdReviwer` INTEGER NOT NULL,
    `userIDserviceProvider` INTEGER NOT NULL,
    `review` TEXT NOT NULL,
    `rating` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `shortContent` TEXT NOT NULL,
    `content` TEXT NOT NULL,
    `image1` VARCHAR(255) NOT NULL,
    `image2` VARCHAR(255) NOT NULL,
    `image3` VARCHAR(255) NOT NULL,
    `image4` VARCHAR(255) NOT NULL,
    `keywords` VARCHAR(255) NOT NULL,
    `tags` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `catID` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userID` INTEGER NOT NULL,
    `serviceName` VARCHAR(255) NOT NULL,
    `shortContent` TEXT NOT NULL,
    `content` TEXT NOT NULL,
    `image1` VARCHAR(255) NOT NULL,
    `image2` VARCHAR(255) NOT NULL,
    `image3` VARCHAR(255) NOT NULL,
    `image4` VARCHAR(255) NOT NULL,
    `experienceFrom` INTEGER NOT NULL,
    `serviceCharge` INTEGER NOT NULL,
    `serviceAreaDivision` VARCHAR(255) NOT NULL,
    `serviceAreaDistrict` VARCHAR(255) NOT NULL,
    `serviceAreaUpzilla` VARCHAR(255) NOT NULL,
    `keywords` VARCHAR(255) NOT NULL,
    `tags` VARCHAR(255) NOT NULL,
    `type` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serviceID` INTEGER NOT NULL,
    `serviceCategoryName` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceReview` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `serviceID` INTEGER NOT NULL,
    `userIDreviwer` INTEGER NOT NULL,
    `review` TEXT NOT NULL,
    `rating` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfileReviews` ADD CONSTRAINT `ProfileReviews_userIdReviwer_fkey` FOREIGN KEY (`userIdReviwer`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProfileReviews` ADD CONSTRAINT `ProfileReviews_userIDserviceProvider_fkey` FOREIGN KEY (`userIDserviceProvider`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_catID_fkey` FOREIGN KEY (`catID`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceCategory` ADD CONSTRAINT `ServiceCategory_serviceID_fkey` FOREIGN KEY (`serviceID`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceReview` ADD CONSTRAINT `ServiceReview_serviceID_fkey` FOREIGN KEY (`serviceID`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceReview` ADD CONSTRAINT `ServiceReview_userIDreviwer_fkey` FOREIGN KEY (`userIDreviwer`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
