
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  email: 'email',
  role: 'role'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  rollNo: 'rollNo',
  fullName: 'fullName',
  semesterId: 'semesterId',
  branchId: 'branchId',
  mobileNo: 'mobileNo',
  email: 'email',
  userId: 'userId'
};

exports.Prisma.FacultyScalarFieldEnum = {
  id: 'id',
  fullName: 'fullName',
  department: 'department',
  email: 'email',
  userId: 'userId'
};

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  fullName: 'fullName',
  email: 'email',
  userId: 'userId'
};

exports.Prisma.SemesterScalarFieldEnum = {
  id: 'id',
  sem: 'sem',
  name: 'name'
};

exports.Prisma.BranchScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  courseType: 'courseType',
  electiveCode: 'electiveCode',
  credit: 'credit',
  labIncluded: 'labIncluded',
  batchId: 'batchId'
};

exports.Prisma.CourseRegistrationScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  studentId: 'studentId'
};

exports.Prisma.FacultyCourseAssignmentScalarFieldEnum = {
  id: 'id',
  facultyId: 'facultyId',
  courseId: 'courseId'
};

exports.Prisma.MarksEntryScalarFieldEnum = {
  id: 'id',
  examCode: 'examCode',
  examType: 'examType',
  courseId: 'courseId',
  studentId: 'studentId',
  marksObtained: 'marksObtained',
  remarks: 'remarks'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  studentId: 'studentId',
  date: 'date',
  isPresent: 'isPresent',
  classType: 'classType',
  attendanceType: 'attendanceType'
};

exports.Prisma.BatchScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name'
};

exports.Prisma.SteamElectiveScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name'
};

exports.Prisma.ProgramElectiveScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.userType = exports.$Enums.userType = {
  STUDENT: 'STUDENT',
  FACULTY: 'FACULTY',
  ADMIN: 'ADMIN'
};

exports.departmentType = exports.$Enums.departmentType = {
  ELECTRONICS: 'ELECTRONICS',
  COMPUTING: 'COMPUTING'
};

exports.courseType = exports.$Enums.courseType = {
  GIR: 'GIR',
  PC: 'PC',
  PE: 'PE',
  SE: 'SE'
};

exports.examCode = exports.$Enums.examCode = {
  CT1: 'CT1',
  CT2: 'CT2',
  ENDSEM: 'ENDSEM'
};

exports.examType = exports.$Enums.examType = {
  LAB: 'LAB',
  THEORY: 'THEORY'
};

exports.classType = exports.$Enums.classType = {
  EXTRA: 'EXTRA',
  REGULAR: 'REGULAR'
};

exports.attenanceType = exports.$Enums.attenanceType = {
  THEORY: 'THEORY',
  LAB: 'LAB'
};

