/*
  Warnings:

  - Added the required column `semesterId` to the `CourseRegistration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CourseRegistration" ADD COLUMN     "semesterId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "CourseRegistration" ADD CONSTRAINT "CourseRegistration_semesterId_fkey" FOREIGN KEY ("semesterId") REFERENCES "Semester"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
