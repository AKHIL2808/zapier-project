-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "metaData" JSONB NOT NULL DEFAULT '{}',
ALTER COLUMN "sortedOrder" SET DEFAULT 0,
ALTER COLUMN "sortedOrder" DROP DEFAULT;
DROP SEQUENCE "Action_sortedOrder_seq";
