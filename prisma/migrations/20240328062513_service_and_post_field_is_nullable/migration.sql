-- AlterTable
ALTER TABLE `comments` MODIFY `content` TEXT NULL;

-- AlterTable
ALTER TABLE `posts` MODIFY `shortContent` TEXT NULL,
    MODIFY `content` TEXT NULL,
    MODIFY `image1` VARCHAR(255) NULL,
    MODIFY `image2` VARCHAR(255) NULL,
    MODIFY `image3` VARCHAR(255) NULL,
    MODIFY `image4` VARCHAR(255) NULL,
    MODIFY `keywords` VARCHAR(255) NULL,
    MODIFY `tags` VARCHAR(255) NULL,
    MODIFY `type` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `profilereviews` MODIFY `rating` INTEGER NULL;

-- AlterTable
ALTER TABLE `service` MODIFY `shortContent` TEXT NULL,
    MODIFY `content` TEXT NULL,
    MODIFY `image1` VARCHAR(255) NULL,
    MODIFY `image2` VARCHAR(255) NULL,
    MODIFY `image3` VARCHAR(255) NULL,
    MODIFY `image4` VARCHAR(255) NULL,
    MODIFY `experienceFrom` INTEGER NULL,
    MODIFY `serviceCharge` INTEGER NULL,
    MODIFY `serviceAreaDivision` VARCHAR(255) NULL,
    MODIFY `serviceAreaDistrict` VARCHAR(255) NULL,
    MODIFY `serviceAreaUpzilla` VARCHAR(255) NULL,
    MODIFY `keywords` VARCHAR(255) NULL,
    MODIFY `tags` VARCHAR(255) NULL,
    MODIFY `type` VARCHAR(255) NULL;
