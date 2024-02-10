/*
  Warnings:

  - A unique constraint covering the columns `[courseId,studentId,date]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Branch` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Semester` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Branch` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Semester` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Branch" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Semester" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_courseId_studentId_date_key" ON "Attendance"("courseId", "studentId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "Branch_code_key" ON "Branch"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Semester_name_key" ON "Semester"("name");
