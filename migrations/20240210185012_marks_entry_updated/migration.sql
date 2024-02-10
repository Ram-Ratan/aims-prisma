/*
  Warnings:

  - A unique constraint covering the columns `[examCode,examType,courseId,studentId]` on the table `MarksEntry` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `examCode` on the `MarksEntry` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "MarksEntry" DROP COLUMN "examCode",
ADD COLUMN     "examCode" "examCode" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MarksEntry_examCode_examType_courseId_studentId_key" ON "MarksEntry"("examCode", "examType", "courseId", "studentId");
