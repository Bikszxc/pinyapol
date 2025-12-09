-- AlterTable
ALTER TABLE "GuildConfig" ADD COLUMN     "updateMentionIds" TEXT[] DEFAULT ARRAY[]::TEXT[];
