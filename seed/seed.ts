// seed.ts
import { PrismaClient } from "../generated/client";
import {facultyData, adminData, semesterData, branchData, studentData} from "./seedData"

const prisma = new PrismaClient();

async function seedData() {
  try {


    // await prisma.studentCourseRegistration.deleteMany({});
    // await prisma.facultyCourseAssignment.deleteMany({});
    // await prisma.examMarksEntry.deleteMany({});
    // await prisma.semester.deleteMany({}).then(()=>{}).catch((err)=>{
    //   console.log(err);
    // });
    // await prisma.branch.deleteMany({});
    // await prisma.exam.deleteMany({});
    // await prisma.admin.deleteMany({});
    // await prisma.student.deleteMany({});
    // await prisma.faculty.deleteMany({});
    // await prisma.user.deleteMany({});



    let user:any[] = [];
    for (let index = 20201; index <= 20249; index++) {
        const obj = {
          username: `${index}@iiitu.ac.in`,
          password: "12345",
          email: `${index}@iiitu.ac.in`,
          role: "STUDENT"
        };
        user.push(obj);
    }
    const userWithFac = user.concat(facultyData);
    const allUser = userWithFac.concat(adminData);

    // Seeding user
    await prisma.user.createMany({
      data: allUser,
    });

    

    // Seeding semester
    await prisma.semester.createMany({
        data: semesterData
    })

    // Seeding Branch
    await prisma.branch.createMany({
        data: branchData
    })

    // Fetching Student, Branch, Semester
    const studentUsers = await prisma.user.findMany({
      where: {
        role: "STUDENT",
      },
    });

    const branch = await prisma.branch.findMany({});
    const semester = await prisma.semester.findMany({});


    let student: any[] = [];
    for (let index = 20201; index <= 20249; index++) {
      const obj = {
        rollNo: index.toString(),
        fullName: studentData[index - 20201]?.fullName,
        semesterId: semester[6]?.id,
        branchId: branch[1]?.id,
        mobileNo: studentData[index - 20201]?.mobileNo,
        email: studentUsers[index - 20201]?.email,
        userId: studentUsers[index - 20201]?.id,
      };
      student.push(obj);
    }
    // Seeding Student
    await prisma.student.createMany({
      data: student
    });


    const courseData = [
      {
        name: "Professional Ethics",
        courseId: "HMC701",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "Fiber Optics and Communication",
        courseId: "ECPE41",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "VLSI Design",
        courseId: "ECPE42",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "Antenna and Wave Propagation",
        courseId: "ECPE51",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "Application specific integrated Circuit",
        courseId: "ECPE52",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "Nanoscience and Nanotechnology",
        courseId: "ECPE61",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
      {
        name: "Wireless Communication",
        courseId: "ECPE62",
        branchId: branch[1].id,
        semesterId: semester[6].id,
      },
    ];
    // Seeding Courses
    await prisma.course.createMany({
        data: courseData
    })

    // Seeding Exam

    await prisma.exam.createMany({
      data: [
        {
          name: "CT1",
          code: "CT1",
        },
        {
          name: "CT2",
          code: "CT2",
        },
        {
          name: "ENDSEM",
          code: "ENDSEM",
        },
      ],
    });

    console.log("Data seeded successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
