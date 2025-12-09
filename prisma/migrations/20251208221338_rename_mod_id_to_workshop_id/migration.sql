/*
  Warnings:

  - You are about to drop the column `modId` on the `ModWatchlist` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[guildId,workshopId]` on the table `ModWatchlist` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `workshopId` to the `ModWatchlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ModWatchlist_guildId_modId_key";

-- AlterTable
ALTER TABLE "ModWatchlist" DROP COLUMN "modId",
ADD COLUMN     "workshopId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ModWatchlist_guildId_workshopId_key" ON "ModWatchlist"("guildId", "workshopId");
