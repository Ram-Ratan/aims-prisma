/*
  Warnings:

  - A unique constraint covering the columns `[examId,studentId,courseId]` on the table `ExamMarksEntry` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ExamMarksEntry_examId_studentId_courseId_key" ON "ExamMarksEntry"("examId", "studentId", "courseId");
