-- AlterTable
ALTER TABLE `socials` MODIFY `facebook` VARCHAR(255) NULL,
    MODIFY `youtube` VARCHAR(255) NULL,
    MODIFY `twitter` VARCHAR(255) NULL,
    MODIFY `linkdin` VARCHAR(255) NULL,
    MODIFY `about` VARCHAR(1000) NULL,
    MODIFY `address` VARCHAR(255) NULL,
    MODIFY `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    MODIFY `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0);

-- AlterTable
ALTER TABLE `users` MODIFY `firstName` VARCHAR(255) NULL,
    MODIFY `lastName` VARCHAR(255) NULL,
    MODIFY `password` VARCHAR(255) NULL,
    MODIFY `dateofBirth` VARCHAR(10) NULL,
    MODIFY `profilePhoto` VARCHAR(255) NULL,
    MODIFY `divisionName` VARCHAR(255) NULL,
    MODIFY `districtName` VARCHAR(255) NULL,
    MODIFY `upzillaName` VARCHAR(255) NULL,
    MODIFY `profession` VARCHAR(255) NULL,
    MODIFY `experience` VARCHAR(255) NULL,
    MODIFY `details` VARCHAR(255) NULL,
    MODIFY `mobile` VARCHAR(255) NULL,
    MODIFY `whatsApp` BOOLEAN NULL DEFAULT false,
    MODIFY `facebookProfile` VARCHAR(255) NULL,
    MODIFY `linkedInProfile` VARCHAR(255) NULL,
    MODIFY `otp` VARCHAR(255) NULL;