exports.Prisma.ModelName = {
  User: 'User',
  Student: 'Student',
  Faculty: 'Faculty',
  Admin: 'Admin',
  Semester: 'Semester',
  Branch: 'Branch',
  Course: 'Course',
  CourseRegistration: 'CourseRegistration',
  FacultyCourseAssignment: 'FacultyCourseAssignment',
  MarksEntry: 'MarksEntry',
  Attendance: 'Attendance',
  Batch: 'Batch',
  SteamElective: 'SteamElective',
  ProgramElective: 'ProgramElective'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\priya\\Desktop\\aims-prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KfQ0KDQptb2RlbCBVc2VyIHsNCiAgaWQgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZA0KICB1c2VybmFtZSBTdHJpbmcgICBAdW5pcXVlDQogIHBhc3N3b3JkIFN0cmluZw0KICBlbWFpbCAgICBTdHJpbmcgICBAdW5pcXVlDQogIHJvbGUgICAgIHVzZXJUeXBlIEBkZWZhdWx0KFNUVURFTlQpDQogIHN0dWRlbnQgIFN0dWRlbnQ/DQogIGZhY3VsdHkgIEZhY3VsdHk/DQogIGFkbWluICAgIEFkbWluPw0KfQ0KDQptb2RlbCBTdHVkZW50IHsNCiAgaWQgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZA0KICByb2xsTm8gICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICBAdW5pcXVlDQogIGZ1bGxOYW1lICAgICAgICAgU3RyaW5nDQogIHNlbWVzdGVySWQgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkDQogIHNlbWVzdGVyICAgICAgICAgU2VtZXN0ZXIgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzZW1lc3RlcklkXSwgcmVmZXJlbmNlczogW2lkXSxvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikNCiAgYnJhbmNoSWQgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQNCiAgYnJhbmNoICAgICAgICAgICBCcmFuY2ggICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2JyYW5jaElkXSwgcmVmZXJlbmNlczogW2lkXSxvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikNCiAgbW9iaWxlTm8gICAgICAgICBTdHJpbmcNCiAgZW1haWwgICAgICAgICAgICBTdHJpbmcNCiAgdXNlciAgICAgICAgICAgICBVc2VyICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pDQogIHVzZXJJZCAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgIEB1bmlxdWUgQGRiLlV1aWQNCiAgY291cnNlUmVnaXN0ZXJlZCBDb3Vyc2VSZWdpc3RyYXRpb25bXQ0KICBhdHRlbmRhbmNlcyAgICAgIEF0dGVuZGFuY2VbXQ0KICBleGFtRW50cmllcyAgICAgIE1hcmtzRW50cnlbXQ0KfQ0KDQptb2RlbCBGYWN1bHR5IHsNCiAgaWQgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkDQogIGZ1bGxOYW1lICAgICAgIFN0cmluZw0KICBkZXBhcnRtZW50ICAgICBkZXBhcnRtZW50VHlwZQ0KICBlbWFpbCAgICAgICAgICBTdHJpbmcNCiAgdXNlciAgICAgICAgICAgVXNlciAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSxvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikNCiAgdXNlcklkICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICBAdW5pcXVlIEBkYi5VdWlkDQogIGNvdXJzZUFzc2lnbmVkIEZhY3VsdHlDb3Vyc2VBc3NpZ25tZW50W10NCn0NCg0KbW9kZWwgQWRtaW4gew0KICBpZCAgICAgICBTdHJpbmcgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZA0KICBmdWxsTmFtZSBTdHJpbmcNCiAgZW1haWwgICAgU3RyaW5nDQogIHVzZXIgICAgIFVzZXIgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSxvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikNCiAgdXNlcklkICAgU3RyaW5nIEB1bmlxdWUgQGRiLlV1aWQNCn0NCg0KbW9kZWwgU2VtZXN0ZXIgew0KICBpZCAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZA0KICBzZW0gICAgSW50ICAgICAgQHVuaXF1ZQ0KICBuYW1lICAgU3RyaW5nICAgQHVuaXF1ZQ0KICBjb3Vyc2UgQ291cnNlW10NCiAgc3R1ZGVudCBTdHVkZW50W10NCn0NCg0KbW9kZWwgQnJhbmNoIHsNCiAgaWQgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQNCiAgbmFtZSAgIFN0cmluZyAgIEB1bmlxdWUNCiAgY29kZSAgIFN0cmluZyAgIEB1bmlxdWUNCiAgY291cnNlIENvdXJzZVtdDQogIHN0dWRlbnQgU3R1ZGVudFtdDQp9DQoNCm1vZGVsIENvdXJzZSB7DQogIGlkICAgICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkDQogIGNvZGUgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQHVuaXF1ZQ0KICBuYW1lICAgICAgICAgICAgICBTdHJpbmcNCiAgY291cnNlVHlwZSAgICBjb3Vyc2VUeXBlDQogIGVsZWN0aXZlQ29kZSAgU3RyaW5nDQogIGNyZWRpdCAgICAgIEludA0KICBsYWJJbmNsdWRlZCAgIEJvb2xlYW4gICAgIEBkZWZhdWx0KGZhbHNlKQ0KICBiYXRjaElkICAgICBTdHJpbmcgICAgQGRiLlV1aWQNCiAgYmF0Y2ggICAgIEJhdGNoICAgQHJlbGF0aW9uKGZpZWxkczogW2JhdGNoSWRdLHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQ0KICBicmFuY2ggICAgQnJhbmNoW10NCiAgc2VtZXN0ZXIgIFNlbWVzdGVyW10NCiAgc3R1ZGVudFJlZ2lzdGVyZWQgQ291cnNlUmVnaXN0cmF0aW9uW10NCiAgZmFjdWx0eUFzc2lnbmVkICAgRmFjdWx0eUNvdXJzZUFzc2lnbm1lbnRbXQ0KICBhdHRlbmRhbmNlcyAgICAgICBBdHRlbmRhbmNlW10NCiAgZXhhbUVudHJpZXMgICAgICAgTWFya3NFbnRyeVtdDQp9DQoNCm1vZGVsIENvdXJzZVJlZ2lzdHJhdGlvbiB7DQogIGlkICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQNCiAgY291cnNlSWQgIFN0cmluZyAgQGRiLlV1aWQNCiAgc3R1ZGVudElkIFN0cmluZyAgQGRiLlV1aWQNCiAgY291cnNlICAgIENvdXJzZSAgQHJlbGF0aW9uKGZpZWxkczogW2NvdXJzZUlkXSwgcmVmZXJlbmNlczogW2lkXSxvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikNCiAgc3R1ZGVudCAgIFN0dWRlbnQgQHJlbGF0aW9uKGZpZWxkczogW3N0dWRlbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pDQp9DQoNCm1vZGVsIEZhY3VsdHlDb3Vyc2VBc3NpZ25tZW50IHsNCiAgaWQgICAgICAgIFN0cmluZyAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZA0KICBmYWN1bHR5SWQgU3RyaW5nICBAZGIuVXVpZA0KICBjb3Vyc2VJZCAgU3RyaW5nICBAZGIuVXVpZA0KICBAQHVuaXF1ZShbZmFjdWx0eUlkLCBjb3Vyc2VJZF0pDQogIGZhY3VsdHkgICBGYWN1bHR5IEByZWxhdGlvbihmaWVsZHM6IFtmYWN1bHR5SWRdLCByZWZlcmVuY2VzOiBbaWRdLG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQ0KICBjb3Vyc2UgICAgQ291cnNlICBAcmVsYXRpb24oZmllbGRzOiBbY291cnNlSWRdLCByZWZlcmVuY2VzOiBbaWRdLG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQ0KfQ0KDQptb2RlbCBNYXJrc0VudHJ5IHsNCiAgaWQgICAgICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQNCiAgZXhhbUNvZGUgICAgZXhhbUNvZGUNCiAgZXhhbVR5cGUgICAgZXhhbVR5cGUNCiAgY291cnNlSWQgICAgICBTdHJpbmcgIEBkYi5VdWlkDQogIHN0dWRlbnRJZCAgICAgU3RyaW5nICBAZGIuVXVpZA0KICBtYXJrc09idGFpbmVkIEZsb2F0DQogIHJlbWFya3MgICAgICAgU3RyaW5nPw0KICBAQHVuaXF1ZShbZXhhbUNvZGUsZXhhbVR5cGUsY291cnNlSWQsc3R1ZGVudElkXSkNCiAgY291cnNlICAgICAgICBDb3Vyc2UgIEByZWxhdGlvbihmaWVsZHM6IFtjb3Vyc2VJZF0sIHJlZmVyZW5jZXM6IFtpZF0sb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pDQogIHN0dWRlbnQgICAgICAgU3R1ZGVudCBAcmVsYXRpb24oZmllbGRzOiBbc3R1ZGVudElkXSwgcmVmZXJlbmNlczogW2lkXSxvbkRlbGV0ZTogTm9BY3Rpb24sIG9uVXBkYXRlOiBOb0FjdGlvbikNCn0NCg0KbW9kZWwgQXR0ZW5kYW5jZSB7DQogIGlkICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkDQogIGNvdXJzZUlkICBTdHJpbmcgICBAZGIuVXVpZA0KICBzdHVkZW50SWQgU3RyaW5nICAgQGRiLlV1aWQNCiAgZGF0ZSAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICBpc1ByZXNlbnQgQm9vbGVhbg0KICBAQHVuaXF1ZShbY291cnNlSWQsc3R1ZGVudElkLGRhdGVdKQ0KICBjbGFzc1R5cGUgY2xhc3NUeXBlICAgQGRlZmF1bHQoUkVHVUxBUikNCiAgYXR0ZW5kYW5jZVR5cGUgYXR0ZW5hbmNlVHlwZSAgQGRlZmF1bHQoVEhFT1JZKQ0KICBzdHVkZW50ICAgU3R1ZGVudCAgQHJlbGF0aW9uKGZpZWxkczogW3N0dWRlbnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sb25EZWxldGU6IE5vQWN0aW9uLCBvblVwZGF0ZTogTm9BY3Rpb24pDQogIGNvdXJzZSAgICBDb3Vyc2UgICBAcmVsYXRpb24oZmllbGRzOiBbY291cnNlSWRdLCByZWZlcmVuY2VzOiBbaWRdLG9uRGVsZXRlOiBOb0FjdGlvbiwgb25VcGRhdGU6IE5vQWN0aW9uKQ0KfQ0KDQplbnVtIHVzZXJUeXBlIHsNCiAgU1RVREVOVA0KICBGQUNVTFRZDQogIEFETUlODQp9DQoNCmVudW0gZGVwYXJ0bWVudFR5cGUgew0KICBFTEVDVFJPTklDUw0KICBDT01QVVRJTkcNCn0NCg0KDQplbnVtIGV4YW1Db2RlIHsNCiAgQ1QxDQogIENUMg0KICBFTkRTRU0NCn0NCg0KZW51bSBleGFtVHlwZXsNCiBMQUIgDQogVEhFT1JZDQp9DQoNCmVudW0gY291cnNlVHlwZXsNCiAgR0lSIA0KICBQQw0KICBQRSANCiAgU0UNCn0NCg0KZW51bSBjbGFzc1R5cGV7DQogIEVYVFJBDQogIFJFR1VMQVINCn0NCg0KZW51bSBhdHRlbmFuY2VUeXBlew0KICBUSEVPUlkNCiAgTEFCDQp9DQoNCm1vZGVsIEJhdGNoew0KICBpZCBTdHJpbmcgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkDQogIGNvZGUgIFN0cmluZyAgQHVuaXF1ZQ0KICBuYW1lIFN0cmluZw0KICBjb3Vyc2UgQ291cnNlW10NCn0NCg0KbW9kZWwgU3RlYW1FbGVjdGl2ZXsNCiAgaWQgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZA0KICBjb2RlICBTdHJpbmcgIEB1bmlxdWUNCiAgbmFtZSBTdHJpbmcNCn0NCg0KbW9kZWwgUHJvZ3JhbUVsZWN0aXZlew0KICBpZCBTdHJpbmcgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkDQogIGNvZGUgIFN0cmluZyAgQHVuaXF1ZQ0KICBuYW1lIFN0cmluZw0KfQ==",
  "inlineSchemaHash": "4c2d4b4fa5c39d2b3f8fc78294edab8582ef156c2a7593308a514bdce86c1e51",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"userType\",\"default\":\"STUDENT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"StudentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Faculty\",\"relationName\":\"FacultyToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Student\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rollNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Semester\",\"relationName\":\"SemesterToStudent\",\"relationFromFields\":[\"semesterId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branchId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branch\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Branch\",\"relationName\":\"BranchToStudent\",\"relationFromFields\":[\"branchId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobileNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"StudentToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseRegistered\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CourseRegistration\",\"relationName\":\"CourseRegistrationToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attendances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Attendance\",\"relationName\":\"AttendanceToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"examEntries\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MarksEntry\",\"relationName\":\"MarksEntryToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Faculty\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"department\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"departmentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FacultyToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseAssigned\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FacultyCourseAssignment\",\"relationName\":\"FacultyToFacultyCourseAssignment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Admin\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AdminToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Semester\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"CourseToSemester\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"SemesterToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Branch\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"BranchToCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"BranchToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Course\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"courseType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"electiveCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"credit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"labIncluded\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"batchId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"batch\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Batch\",\"relationName\":\"BatchToCourse\",\"relationFromFields\":[\"batchId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branch\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Branch\",\"relationName\":\"BranchToCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semester\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Semester\",\"relationName\":\"CourseToSemester\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentRegistered\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CourseRegistration\",\"relationName\":\"CourseToCourseRegistration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facultyAssigned\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FacultyCourseAssignment\",\"relationName\":\"CourseToFacultyCourseAssignment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attendances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Attendance\",\"relationName\":\"AttendanceToCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"examEntries\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MarksEntry\",\"relationName\":\"CourseToMarksEntry\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CourseRegistration\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"CourseToCourseRegistration\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"CourseRegistrationToStudent\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FacultyCourseAssignment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facultyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Faculty\",\"relationName\":\"FacultyToFacultyCourseAssignment\",\"relationFromFields\":[\"facultyId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"CourseToFacultyCourseAssignment\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"facultyId\",\"courseId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"facultyId\",\"courseId\"]}],\"isGenerated\":false},\"MarksEntry\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"examCode\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"examCode\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"examType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"examType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marksObtained\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remarks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"CourseToMarksEntry\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"MarksEntryToStudent\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"examCode\",\"examType\",\"courseId\",\"studentId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"examCode\",\"examType\",\"courseId\",\"studentId\"]}],\"isGenerated\":false},\"Attendance\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPresent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"classType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"classType\",\"default\":\"REGULAR\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attendanceType\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"attenanceType\",\"default\":\"THEORY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"AttendanceToStudent\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"AttendanceToCourse\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"courseId\",\"studentId\",\"date\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"courseId\",\"studentId\",\"date\"]}],\"isGenerated\":false},\"Batch\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"BatchToCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SteamElective\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ProgramElective\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"userType\":{\"values\":[{\"name\":\"STUDENT\",\"dbName\":null},{\"name\":\"FACULTY\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null},\"departmentType\":{\"values\":[{\"name\":\"ELECTRONICS\",\"dbName\":null},{\"name\":\"COMPUTING\",\"dbName\":null}],\"dbName\":null},\"examCode\":{\"values\":[{\"name\":\"CT1\",\"dbName\":null},{\"name\":\"CT2\",\"dbName\":null},{\"name\":\"ENDSEM\",\"dbName\":null}],\"dbName\":null},\"examType\":{\"values\":[{\"name\":\"LAB\",\"dbName\":null},{\"name\":\"THEORY\",\"dbName\":null}],\"dbName\":null},\"courseType\":{\"values\":[{\"name\":\"GIR\",\"dbName\":null},{\"name\":\"PC\",\"dbName\":null},{\"name\":\"PE\",\"dbName\":null},{\"name\":\"SE\",\"dbName\":null}],\"dbName\":null},\"classType\":{\"values\":[{\"name\":\"EXTRA\",\"dbName\":null},{\"name\":\"REGULAR\",\"dbName\":null}],\"dbName\":null},\"attenanceType\":{\"values\":[{\"name\":\"THEORY\",\"dbName\":null},{\"name\":\"LAB\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

