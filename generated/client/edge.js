
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
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
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
  sem: 'sem'
};

exports.Prisma.BranchScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  name: 'name',
  semesterId: 'semesterId',
  branchId: 'branchId'
};

exports.Prisma.StudentCourseRegistrationScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  studentId: 'studentId'
};

exports.Prisma.FacultyCourseAssignmentScalarFieldEnum = {
  id: 'id',
  facultyId: 'facultyId',
  courseId: 'courseId'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  studentId: 'studentId',
  date: 'date',
  isPresent: 'isPresent'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
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

exports.Prisma.ModelName = {
  User: 'User',
  Student: 'Student',
  Faculty: 'Faculty',
  Admin: 'Admin',
  Semester: 'Semester',
  Branch: 'Branch',
  Course: 'Course',
  StudentCourseRegistration: 'StudentCourseRegistration',
  FacultyCourseAssignment: 'FacultyCourseAssignment',
  Attendance: 'Attendance'
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
      "value": "C:\\Users\\ramra\\Desktop\\AIMS_PRISMA\\generated\\client",
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
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIG91dHB1dCAgID0gIi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KfQ0KDQptb2RlbCBVc2VyIHsNCiAgaWQgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZA0KICB1c2VybmFtZSBTdHJpbmcgICBAdW5pcXVlDQogIHBhc3N3b3JkIFN0cmluZw0KICBlbWFpbCAgICBTdHJpbmcgICBAdW5pcXVlDQogIHJvbGUgICAgIHVzZXJUeXBlIEBkZWZhdWx0KFNUVURFTlQpDQogIHN0dWRlbnQgIFN0dWRlbnQ/DQogIGZhY3VsdHkgIEZhY3VsdHk/DQogIGFkbWluICAgIEFkbWluPw0KfQ0KDQptb2RlbCBTdHVkZW50IHsNCiAgaWQgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZA0KICByb2xsTm8gICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgICBAdW5pcXVlDQogIGZ1bGxOYW1lICAgICAgICAgU3RyaW5nDQogIHNlbWVzdGVySWQgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkDQogIHNlbWVzdGVyICAgICAgICAgU2VtZXN0ZXIgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzZW1lc3RlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgYnJhbmNoSWQgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQNCiAgYnJhbmNoICAgICAgICAgICBCcmFuY2ggICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2JyYW5jaElkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgbW9iaWxlTm8gICAgICAgICBTdHJpbmcNCiAgZW1haWwgICAgICAgICAgICBTdHJpbmcNCiAgdXNlciAgICAgICAgICAgICBVc2VyICAgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHVzZXJJZCAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgIEB1bmlxdWUgQGRiLlV1aWQNCiAgY291cnNlUmVnaXN0ZXJlZCBTdHVkZW50Q291cnNlUmVnaXN0cmF0aW9uW10NCiAgYXR0ZW5kYW5jZXMgICAgICBBdHRlbmRhbmNlW10NCn0NCg0KbW9kZWwgRmFjdWx0eSB7DQogIGlkICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZA0KICBmdWxsTmFtZSAgICAgICBTdHJpbmcNCiAgZGVwYXJ0bWVudCAgICAgZGVwYXJ0bWVudFR5cGUNCiAgZW1haWwgICAgICAgICAgU3RyaW5nDQogIHVzZXIgICAgICAgICAgIFVzZXIgICAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHVzZXJJZCAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICAgICAgQHVuaXF1ZSBAZGIuVXVpZA0KICBjb3Vyc2VBc3NpZ25lZCBGYWN1bHR5Q291cnNlQXNzaWdubWVudFtdDQp9DQoNCm1vZGVsIEFkbWluIHsNCiAgaWQgICAgICAgU3RyaW5nIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQNCiAgZnVsbE5hbWUgU3RyaW5nDQogIGVtYWlsICAgIFN0cmluZw0KICB1c2VyICAgICBVc2VyICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHVzZXJJZCAgIFN0cmluZyBAdW5pcXVlIEBkYi5VdWlkDQp9DQoNCm1vZGVsIFNlbWVzdGVyIHsNCiAgaWQgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQNCiAgc2VtICAgIEludCAgICAgIEB1bmlxdWUNCiAgY291cnNlIENvdXJzZVtdDQogIHN0dWRlbnQgU3R1ZGVudFtdDQp9DQoNCm1vZGVsIEJyYW5jaCB7DQogIGlkICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkDQogIG5hbWUgICBTdHJpbmcgICBAdW5pcXVlDQogIGNvdXJzZSBDb3Vyc2VbXQ0KICBzdHVkZW50IFN0dWRlbnRbXQ0KfQ0KDQptb2RlbCBDb3Vyc2Ugew0KICBpZCAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZA0KICBjb3Vyc2VJZCAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQHVuaXF1ZQ0KICBuYW1lICAgICAgICAgICAgICBTdHJpbmcNCiAgc2VtZXN0ZXIgICAgICAgICAgU2VtZXN0ZXIgICAgICAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtzZW1lc3RlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgc2VtZXN0ZXJJZCAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgICAgICAgIEBkYi5VdWlkDQogIGJyYW5jaCAgICAgICAgICAgIEJyYW5jaCAgICAgICAgICAgICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYnJhbmNoSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBicmFuY2hJZCAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgICAgQGRiLlV1aWQNCiAgc3R1ZGVudFJlZ2lzdGVyZWQgU3R1ZGVudENvdXJzZVJlZ2lzdHJhdGlvbltdDQogIGZhY3VsdHlBc3NpZ25lZCAgIEZhY3VsdHlDb3Vyc2VBc3NpZ25tZW50W10NCiAgYXR0ZW5kYW5jZXMgICAgICAgQXR0ZW5kYW5jZVtdDQp9DQoNCm1vZGVsIFN0dWRlbnRDb3Vyc2VSZWdpc3RyYXRpb24gew0KICBpZCAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoZGJnZW5lcmF0ZWQoImdlbl9yYW5kb21fdXVpZCgpIikpIEBkYi5VdWlkDQogIGNvdXJzZUlkICBTdHJpbmcgIEBkYi5VdWlkDQogIHN0dWRlbnRJZCBTdHJpbmcgIEBkYi5VdWlkDQogIGNvdXJzZSAgICBDb3Vyc2UgIEByZWxhdGlvbihmaWVsZHM6IFtjb3Vyc2VJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHN0dWRlbnQgICBTdHVkZW50IEByZWxhdGlvbihmaWVsZHM6IFtzdHVkZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KfQ0KDQptb2RlbCBGYWN1bHR5Q291cnNlQXNzaWdubWVudCB7DQogIGlkICAgICAgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChkYmdlbmVyYXRlZCgiZ2VuX3JhbmRvbV91dWlkKCkiKSkgQGRiLlV1aWQNCiAgZmFjdWx0eUlkIFN0cmluZyAgQGRiLlV1aWQNCiAgY291cnNlSWQgIFN0cmluZyAgQGRiLlV1aWQNCiAgZmFjdWx0eSAgIEZhY3VsdHkgQHJlbGF0aW9uKGZpZWxkczogW2ZhY3VsdHlJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGNvdXJzZSAgICBDb3Vyc2UgIEByZWxhdGlvbihmaWVsZHM6IFtjb3Vyc2VJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQp9DQoNCm1vZGVsIEF0dGVuZGFuY2Ugew0KICBpZCAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KGRiZ2VuZXJhdGVkKCJnZW5fcmFuZG9tX3V1aWQoKSIpKSBAZGIuVXVpZA0KICBjb3Vyc2VJZCAgU3RyaW5nICAgQGRiLlV1aWQNCiAgc3R1ZGVudElkIFN0cmluZyAgIEBkYi5VdWlkDQogIGRhdGUgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgaXNQcmVzZW50IEJvb2xlYW4NCiAgc3R1ZGVudCAgIFN0dWRlbnQgIEByZWxhdGlvbihmaWVsZHM6IFtzdHVkZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBjb3Vyc2UgICAgQ291cnNlICAgQHJlbGF0aW9uKGZpZWxkczogW2NvdXJzZUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCn0NCg0KZW51bSB1c2VyVHlwZSB7DQogIFNUVURFTlQNCiAgRkFDVUxUWQ0KICBBRE1JTg0KfQ0KDQplbnVtIGRlcGFydG1lbnRUeXBlIHsNCiAgRUxFQ1RST05JQ1MNCiAgQ09NUFVUSU5HDQp9DQo=",
  "inlineSchemaHash": "1970870557913062bb819ae860e96039d04f103423732259837b0c9efa0cbf6e",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"userType\",\"default\":\"STUDENT\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"StudentToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Faculty\",\"relationName\":\"FacultyToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Admin\",\"relationName\":\"AdminToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Student\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rollNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Semester\",\"relationName\":\"SemesterToStudent\",\"relationFromFields\":[\"semesterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branchId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branch\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Branch\",\"relationName\":\"BranchToStudent\",\"relationFromFields\":[\"branchId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mobileNo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"StudentToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseRegistered\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentCourseRegistration\",\"relationName\":\"StudentToStudentCourseRegistration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attendances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Attendance\",\"relationName\":\"AttendanceToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Faculty\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"department\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"departmentType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"FacultyToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseAssigned\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FacultyCourseAssignment\",\"relationName\":\"FacultyToFacultyCourseAssignment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Admin\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AdminToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Semester\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"CourseToSemester\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"SemesterToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Branch\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"BranchToCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"BranchToStudent\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Course\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semester\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Semester\",\"relationName\":\"CourseToSemester\",\"relationFromFields\":[\"semesterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semesterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branch\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Branch\",\"relationName\":\"BranchToCourse\",\"relationFromFields\":[\"branchId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"branchId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentRegistered\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentCourseRegistration\",\"relationName\":\"CourseToStudentCourseRegistration\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facultyAssigned\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FacultyCourseAssignment\",\"relationName\":\"CourseToFacultyCourseAssignment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"attendances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Attendance\",\"relationName\":\"AttendanceToCourse\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StudentCourseRegistration\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"CourseToStudentCourseRegistration\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"StudentToStudentCourseRegistration\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FacultyCourseAssignment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"facultyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faculty\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Faculty\",\"relationName\":\"FacultyToFacultyCourseAssignment\",\"relationFromFields\":[\"facultyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"CourseToFacultyCourseAssignment\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Attendance\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"courseId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isPresent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"AttendanceToStudent\",\"relationFromFields\":[\"studentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"course\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Course\",\"relationName\":\"AttendanceToCourse\",\"relationFromFields\":[\"courseId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"userType\":{\"values\":[{\"name\":\"STUDENT\",\"dbName\":null},{\"name\":\"FACULTY\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null},\"departmentType\":{\"values\":[{\"name\":\"ELECTRONICS\",\"dbName\":null},{\"name\":\"COMPUTING\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


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

