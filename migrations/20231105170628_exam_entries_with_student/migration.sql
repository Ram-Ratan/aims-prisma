/*
  Warnings:

  - Added the required column `studentId` to the `ExamMarksEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExamMarksEntry" ADD COLUMN     "studentId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "ExamMarksEntry" ADD CONSTRAINT "ExamMarksEntry_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
