/*
  Warnings:

  - A unique constraint covering the columns `[title,userId]` on the table `safeNotes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "safeNotes_title_userId_key" ON "safeNotes"("title", "userId");
