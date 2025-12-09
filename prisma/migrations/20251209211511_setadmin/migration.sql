-- AlterTable
ALTER TABLE "GuildConfig" ADD COLUMN     "adminRoleIds" TEXT[] DEFAULT ARRAY[]::TEXT[];
