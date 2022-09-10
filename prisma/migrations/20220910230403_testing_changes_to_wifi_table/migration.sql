/*
  Warnings:

  - Made the column `password` on table `Wifi` required. This step will fail if there are existing NULL values in that column.

*/

-- Delete contents
DELETE FROM "Wifi";
-- AlterTable
ALTER TABLE "Wifi" ALTER COLUMN "password" SET NOT NULL;
