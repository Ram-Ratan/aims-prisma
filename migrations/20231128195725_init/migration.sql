/*
  Warnings:

  - A unique constraint covering the columns `[facultyId,courseId]` on the table `FacultyCourseAssignment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FacultyCourseAssignment_facultyId_courseId_key" ON "FacultyCourseAssignment"("facultyId", "courseId");
