-- CreateEnum
CREATE TYPE "examType" AS ENUM ('CT1', 'CT2', 'ENDSEM');

-- CreateTable
CREATE TABLE "Exam" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" "examType" NOT NULL,
    "code" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Exam_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExamMarksEntry" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "examId" UUID NOT NULL,
    "courseId" UUID NOT NULL,
    "marksObtained" DOUBLE PRECISION NOT NULL,
    "remarks" TEXT,

    CONSTRAINT "ExamMarksEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Exam_code_key" ON "Exam"("code");

-- AddForeignKey
ALTER TABLE "ExamMarksEntry" ADD CONSTRAINT "ExamMarksEntry_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExamMarksEntry" ADD CONSTRAINT "ExamMarksEntry_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
