/*
  Warnings:

  - A unique constraint covering the columns `[courseId,classType,attendanceType,studentId,date]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Attendance_courseId_studentId_date_key";

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_courseId_classType_attendanceType_studentId_date_key" ON "Attendance"("courseId", "classType", "attendanceType", "studentId", "date");
