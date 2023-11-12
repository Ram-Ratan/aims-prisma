
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Faculty
 * 
 */
export type Faculty = $Result.DefaultSelection<Prisma.$FacultyPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Semester
 * 
 */
export type Semester = $Result.DefaultSelection<Prisma.$SemesterPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model StudentCourseRegistration
 * 
 */
export type StudentCourseRegistration = $Result.DefaultSelection<Prisma.$StudentCourseRegistrationPayload>
/**
 * Model FacultyCourseAssignment
 * 
 */
export type FacultyCourseAssignment = $Result.DefaultSelection<Prisma.$FacultyCourseAssignmentPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model ExamMarksEntry
 * 
 */
export type ExamMarksEntry = $Result.DefaultSelection<Prisma.$ExamMarksEntryPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const userType: {
  STUDENT: 'STUDENT',
  FACULTY: 'FACULTY',
  ADMIN: 'ADMIN'
};

export type userType = (typeof userType)[keyof typeof userType]


export const departmentType: {
  ELECTRONICS: 'ELECTRONICS',
  COMPUTING: 'COMPUTING'
};

export type departmentType = (typeof departmentType)[keyof typeof departmentType]


export const examType: {
  CT1: 'CT1',
  CT2: 'CT2',
  ENDSEM: 'ENDSEM'
};

export type examType = (typeof examType)[keyof typeof examType]

}

export type userType = $Enums.userType

export const userType: typeof $Enums.userType

export type departmentType = $Enums.departmentType

export const departmentType: typeof $Enums.departmentType

export type examType = $Enums.examType

export const examType: typeof $Enums.examType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.faculty`: Exposes CRUD operations for the **Faculty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faculties
    * const faculties = await prisma.faculty.findMany()
    * ```
    */
  get faculty(): Prisma.FacultyDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.semester`: Exposes CRUD operations for the **Semester** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Semesters
    * const semesters = await prisma.semester.findMany()
    * ```
    */
  get semester(): Prisma.SemesterDelegate<ExtArgs>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs>;

  /**
   * `prisma.studentCourseRegistration`: Exposes CRUD operations for the **StudentCourseRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentCourseRegistrations
    * const studentCourseRegistrations = await prisma.studentCourseRegistration.findMany()
    * ```
    */
  get studentCourseRegistration(): Prisma.StudentCourseRegistrationDelegate<ExtArgs>;

  /**
   * `prisma.facultyCourseAssignment`: Exposes CRUD operations for the **FacultyCourseAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultyCourseAssignments
    * const facultyCourseAssignments = await prisma.facultyCourseAssignment.findMany()
    * ```
    */
  get facultyCourseAssignment(): Prisma.FacultyCourseAssignmentDelegate<ExtArgs>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs>;

  /**
   * `prisma.examMarksEntry`: Exposes CRUD operations for the **ExamMarksEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamMarksEntries
    * const examMarksEntries = await prisma.examMarksEntry.findMany()
    * ```
    */
  get examMarksEntry(): Prisma.ExamMarksEntryDelegate<ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Student: 'Student',
    Faculty: 'Faculty',
    Admin: 'Admin',
    Semester: 'Semester',
    Branch: 'Branch',
    Course: 'Course',
    StudentCourseRegistration: 'StudentCourseRegistration',
    FacultyCourseAssignment: 'FacultyCourseAssignment',
    Exam: 'Exam',
    ExamMarksEntry: 'ExamMarksEntry',
    Attendance: 'Attendance'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'student' | 'faculty' | 'admin' | 'semester' | 'branch' | 'course' | 'studentCourseRegistration' | 'facultyCourseAssignment' | 'exam' | 'examMarksEntry' | 'attendance'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Faculty: {
        payload: Prisma.$FacultyPayload<ExtArgs>
        fields: Prisma.FacultyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          findFirst: {
            args: Prisma.FacultyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          findMany: {
            args: Prisma.FacultyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>[]
          }
          create: {
            args: Prisma.FacultyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          createMany: {
            args: Prisma.FacultyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FacultyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          update: {
            args: Prisma.FacultyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          deleteMany: {
            args: Prisma.FacultyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FacultyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          aggregate: {
            args: Prisma.FacultyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFaculty>
          }
          groupBy: {
            args: Prisma.FacultyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FacultyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyCountArgs<ExtArgs>,
            result: $Utils.Optional<FacultyCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Semester: {
        payload: Prisma.$SemesterPayload<ExtArgs>
        fields: Prisma.SemesterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SemesterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SemesterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          findFirst: {
            args: Prisma.SemesterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SemesterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          findMany: {
            args: Prisma.SemesterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>[]
          }
          create: {
            args: Prisma.SemesterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          createMany: {
            args: Prisma.SemesterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SemesterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          update: {
            args: Prisma.SemesterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          deleteMany: {
            args: Prisma.SemesterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SemesterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SemesterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SemesterPayload>
          }
          aggregate: {
            args: Prisma.SemesterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSemester>
          }
          groupBy: {
            args: Prisma.SemesterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SemesterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SemesterCountArgs<ExtArgs>,
            result: $Utils.Optional<SemesterCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>,
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      StudentCourseRegistration: {
        payload: Prisma.$StudentCourseRegistrationPayload<ExtArgs>
        fields: Prisma.StudentCourseRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentCourseRegistrationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentCourseRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentCourseRegistrationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentCourseRegistrationPayload>
          }
          findFirst: {
            args: Prisma.StudentCourseRegistrationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentCourseRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentCourseRegistrationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentCourseRegistrationPayload>
          }
          findMany: {
            args: Prisma.StudentCourseRegistrationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentCourseRegistrationPayload>[]
          }
          create: {
            args: Prisma.StudentCourseRegistrationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentCourseRegistrationPayload>
          }
          createMany: {
            args: Prisma.StudentCourseRegistrationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StudentCourseRegistrationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentCourseRegistrationPayload>
          }
          update: {
            args: Prisma.StudentCourseRegistrationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentCourseRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.StudentCourseRegistrationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StudentCourseRegistrationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StudentCourseRegistrationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentCourseRegistrationPayload>
          }
          aggregate: {
            args: Prisma.StudentCourseRegistrationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudentCourseRegistration>
          }
          groupBy: {
            args: Prisma.StudentCourseRegistrationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentCourseRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCourseRegistrationCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentCourseRegistrationCountAggregateOutputType> | number
          }
        }
      }
      FacultyCourseAssignment: {
        payload: Prisma.$FacultyCourseAssignmentPayload<ExtArgs>
        fields: Prisma.FacultyCourseAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyCourseAssignmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyCourseAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyCourseAssignmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyCourseAssignmentPayload>
          }
          findFirst: {
            args: Prisma.FacultyCourseAssignmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyCourseAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyCourseAssignmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyCourseAssignmentPayload>
          }
          findMany: {
            args: Prisma.FacultyCourseAssignmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyCourseAssignmentPayload>[]
          }
          create: {
            args: Prisma.FacultyCourseAssignmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyCourseAssignmentPayload>
          }
          createMany: {
            args: Prisma.FacultyCourseAssignmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FacultyCourseAssignmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyCourseAssignmentPayload>
          }
          update: {
            args: Prisma.FacultyCourseAssignmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyCourseAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.FacultyCourseAssignmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyCourseAssignmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FacultyCourseAssignmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FacultyCourseAssignmentPayload>
          }
          aggregate: {
            args: Prisma.FacultyCourseAssignmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFacultyCourseAssignment>
          }
          groupBy: {
            args: Prisma.FacultyCourseAssignmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FacultyCourseAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyCourseAssignmentCountArgs<ExtArgs>,
            result: $Utils.Optional<FacultyCourseAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>,
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      ExamMarksEntry: {
        payload: Prisma.$ExamMarksEntryPayload<ExtArgs>
        fields: Prisma.ExamMarksEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamMarksEntryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamMarksEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamMarksEntryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamMarksEntryPayload>
          }
          findFirst: {
            args: Prisma.ExamMarksEntryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamMarksEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamMarksEntryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamMarksEntryPayload>
          }
          findMany: {
            args: Prisma.ExamMarksEntryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamMarksEntryPayload>[]
          }
          create: {
            args: Prisma.ExamMarksEntryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamMarksEntryPayload>
          }
          createMany: {
            args: Prisma.ExamMarksEntryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExamMarksEntryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamMarksEntryPayload>
          }
          update: {
            args: Prisma.ExamMarksEntryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamMarksEntryPayload>
          }
          deleteMany: {
            args: Prisma.ExamMarksEntryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExamMarksEntryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExamMarksEntryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExamMarksEntryPayload>
          }
          aggregate: {
            args: Prisma.ExamMarksEntryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExamMarksEntry>
          }
          groupBy: {
            args: Prisma.ExamMarksEntryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExamMarksEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamMarksEntryCountArgs<ExtArgs>,
            result: $Utils.Optional<ExamMarksEntryCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>,
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    courseRegistered: number
    attendances: number
    examEntries: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseRegistered?: boolean | StudentCountOutputTypeCountCourseRegisteredArgs
    attendances?: boolean | StudentCountOutputTypeCountAttendancesArgs
    examEntries?: boolean | StudentCountOutputTypeCountExamEntriesArgs
  }

  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCourseRegisteredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentCourseRegistrationWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountExamEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamMarksEntryWhereInput
  }



  /**
   * Count Type FacultyCountOutputType
   */

  export type FacultyCountOutputType = {
    courseAssigned: number
  }

  export type FacultyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseAssigned?: boolean | FacultyCountOutputTypeCountCourseAssignedArgs
  }

  // Custom InputTypes

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCountOutputType
     */
    select?: FacultyCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountCourseAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyCourseAssignmentWhereInput
  }



  /**
   * Count Type SemesterCountOutputType
   */

  export type SemesterCountOutputType = {
    course: number
    student: number
  }

  export type SemesterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | SemesterCountOutputTypeCountCourseArgs
    student?: boolean | SemesterCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes

  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemesterCountOutputType
     */
    select?: SemesterCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }



  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    course: number
    student: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | BranchCountOutputTypeCountCourseArgs
    student?: boolean | BranchCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }



  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    studentRegistered: number
    facultyAssigned: number
    attendances: number
    examEntries: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentRegistered?: boolean | CourseCountOutputTypeCountStudentRegisteredArgs
    facultyAssigned?: boolean | CourseCountOutputTypeCountFacultyAssignedArgs
    attendances?: boolean | CourseCountOutputTypeCountAttendancesArgs
    examEntries?: boolean | CourseCountOutputTypeCountExamEntriesArgs
  }

  // Custom InputTypes

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountStudentRegisteredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentCourseRegistrationWhereInput
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountFacultyAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyCourseAssignmentWhereInput
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountExamEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamMarksEntryWhereInput
  }



  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    marksEntries: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marksEntries?: boolean | ExamCountOutputTypeCountMarksEntriesArgs
  }

  // Custom InputTypes

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountMarksEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamMarksEntryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.userType | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    role: $Enums.userType | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    email: string
    role: $Enums.userType
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    student?: boolean | User$studentArgs<ExtArgs>
    faculty?: boolean | User$facultyArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | User$studentArgs<ExtArgs>
    faculty?: boolean | User$facultyArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      faculty: Prisma.$FacultyPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      email: string
      role: $Enums.userType
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    faculty<T extends User$facultyArgs<ExtArgs> = {}>(args?: Subset<T, User$facultyArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'userType'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }


  /**
   * User.faculty
   */
  export type User$facultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyInclude<ExtArgs> | null
    where?: FacultyWhereInput
  }


  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    rollNo: string | null
    fullName: string | null
    semesterId: string | null
    branchId: string | null
    mobileNo: string | null
    email: string | null
    userId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    rollNo: string | null
    fullName: string | null
    semesterId: string | null
    branchId: string | null
    mobileNo: string | null
    email: string | null
    userId: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    rollNo: number
    fullName: number
    semesterId: number
    branchId: number
    mobileNo: number
    email: number
    userId: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    rollNo?: true
    fullName?: true
    semesterId?: true
    branchId?: true
    mobileNo?: true
    email?: true
    userId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    rollNo?: true
    fullName?: true
    semesterId?: true
    branchId?: true
    mobileNo?: true
    email?: true
    userId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    rollNo?: true
    fullName?: true
    semesterId?: true
    branchId?: true
    mobileNo?: true
    email?: true
    userId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    rollNo: string
    fullName: string
    semesterId: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rollNo?: boolean
    fullName?: boolean
    semesterId?: boolean
    branchId?: boolean
    mobileNo?: boolean
    email?: boolean
    userId?: boolean
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseRegistered?: boolean | Student$courseRegisteredArgs<ExtArgs>
    attendances?: boolean | Student$attendancesArgs<ExtArgs>
    examEntries?: boolean | Student$examEntriesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    rollNo?: boolean
    fullName?: boolean
    semesterId?: boolean
    branchId?: boolean
    mobileNo?: boolean
    email?: boolean
    userId?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseRegistered?: boolean | Student$courseRegisteredArgs<ExtArgs>
    attendances?: boolean | Student$attendancesArgs<ExtArgs>
    examEntries?: boolean | Student$examEntriesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      semester: Prisma.$SemesterPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      courseRegistered: Prisma.$StudentCourseRegistrationPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      examEntries: Prisma.$ExamMarksEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rollNo: string
      fullName: string
      semesterId: string
      branchId: string
      mobileNo: string
      email: string
      userId: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }


  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCreateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    semester<T extends SemesterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SemesterDefaultArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    courseRegistered<T extends Student$courseRegisteredArgs<ExtArgs> = {}>(args?: Subset<T, Student$courseRegisteredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentCourseRegistrationPayload<ExtArgs>, T, 'findMany'> | Null>;

    attendances<T extends Student$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Student$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findMany'> | Null>;

    examEntries<T extends Student$examEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Student$examEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly rollNo: FieldRef<"Student", 'String'>
    readonly fullName: FieldRef<"Student", 'String'>
    readonly semesterId: FieldRef<"Student", 'String'>
    readonly branchId: FieldRef<"Student", 'String'>
    readonly mobileNo: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }


  /**
   * Student.courseRegistered
   */
  export type Student$courseRegisteredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
    where?: StudentCourseRegistrationWhereInput
    orderBy?: StudentCourseRegistrationOrderByWithRelationInput | StudentCourseRegistrationOrderByWithRelationInput[]
    cursor?: StudentCourseRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentCourseRegistrationScalarFieldEnum | StudentCourseRegistrationScalarFieldEnum[]
  }


  /**
   * Student.attendances
   */
  export type Student$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }


  /**
   * Student.examEntries
   */
  export type Student$examEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    where?: ExamMarksEntryWhereInput
    orderBy?: ExamMarksEntryOrderByWithRelationInput | ExamMarksEntryOrderByWithRelationInput[]
    cursor?: ExamMarksEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamMarksEntryScalarFieldEnum | ExamMarksEntryScalarFieldEnum[]
  }


  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
  }



  /**
   * Model Faculty
   */

  export type AggregateFaculty = {
    _count: FacultyCountAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  export type FacultyMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    department: $Enums.departmentType | null
    email: string | null
    userId: string | null
  }

  export type FacultyMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    department: $Enums.departmentType | null
    email: string | null
    userId: string | null
  }

  export type FacultyCountAggregateOutputType = {
    id: number
    fullName: number
    department: number
    email: number
    userId: number
    _all: number
  }


  export type FacultyMinAggregateInputType = {
    id?: true
    fullName?: true
    department?: true
    email?: true
    userId?: true
  }

  export type FacultyMaxAggregateInputType = {
    id?: true
    fullName?: true
    department?: true
    email?: true
    userId?: true
  }

  export type FacultyCountAggregateInputType = {
    id?: true
    fullName?: true
    department?: true
    email?: true
    userId?: true
    _all?: true
  }

  export type FacultyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculty to aggregate.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faculties
    **/
    _count?: true | FacultyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyMaxAggregateInputType
  }

  export type GetFacultyAggregateType<T extends FacultyAggregateArgs> = {
        [P in keyof T & keyof AggregateFaculty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaculty[P]>
      : GetScalarType<T[P], AggregateFaculty[P]>
  }




  export type FacultyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyWhereInput
    orderBy?: FacultyOrderByWithAggregationInput | FacultyOrderByWithAggregationInput[]
    by: FacultyScalarFieldEnum[] | FacultyScalarFieldEnum
    having?: FacultyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyCountAggregateInputType | true
    _min?: FacultyMinAggregateInputType
    _max?: FacultyMaxAggregateInputType
  }

  export type FacultyGroupByOutputType = {
    id: string
    fullName: string
    department: $Enums.departmentType
    email: string
    userId: string
    _count: FacultyCountAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  type GetFacultyGroupByPayload<T extends FacultyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyGroupByOutputType[P]>
        }
      >
    >


  export type FacultySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    department?: boolean
    email?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseAssigned?: boolean | Faculty$courseAssignedArgs<ExtArgs>
    _count?: boolean | FacultyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faculty"]>

  export type FacultySelectScalar = {
    id?: boolean
    fullName?: boolean
    department?: boolean
    email?: boolean
    userId?: boolean
  }

  export type FacultyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    courseAssigned?: boolean | Faculty$courseAssignedArgs<ExtArgs>
    _count?: boolean | FacultyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FacultyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faculty"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      courseAssigned: Prisma.$FacultyCourseAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      department: $Enums.departmentType
      email: string
      userId: string
    }, ExtArgs["result"]["faculty"]>
    composites: {}
  }


  type FacultyGetPayload<S extends boolean | null | undefined | FacultyDefaultArgs> = $Result.GetResult<Prisma.$FacultyPayload, S>

  type FacultyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FacultyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FacultyCountAggregateInputType | true
    }

  export interface FacultyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faculty'], meta: { name: 'Faculty' } }
    /**
     * Find zero or one Faculty that matches the filter.
     * @param {FacultyFindUniqueArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FacultyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyFindUniqueArgs<ExtArgs>>
    ): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Faculty that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FacultyFindUniqueOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FacultyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Faculty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindFirstArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FacultyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyFindFirstArgs<ExtArgs>>
    ): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Faculty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindFirstOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FacultyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Faculties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faculties
     * const faculties = await prisma.faculty.findMany()
     * 
     * // Get first 10 Faculties
     * const faculties = await prisma.faculty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultyWithIdOnly = await prisma.faculty.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FacultyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Faculty.
     * @param {FacultyCreateArgs} args - Arguments to create a Faculty.
     * @example
     * // Create one Faculty
     * const Faculty = await prisma.faculty.create({
     *   data: {
     *     // ... data to create a Faculty
     *   }
     * })
     * 
    **/
    create<T extends FacultyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyCreateArgs<ExtArgs>>
    ): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Faculties.
     *     @param {FacultyCreateManyArgs} args - Arguments to create many Faculties.
     *     @example
     *     // Create many Faculties
     *     const faculty = await prisma.faculty.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FacultyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Faculty.
     * @param {FacultyDeleteArgs} args - Arguments to delete one Faculty.
     * @example
     * // Delete one Faculty
     * const Faculty = await prisma.faculty.delete({
     *   where: {
     *     // ... filter to delete one Faculty
     *   }
     * })
     * 
    **/
    delete<T extends FacultyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyDeleteArgs<ExtArgs>>
    ): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Faculty.
     * @param {FacultyUpdateArgs} args - Arguments to update one Faculty.
     * @example
     * // Update one Faculty
     * const faculty = await prisma.faculty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FacultyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyUpdateArgs<ExtArgs>>
    ): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Faculties.
     * @param {FacultyDeleteManyArgs} args - Arguments to filter Faculties to delete.
     * @example
     * // Delete a few Faculties
     * const { count } = await prisma.faculty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FacultyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faculties
     * const faculty = await prisma.faculty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FacultyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Faculty.
     * @param {FacultyUpsertArgs} args - Arguments to update or create a Faculty.
     * @example
     * // Update or create a Faculty
     * const faculty = await prisma.faculty.upsert({
     *   create: {
     *     // ... data to create a Faculty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faculty we want to update
     *   }
     * })
    **/
    upsert<T extends FacultyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyUpsertArgs<ExtArgs>>
    ): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCountArgs} args - Arguments to filter Faculties to count.
     * @example
     * // Count the number of Faculties
     * const count = await prisma.faculty.count({
     *   where: {
     *     // ... the filter for the Faculties we want to count
     *   }
     * })
    **/
    count<T extends FacultyCountArgs>(
      args?: Subset<T, FacultyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacultyAggregateArgs>(args: Subset<T, FacultyAggregateArgs>): Prisma.PrismaPromise<GetFacultyAggregateType<T>>

    /**
     * Group by Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacultyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyGroupByArgs['orderBy'] }
        : { orderBy?: FacultyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faculty model
   */
  readonly fields: FacultyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faculty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    courseAssigned<T extends Faculty$courseAssignedArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$courseAssignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Faculty model
   */ 
  interface FacultyFieldRefs {
    readonly id: FieldRef<"Faculty", 'String'>
    readonly fullName: FieldRef<"Faculty", 'String'>
    readonly department: FieldRef<"Faculty", 'departmentType'>
    readonly email: FieldRef<"Faculty", 'String'>
    readonly userId: FieldRef<"Faculty", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Faculty findUnique
   */
  export type FacultyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where: FacultyWhereUniqueInput
  }


  /**
   * Faculty findUniqueOrThrow
   */
  export type FacultyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where: FacultyWhereUniqueInput
  }


  /**
   * Faculty findFirst
   */
  export type FacultyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculties.
     */
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }


  /**
   * Faculty findFirstOrThrow
   */
  export type FacultyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculties.
     */
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }


  /**
   * Faculty findMany
   */
  export type FacultyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculties to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }


  /**
   * Faculty create
   */
  export type FacultyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The data needed to create a Faculty.
     */
    data: XOR<FacultyCreateInput, FacultyUncheckedCreateInput>
  }


  /**
   * Faculty createMany
   */
  export type FacultyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faculties.
     */
    data: FacultyCreateManyInput | FacultyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Faculty update
   */
  export type FacultyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The data needed to update a Faculty.
     */
    data: XOR<FacultyUpdateInput, FacultyUncheckedUpdateInput>
    /**
     * Choose, which Faculty to update.
     */
    where: FacultyWhereUniqueInput
  }


  /**
   * Faculty updateMany
   */
  export type FacultyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faculties.
     */
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyInput>
    /**
     * Filter which Faculties to update
     */
    where?: FacultyWhereInput
  }


  /**
   * Faculty upsert
   */
  export type FacultyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The filter to search for the Faculty to update in case it exists.
     */
    where: FacultyWhereUniqueInput
    /**
     * In case the Faculty found by the `where` argument doesn't exist, create a new Faculty with this data.
     */
    create: XOR<FacultyCreateInput, FacultyUncheckedCreateInput>
    /**
     * In case the Faculty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyUpdateInput, FacultyUncheckedUpdateInput>
  }


  /**
   * Faculty delete
   */
  export type FacultyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter which Faculty to delete.
     */
    where: FacultyWhereUniqueInput
  }


  /**
   * Faculty deleteMany
   */
  export type FacultyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculties to delete
     */
    where?: FacultyWhereInput
  }


  /**
   * Faculty.courseAssigned
   */
  export type Faculty$courseAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
    where?: FacultyCourseAssignmentWhereInput
    orderBy?: FacultyCourseAssignmentOrderByWithRelationInput | FacultyCourseAssignmentOrderByWithRelationInput[]
    cursor?: FacultyCourseAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyCourseAssignmentScalarFieldEnum | FacultyCourseAssignmentScalarFieldEnum[]
  }


  /**
   * Faculty without action
   */
  export type FacultyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyInclude<ExtArgs> | null
  }



  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    userId: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    userId: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    userId: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    userId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    userId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    userId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    fullName: string
    email: string
    userId: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    userId?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      userId: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly fullName: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly userId: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdminInclude<ExtArgs> | null
  }



  /**
   * Model Semester
   */

  export type AggregateSemester = {
    _count: SemesterCountAggregateOutputType | null
    _avg: SemesterAvgAggregateOutputType | null
    _sum: SemesterSumAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  export type SemesterAvgAggregateOutputType = {
    sem: number | null
  }

  export type SemesterSumAggregateOutputType = {
    sem: number | null
  }

  export type SemesterMinAggregateOutputType = {
    id: string | null
    sem: number | null
  }

  export type SemesterMaxAggregateOutputType = {
    id: string | null
    sem: number | null
  }

  export type SemesterCountAggregateOutputType = {
    id: number
    sem: number
    _all: number
  }


  export type SemesterAvgAggregateInputType = {
    sem?: true
  }

  export type SemesterSumAggregateInputType = {
    sem?: true
  }

  export type SemesterMinAggregateInputType = {
    id?: true
    sem?: true
  }

  export type SemesterMaxAggregateInputType = {
    id?: true
    sem?: true
  }

  export type SemesterCountAggregateInputType = {
    id?: true
    sem?: true
    _all?: true
  }

  export type SemesterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Semester to aggregate.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Semesters
    **/
    _count?: true | SemesterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SemesterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SemesterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SemesterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SemesterMaxAggregateInputType
  }

  export type GetSemesterAggregateType<T extends SemesterAggregateArgs> = {
        [P in keyof T & keyof AggregateSemester]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSemester[P]>
      : GetScalarType<T[P], AggregateSemester[P]>
  }




  export type SemesterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByWithAggregationInput | SemesterOrderByWithAggregationInput[]
    by: SemesterScalarFieldEnum[] | SemesterScalarFieldEnum
    having?: SemesterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SemesterCountAggregateInputType | true
    _avg?: SemesterAvgAggregateInputType
    _sum?: SemesterSumAggregateInputType
    _min?: SemesterMinAggregateInputType
    _max?: SemesterMaxAggregateInputType
  }

  export type SemesterGroupByOutputType = {
    id: string
    sem: number
    _count: SemesterCountAggregateOutputType | null
    _avg: SemesterAvgAggregateOutputType | null
    _sum: SemesterSumAggregateOutputType | null
    _min: SemesterMinAggregateOutputType | null
    _max: SemesterMaxAggregateOutputType | null
  }

  type GetSemesterGroupByPayload<T extends SemesterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SemesterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SemesterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SemesterGroupByOutputType[P]>
            : GetScalarType<T[P], SemesterGroupByOutputType[P]>
        }
      >
    >


  export type SemesterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sem?: boolean
    course?: boolean | Semester$courseArgs<ExtArgs>
    student?: boolean | Semester$studentArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectScalar = {
    id?: boolean
    sem?: boolean
  }

  export type SemesterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Semester$courseArgs<ExtArgs>
    student?: boolean | Semester$studentArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SemesterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Semester"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>[]
      student: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sem: number
    }, ExtArgs["result"]["semester"]>
    composites: {}
  }


  type SemesterGetPayload<S extends boolean | null | undefined | SemesterDefaultArgs> = $Result.GetResult<Prisma.$SemesterPayload, S>

  type SemesterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SemesterFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SemesterCountAggregateInputType | true
    }

  export interface SemesterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Semester'], meta: { name: 'Semester' } }
    /**
     * Find zero or one Semester that matches the filter.
     * @param {SemesterFindUniqueArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SemesterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SemesterFindUniqueArgs<ExtArgs>>
    ): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Semester that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SemesterFindUniqueOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SemesterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SemesterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Semester that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindFirstArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SemesterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SemesterFindFirstArgs<ExtArgs>>
    ): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Semester that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindFirstOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SemesterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SemesterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Semesters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Semesters
     * const semesters = await prisma.semester.findMany()
     * 
     * // Get first 10 Semesters
     * const semesters = await prisma.semester.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const semesterWithIdOnly = await prisma.semester.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SemesterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SemesterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Semester.
     * @param {SemesterCreateArgs} args - Arguments to create a Semester.
     * @example
     * // Create one Semester
     * const Semester = await prisma.semester.create({
     *   data: {
     *     // ... data to create a Semester
     *   }
     * })
     * 
    **/
    create<T extends SemesterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SemesterCreateArgs<ExtArgs>>
    ): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Semesters.
     *     @param {SemesterCreateManyArgs} args - Arguments to create many Semesters.
     *     @example
     *     // Create many Semesters
     *     const semester = await prisma.semester.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SemesterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SemesterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Semester.
     * @param {SemesterDeleteArgs} args - Arguments to delete one Semester.
     * @example
     * // Delete one Semester
     * const Semester = await prisma.semester.delete({
     *   where: {
     *     // ... filter to delete one Semester
     *   }
     * })
     * 
    **/
    delete<T extends SemesterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SemesterDeleteArgs<ExtArgs>>
    ): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Semester.
     * @param {SemesterUpdateArgs} args - Arguments to update one Semester.
     * @example
     * // Update one Semester
     * const semester = await prisma.semester.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SemesterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SemesterUpdateArgs<ExtArgs>>
    ): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Semesters.
     * @param {SemesterDeleteManyArgs} args - Arguments to filter Semesters to delete.
     * @example
     * // Delete a few Semesters
     * const { count } = await prisma.semester.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SemesterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SemesterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SemesterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SemesterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Semester.
     * @param {SemesterUpsertArgs} args - Arguments to update or create a Semester.
     * @example
     * // Update or create a Semester
     * const semester = await prisma.semester.upsert({
     *   create: {
     *     // ... data to create a Semester
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Semester we want to update
     *   }
     * })
    **/
    upsert<T extends SemesterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SemesterUpsertArgs<ExtArgs>>
    ): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterCountArgs} args - Arguments to filter Semesters to count.
     * @example
     * // Count the number of Semesters
     * const count = await prisma.semester.count({
     *   where: {
     *     // ... the filter for the Semesters we want to count
     *   }
     * })
    **/
    count<T extends SemesterCountArgs>(
      args?: Subset<T, SemesterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SemesterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SemesterAggregateArgs>(args: Subset<T, SemesterAggregateArgs>): Prisma.PrismaPromise<GetSemesterAggregateType<T>>

    /**
     * Group by Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SemesterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SemesterGroupByArgs['orderBy'] }
        : { orderBy?: SemesterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SemesterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSemesterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Semester model
   */
  readonly fields: SemesterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Semester.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SemesterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends Semester$courseArgs<ExtArgs> = {}>(args?: Subset<T, Semester$courseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findMany'> | Null>;

    student<T extends Semester$studentArgs<ExtArgs> = {}>(args?: Subset<T, Semester$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Semester model
   */ 
  interface SemesterFieldRefs {
    readonly id: FieldRef<"Semester", 'String'>
    readonly sem: FieldRef<"Semester", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Semester findUnique
   */
  export type SemesterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where: SemesterWhereUniqueInput
  }


  /**
   * Semester findUniqueOrThrow
   */
  export type SemesterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where: SemesterWhereUniqueInput
  }


  /**
   * Semester findFirst
   */
  export type SemesterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }


  /**
   * Semester findFirstOrThrow
   */
  export type SemesterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semester to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }


  /**
   * Semester findMany
   */
  export type SemesterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter, which Semesters to fetch.
     */
    where?: SemesterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Semesters to fetch.
     */
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Semesters.
     */
    cursor?: SemesterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Semesters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Semesters.
     */
    skip?: number
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }


  /**
   * Semester create
   */
  export type SemesterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The data needed to create a Semester.
     */
    data: XOR<SemesterCreateInput, SemesterUncheckedCreateInput>
  }


  /**
   * Semester createMany
   */
  export type SemesterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Semesters.
     */
    data: SemesterCreateManyInput | SemesterCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Semester update
   */
  export type SemesterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The data needed to update a Semester.
     */
    data: XOR<SemesterUpdateInput, SemesterUncheckedUpdateInput>
    /**
     * Choose, which Semester to update.
     */
    where: SemesterWhereUniqueInput
  }


  /**
   * Semester updateMany
   */
  export type SemesterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Semesters.
     */
    data: XOR<SemesterUpdateManyMutationInput, SemesterUncheckedUpdateManyInput>
    /**
     * Filter which Semesters to update
     */
    where?: SemesterWhereInput
  }


  /**
   * Semester upsert
   */
  export type SemesterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * The filter to search for the Semester to update in case it exists.
     */
    where: SemesterWhereUniqueInput
    /**
     * In case the Semester found by the `where` argument doesn't exist, create a new Semester with this data.
     */
    create: XOR<SemesterCreateInput, SemesterUncheckedCreateInput>
    /**
     * In case the Semester was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SemesterUpdateInput, SemesterUncheckedUpdateInput>
  }


  /**
   * Semester delete
   */
  export type SemesterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SemesterInclude<ExtArgs> | null
    /**
     * Filter which Semester to delete.
     */
    where: SemesterWhereUniqueInput
  }


  /**
   * Semester deleteMany
   */
  export type SemesterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Semesters to delete
     */
    where?: SemesterWhereInput
  }


  /**
   * Semester.course
   */
  export type Semester$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Semester.student
   */
  export type Semester$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Semester without action
   */
  export type SemesterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SemesterInclude<ExtArgs> | null
  }



  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    name: string
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    course?: boolean | Branch$courseArgs<ExtArgs>
    student?: boolean | Branch$studentArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Branch$courseArgs<ExtArgs>
    student?: boolean | Branch$studentArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>[]
      student: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }


  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BranchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Branch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BranchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BranchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
    **/
    create<T extends BranchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BranchCreateArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Branches.
     *     @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     *     @example
     *     // Create many Branches
     *     const branch = await prisma.branch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BranchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
    **/
    delete<T extends BranchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BranchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BranchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BranchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
    **/
    upsert<T extends BranchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>
    ): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends Branch$courseArgs<ExtArgs> = {}>(args?: Subset<T, Branch$courseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findMany'> | Null>;

    student<T extends Branch$studentArgs<ExtArgs> = {}>(args?: Subset<T, Branch$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Branch model
   */ 
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }


  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }


  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }


  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }


  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }


  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }


  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }


  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
  }


  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }


  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }


  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
  }


  /**
   * Branch.course
   */
  export type Branch$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Branch.student
   */
  export type Branch$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
  }



  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    name: string | null
    semesterId: string | null
    branchId: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    name: string | null
    semesterId: string | null
    branchId: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    courseId: number
    name: number
    semesterId: number
    branchId: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    semesterId?: true
    branchId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    semesterId?: true
    branchId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    semesterId?: true
    branchId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    courseId: string
    name: string
    semesterId: string
    branchId: string
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    name?: boolean
    semesterId?: boolean
    branchId?: boolean
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    studentRegistered?: boolean | Course$studentRegisteredArgs<ExtArgs>
    facultyAssigned?: boolean | Course$facultyAssignedArgs<ExtArgs>
    attendances?: boolean | Course$attendancesArgs<ExtArgs>
    examEntries?: boolean | Course$examEntriesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    courseId?: boolean
    name?: boolean
    semesterId?: boolean
    branchId?: boolean
  }

  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    studentRegistered?: boolean | Course$studentRegisteredArgs<ExtArgs>
    facultyAssigned?: boolean | Course$facultyAssignedArgs<ExtArgs>
    attendances?: boolean | Course$attendancesArgs<ExtArgs>
    examEntries?: boolean | Course$examEntriesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      semester: Prisma.$SemesterPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
      studentRegistered: Prisma.$StudentCourseRegistrationPayload<ExtArgs>[]
      facultyAssigned: Prisma.$FacultyCourseAssignmentPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      examEntries: Prisma.$ExamMarksEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      name: string
      semesterId: string
      branchId: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }


  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
    **/
    create<T extends CourseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseCreateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Courses.
     *     @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
    **/
    delete<T extends CourseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
    **/
    upsert<T extends CourseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>
    ): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    semester<T extends SemesterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SemesterDefaultArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    studentRegistered<T extends Course$studentRegisteredArgs<ExtArgs> = {}>(args?: Subset<T, Course$studentRegisteredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentCourseRegistrationPayload<ExtArgs>, T, 'findMany'> | Null>;

    facultyAssigned<T extends Course$facultyAssignedArgs<ExtArgs> = {}>(args?: Subset<T, Course$facultyAssignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    attendances<T extends Course$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Course$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findMany'> | Null>;

    examEntries<T extends Course$examEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Course$examEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Course model
   */ 
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly courseId: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly semesterId: FieldRef<"Course", 'String'>
    readonly branchId: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }


  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }


  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
  }


  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }


  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }


  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
  }


  /**
   * Course.studentRegistered
   */
  export type Course$studentRegisteredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
    where?: StudentCourseRegistrationWhereInput
    orderBy?: StudentCourseRegistrationOrderByWithRelationInput | StudentCourseRegistrationOrderByWithRelationInput[]
    cursor?: StudentCourseRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentCourseRegistrationScalarFieldEnum | StudentCourseRegistrationScalarFieldEnum[]
  }


  /**
   * Course.facultyAssigned
   */
  export type Course$facultyAssignedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
    where?: FacultyCourseAssignmentWhereInput
    orderBy?: FacultyCourseAssignmentOrderByWithRelationInput | FacultyCourseAssignmentOrderByWithRelationInput[]
    cursor?: FacultyCourseAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyCourseAssignmentScalarFieldEnum | FacultyCourseAssignmentScalarFieldEnum[]
  }


  /**
   * Course.attendances
   */
  export type Course$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }


  /**
   * Course.examEntries
   */
  export type Course$examEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    where?: ExamMarksEntryWhereInput
    orderBy?: ExamMarksEntryOrderByWithRelationInput | ExamMarksEntryOrderByWithRelationInput[]
    cursor?: ExamMarksEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamMarksEntryScalarFieldEnum | ExamMarksEntryScalarFieldEnum[]
  }


  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseInclude<ExtArgs> | null
  }



  /**
   * Model StudentCourseRegistration
   */

  export type AggregateStudentCourseRegistration = {
    _count: StudentCourseRegistrationCountAggregateOutputType | null
    _min: StudentCourseRegistrationMinAggregateOutputType | null
    _max: StudentCourseRegistrationMaxAggregateOutputType | null
  }

  export type StudentCourseRegistrationMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    studentId: string | null
  }

  export type StudentCourseRegistrationMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    studentId: string | null
  }

  export type StudentCourseRegistrationCountAggregateOutputType = {
    id: number
    courseId: number
    studentId: number
    _all: number
  }


  export type StudentCourseRegistrationMinAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
  }

  export type StudentCourseRegistrationMaxAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
  }

  export type StudentCourseRegistrationCountAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    _all?: true
  }

  export type StudentCourseRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentCourseRegistration to aggregate.
     */
    where?: StudentCourseRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentCourseRegistrations to fetch.
     */
    orderBy?: StudentCourseRegistrationOrderByWithRelationInput | StudentCourseRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentCourseRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentCourseRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentCourseRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentCourseRegistrations
    **/
    _count?: true | StudentCourseRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentCourseRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentCourseRegistrationMaxAggregateInputType
  }

  export type GetStudentCourseRegistrationAggregateType<T extends StudentCourseRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentCourseRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentCourseRegistration[P]>
      : GetScalarType<T[P], AggregateStudentCourseRegistration[P]>
  }




  export type StudentCourseRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentCourseRegistrationWhereInput
    orderBy?: StudentCourseRegistrationOrderByWithAggregationInput | StudentCourseRegistrationOrderByWithAggregationInput[]
    by: StudentCourseRegistrationScalarFieldEnum[] | StudentCourseRegistrationScalarFieldEnum
    having?: StudentCourseRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCourseRegistrationCountAggregateInputType | true
    _min?: StudentCourseRegistrationMinAggregateInputType
    _max?: StudentCourseRegistrationMaxAggregateInputType
  }

  export type StudentCourseRegistrationGroupByOutputType = {
    id: string
    courseId: string
    studentId: string
    _count: StudentCourseRegistrationCountAggregateOutputType | null
    _min: StudentCourseRegistrationMinAggregateOutputType | null
    _max: StudentCourseRegistrationMaxAggregateOutputType | null
  }

  type GetStudentCourseRegistrationGroupByPayload<T extends StudentCourseRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentCourseRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentCourseRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentCourseRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], StudentCourseRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type StudentCourseRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentCourseRegistration"]>

  export type StudentCourseRegistrationSelectScalar = {
    id?: boolean
    courseId?: boolean
    studentId?: boolean
  }

  export type StudentCourseRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }


  export type $StudentCourseRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentCourseRegistration"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      studentId: string
    }, ExtArgs["result"]["studentCourseRegistration"]>
    composites: {}
  }


  type StudentCourseRegistrationGetPayload<S extends boolean | null | undefined | StudentCourseRegistrationDefaultArgs> = $Result.GetResult<Prisma.$StudentCourseRegistrationPayload, S>

  type StudentCourseRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentCourseRegistrationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: StudentCourseRegistrationCountAggregateInputType | true
    }

  export interface StudentCourseRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentCourseRegistration'], meta: { name: 'StudentCourseRegistration' } }
    /**
     * Find zero or one StudentCourseRegistration that matches the filter.
     * @param {StudentCourseRegistrationFindUniqueArgs} args - Arguments to find a StudentCourseRegistration
     * @example
     * // Get one StudentCourseRegistration
     * const studentCourseRegistration = await prisma.studentCourseRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentCourseRegistrationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCourseRegistrationFindUniqueArgs<ExtArgs>>
    ): Prisma__StudentCourseRegistrationClient<$Result.GetResult<Prisma.$StudentCourseRegistrationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StudentCourseRegistration that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentCourseRegistrationFindUniqueOrThrowArgs} args - Arguments to find a StudentCourseRegistration
     * @example
     * // Get one StudentCourseRegistration
     * const studentCourseRegistration = await prisma.studentCourseRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentCourseRegistrationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCourseRegistrationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StudentCourseRegistrationClient<$Result.GetResult<Prisma.$StudentCourseRegistrationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StudentCourseRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCourseRegistrationFindFirstArgs} args - Arguments to find a StudentCourseRegistration
     * @example
     * // Get one StudentCourseRegistration
     * const studentCourseRegistration = await prisma.studentCourseRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentCourseRegistrationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCourseRegistrationFindFirstArgs<ExtArgs>>
    ): Prisma__StudentCourseRegistrationClient<$Result.GetResult<Prisma.$StudentCourseRegistrationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StudentCourseRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCourseRegistrationFindFirstOrThrowArgs} args - Arguments to find a StudentCourseRegistration
     * @example
     * // Get one StudentCourseRegistration
     * const studentCourseRegistration = await prisma.studentCourseRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentCourseRegistrationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCourseRegistrationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StudentCourseRegistrationClient<$Result.GetResult<Prisma.$StudentCourseRegistrationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StudentCourseRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCourseRegistrationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentCourseRegistrations
     * const studentCourseRegistrations = await prisma.studentCourseRegistration.findMany()
     * 
     * // Get first 10 StudentCourseRegistrations
     * const studentCourseRegistrations = await prisma.studentCourseRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentCourseRegistrationWithIdOnly = await prisma.studentCourseRegistration.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentCourseRegistrationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCourseRegistrationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentCourseRegistrationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StudentCourseRegistration.
     * @param {StudentCourseRegistrationCreateArgs} args - Arguments to create a StudentCourseRegistration.
     * @example
     * // Create one StudentCourseRegistration
     * const StudentCourseRegistration = await prisma.studentCourseRegistration.create({
     *   data: {
     *     // ... data to create a StudentCourseRegistration
     *   }
     * })
     * 
    **/
    create<T extends StudentCourseRegistrationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCourseRegistrationCreateArgs<ExtArgs>>
    ): Prisma__StudentCourseRegistrationClient<$Result.GetResult<Prisma.$StudentCourseRegistrationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StudentCourseRegistrations.
     *     @param {StudentCourseRegistrationCreateManyArgs} args - Arguments to create many StudentCourseRegistrations.
     *     @example
     *     // Create many StudentCourseRegistrations
     *     const studentCourseRegistration = await prisma.studentCourseRegistration.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCourseRegistrationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCourseRegistrationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentCourseRegistration.
     * @param {StudentCourseRegistrationDeleteArgs} args - Arguments to delete one StudentCourseRegistration.
     * @example
     * // Delete one StudentCourseRegistration
     * const StudentCourseRegistration = await prisma.studentCourseRegistration.delete({
     *   where: {
     *     // ... filter to delete one StudentCourseRegistration
     *   }
     * })
     * 
    **/
    delete<T extends StudentCourseRegistrationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCourseRegistrationDeleteArgs<ExtArgs>>
    ): Prisma__StudentCourseRegistrationClient<$Result.GetResult<Prisma.$StudentCourseRegistrationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StudentCourseRegistration.
     * @param {StudentCourseRegistrationUpdateArgs} args - Arguments to update one StudentCourseRegistration.
     * @example
     * // Update one StudentCourseRegistration
     * const studentCourseRegistration = await prisma.studentCourseRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentCourseRegistrationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCourseRegistrationUpdateArgs<ExtArgs>>
    ): Prisma__StudentCourseRegistrationClient<$Result.GetResult<Prisma.$StudentCourseRegistrationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StudentCourseRegistrations.
     * @param {StudentCourseRegistrationDeleteManyArgs} args - Arguments to filter StudentCourseRegistrations to delete.
     * @example
     * // Delete a few StudentCourseRegistrations
     * const { count } = await prisma.studentCourseRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentCourseRegistrationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCourseRegistrationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentCourseRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCourseRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentCourseRegistrations
     * const studentCourseRegistration = await prisma.studentCourseRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentCourseRegistrationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCourseRegistrationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentCourseRegistration.
     * @param {StudentCourseRegistrationUpsertArgs} args - Arguments to update or create a StudentCourseRegistration.
     * @example
     * // Update or create a StudentCourseRegistration
     * const studentCourseRegistration = await prisma.studentCourseRegistration.upsert({
     *   create: {
     *     // ... data to create a StudentCourseRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentCourseRegistration we want to update
     *   }
     * })
    **/
    upsert<T extends StudentCourseRegistrationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCourseRegistrationUpsertArgs<ExtArgs>>
    ): Prisma__StudentCourseRegistrationClient<$Result.GetResult<Prisma.$StudentCourseRegistrationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of StudentCourseRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCourseRegistrationCountArgs} args - Arguments to filter StudentCourseRegistrations to count.
     * @example
     * // Count the number of StudentCourseRegistrations
     * const count = await prisma.studentCourseRegistration.count({
     *   where: {
     *     // ... the filter for the StudentCourseRegistrations we want to count
     *   }
     * })
    **/
    count<T extends StudentCourseRegistrationCountArgs>(
      args?: Subset<T, StudentCourseRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCourseRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentCourseRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCourseRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentCourseRegistrationAggregateArgs>(args: Subset<T, StudentCourseRegistrationAggregateArgs>): Prisma.PrismaPromise<GetStudentCourseRegistrationAggregateType<T>>

    /**
     * Group by StudentCourseRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCourseRegistrationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentCourseRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentCourseRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: StudentCourseRegistrationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentCourseRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentCourseRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentCourseRegistration model
   */
  readonly fields: StudentCourseRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentCourseRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentCourseRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the StudentCourseRegistration model
   */ 
  interface StudentCourseRegistrationFieldRefs {
    readonly id: FieldRef<"StudentCourseRegistration", 'String'>
    readonly courseId: FieldRef<"StudentCourseRegistration", 'String'>
    readonly studentId: FieldRef<"StudentCourseRegistration", 'String'>
  }
    

  // Custom InputTypes

  /**
   * StudentCourseRegistration findUnique
   */
  export type StudentCourseRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which StudentCourseRegistration to fetch.
     */
    where: StudentCourseRegistrationWhereUniqueInput
  }


  /**
   * StudentCourseRegistration findUniqueOrThrow
   */
  export type StudentCourseRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which StudentCourseRegistration to fetch.
     */
    where: StudentCourseRegistrationWhereUniqueInput
  }


  /**
   * StudentCourseRegistration findFirst
   */
  export type StudentCourseRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which StudentCourseRegistration to fetch.
     */
    where?: StudentCourseRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentCourseRegistrations to fetch.
     */
    orderBy?: StudentCourseRegistrationOrderByWithRelationInput | StudentCourseRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentCourseRegistrations.
     */
    cursor?: StudentCourseRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentCourseRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentCourseRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentCourseRegistrations.
     */
    distinct?: StudentCourseRegistrationScalarFieldEnum | StudentCourseRegistrationScalarFieldEnum[]
  }


  /**
   * StudentCourseRegistration findFirstOrThrow
   */
  export type StudentCourseRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which StudentCourseRegistration to fetch.
     */
    where?: StudentCourseRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentCourseRegistrations to fetch.
     */
    orderBy?: StudentCourseRegistrationOrderByWithRelationInput | StudentCourseRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentCourseRegistrations.
     */
    cursor?: StudentCourseRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentCourseRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentCourseRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentCourseRegistrations.
     */
    distinct?: StudentCourseRegistrationScalarFieldEnum | StudentCourseRegistrationScalarFieldEnum[]
  }


  /**
   * StudentCourseRegistration findMany
   */
  export type StudentCourseRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which StudentCourseRegistrations to fetch.
     */
    where?: StudentCourseRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentCourseRegistrations to fetch.
     */
    orderBy?: StudentCourseRegistrationOrderByWithRelationInput | StudentCourseRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentCourseRegistrations.
     */
    cursor?: StudentCourseRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentCourseRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentCourseRegistrations.
     */
    skip?: number
    distinct?: StudentCourseRegistrationScalarFieldEnum | StudentCourseRegistrationScalarFieldEnum[]
  }


  /**
   * StudentCourseRegistration create
   */
  export type StudentCourseRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentCourseRegistration.
     */
    data: XOR<StudentCourseRegistrationCreateInput, StudentCourseRegistrationUncheckedCreateInput>
  }


  /**
   * StudentCourseRegistration createMany
   */
  export type StudentCourseRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentCourseRegistrations.
     */
    data: StudentCourseRegistrationCreateManyInput | StudentCourseRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * StudentCourseRegistration update
   */
  export type StudentCourseRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentCourseRegistration.
     */
    data: XOR<StudentCourseRegistrationUpdateInput, StudentCourseRegistrationUncheckedUpdateInput>
    /**
     * Choose, which StudentCourseRegistration to update.
     */
    where: StudentCourseRegistrationWhereUniqueInput
  }


  /**
   * StudentCourseRegistration updateMany
   */
  export type StudentCourseRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentCourseRegistrations.
     */
    data: XOR<StudentCourseRegistrationUpdateManyMutationInput, StudentCourseRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which StudentCourseRegistrations to update
     */
    where?: StudentCourseRegistrationWhereInput
  }


  /**
   * StudentCourseRegistration upsert
   */
  export type StudentCourseRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentCourseRegistration to update in case it exists.
     */
    where: StudentCourseRegistrationWhereUniqueInput
    /**
     * In case the StudentCourseRegistration found by the `where` argument doesn't exist, create a new StudentCourseRegistration with this data.
     */
    create: XOR<StudentCourseRegistrationCreateInput, StudentCourseRegistrationUncheckedCreateInput>
    /**
     * In case the StudentCourseRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentCourseRegistrationUpdateInput, StudentCourseRegistrationUncheckedUpdateInput>
  }


  /**
   * StudentCourseRegistration delete
   */
  export type StudentCourseRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter which StudentCourseRegistration to delete.
     */
    where: StudentCourseRegistrationWhereUniqueInput
  }


  /**
   * StudentCourseRegistration deleteMany
   */
  export type StudentCourseRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentCourseRegistrations to delete
     */
    where?: StudentCourseRegistrationWhereInput
  }


  /**
   * StudentCourseRegistration without action
   */
  export type StudentCourseRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCourseRegistration
     */
    select?: StudentCourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentCourseRegistrationInclude<ExtArgs> | null
  }



  /**
   * Model FacultyCourseAssignment
   */

  export type AggregateFacultyCourseAssignment = {
    _count: FacultyCourseAssignmentCountAggregateOutputType | null
    _min: FacultyCourseAssignmentMinAggregateOutputType | null
    _max: FacultyCourseAssignmentMaxAggregateOutputType | null
  }

  export type FacultyCourseAssignmentMinAggregateOutputType = {
    id: string | null
    facultyId: string | null
    courseId: string | null
  }

  export type FacultyCourseAssignmentMaxAggregateOutputType = {
    id: string | null
    facultyId: string | null
    courseId: string | null
  }

  export type FacultyCourseAssignmentCountAggregateOutputType = {
    id: number
    facultyId: number
    courseId: number
    _all: number
  }


  export type FacultyCourseAssignmentMinAggregateInputType = {
    id?: true
    facultyId?: true
    courseId?: true
  }

  export type FacultyCourseAssignmentMaxAggregateInputType = {
    id?: true
    facultyId?: true
    courseId?: true
  }

  export type FacultyCourseAssignmentCountAggregateInputType = {
    id?: true
    facultyId?: true
    courseId?: true
    _all?: true
  }

  export type FacultyCourseAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyCourseAssignment to aggregate.
     */
    where?: FacultyCourseAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyCourseAssignments to fetch.
     */
    orderBy?: FacultyCourseAssignmentOrderByWithRelationInput | FacultyCourseAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyCourseAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyCourseAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyCourseAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultyCourseAssignments
    **/
    _count?: true | FacultyCourseAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyCourseAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyCourseAssignmentMaxAggregateInputType
  }

  export type GetFacultyCourseAssignmentAggregateType<T extends FacultyCourseAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultyCourseAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultyCourseAssignment[P]>
      : GetScalarType<T[P], AggregateFacultyCourseAssignment[P]>
  }




  export type FacultyCourseAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyCourseAssignmentWhereInput
    orderBy?: FacultyCourseAssignmentOrderByWithAggregationInput | FacultyCourseAssignmentOrderByWithAggregationInput[]
    by: FacultyCourseAssignmentScalarFieldEnum[] | FacultyCourseAssignmentScalarFieldEnum
    having?: FacultyCourseAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyCourseAssignmentCountAggregateInputType | true
    _min?: FacultyCourseAssignmentMinAggregateInputType
    _max?: FacultyCourseAssignmentMaxAggregateInputType
  }

  export type FacultyCourseAssignmentGroupByOutputType = {
    id: string
    facultyId: string
    courseId: string
    _count: FacultyCourseAssignmentCountAggregateOutputType | null
    _min: FacultyCourseAssignmentMinAggregateOutputType | null
    _max: FacultyCourseAssignmentMaxAggregateOutputType | null
  }

  type GetFacultyCourseAssignmentGroupByPayload<T extends FacultyCourseAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyCourseAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyCourseAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyCourseAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyCourseAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type FacultyCourseAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facultyId?: boolean
    courseId?: boolean
    faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyCourseAssignment"]>

  export type FacultyCourseAssignmentSelectScalar = {
    id?: boolean
    facultyId?: boolean
    courseId?: boolean
  }

  export type FacultyCourseAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }


  export type $FacultyCourseAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultyCourseAssignment"
    objects: {
      faculty: Prisma.$FacultyPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facultyId: string
      courseId: string
    }, ExtArgs["result"]["facultyCourseAssignment"]>
    composites: {}
  }


  type FacultyCourseAssignmentGetPayload<S extends boolean | null | undefined | FacultyCourseAssignmentDefaultArgs> = $Result.GetResult<Prisma.$FacultyCourseAssignmentPayload, S>

  type FacultyCourseAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FacultyCourseAssignmentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FacultyCourseAssignmentCountAggregateInputType | true
    }

  export interface FacultyCourseAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultyCourseAssignment'], meta: { name: 'FacultyCourseAssignment' } }
    /**
     * Find zero or one FacultyCourseAssignment that matches the filter.
     * @param {FacultyCourseAssignmentFindUniqueArgs} args - Arguments to find a FacultyCourseAssignment
     * @example
     * // Get one FacultyCourseAssignment
     * const facultyCourseAssignment = await prisma.facultyCourseAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FacultyCourseAssignmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyCourseAssignmentFindUniqueArgs<ExtArgs>>
    ): Prisma__FacultyCourseAssignmentClient<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FacultyCourseAssignment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FacultyCourseAssignmentFindUniqueOrThrowArgs} args - Arguments to find a FacultyCourseAssignment
     * @example
     * // Get one FacultyCourseAssignment
     * const facultyCourseAssignment = await prisma.facultyCourseAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FacultyCourseAssignmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyCourseAssignmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FacultyCourseAssignmentClient<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FacultyCourseAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCourseAssignmentFindFirstArgs} args - Arguments to find a FacultyCourseAssignment
     * @example
     * // Get one FacultyCourseAssignment
     * const facultyCourseAssignment = await prisma.facultyCourseAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FacultyCourseAssignmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyCourseAssignmentFindFirstArgs<ExtArgs>>
    ): Prisma__FacultyCourseAssignmentClient<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FacultyCourseAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCourseAssignmentFindFirstOrThrowArgs} args - Arguments to find a FacultyCourseAssignment
     * @example
     * // Get one FacultyCourseAssignment
     * const facultyCourseAssignment = await prisma.facultyCourseAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FacultyCourseAssignmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyCourseAssignmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FacultyCourseAssignmentClient<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FacultyCourseAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCourseAssignmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyCourseAssignments
     * const facultyCourseAssignments = await prisma.facultyCourseAssignment.findMany()
     * 
     * // Get first 10 FacultyCourseAssignments
     * const facultyCourseAssignments = await prisma.facultyCourseAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facultyCourseAssignmentWithIdOnly = await prisma.facultyCourseAssignment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FacultyCourseAssignmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyCourseAssignmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FacultyCourseAssignment.
     * @param {FacultyCourseAssignmentCreateArgs} args - Arguments to create a FacultyCourseAssignment.
     * @example
     * // Create one FacultyCourseAssignment
     * const FacultyCourseAssignment = await prisma.facultyCourseAssignment.create({
     *   data: {
     *     // ... data to create a FacultyCourseAssignment
     *   }
     * })
     * 
    **/
    create<T extends FacultyCourseAssignmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyCourseAssignmentCreateArgs<ExtArgs>>
    ): Prisma__FacultyCourseAssignmentClient<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FacultyCourseAssignments.
     *     @param {FacultyCourseAssignmentCreateManyArgs} args - Arguments to create many FacultyCourseAssignments.
     *     @example
     *     // Create many FacultyCourseAssignments
     *     const facultyCourseAssignment = await prisma.facultyCourseAssignment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FacultyCourseAssignmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyCourseAssignmentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FacultyCourseAssignment.
     * @param {FacultyCourseAssignmentDeleteArgs} args - Arguments to delete one FacultyCourseAssignment.
     * @example
     * // Delete one FacultyCourseAssignment
     * const FacultyCourseAssignment = await prisma.facultyCourseAssignment.delete({
     *   where: {
     *     // ... filter to delete one FacultyCourseAssignment
     *   }
     * })
     * 
    **/
    delete<T extends FacultyCourseAssignmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyCourseAssignmentDeleteArgs<ExtArgs>>
    ): Prisma__FacultyCourseAssignmentClient<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FacultyCourseAssignment.
     * @param {FacultyCourseAssignmentUpdateArgs} args - Arguments to update one FacultyCourseAssignment.
     * @example
     * // Update one FacultyCourseAssignment
     * const facultyCourseAssignment = await prisma.facultyCourseAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FacultyCourseAssignmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyCourseAssignmentUpdateArgs<ExtArgs>>
    ): Prisma__FacultyCourseAssignmentClient<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FacultyCourseAssignments.
     * @param {FacultyCourseAssignmentDeleteManyArgs} args - Arguments to filter FacultyCourseAssignments to delete.
     * @example
     * // Delete a few FacultyCourseAssignments
     * const { count } = await prisma.facultyCourseAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FacultyCourseAssignmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FacultyCourseAssignmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyCourseAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCourseAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyCourseAssignments
     * const facultyCourseAssignment = await prisma.facultyCourseAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FacultyCourseAssignmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyCourseAssignmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacultyCourseAssignment.
     * @param {FacultyCourseAssignmentUpsertArgs} args - Arguments to update or create a FacultyCourseAssignment.
     * @example
     * // Update or create a FacultyCourseAssignment
     * const facultyCourseAssignment = await prisma.facultyCourseAssignment.upsert({
     *   create: {
     *     // ... data to create a FacultyCourseAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyCourseAssignment we want to update
     *   }
     * })
    **/
    upsert<T extends FacultyCourseAssignmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FacultyCourseAssignmentUpsertArgs<ExtArgs>>
    ): Prisma__FacultyCourseAssignmentClient<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FacultyCourseAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCourseAssignmentCountArgs} args - Arguments to filter FacultyCourseAssignments to count.
     * @example
     * // Count the number of FacultyCourseAssignments
     * const count = await prisma.facultyCourseAssignment.count({
     *   where: {
     *     // ... the filter for the FacultyCourseAssignments we want to count
     *   }
     * })
    **/
    count<T extends FacultyCourseAssignmentCountArgs>(
      args?: Subset<T, FacultyCourseAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyCourseAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultyCourseAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCourseAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacultyCourseAssignmentAggregateArgs>(args: Subset<T, FacultyCourseAssignmentAggregateArgs>): Prisma.PrismaPromise<GetFacultyCourseAssignmentAggregateType<T>>

    /**
     * Group by FacultyCourseAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCourseAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacultyCourseAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyCourseAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: FacultyCourseAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacultyCourseAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyCourseAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultyCourseAssignment model
   */
  readonly fields: FacultyCourseAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultyCourseAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyCourseAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    faculty<T extends FacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultyDefaultArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FacultyCourseAssignment model
   */ 
  interface FacultyCourseAssignmentFieldRefs {
    readonly id: FieldRef<"FacultyCourseAssignment", 'String'>
    readonly facultyId: FieldRef<"FacultyCourseAssignment", 'String'>
    readonly courseId: FieldRef<"FacultyCourseAssignment", 'String'>
  }
    

  // Custom InputTypes

  /**
   * FacultyCourseAssignment findUnique
   */
  export type FacultyCourseAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which FacultyCourseAssignment to fetch.
     */
    where: FacultyCourseAssignmentWhereUniqueInput
  }


  /**
   * FacultyCourseAssignment findUniqueOrThrow
   */
  export type FacultyCourseAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which FacultyCourseAssignment to fetch.
     */
    where: FacultyCourseAssignmentWhereUniqueInput
  }


  /**
   * FacultyCourseAssignment findFirst
   */
  export type FacultyCourseAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which FacultyCourseAssignment to fetch.
     */
    where?: FacultyCourseAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyCourseAssignments to fetch.
     */
    orderBy?: FacultyCourseAssignmentOrderByWithRelationInput | FacultyCourseAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyCourseAssignments.
     */
    cursor?: FacultyCourseAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyCourseAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyCourseAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyCourseAssignments.
     */
    distinct?: FacultyCourseAssignmentScalarFieldEnum | FacultyCourseAssignmentScalarFieldEnum[]
  }


  /**
   * FacultyCourseAssignment findFirstOrThrow
   */
  export type FacultyCourseAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which FacultyCourseAssignment to fetch.
     */
    where?: FacultyCourseAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyCourseAssignments to fetch.
     */
    orderBy?: FacultyCourseAssignmentOrderByWithRelationInput | FacultyCourseAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyCourseAssignments.
     */
    cursor?: FacultyCourseAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyCourseAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyCourseAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyCourseAssignments.
     */
    distinct?: FacultyCourseAssignmentScalarFieldEnum | FacultyCourseAssignmentScalarFieldEnum[]
  }


  /**
   * FacultyCourseAssignment findMany
   */
  export type FacultyCourseAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which FacultyCourseAssignments to fetch.
     */
    where?: FacultyCourseAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyCourseAssignments to fetch.
     */
    orderBy?: FacultyCourseAssignmentOrderByWithRelationInput | FacultyCourseAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultyCourseAssignments.
     */
    cursor?: FacultyCourseAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyCourseAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyCourseAssignments.
     */
    skip?: number
    distinct?: FacultyCourseAssignmentScalarFieldEnum | FacultyCourseAssignmentScalarFieldEnum[]
  }


  /**
   * FacultyCourseAssignment create
   */
  export type FacultyCourseAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a FacultyCourseAssignment.
     */
    data: XOR<FacultyCourseAssignmentCreateInput, FacultyCourseAssignmentUncheckedCreateInput>
  }


  /**
   * FacultyCourseAssignment createMany
   */
  export type FacultyCourseAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyCourseAssignments.
     */
    data: FacultyCourseAssignmentCreateManyInput | FacultyCourseAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FacultyCourseAssignment update
   */
  export type FacultyCourseAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a FacultyCourseAssignment.
     */
    data: XOR<FacultyCourseAssignmentUpdateInput, FacultyCourseAssignmentUncheckedUpdateInput>
    /**
     * Choose, which FacultyCourseAssignment to update.
     */
    where: FacultyCourseAssignmentWhereUniqueInput
  }


  /**
   * FacultyCourseAssignment updateMany
   */
  export type FacultyCourseAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyCourseAssignments.
     */
    data: XOR<FacultyCourseAssignmentUpdateManyMutationInput, FacultyCourseAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which FacultyCourseAssignments to update
     */
    where?: FacultyCourseAssignmentWhereInput
  }


  /**
   * FacultyCourseAssignment upsert
   */
  export type FacultyCourseAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the FacultyCourseAssignment to update in case it exists.
     */
    where: FacultyCourseAssignmentWhereUniqueInput
    /**
     * In case the FacultyCourseAssignment found by the `where` argument doesn't exist, create a new FacultyCourseAssignment with this data.
     */
    create: XOR<FacultyCourseAssignmentCreateInput, FacultyCourseAssignmentUncheckedCreateInput>
    /**
     * In case the FacultyCourseAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyCourseAssignmentUpdateInput, FacultyCourseAssignmentUncheckedUpdateInput>
  }


  /**
   * FacultyCourseAssignment delete
   */
  export type FacultyCourseAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
    /**
     * Filter which FacultyCourseAssignment to delete.
     */
    where: FacultyCourseAssignmentWhereUniqueInput
  }


  /**
   * FacultyCourseAssignment deleteMany
   */
  export type FacultyCourseAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyCourseAssignments to delete
     */
    where?: FacultyCourseAssignmentWhereInput
  }


  /**
   * FacultyCourseAssignment without action
   */
  export type FacultyCourseAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCourseAssignment
     */
    select?: FacultyCourseAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FacultyCourseAssignmentInclude<ExtArgs> | null
  }



  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    name: $Enums.examType | null
    code: string | null
    date: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    name: $Enums.examType | null
    code: string | null
    date: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    name: number
    code: number
    date: number
    _all: number
  }


  export type ExamMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    date?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    date?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    date?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    name: $Enums.examType
    code: string
    date: Date
    _count: ExamCountAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    date?: boolean
    marksEntries?: boolean | Exam$marksEntriesArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    date?: boolean
  }

  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marksEntries?: boolean | Exam$marksEntriesArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      marksEntries: Prisma.$ExamMarksEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.examType
      code: string
      date: Date
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }


  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Exam that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
    **/
    create<T extends ExamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExamCreateArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Exams.
     *     @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     *     @example
     *     // Create many Exams
     *     const exam = await prisma.exam.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
    **/
    delete<T extends ExamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
    **/
    upsert<T extends ExamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>
    ): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    marksEntries<T extends Exam$marksEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Exam$marksEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Exam model
   */ 
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly name: FieldRef<"Exam", 'examType'>
    readonly code: FieldRef<"Exam", 'String'>
    readonly date: FieldRef<"Exam", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }


  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }


  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }


  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }


  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }


  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }


  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }


  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
  }


  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }


  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }


  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
  }


  /**
   * Exam.marksEntries
   */
  export type Exam$marksEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    where?: ExamMarksEntryWhereInput
    orderBy?: ExamMarksEntryOrderByWithRelationInput | ExamMarksEntryOrderByWithRelationInput[]
    cursor?: ExamMarksEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamMarksEntryScalarFieldEnum | ExamMarksEntryScalarFieldEnum[]
  }


  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamInclude<ExtArgs> | null
  }



  /**
   * Model ExamMarksEntry
   */

  export type AggregateExamMarksEntry = {
    _count: ExamMarksEntryCountAggregateOutputType | null
    _avg: ExamMarksEntryAvgAggregateOutputType | null
    _sum: ExamMarksEntrySumAggregateOutputType | null
    _min: ExamMarksEntryMinAggregateOutputType | null
    _max: ExamMarksEntryMaxAggregateOutputType | null
  }

  export type ExamMarksEntryAvgAggregateOutputType = {
    marksObtained: number | null
  }

  export type ExamMarksEntrySumAggregateOutputType = {
    marksObtained: number | null
  }

  export type ExamMarksEntryMinAggregateOutputType = {
    id: string | null
    examId: string | null
    courseId: string | null
    studentId: string | null
    marksObtained: number | null
    remarks: string | null
  }

  export type ExamMarksEntryMaxAggregateOutputType = {
    id: string | null
    examId: string | null
    courseId: string | null
    studentId: string | null
    marksObtained: number | null
    remarks: string | null
  }

  export type ExamMarksEntryCountAggregateOutputType = {
    id: number
    examId: number
    courseId: number
    studentId: number
    marksObtained: number
    remarks: number
    _all: number
  }


  export type ExamMarksEntryAvgAggregateInputType = {
    marksObtained?: true
  }

  export type ExamMarksEntrySumAggregateInputType = {
    marksObtained?: true
  }

  export type ExamMarksEntryMinAggregateInputType = {
    id?: true
    examId?: true
    courseId?: true
    studentId?: true
    marksObtained?: true
    remarks?: true
  }

  export type ExamMarksEntryMaxAggregateInputType = {
    id?: true
    examId?: true
    courseId?: true
    studentId?: true
    marksObtained?: true
    remarks?: true
  }

  export type ExamMarksEntryCountAggregateInputType = {
    id?: true
    examId?: true
    courseId?: true
    studentId?: true
    marksObtained?: true
    remarks?: true
    _all?: true
  }

  export type ExamMarksEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamMarksEntry to aggregate.
     */
    where?: ExamMarksEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamMarksEntries to fetch.
     */
    orderBy?: ExamMarksEntryOrderByWithRelationInput | ExamMarksEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamMarksEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamMarksEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamMarksEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamMarksEntries
    **/
    _count?: true | ExamMarksEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamMarksEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamMarksEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMarksEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMarksEntryMaxAggregateInputType
  }

  export type GetExamMarksEntryAggregateType<T extends ExamMarksEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateExamMarksEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamMarksEntry[P]>
      : GetScalarType<T[P], AggregateExamMarksEntry[P]>
  }




  export type ExamMarksEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamMarksEntryWhereInput
    orderBy?: ExamMarksEntryOrderByWithAggregationInput | ExamMarksEntryOrderByWithAggregationInput[]
    by: ExamMarksEntryScalarFieldEnum[] | ExamMarksEntryScalarFieldEnum
    having?: ExamMarksEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamMarksEntryCountAggregateInputType | true
    _avg?: ExamMarksEntryAvgAggregateInputType
    _sum?: ExamMarksEntrySumAggregateInputType
    _min?: ExamMarksEntryMinAggregateInputType
    _max?: ExamMarksEntryMaxAggregateInputType
  }

  export type ExamMarksEntryGroupByOutputType = {
    id: string
    examId: string
    courseId: string
    studentId: string
    marksObtained: number
    remarks: string | null
    _count: ExamMarksEntryCountAggregateOutputType | null
    _avg: ExamMarksEntryAvgAggregateOutputType | null
    _sum: ExamMarksEntrySumAggregateOutputType | null
    _min: ExamMarksEntryMinAggregateOutputType | null
    _max: ExamMarksEntryMaxAggregateOutputType | null
  }

  type GetExamMarksEntryGroupByPayload<T extends ExamMarksEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamMarksEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamMarksEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamMarksEntryGroupByOutputType[P]>
            : GetScalarType<T[P], ExamMarksEntryGroupByOutputType[P]>
        }
      >
    >


  export type ExamMarksEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    courseId?: boolean
    studentId?: boolean
    marksObtained?: boolean
    remarks?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examMarksEntry"]>

  export type ExamMarksEntrySelectScalar = {
    id?: boolean
    examId?: boolean
    courseId?: boolean
    studentId?: boolean
    marksObtained?: boolean
    remarks?: boolean
  }

  export type ExamMarksEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }


  export type $ExamMarksEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamMarksEntry"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examId: string
      courseId: string
      studentId: string
      marksObtained: number
      remarks: string | null
    }, ExtArgs["result"]["examMarksEntry"]>
    composites: {}
  }


  type ExamMarksEntryGetPayload<S extends boolean | null | undefined | ExamMarksEntryDefaultArgs> = $Result.GetResult<Prisma.$ExamMarksEntryPayload, S>

  type ExamMarksEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamMarksEntryFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ExamMarksEntryCountAggregateInputType | true
    }

  export interface ExamMarksEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamMarksEntry'], meta: { name: 'ExamMarksEntry' } }
    /**
     * Find zero or one ExamMarksEntry that matches the filter.
     * @param {ExamMarksEntryFindUniqueArgs} args - Arguments to find a ExamMarksEntry
     * @example
     * // Get one ExamMarksEntry
     * const examMarksEntry = await prisma.examMarksEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExamMarksEntryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExamMarksEntryFindUniqueArgs<ExtArgs>>
    ): Prisma__ExamMarksEntryClient<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ExamMarksEntry that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExamMarksEntryFindUniqueOrThrowArgs} args - Arguments to find a ExamMarksEntry
     * @example
     * // Get one ExamMarksEntry
     * const examMarksEntry = await prisma.examMarksEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExamMarksEntryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamMarksEntryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExamMarksEntryClient<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ExamMarksEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamMarksEntryFindFirstArgs} args - Arguments to find a ExamMarksEntry
     * @example
     * // Get one ExamMarksEntry
     * const examMarksEntry = await prisma.examMarksEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExamMarksEntryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamMarksEntryFindFirstArgs<ExtArgs>>
    ): Prisma__ExamMarksEntryClient<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ExamMarksEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamMarksEntryFindFirstOrThrowArgs} args - Arguments to find a ExamMarksEntry
     * @example
     * // Get one ExamMarksEntry
     * const examMarksEntry = await prisma.examMarksEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExamMarksEntryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamMarksEntryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExamMarksEntryClient<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ExamMarksEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamMarksEntryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamMarksEntries
     * const examMarksEntries = await prisma.examMarksEntry.findMany()
     * 
     * // Get first 10 ExamMarksEntries
     * const examMarksEntries = await prisma.examMarksEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examMarksEntryWithIdOnly = await prisma.examMarksEntry.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExamMarksEntryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamMarksEntryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ExamMarksEntry.
     * @param {ExamMarksEntryCreateArgs} args - Arguments to create a ExamMarksEntry.
     * @example
     * // Create one ExamMarksEntry
     * const ExamMarksEntry = await prisma.examMarksEntry.create({
     *   data: {
     *     // ... data to create a ExamMarksEntry
     *   }
     * })
     * 
    **/
    create<T extends ExamMarksEntryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExamMarksEntryCreateArgs<ExtArgs>>
    ): Prisma__ExamMarksEntryClient<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ExamMarksEntries.
     *     @param {ExamMarksEntryCreateManyArgs} args - Arguments to create many ExamMarksEntries.
     *     @example
     *     // Create many ExamMarksEntries
     *     const examMarksEntry = await prisma.examMarksEntry.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExamMarksEntryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamMarksEntryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExamMarksEntry.
     * @param {ExamMarksEntryDeleteArgs} args - Arguments to delete one ExamMarksEntry.
     * @example
     * // Delete one ExamMarksEntry
     * const ExamMarksEntry = await prisma.examMarksEntry.delete({
     *   where: {
     *     // ... filter to delete one ExamMarksEntry
     *   }
     * })
     * 
    **/
    delete<T extends ExamMarksEntryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExamMarksEntryDeleteArgs<ExtArgs>>
    ): Prisma__ExamMarksEntryClient<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ExamMarksEntry.
     * @param {ExamMarksEntryUpdateArgs} args - Arguments to update one ExamMarksEntry.
     * @example
     * // Update one ExamMarksEntry
     * const examMarksEntry = await prisma.examMarksEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExamMarksEntryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExamMarksEntryUpdateArgs<ExtArgs>>
    ): Prisma__ExamMarksEntryClient<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ExamMarksEntries.
     * @param {ExamMarksEntryDeleteManyArgs} args - Arguments to filter ExamMarksEntries to delete.
     * @example
     * // Delete a few ExamMarksEntries
     * const { count } = await prisma.examMarksEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExamMarksEntryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExamMarksEntryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamMarksEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamMarksEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamMarksEntries
     * const examMarksEntry = await prisma.examMarksEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExamMarksEntryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExamMarksEntryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExamMarksEntry.
     * @param {ExamMarksEntryUpsertArgs} args - Arguments to update or create a ExamMarksEntry.
     * @example
     * // Update or create a ExamMarksEntry
     * const examMarksEntry = await prisma.examMarksEntry.upsert({
     *   create: {
     *     // ... data to create a ExamMarksEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamMarksEntry we want to update
     *   }
     * })
    **/
    upsert<T extends ExamMarksEntryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExamMarksEntryUpsertArgs<ExtArgs>>
    ): Prisma__ExamMarksEntryClient<$Result.GetResult<Prisma.$ExamMarksEntryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ExamMarksEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamMarksEntryCountArgs} args - Arguments to filter ExamMarksEntries to count.
     * @example
     * // Count the number of ExamMarksEntries
     * const count = await prisma.examMarksEntry.count({
     *   where: {
     *     // ... the filter for the ExamMarksEntries we want to count
     *   }
     * })
    **/
    count<T extends ExamMarksEntryCountArgs>(
      args?: Subset<T, ExamMarksEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamMarksEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamMarksEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamMarksEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamMarksEntryAggregateArgs>(args: Subset<T, ExamMarksEntryAggregateArgs>): Prisma.PrismaPromise<GetExamMarksEntryAggregateType<T>>

    /**
     * Group by ExamMarksEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamMarksEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamMarksEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamMarksEntryGroupByArgs['orderBy'] }
        : { orderBy?: ExamMarksEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamMarksEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamMarksEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamMarksEntry model
   */
  readonly fields: ExamMarksEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamMarksEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamMarksEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ExamMarksEntry model
   */ 
  interface ExamMarksEntryFieldRefs {
    readonly id: FieldRef<"ExamMarksEntry", 'String'>
    readonly examId: FieldRef<"ExamMarksEntry", 'String'>
    readonly courseId: FieldRef<"ExamMarksEntry", 'String'>
    readonly studentId: FieldRef<"ExamMarksEntry", 'String'>
    readonly marksObtained: FieldRef<"ExamMarksEntry", 'Float'>
    readonly remarks: FieldRef<"ExamMarksEntry", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ExamMarksEntry findUnique
   */
  export type ExamMarksEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    /**
     * Filter, which ExamMarksEntry to fetch.
     */
    where: ExamMarksEntryWhereUniqueInput
  }


  /**
   * ExamMarksEntry findUniqueOrThrow
   */
  export type ExamMarksEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    /**
     * Filter, which ExamMarksEntry to fetch.
     */
    where: ExamMarksEntryWhereUniqueInput
  }


  /**
   * ExamMarksEntry findFirst
   */
  export type ExamMarksEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    /**
     * Filter, which ExamMarksEntry to fetch.
     */
    where?: ExamMarksEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamMarksEntries to fetch.
     */
    orderBy?: ExamMarksEntryOrderByWithRelationInput | ExamMarksEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamMarksEntries.
     */
    cursor?: ExamMarksEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamMarksEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamMarksEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamMarksEntries.
     */
    distinct?: ExamMarksEntryScalarFieldEnum | ExamMarksEntryScalarFieldEnum[]
  }


  /**
   * ExamMarksEntry findFirstOrThrow
   */
  export type ExamMarksEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    /**
     * Filter, which ExamMarksEntry to fetch.
     */
    where?: ExamMarksEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamMarksEntries to fetch.
     */
    orderBy?: ExamMarksEntryOrderByWithRelationInput | ExamMarksEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamMarksEntries.
     */
    cursor?: ExamMarksEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamMarksEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamMarksEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamMarksEntries.
     */
    distinct?: ExamMarksEntryScalarFieldEnum | ExamMarksEntryScalarFieldEnum[]
  }


  /**
   * ExamMarksEntry findMany
   */
  export type ExamMarksEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    /**
     * Filter, which ExamMarksEntries to fetch.
     */
    where?: ExamMarksEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamMarksEntries to fetch.
     */
    orderBy?: ExamMarksEntryOrderByWithRelationInput | ExamMarksEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamMarksEntries.
     */
    cursor?: ExamMarksEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamMarksEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamMarksEntries.
     */
    skip?: number
    distinct?: ExamMarksEntryScalarFieldEnum | ExamMarksEntryScalarFieldEnum[]
  }


  /**
   * ExamMarksEntry create
   */
  export type ExamMarksEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamMarksEntry.
     */
    data: XOR<ExamMarksEntryCreateInput, ExamMarksEntryUncheckedCreateInput>
  }


  /**
   * ExamMarksEntry createMany
   */
  export type ExamMarksEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamMarksEntries.
     */
    data: ExamMarksEntryCreateManyInput | ExamMarksEntryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ExamMarksEntry update
   */
  export type ExamMarksEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamMarksEntry.
     */
    data: XOR<ExamMarksEntryUpdateInput, ExamMarksEntryUncheckedUpdateInput>
    /**
     * Choose, which ExamMarksEntry to update.
     */
    where: ExamMarksEntryWhereUniqueInput
  }


  /**
   * ExamMarksEntry updateMany
   */
  export type ExamMarksEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamMarksEntries.
     */
    data: XOR<ExamMarksEntryUpdateManyMutationInput, ExamMarksEntryUncheckedUpdateManyInput>
    /**
     * Filter which ExamMarksEntries to update
     */
    where?: ExamMarksEntryWhereInput
  }


  /**
   * ExamMarksEntry upsert
   */
  export type ExamMarksEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamMarksEntry to update in case it exists.
     */
    where: ExamMarksEntryWhereUniqueInput
    /**
     * In case the ExamMarksEntry found by the `where` argument doesn't exist, create a new ExamMarksEntry with this data.
     */
    create: XOR<ExamMarksEntryCreateInput, ExamMarksEntryUncheckedCreateInput>
    /**
     * In case the ExamMarksEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamMarksEntryUpdateInput, ExamMarksEntryUncheckedUpdateInput>
  }


  /**
   * ExamMarksEntry delete
   */
  export type ExamMarksEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
    /**
     * Filter which ExamMarksEntry to delete.
     */
    where: ExamMarksEntryWhereUniqueInput
  }


  /**
   * ExamMarksEntry deleteMany
   */
  export type ExamMarksEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamMarksEntries to delete
     */
    where?: ExamMarksEntryWhereInput
  }


  /**
   * ExamMarksEntry without action
   */
  export type ExamMarksEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamMarksEntry
     */
    select?: ExamMarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExamMarksEntryInclude<ExtArgs> | null
  }



  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    studentId: string | null
    date: Date | null
    isPresent: boolean | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    studentId: string | null
    date: Date | null
    isPresent: boolean | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    courseId: number
    studentId: number
    date: number
    isPresent: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    date?: true
    isPresent?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    date?: true
    isPresent?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    date?: true
    isPresent?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    courseId: string
    studentId: string
    date: Date
    isPresent: boolean
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    date?: boolean
    isPresent?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    date?: boolean
    isPresent?: boolean
  }

  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }


  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      studentId: string
      date: Date
      isPresent: boolean
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }


  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttendanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Attendance that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttendanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttendanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
    **/
    create<T extends AttendanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Attendances.
     *     @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     *     @example
     *     // Create many Attendances
     *     const attendance = await prisma.attendance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttendanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
    **/
    delete<T extends AttendanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttendanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttendanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttendanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
    **/
    upsert<T extends AttendanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>
    ): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Attendance model
   */ 
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly courseId: FieldRef<"Attendance", 'String'>
    readonly studentId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly isPresent: FieldRef<"Attendance", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }


  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }


  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }


  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }


  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }


  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }


  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }


  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
  }


  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }


  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }


  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
  }


  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttendanceInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    rollNo: 'rollNo',
    fullName: 'fullName',
    semesterId: 'semesterId',
    branchId: 'branchId',
    mobileNo: 'mobileNo',
    email: 'email',
    userId: 'userId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const FacultyScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    department: 'department',
    email: 'email',
    userId: 'userId'
  };

  export type FacultyScalarFieldEnum = (typeof FacultyScalarFieldEnum)[keyof typeof FacultyScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    userId: 'userId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const SemesterScalarFieldEnum: {
    id: 'id',
    sem: 'sem'
  };

  export type SemesterScalarFieldEnum = (typeof SemesterScalarFieldEnum)[keyof typeof SemesterScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    name: 'name',
    semesterId: 'semesterId',
    branchId: 'branchId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const StudentCourseRegistrationScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    studentId: 'studentId'
  };

  export type StudentCourseRegistrationScalarFieldEnum = (typeof StudentCourseRegistrationScalarFieldEnum)[keyof typeof StudentCourseRegistrationScalarFieldEnum]


  export const FacultyCourseAssignmentScalarFieldEnum: {
    id: 'id',
    facultyId: 'facultyId',
    courseId: 'courseId'
  };

  export type FacultyCourseAssignmentScalarFieldEnum = (typeof FacultyCourseAssignmentScalarFieldEnum)[keyof typeof FacultyCourseAssignmentScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    date: 'date'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const ExamMarksEntryScalarFieldEnum: {
    id: 'id',
    examId: 'examId',
    courseId: 'courseId',
    studentId: 'studentId',
    marksObtained: 'marksObtained',
    remarks: 'remarks'
  };

  export type ExamMarksEntryScalarFieldEnum = (typeof ExamMarksEntryScalarFieldEnum)[keyof typeof ExamMarksEntryScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    studentId: 'studentId',
    date: 'date',
    isPresent: 'isPresent'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'userType'
   */
  export type EnumuserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userType'>
    


  /**
   * Reference to a field of type 'userType[]'
   */
  export type ListEnumuserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'userType[]'>
    


  /**
   * Reference to a field of type 'departmentType'
   */
  export type EnumdepartmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'departmentType'>
    


  /**
   * Reference to a field of type 'departmentType[]'
   */
  export type ListEnumdepartmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'departmentType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'examType'
   */
  export type EnumexamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'examType'>
    


  /**
   * Reference to a field of type 'examType[]'
   */
  export type ListEnumexamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'examType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumuserTypeFilter<"User"> | $Enums.userType
    student?: XOR<StudentNullableRelationFilter, StudentWhereInput> | null
    faculty?: XOR<FacultyNullableRelationFilter, FacultyWhereInput> | null
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    student?: StudentOrderByWithRelationInput
    faculty?: FacultyOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumuserTypeFilter<"User"> | $Enums.userType
    student?: XOR<StudentNullableRelationFilter, StudentWhereInput> | null
    faculty?: XOR<FacultyNullableRelationFilter, FacultyWhereInput> | null
    admin?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumuserTypeWithAggregatesFilter<"User"> | $Enums.userType
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: UuidFilter<"Student"> | string
    rollNo?: StringFilter<"Student"> | string
    fullName?: StringFilter<"Student"> | string
    semesterId?: UuidFilter<"Student"> | string
    branchId?: UuidFilter<"Student"> | string
    mobileNo?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    userId?: UuidFilter<"Student"> | string
    semester?: XOR<SemesterRelationFilter, SemesterWhereInput>
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    courseRegistered?: StudentCourseRegistrationListRelationFilter
    attendances?: AttendanceListRelationFilter
    examEntries?: ExamMarksEntryListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    rollNo?: SortOrder
    fullName?: SortOrder
    semesterId?: SortOrder
    branchId?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    semester?: SemesterOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    courseRegistered?: StudentCourseRegistrationOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    examEntries?: ExamMarksEntryOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rollNo?: string
    userId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    fullName?: StringFilter<"Student"> | string
    semesterId?: UuidFilter<"Student"> | string
    branchId?: UuidFilter<"Student"> | string
    mobileNo?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    semester?: XOR<SemesterRelationFilter, SemesterWhereInput>
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    courseRegistered?: StudentCourseRegistrationListRelationFilter
    attendances?: AttendanceListRelationFilter
    examEntries?: ExamMarksEntryListRelationFilter
  }, "id" | "rollNo" | "userId">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    rollNo?: SortOrder
    fullName?: SortOrder
    semesterId?: SortOrder
    branchId?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Student"> | string
    rollNo?: StringWithAggregatesFilter<"Student"> | string
    fullName?: StringWithAggregatesFilter<"Student"> | string
    semesterId?: UuidWithAggregatesFilter<"Student"> | string
    branchId?: UuidWithAggregatesFilter<"Student"> | string
    mobileNo?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    userId?: UuidWithAggregatesFilter<"Student"> | string
  }

  export type FacultyWhereInput = {
    AND?: FacultyWhereInput | FacultyWhereInput[]
    OR?: FacultyWhereInput[]
    NOT?: FacultyWhereInput | FacultyWhereInput[]
    id?: UuidFilter<"Faculty"> | string
    fullName?: StringFilter<"Faculty"> | string
    department?: EnumdepartmentTypeFilter<"Faculty"> | $Enums.departmentType
    email?: StringFilter<"Faculty"> | string
    userId?: UuidFilter<"Faculty"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    courseAssigned?: FacultyCourseAssignmentListRelationFilter
  }

  export type FacultyOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    department?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    courseAssigned?: FacultyCourseAssignmentOrderByRelationAggregateInput
  }

  export type FacultyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: FacultyWhereInput | FacultyWhereInput[]
    OR?: FacultyWhereInput[]
    NOT?: FacultyWhereInput | FacultyWhereInput[]
    fullName?: StringFilter<"Faculty"> | string
    department?: EnumdepartmentTypeFilter<"Faculty"> | $Enums.departmentType
    email?: StringFilter<"Faculty"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    courseAssigned?: FacultyCourseAssignmentListRelationFilter
  }, "id" | "userId">

  export type FacultyOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    department?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    _count?: FacultyCountOrderByAggregateInput
    _max?: FacultyMaxOrderByAggregateInput
    _min?: FacultyMinOrderByAggregateInput
  }

  export type FacultyScalarWhereWithAggregatesInput = {
    AND?: FacultyScalarWhereWithAggregatesInput | FacultyScalarWhereWithAggregatesInput[]
    OR?: FacultyScalarWhereWithAggregatesInput[]
    NOT?: FacultyScalarWhereWithAggregatesInput | FacultyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Faculty"> | string
    fullName?: StringWithAggregatesFilter<"Faculty"> | string
    department?: EnumdepartmentTypeWithAggregatesFilter<"Faculty"> | $Enums.departmentType
    email?: StringWithAggregatesFilter<"Faculty"> | string
    userId?: UuidWithAggregatesFilter<"Faculty"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: UuidFilter<"Admin"> | string
    fullName?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    userId?: UuidFilter<"Admin"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    fullName?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    userId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Admin"> | string
    fullName?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    userId?: UuidWithAggregatesFilter<"Admin"> | string
  }

  export type SemesterWhereInput = {
    AND?: SemesterWhereInput | SemesterWhereInput[]
    OR?: SemesterWhereInput[]
    NOT?: SemesterWhereInput | SemesterWhereInput[]
    id?: UuidFilter<"Semester"> | string
    sem?: IntFilter<"Semester"> | number
    course?: CourseListRelationFilter
    student?: StudentListRelationFilter
  }

  export type SemesterOrderByWithRelationInput = {
    id?: SortOrder
    sem?: SortOrder
    course?: CourseOrderByRelationAggregateInput
    student?: StudentOrderByRelationAggregateInput
  }

  export type SemesterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sem?: number
    AND?: SemesterWhereInput | SemesterWhereInput[]
    OR?: SemesterWhereInput[]
    NOT?: SemesterWhereInput | SemesterWhereInput[]
    course?: CourseListRelationFilter
    student?: StudentListRelationFilter
  }, "id" | "sem">

  export type SemesterOrderByWithAggregationInput = {
    id?: SortOrder
    sem?: SortOrder
    _count?: SemesterCountOrderByAggregateInput
    _avg?: SemesterAvgOrderByAggregateInput
    _max?: SemesterMaxOrderByAggregateInput
    _min?: SemesterMinOrderByAggregateInput
    _sum?: SemesterSumOrderByAggregateInput
  }

  export type SemesterScalarWhereWithAggregatesInput = {
    AND?: SemesterScalarWhereWithAggregatesInput | SemesterScalarWhereWithAggregatesInput[]
    OR?: SemesterScalarWhereWithAggregatesInput[]
    NOT?: SemesterScalarWhereWithAggregatesInput | SemesterScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Semester"> | string
    sem?: IntWithAggregatesFilter<"Semester"> | number
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: UuidFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    course?: CourseListRelationFilter
    student?: StudentListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    course?: CourseOrderByRelationAggregateInput
    student?: StudentOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    course?: CourseListRelationFilter
    student?: StudentListRelationFilter
  }, "id" | "name">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: UuidFilter<"Course"> | string
    courseId?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    semesterId?: UuidFilter<"Course"> | string
    branchId?: UuidFilter<"Course"> | string
    semester?: XOR<SemesterRelationFilter, SemesterWhereInput>
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    studentRegistered?: StudentCourseRegistrationListRelationFilter
    facultyAssigned?: FacultyCourseAssignmentListRelationFilter
    attendances?: AttendanceListRelationFilter
    examEntries?: ExamMarksEntryListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    semesterId?: SortOrder
    branchId?: SortOrder
    semester?: SemesterOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    studentRegistered?: StudentCourseRegistrationOrderByRelationAggregateInput
    facultyAssigned?: FacultyCourseAssignmentOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    examEntries?: ExamMarksEntryOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    semesterId?: UuidFilter<"Course"> | string
    branchId?: UuidFilter<"Course"> | string
    semester?: XOR<SemesterRelationFilter, SemesterWhereInput>
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    studentRegistered?: StudentCourseRegistrationListRelationFilter
    facultyAssigned?: FacultyCourseAssignmentListRelationFilter
    attendances?: AttendanceListRelationFilter
    examEntries?: ExamMarksEntryListRelationFilter
  }, "id" | "courseId">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    semesterId?: SortOrder
    branchId?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Course"> | string
    courseId?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    semesterId?: UuidWithAggregatesFilter<"Course"> | string
    branchId?: UuidWithAggregatesFilter<"Course"> | string
  }

  export type StudentCourseRegistrationWhereInput = {
    AND?: StudentCourseRegistrationWhereInput | StudentCourseRegistrationWhereInput[]
    OR?: StudentCourseRegistrationWhereInput[]
    NOT?: StudentCourseRegistrationWhereInput | StudentCourseRegistrationWhereInput[]
    id?: UuidFilter<"StudentCourseRegistration"> | string
    courseId?: UuidFilter<"StudentCourseRegistration"> | string
    studentId?: UuidFilter<"StudentCourseRegistration"> | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type StudentCourseRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    course?: CourseOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type StudentCourseRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentCourseRegistrationWhereInput | StudentCourseRegistrationWhereInput[]
    OR?: StudentCourseRegistrationWhereInput[]
    NOT?: StudentCourseRegistrationWhereInput | StudentCourseRegistrationWhereInput[]
    courseId?: UuidFilter<"StudentCourseRegistration"> | string
    studentId?: UuidFilter<"StudentCourseRegistration"> | string
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }, "id">

  export type StudentCourseRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    _count?: StudentCourseRegistrationCountOrderByAggregateInput
    _max?: StudentCourseRegistrationMaxOrderByAggregateInput
    _min?: StudentCourseRegistrationMinOrderByAggregateInput
  }

  export type StudentCourseRegistrationScalarWhereWithAggregatesInput = {
    AND?: StudentCourseRegistrationScalarWhereWithAggregatesInput | StudentCourseRegistrationScalarWhereWithAggregatesInput[]
    OR?: StudentCourseRegistrationScalarWhereWithAggregatesInput[]
    NOT?: StudentCourseRegistrationScalarWhereWithAggregatesInput | StudentCourseRegistrationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"StudentCourseRegistration"> | string
    courseId?: UuidWithAggregatesFilter<"StudentCourseRegistration"> | string
    studentId?: UuidWithAggregatesFilter<"StudentCourseRegistration"> | string
  }

  export type FacultyCourseAssignmentWhereInput = {
    AND?: FacultyCourseAssignmentWhereInput | FacultyCourseAssignmentWhereInput[]
    OR?: FacultyCourseAssignmentWhereInput[]
    NOT?: FacultyCourseAssignmentWhereInput | FacultyCourseAssignmentWhereInput[]
    id?: UuidFilter<"FacultyCourseAssignment"> | string
    facultyId?: UuidFilter<"FacultyCourseAssignment"> | string
    courseId?: UuidFilter<"FacultyCourseAssignment"> | string
    faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }

  export type FacultyCourseAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    facultyId?: SortOrder
    courseId?: SortOrder
    faculty?: FacultyOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type FacultyCourseAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacultyCourseAssignmentWhereInput | FacultyCourseAssignmentWhereInput[]
    OR?: FacultyCourseAssignmentWhereInput[]
    NOT?: FacultyCourseAssignmentWhereInput | FacultyCourseAssignmentWhereInput[]
    facultyId?: UuidFilter<"FacultyCourseAssignment"> | string
    courseId?: UuidFilter<"FacultyCourseAssignment"> | string
    faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }, "id">

  export type FacultyCourseAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    facultyId?: SortOrder
    courseId?: SortOrder
    _count?: FacultyCourseAssignmentCountOrderByAggregateInput
    _max?: FacultyCourseAssignmentMaxOrderByAggregateInput
    _min?: FacultyCourseAssignmentMinOrderByAggregateInput
  }

  export type FacultyCourseAssignmentScalarWhereWithAggregatesInput = {
    AND?: FacultyCourseAssignmentScalarWhereWithAggregatesInput | FacultyCourseAssignmentScalarWhereWithAggregatesInput[]
    OR?: FacultyCourseAssignmentScalarWhereWithAggregatesInput[]
    NOT?: FacultyCourseAssignmentScalarWhereWithAggregatesInput | FacultyCourseAssignmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FacultyCourseAssignment"> | string
    facultyId?: UuidWithAggregatesFilter<"FacultyCourseAssignment"> | string
    courseId?: UuidWithAggregatesFilter<"FacultyCourseAssignment"> | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: UuidFilter<"Exam"> | string
    name?: EnumexamTypeFilter<"Exam"> | $Enums.examType
    code?: StringFilter<"Exam"> | string
    date?: DateTimeFilter<"Exam"> | Date | string
    marksEntries?: ExamMarksEntryListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    date?: SortOrder
    marksEntries?: ExamMarksEntryOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    name?: EnumexamTypeFilter<"Exam"> | $Enums.examType
    date?: DateTimeFilter<"Exam"> | Date | string
    marksEntries?: ExamMarksEntryListRelationFilter
  }, "id" | "code">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    date?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Exam"> | string
    name?: EnumexamTypeWithAggregatesFilter<"Exam"> | $Enums.examType
    code?: StringWithAggregatesFilter<"Exam"> | string
    date?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
  }

  export type ExamMarksEntryWhereInput = {
    AND?: ExamMarksEntryWhereInput | ExamMarksEntryWhereInput[]
    OR?: ExamMarksEntryWhereInput[]
    NOT?: ExamMarksEntryWhereInput | ExamMarksEntryWhereInput[]
    id?: UuidFilter<"ExamMarksEntry"> | string
    examId?: UuidFilter<"ExamMarksEntry"> | string
    courseId?: UuidFilter<"ExamMarksEntry"> | string
    studentId?: UuidFilter<"ExamMarksEntry"> | string
    marksObtained?: FloatFilter<"ExamMarksEntry"> | number
    remarks?: StringNullableFilter<"ExamMarksEntry"> | string | null
    exam?: XOR<ExamRelationFilter, ExamWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type ExamMarksEntryOrderByWithRelationInput = {
    id?: SortOrder
    examId?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    marksObtained?: SortOrder
    remarks?: SortOrderInput | SortOrder
    exam?: ExamOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type ExamMarksEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamMarksEntryWhereInput | ExamMarksEntryWhereInput[]
    OR?: ExamMarksEntryWhereInput[]
    NOT?: ExamMarksEntryWhereInput | ExamMarksEntryWhereInput[]
    examId?: UuidFilter<"ExamMarksEntry"> | string
    courseId?: UuidFilter<"ExamMarksEntry"> | string
    studentId?: UuidFilter<"ExamMarksEntry"> | string
    marksObtained?: FloatFilter<"ExamMarksEntry"> | number
    remarks?: StringNullableFilter<"ExamMarksEntry"> | string | null
    exam?: XOR<ExamRelationFilter, ExamWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }, "id">

  export type ExamMarksEntryOrderByWithAggregationInput = {
    id?: SortOrder
    examId?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    marksObtained?: SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: ExamMarksEntryCountOrderByAggregateInput
    _avg?: ExamMarksEntryAvgOrderByAggregateInput
    _max?: ExamMarksEntryMaxOrderByAggregateInput
    _min?: ExamMarksEntryMinOrderByAggregateInput
    _sum?: ExamMarksEntrySumOrderByAggregateInput
  }

  export type ExamMarksEntryScalarWhereWithAggregatesInput = {
    AND?: ExamMarksEntryScalarWhereWithAggregatesInput | ExamMarksEntryScalarWhereWithAggregatesInput[]
    OR?: ExamMarksEntryScalarWhereWithAggregatesInput[]
    NOT?: ExamMarksEntryScalarWhereWithAggregatesInput | ExamMarksEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ExamMarksEntry"> | string
    examId?: UuidWithAggregatesFilter<"ExamMarksEntry"> | string
    courseId?: UuidWithAggregatesFilter<"ExamMarksEntry"> | string
    studentId?: UuidWithAggregatesFilter<"ExamMarksEntry"> | string
    marksObtained?: FloatWithAggregatesFilter<"ExamMarksEntry"> | number
    remarks?: StringNullableWithAggregatesFilter<"ExamMarksEntry"> | string | null
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: UuidFilter<"Attendance"> | string
    courseId?: UuidFilter<"Attendance"> | string
    studentId?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    isPresent?: BoolFilter<"Attendance"> | boolean
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    student?: StudentOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    courseId?: UuidFilter<"Attendance"> | string
    studentId?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    isPresent?: BoolFilter<"Attendance"> | boolean
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Attendance"> | string
    courseId?: UuidWithAggregatesFilter<"Attendance"> | string
    studentId?: UuidWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    isPresent?: BoolWithAggregatesFilter<"Attendance"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.userType
    student?: StudentCreateNestedOneWithoutUserInput
    faculty?: FacultyCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.userType
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    faculty?: FacultyUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    student?: StudentUpdateOneWithoutUserNestedInput
    faculty?: FacultyUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    faculty?: FacultyUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.userType
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
  }

  export type StudentCreateInput = {
    id?: string
    rollNo: string
    fullName: string
    mobileNo: string
    email: string
    semester: SemesterCreateNestedOneWithoutStudentInput
    branch: BranchCreateNestedOneWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
    courseRegistered?: StudentCourseRegistrationCreateNestedManyWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
    courseRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutStudentNestedInput
    branch?: BranchUpdateOneRequiredWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: StudentCourseRegistrationUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyCreateInput = {
    id?: string
    fullName: string
    department: $Enums.departmentType
    email: string
    user: UserCreateNestedOneWithoutFacultyInput
    courseAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateInput = {
    id?: string
    fullName: string
    department: $Enums.departmentType
    email: string
    userId: string
    courseAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: EnumdepartmentTypeFieldUpdateOperationsInput | $Enums.departmentType
    email?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFacultyNestedInput
    courseAssigned?: FacultyCourseAssignmentUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: EnumdepartmentTypeFieldUpdateOperationsInput | $Enums.departmentType
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyCreateManyInput = {
    id?: string
    fullName: string
    department: $Enums.departmentType
    email: string
    userId: string
  }

  export type FacultyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: EnumdepartmentTypeFieldUpdateOperationsInput | $Enums.departmentType
    email?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: EnumdepartmentTypeFieldUpdateOperationsInput | $Enums.departmentType
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    id?: string
    fullName: string
    email: string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    userId: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    fullName: string
    email: string
    userId: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterCreateInput = {
    id?: string
    sem: number
    course?: CourseCreateNestedManyWithoutSemesterInput
    student?: StudentCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateInput = {
    id?: string
    sem: number
    course?: CourseUncheckedCreateNestedManyWithoutSemesterInput
    student?: StudentUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateManyWithoutSemesterNestedInput
    student?: StudentUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    course?: CourseUncheckedUpdateManyWithoutSemesterNestedInput
    student?: StudentUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterCreateManyInput = {
    id?: string
    sem: number
  }

  export type SemesterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
  }

  export type SemesterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    course?: CourseCreateNestedManyWithoutBranchInput
    student?: StudentCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    course?: CourseUncheckedCreateNestedManyWithoutBranchInput
    student?: StudentUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateManyWithoutBranchNestedInput
    student?: StudentUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUncheckedUpdateManyWithoutBranchNestedInput
    student?: StudentUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id?: string
    courseId: string
    name: string
    semester: SemesterCreateNestedOneWithoutCourseInput
    branch: BranchCreateNestedOneWithoutCourseInput
    studentRegistered?: StudentCourseRegistrationCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    courseId: string
    name: string
    semesterId: string
    branchId: string
    studentRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutCourseNestedInput
    branch?: BranchUpdateOneRequiredWithoutCourseNestedInput
    studentRegistered?: StudentCourseRegistrationUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    studentRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    courseId: string
    name: string
    semesterId: string
    branchId: string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCourseRegistrationCreateInput = {
    id?: string
    course: CourseCreateNestedOneWithoutStudentRegisteredInput
    student: StudentCreateNestedOneWithoutCourseRegisteredInput
  }

  export type StudentCourseRegistrationUncheckedCreateInput = {
    id?: string
    courseId: string
    studentId: string
  }

  export type StudentCourseRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutStudentRegisteredNestedInput
    student?: StudentUpdateOneRequiredWithoutCourseRegisteredNestedInput
  }

  export type StudentCourseRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCourseRegistrationCreateManyInput = {
    id?: string
    courseId: string
    studentId: string
  }

  export type StudentCourseRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCourseRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyCourseAssignmentCreateInput = {
    id?: string
    faculty: FacultyCreateNestedOneWithoutCourseAssignedInput
    course: CourseCreateNestedOneWithoutFacultyAssignedInput
  }

  export type FacultyCourseAssignmentUncheckedCreateInput = {
    id?: string
    facultyId: string
    courseId: string
  }

  export type FacultyCourseAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    faculty?: FacultyUpdateOneRequiredWithoutCourseAssignedNestedInput
    course?: CourseUpdateOneRequiredWithoutFacultyAssignedNestedInput
  }

  export type FacultyCourseAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyCourseAssignmentCreateManyInput = {
    id?: string
    facultyId: string
    courseId: string
  }

  export type FacultyCourseAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyCourseAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type ExamCreateInput = {
    id?: string
    name: $Enums.examType
    code: string
    date?: Date | string
    marksEntries?: ExamMarksEntryCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    name: $Enums.examType
    code: string
    date?: Date | string
    marksEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    marksEntries?: ExamMarksEntryUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    marksEntries?: ExamMarksEntryUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: string
    name: $Enums.examType
    code: string
    date?: Date | string
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamMarksEntryCreateInput = {
    id?: string
    marksObtained: number
    remarks?: string | null
    exam: ExamCreateNestedOneWithoutMarksEntriesInput
    course: CourseCreateNestedOneWithoutExamEntriesInput
    student: StudentCreateNestedOneWithoutExamEntriesInput
  }

  export type ExamMarksEntryUncheckedCreateInput = {
    id?: string
    examId: string
    courseId: string
    studentId: string
    marksObtained: number
    remarks?: string | null
  }

  export type ExamMarksEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    exam?: ExamUpdateOneRequiredWithoutMarksEntriesNestedInput
    course?: CourseUpdateOneRequiredWithoutExamEntriesNestedInput
    student?: StudentUpdateOneRequiredWithoutExamEntriesNestedInput
  }

  export type ExamMarksEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamMarksEntryCreateManyInput = {
    id?: string
    examId: string
    courseId: string
    studentId: string
    marksObtained: number
    remarks?: string | null
  }

  export type ExamMarksEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamMarksEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateInput = {
    id?: string
    date?: Date | string
    isPresent: boolean
    student: StudentCreateNestedOneWithoutAttendancesInput
    course: CourseCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    courseId: string
    studentId: string
    date?: Date | string
    isPresent: boolean
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneRequiredWithoutAttendancesNestedInput
    course?: CourseUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendanceCreateManyInput = {
    id?: string
    courseId: string
    studentId: string
    date?: Date | string
    isPresent: boolean
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumuserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumuserTypeFilter<$PrismaModel> | $Enums.userType
  }

  export type StudentNullableRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type FacultyNullableRelationFilter = {
    is?: FacultyWhereInput | null
    isNot?: FacultyWhereInput | null
  }

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumuserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumuserTypeWithAggregatesFilter<$PrismaModel> | $Enums.userType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserTypeFilter<$PrismaModel>
    _max?: NestedEnumuserTypeFilter<$PrismaModel>
  }

  export type SemesterRelationFilter = {
    is?: SemesterWhereInput
    isNot?: SemesterWhereInput
  }

  export type BranchRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudentCourseRegistrationListRelationFilter = {
    every?: StudentCourseRegistrationWhereInput
    some?: StudentCourseRegistrationWhereInput
    none?: StudentCourseRegistrationWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type ExamMarksEntryListRelationFilter = {
    every?: ExamMarksEntryWhereInput
    some?: ExamMarksEntryWhereInput
    none?: ExamMarksEntryWhereInput
  }

  export type StudentCourseRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamMarksEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    rollNo?: SortOrder
    fullName?: SortOrder
    semesterId?: SortOrder
    branchId?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    rollNo?: SortOrder
    fullName?: SortOrder
    semesterId?: SortOrder
    branchId?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    rollNo?: SortOrder
    fullName?: SortOrder
    semesterId?: SortOrder
    branchId?: SortOrder
    mobileNo?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type EnumdepartmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.departmentType | EnumdepartmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.departmentType[] | ListEnumdepartmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.departmentType[] | ListEnumdepartmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumdepartmentTypeFilter<$PrismaModel> | $Enums.departmentType
  }

  export type FacultyCourseAssignmentListRelationFilter = {
    every?: FacultyCourseAssignmentWhereInput
    some?: FacultyCourseAssignmentWhereInput
    none?: FacultyCourseAssignmentWhereInput
  }

  export type FacultyCourseAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultyCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    department?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type FacultyMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    department?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type FacultyMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    department?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type EnumdepartmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.departmentType | EnumdepartmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.departmentType[] | ListEnumdepartmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.departmentType[] | ListEnumdepartmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumdepartmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.departmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdepartmentTypeFilter<$PrismaModel>
    _max?: NestedEnumdepartmentTypeFilter<$PrismaModel>
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SemesterCountOrderByAggregateInput = {
    id?: SortOrder
    sem?: SortOrder
  }

  export type SemesterAvgOrderByAggregateInput = {
    sem?: SortOrder
  }

  export type SemesterMaxOrderByAggregateInput = {
    id?: SortOrder
    sem?: SortOrder
  }

  export type SemesterMinOrderByAggregateInput = {
    id?: SortOrder
    sem?: SortOrder
  }

  export type SemesterSumOrderByAggregateInput = {
    sem?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    semesterId?: SortOrder
    branchId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    semesterId?: SortOrder
    branchId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    semesterId?: SortOrder
    branchId?: SortOrder
  }

  export type CourseRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentCourseRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
  }

  export type StudentCourseRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
  }

  export type StudentCourseRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
  }

  export type FacultyRelationFilter = {
    is?: FacultyWhereInput
    isNot?: FacultyWhereInput
  }

  export type FacultyCourseAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    facultyId?: SortOrder
    courseId?: SortOrder
  }

  export type FacultyCourseAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    facultyId?: SortOrder
    courseId?: SortOrder
  }

  export type FacultyCourseAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    facultyId?: SortOrder
    courseId?: SortOrder
  }

  export type EnumexamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.examType | EnumexamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumexamTypeFilter<$PrismaModel> | $Enums.examType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    date?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    date?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    date?: SortOrder
  }

  export type EnumexamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.examType | EnumexamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumexamTypeWithAggregatesFilter<$PrismaModel> | $Enums.examType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumexamTypeFilter<$PrismaModel>
    _max?: NestedEnumexamTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ExamRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExamMarksEntryCountOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    marksObtained?: SortOrder
    remarks?: SortOrder
  }

  export type ExamMarksEntryAvgOrderByAggregateInput = {
    marksObtained?: SortOrder
  }

  export type ExamMarksEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    marksObtained?: SortOrder
    remarks?: SortOrder
  }

  export type ExamMarksEntryMinOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    marksObtained?: SortOrder
    remarks?: SortOrder
  }

  export type ExamMarksEntrySumOrderByAggregateInput = {
    marksObtained?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type FacultyCreateNestedOneWithoutUserInput = {
    create?: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutUserInput
    connect?: FacultyWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type FacultyUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutUserInput
    connect?: FacultyWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumuserTypeFieldUpdateOperationsInput = {
    set?: $Enums.userType
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type FacultyUpdateOneWithoutUserNestedInput = {
    create?: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutUserInput
    upsert?: FacultyUpsertWithoutUserInput
    disconnect?: FacultyWhereInput | boolean
    delete?: FacultyWhereInput | boolean
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutUserInput, FacultyUpdateWithoutUserInput>, FacultyUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type FacultyUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutUserInput
    upsert?: FacultyUpsertWithoutUserInput
    disconnect?: FacultyWhereInput | boolean
    delete?: FacultyWhereInput | boolean
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutUserInput, FacultyUpdateWithoutUserInput>, FacultyUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type SemesterCreateNestedOneWithoutStudentInput = {
    create?: XOR<SemesterCreateWithoutStudentInput, SemesterUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutStudentInput
    connect?: SemesterWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutStudentInput = {
    create?: XOR<BranchCreateWithoutStudentInput, BranchUncheckedCreateWithoutStudentInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStudentInput
    connect?: BranchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type StudentCourseRegistrationCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentCourseRegistrationCreateWithoutStudentInput, StudentCourseRegistrationUncheckedCreateWithoutStudentInput> | StudentCourseRegistrationCreateWithoutStudentInput[] | StudentCourseRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentCourseRegistrationCreateOrConnectWithoutStudentInput | StudentCourseRegistrationCreateOrConnectWithoutStudentInput[]
    createMany?: StudentCourseRegistrationCreateManyStudentInputEnvelope
    connect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ExamMarksEntryCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExamMarksEntryCreateWithoutStudentInput, ExamMarksEntryUncheckedCreateWithoutStudentInput> | ExamMarksEntryCreateWithoutStudentInput[] | ExamMarksEntryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutStudentInput | ExamMarksEntryCreateOrConnectWithoutStudentInput[]
    createMany?: ExamMarksEntryCreateManyStudentInputEnvelope
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
  }

  export type StudentCourseRegistrationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentCourseRegistrationCreateWithoutStudentInput, StudentCourseRegistrationUncheckedCreateWithoutStudentInput> | StudentCourseRegistrationCreateWithoutStudentInput[] | StudentCourseRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentCourseRegistrationCreateOrConnectWithoutStudentInput | StudentCourseRegistrationCreateOrConnectWithoutStudentInput[]
    createMany?: StudentCourseRegistrationCreateManyStudentInputEnvelope
    connect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ExamMarksEntryUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExamMarksEntryCreateWithoutStudentInput, ExamMarksEntryUncheckedCreateWithoutStudentInput> | ExamMarksEntryCreateWithoutStudentInput[] | ExamMarksEntryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutStudentInput | ExamMarksEntryCreateOrConnectWithoutStudentInput[]
    createMany?: ExamMarksEntryCreateManyStudentInputEnvelope
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
  }

  export type SemesterUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<SemesterCreateWithoutStudentInput, SemesterUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutStudentInput
    upsert?: SemesterUpsertWithoutStudentInput
    connect?: SemesterWhereUniqueInput
    update?: XOR<XOR<SemesterUpdateToOneWithWhereWithoutStudentInput, SemesterUpdateWithoutStudentInput>, SemesterUncheckedUpdateWithoutStudentInput>
  }

  export type BranchUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<BranchCreateWithoutStudentInput, BranchUncheckedCreateWithoutStudentInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStudentInput
    upsert?: BranchUpsertWithoutStudentInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutStudentInput, BranchUpdateWithoutStudentInput>, BranchUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type StudentCourseRegistrationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentCourseRegistrationCreateWithoutStudentInput, StudentCourseRegistrationUncheckedCreateWithoutStudentInput> | StudentCourseRegistrationCreateWithoutStudentInput[] | StudentCourseRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentCourseRegistrationCreateOrConnectWithoutStudentInput | StudentCourseRegistrationCreateOrConnectWithoutStudentInput[]
    upsert?: StudentCourseRegistrationUpsertWithWhereUniqueWithoutStudentInput | StudentCourseRegistrationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentCourseRegistrationCreateManyStudentInputEnvelope
    set?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    disconnect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    delete?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    connect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    update?: StudentCourseRegistrationUpdateWithWhereUniqueWithoutStudentInput | StudentCourseRegistrationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentCourseRegistrationUpdateManyWithWhereWithoutStudentInput | StudentCourseRegistrationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentCourseRegistrationScalarWhereInput | StudentCourseRegistrationScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ExamMarksEntryUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExamMarksEntryCreateWithoutStudentInput, ExamMarksEntryUncheckedCreateWithoutStudentInput> | ExamMarksEntryCreateWithoutStudentInput[] | ExamMarksEntryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutStudentInput | ExamMarksEntryCreateOrConnectWithoutStudentInput[]
    upsert?: ExamMarksEntryUpsertWithWhereUniqueWithoutStudentInput | ExamMarksEntryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExamMarksEntryCreateManyStudentInputEnvelope
    set?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    disconnect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    delete?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    update?: ExamMarksEntryUpdateWithWhereUniqueWithoutStudentInput | ExamMarksEntryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExamMarksEntryUpdateManyWithWhereWithoutStudentInput | ExamMarksEntryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExamMarksEntryScalarWhereInput | ExamMarksEntryScalarWhereInput[]
  }

  export type StudentCourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentCourseRegistrationCreateWithoutStudentInput, StudentCourseRegistrationUncheckedCreateWithoutStudentInput> | StudentCourseRegistrationCreateWithoutStudentInput[] | StudentCourseRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentCourseRegistrationCreateOrConnectWithoutStudentInput | StudentCourseRegistrationCreateOrConnectWithoutStudentInput[]
    upsert?: StudentCourseRegistrationUpsertWithWhereUniqueWithoutStudentInput | StudentCourseRegistrationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentCourseRegistrationCreateManyStudentInputEnvelope
    set?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    disconnect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    delete?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    connect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    update?: StudentCourseRegistrationUpdateWithWhereUniqueWithoutStudentInput | StudentCourseRegistrationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentCourseRegistrationUpdateManyWithWhereWithoutStudentInput | StudentCourseRegistrationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentCourseRegistrationScalarWhereInput | StudentCourseRegistrationScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ExamMarksEntryUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExamMarksEntryCreateWithoutStudentInput, ExamMarksEntryUncheckedCreateWithoutStudentInput> | ExamMarksEntryCreateWithoutStudentInput[] | ExamMarksEntryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutStudentInput | ExamMarksEntryCreateOrConnectWithoutStudentInput[]
    upsert?: ExamMarksEntryUpsertWithWhereUniqueWithoutStudentInput | ExamMarksEntryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExamMarksEntryCreateManyStudentInputEnvelope
    set?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    disconnect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    delete?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    update?: ExamMarksEntryUpdateWithWhereUniqueWithoutStudentInput | ExamMarksEntryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExamMarksEntryUpdateManyWithWhereWithoutStudentInput | ExamMarksEntryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExamMarksEntryScalarWhereInput | ExamMarksEntryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFacultyInput = {
    create?: XOR<UserCreateWithoutFacultyInput, UserUncheckedCreateWithoutFacultyInput>
    connectOrCreate?: UserCreateOrConnectWithoutFacultyInput
    connect?: UserWhereUniqueInput
  }

  export type FacultyCourseAssignmentCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyCourseAssignmentCreateWithoutFacultyInput, FacultyCourseAssignmentUncheckedCreateWithoutFacultyInput> | FacultyCourseAssignmentCreateWithoutFacultyInput[] | FacultyCourseAssignmentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyCourseAssignmentCreateOrConnectWithoutFacultyInput | FacultyCourseAssignmentCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyCourseAssignmentCreateManyFacultyInputEnvelope
    connect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
  }

  export type FacultyCourseAssignmentUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyCourseAssignmentCreateWithoutFacultyInput, FacultyCourseAssignmentUncheckedCreateWithoutFacultyInput> | FacultyCourseAssignmentCreateWithoutFacultyInput[] | FacultyCourseAssignmentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyCourseAssignmentCreateOrConnectWithoutFacultyInput | FacultyCourseAssignmentCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyCourseAssignmentCreateManyFacultyInputEnvelope
    connect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
  }

  export type EnumdepartmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.departmentType
  }

  export type UserUpdateOneRequiredWithoutFacultyNestedInput = {
    create?: XOR<UserCreateWithoutFacultyInput, UserUncheckedCreateWithoutFacultyInput>
    connectOrCreate?: UserCreateOrConnectWithoutFacultyInput
    upsert?: UserUpsertWithoutFacultyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFacultyInput, UserUpdateWithoutFacultyInput>, UserUncheckedUpdateWithoutFacultyInput>
  }

  export type FacultyCourseAssignmentUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyCourseAssignmentCreateWithoutFacultyInput, FacultyCourseAssignmentUncheckedCreateWithoutFacultyInput> | FacultyCourseAssignmentCreateWithoutFacultyInput[] | FacultyCourseAssignmentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyCourseAssignmentCreateOrConnectWithoutFacultyInput | FacultyCourseAssignmentCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyCourseAssignmentUpsertWithWhereUniqueWithoutFacultyInput | FacultyCourseAssignmentUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyCourseAssignmentCreateManyFacultyInputEnvelope
    set?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    disconnect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    delete?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    connect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    update?: FacultyCourseAssignmentUpdateWithWhereUniqueWithoutFacultyInput | FacultyCourseAssignmentUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyCourseAssignmentUpdateManyWithWhereWithoutFacultyInput | FacultyCourseAssignmentUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyCourseAssignmentScalarWhereInput | FacultyCourseAssignmentScalarWhereInput[]
  }

  export type FacultyCourseAssignmentUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyCourseAssignmentCreateWithoutFacultyInput, FacultyCourseAssignmentUncheckedCreateWithoutFacultyInput> | FacultyCourseAssignmentCreateWithoutFacultyInput[] | FacultyCourseAssignmentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyCourseAssignmentCreateOrConnectWithoutFacultyInput | FacultyCourseAssignmentCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyCourseAssignmentUpsertWithWhereUniqueWithoutFacultyInput | FacultyCourseAssignmentUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyCourseAssignmentCreateManyFacultyInputEnvelope
    set?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    disconnect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    delete?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    connect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    update?: FacultyCourseAssignmentUpdateWithWhereUniqueWithoutFacultyInput | FacultyCourseAssignmentUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyCourseAssignmentUpdateManyWithWhereWithoutFacultyInput | FacultyCourseAssignmentUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyCourseAssignmentScalarWhereInput | FacultyCourseAssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type CourseCreateNestedManyWithoutSemesterInput = {
    create?: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput> | CourseCreateWithoutSemesterInput[] | CourseUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSemesterInput | CourseCreateOrConnectWithoutSemesterInput[]
    createMany?: CourseCreateManySemesterInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutSemesterInput = {
    create?: XOR<StudentCreateWithoutSemesterInput, StudentUncheckedCreateWithoutSemesterInput> | StudentCreateWithoutSemesterInput[] | StudentUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSemesterInput | StudentCreateOrConnectWithoutSemesterInput[]
    createMany?: StudentCreateManySemesterInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput> | CourseCreateWithoutSemesterInput[] | CourseUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSemesterInput | CourseCreateOrConnectWithoutSemesterInput[]
    createMany?: CourseCreateManySemesterInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: XOR<StudentCreateWithoutSemesterInput, StudentUncheckedCreateWithoutSemesterInput> | StudentCreateWithoutSemesterInput[] | StudentUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSemesterInput | StudentCreateOrConnectWithoutSemesterInput[]
    createMany?: StudentCreateManySemesterInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput> | CourseCreateWithoutSemesterInput[] | CourseUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSemesterInput | CourseCreateOrConnectWithoutSemesterInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutSemesterInput | CourseUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: CourseCreateManySemesterInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutSemesterInput | CourseUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutSemesterInput | CourseUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<StudentCreateWithoutSemesterInput, StudentUncheckedCreateWithoutSemesterInput> | StudentCreateWithoutSemesterInput[] | StudentUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSemesterInput | StudentCreateOrConnectWithoutSemesterInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSemesterInput | StudentUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: StudentCreateManySemesterInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSemesterInput | StudentUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSemesterInput | StudentUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput> | CourseCreateWithoutSemesterInput[] | CourseUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSemesterInput | CourseCreateOrConnectWithoutSemesterInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutSemesterInput | CourseUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: CourseCreateManySemesterInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutSemesterInput | CourseUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutSemesterInput | CourseUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<StudentCreateWithoutSemesterInput, StudentUncheckedCreateWithoutSemesterInput> | StudentCreateWithoutSemesterInput[] | StudentUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSemesterInput | StudentCreateOrConnectWithoutSemesterInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutSemesterInput | StudentUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: StudentCreateManySemesterInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutSemesterInput | StudentUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutSemesterInput | StudentUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type CourseCreateNestedManyWithoutBranchInput = {
    create?: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput> | CourseCreateWithoutBranchInput[] | CourseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBranchInput | CourseCreateOrConnectWithoutBranchInput[]
    createMany?: CourseCreateManyBranchInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutBranchInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput> | CourseCreateWithoutBranchInput[] | CourseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBranchInput | CourseCreateOrConnectWithoutBranchInput[]
    createMany?: CourseCreateManyBranchInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutBranchNestedInput = {
    create?: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput> | CourseCreateWithoutBranchInput[] | CourseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBranchInput | CourseCreateOrConnectWithoutBranchInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutBranchInput | CourseUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: CourseCreateManyBranchInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutBranchInput | CourseUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutBranchInput | CourseUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutBranchInput | StudentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutBranchInput | StudentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutBranchInput | StudentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput> | CourseCreateWithoutBranchInput[] | CourseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBranchInput | CourseCreateOrConnectWithoutBranchInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutBranchInput | CourseUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: CourseCreateManyBranchInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutBranchInput | CourseUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutBranchInput | CourseUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutBranchInput | StudentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutBranchInput | StudentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutBranchInput | StudentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type SemesterCreateNestedOneWithoutCourseInput = {
    create?: XOR<SemesterCreateWithoutCourseInput, SemesterUncheckedCreateWithoutCourseInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutCourseInput
    connect?: SemesterWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutCourseInput = {
    create?: XOR<BranchCreateWithoutCourseInput, BranchUncheckedCreateWithoutCourseInput>
    connectOrCreate?: BranchCreateOrConnectWithoutCourseInput
    connect?: BranchWhereUniqueInput
  }

  export type StudentCourseRegistrationCreateNestedManyWithoutCourseInput = {
    create?: XOR<StudentCourseRegistrationCreateWithoutCourseInput, StudentCourseRegistrationUncheckedCreateWithoutCourseInput> | StudentCourseRegistrationCreateWithoutCourseInput[] | StudentCourseRegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: StudentCourseRegistrationCreateOrConnectWithoutCourseInput | StudentCourseRegistrationCreateOrConnectWithoutCourseInput[]
    createMany?: StudentCourseRegistrationCreateManyCourseInputEnvelope
    connect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
  }

  export type FacultyCourseAssignmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<FacultyCourseAssignmentCreateWithoutCourseInput, FacultyCourseAssignmentUncheckedCreateWithoutCourseInput> | FacultyCourseAssignmentCreateWithoutCourseInput[] | FacultyCourseAssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: FacultyCourseAssignmentCreateOrConnectWithoutCourseInput | FacultyCourseAssignmentCreateOrConnectWithoutCourseInput[]
    createMany?: FacultyCourseAssignmentCreateManyCourseInputEnvelope
    connect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutCourseInput = {
    create?: XOR<AttendanceCreateWithoutCourseInput, AttendanceUncheckedCreateWithoutCourseInput> | AttendanceCreateWithoutCourseInput[] | AttendanceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutCourseInput | AttendanceCreateOrConnectWithoutCourseInput[]
    createMany?: AttendanceCreateManyCourseInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ExamMarksEntryCreateNestedManyWithoutCourseInput = {
    create?: XOR<ExamMarksEntryCreateWithoutCourseInput, ExamMarksEntryUncheckedCreateWithoutCourseInput> | ExamMarksEntryCreateWithoutCourseInput[] | ExamMarksEntryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutCourseInput | ExamMarksEntryCreateOrConnectWithoutCourseInput[]
    createMany?: ExamMarksEntryCreateManyCourseInputEnvelope
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
  }

  export type StudentCourseRegistrationUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<StudentCourseRegistrationCreateWithoutCourseInput, StudentCourseRegistrationUncheckedCreateWithoutCourseInput> | StudentCourseRegistrationCreateWithoutCourseInput[] | StudentCourseRegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: StudentCourseRegistrationCreateOrConnectWithoutCourseInput | StudentCourseRegistrationCreateOrConnectWithoutCourseInput[]
    createMany?: StudentCourseRegistrationCreateManyCourseInputEnvelope
    connect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
  }

  export type FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<FacultyCourseAssignmentCreateWithoutCourseInput, FacultyCourseAssignmentUncheckedCreateWithoutCourseInput> | FacultyCourseAssignmentCreateWithoutCourseInput[] | FacultyCourseAssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: FacultyCourseAssignmentCreateOrConnectWithoutCourseInput | FacultyCourseAssignmentCreateOrConnectWithoutCourseInput[]
    createMany?: FacultyCourseAssignmentCreateManyCourseInputEnvelope
    connect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<AttendanceCreateWithoutCourseInput, AttendanceUncheckedCreateWithoutCourseInput> | AttendanceCreateWithoutCourseInput[] | AttendanceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutCourseInput | AttendanceCreateOrConnectWithoutCourseInput[]
    createMany?: AttendanceCreateManyCourseInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ExamMarksEntryUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ExamMarksEntryCreateWithoutCourseInput, ExamMarksEntryUncheckedCreateWithoutCourseInput> | ExamMarksEntryCreateWithoutCourseInput[] | ExamMarksEntryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutCourseInput | ExamMarksEntryCreateOrConnectWithoutCourseInput[]
    createMany?: ExamMarksEntryCreateManyCourseInputEnvelope
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
  }

  export type SemesterUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<SemesterCreateWithoutCourseInput, SemesterUncheckedCreateWithoutCourseInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutCourseInput
    upsert?: SemesterUpsertWithoutCourseInput
    connect?: SemesterWhereUniqueInput
    update?: XOR<XOR<SemesterUpdateToOneWithWhereWithoutCourseInput, SemesterUpdateWithoutCourseInput>, SemesterUncheckedUpdateWithoutCourseInput>
  }

  export type BranchUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<BranchCreateWithoutCourseInput, BranchUncheckedCreateWithoutCourseInput>
    connectOrCreate?: BranchCreateOrConnectWithoutCourseInput
    upsert?: BranchUpsertWithoutCourseInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutCourseInput, BranchUpdateWithoutCourseInput>, BranchUncheckedUpdateWithoutCourseInput>
  }

  export type StudentCourseRegistrationUpdateManyWithoutCourseNestedInput = {
    create?: XOR<StudentCourseRegistrationCreateWithoutCourseInput, StudentCourseRegistrationUncheckedCreateWithoutCourseInput> | StudentCourseRegistrationCreateWithoutCourseInput[] | StudentCourseRegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: StudentCourseRegistrationCreateOrConnectWithoutCourseInput | StudentCourseRegistrationCreateOrConnectWithoutCourseInput[]
    upsert?: StudentCourseRegistrationUpsertWithWhereUniqueWithoutCourseInput | StudentCourseRegistrationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: StudentCourseRegistrationCreateManyCourseInputEnvelope
    set?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    disconnect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    delete?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    connect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    update?: StudentCourseRegistrationUpdateWithWhereUniqueWithoutCourseInput | StudentCourseRegistrationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: StudentCourseRegistrationUpdateManyWithWhereWithoutCourseInput | StudentCourseRegistrationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: StudentCourseRegistrationScalarWhereInput | StudentCourseRegistrationScalarWhereInput[]
  }

  export type FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<FacultyCourseAssignmentCreateWithoutCourseInput, FacultyCourseAssignmentUncheckedCreateWithoutCourseInput> | FacultyCourseAssignmentCreateWithoutCourseInput[] | FacultyCourseAssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: FacultyCourseAssignmentCreateOrConnectWithoutCourseInput | FacultyCourseAssignmentCreateOrConnectWithoutCourseInput[]
    upsert?: FacultyCourseAssignmentUpsertWithWhereUniqueWithoutCourseInput | FacultyCourseAssignmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: FacultyCourseAssignmentCreateManyCourseInputEnvelope
    set?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    disconnect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    delete?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    connect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    update?: FacultyCourseAssignmentUpdateWithWhereUniqueWithoutCourseInput | FacultyCourseAssignmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: FacultyCourseAssignmentUpdateManyWithWhereWithoutCourseInput | FacultyCourseAssignmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: FacultyCourseAssignmentScalarWhereInput | FacultyCourseAssignmentScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutCourseNestedInput = {
    create?: XOR<AttendanceCreateWithoutCourseInput, AttendanceUncheckedCreateWithoutCourseInput> | AttendanceCreateWithoutCourseInput[] | AttendanceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutCourseInput | AttendanceCreateOrConnectWithoutCourseInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutCourseInput | AttendanceUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: AttendanceCreateManyCourseInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutCourseInput | AttendanceUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutCourseInput | AttendanceUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ExamMarksEntryUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ExamMarksEntryCreateWithoutCourseInput, ExamMarksEntryUncheckedCreateWithoutCourseInput> | ExamMarksEntryCreateWithoutCourseInput[] | ExamMarksEntryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutCourseInput | ExamMarksEntryCreateOrConnectWithoutCourseInput[]
    upsert?: ExamMarksEntryUpsertWithWhereUniqueWithoutCourseInput | ExamMarksEntryUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ExamMarksEntryCreateManyCourseInputEnvelope
    set?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    disconnect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    delete?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    update?: ExamMarksEntryUpdateWithWhereUniqueWithoutCourseInput | ExamMarksEntryUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ExamMarksEntryUpdateManyWithWhereWithoutCourseInput | ExamMarksEntryUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ExamMarksEntryScalarWhereInput | ExamMarksEntryScalarWhereInput[]
  }

  export type StudentCourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<StudentCourseRegistrationCreateWithoutCourseInput, StudentCourseRegistrationUncheckedCreateWithoutCourseInput> | StudentCourseRegistrationCreateWithoutCourseInput[] | StudentCourseRegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: StudentCourseRegistrationCreateOrConnectWithoutCourseInput | StudentCourseRegistrationCreateOrConnectWithoutCourseInput[]
    upsert?: StudentCourseRegistrationUpsertWithWhereUniqueWithoutCourseInput | StudentCourseRegistrationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: StudentCourseRegistrationCreateManyCourseInputEnvelope
    set?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    disconnect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    delete?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    connect?: StudentCourseRegistrationWhereUniqueInput | StudentCourseRegistrationWhereUniqueInput[]
    update?: StudentCourseRegistrationUpdateWithWhereUniqueWithoutCourseInput | StudentCourseRegistrationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: StudentCourseRegistrationUpdateManyWithWhereWithoutCourseInput | StudentCourseRegistrationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: StudentCourseRegistrationScalarWhereInput | StudentCourseRegistrationScalarWhereInput[]
  }

  export type FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<FacultyCourseAssignmentCreateWithoutCourseInput, FacultyCourseAssignmentUncheckedCreateWithoutCourseInput> | FacultyCourseAssignmentCreateWithoutCourseInput[] | FacultyCourseAssignmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: FacultyCourseAssignmentCreateOrConnectWithoutCourseInput | FacultyCourseAssignmentCreateOrConnectWithoutCourseInput[]
    upsert?: FacultyCourseAssignmentUpsertWithWhereUniqueWithoutCourseInput | FacultyCourseAssignmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: FacultyCourseAssignmentCreateManyCourseInputEnvelope
    set?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    disconnect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    delete?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    connect?: FacultyCourseAssignmentWhereUniqueInput | FacultyCourseAssignmentWhereUniqueInput[]
    update?: FacultyCourseAssignmentUpdateWithWhereUniqueWithoutCourseInput | FacultyCourseAssignmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: FacultyCourseAssignmentUpdateManyWithWhereWithoutCourseInput | FacultyCourseAssignmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: FacultyCourseAssignmentScalarWhereInput | FacultyCourseAssignmentScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<AttendanceCreateWithoutCourseInput, AttendanceUncheckedCreateWithoutCourseInput> | AttendanceCreateWithoutCourseInput[] | AttendanceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutCourseInput | AttendanceCreateOrConnectWithoutCourseInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutCourseInput | AttendanceUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: AttendanceCreateManyCourseInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutCourseInput | AttendanceUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutCourseInput | AttendanceUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ExamMarksEntryUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ExamMarksEntryCreateWithoutCourseInput, ExamMarksEntryUncheckedCreateWithoutCourseInput> | ExamMarksEntryCreateWithoutCourseInput[] | ExamMarksEntryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutCourseInput | ExamMarksEntryCreateOrConnectWithoutCourseInput[]
    upsert?: ExamMarksEntryUpsertWithWhereUniqueWithoutCourseInput | ExamMarksEntryUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ExamMarksEntryCreateManyCourseInputEnvelope
    set?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    disconnect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    delete?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    update?: ExamMarksEntryUpdateWithWhereUniqueWithoutCourseInput | ExamMarksEntryUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ExamMarksEntryUpdateManyWithWhereWithoutCourseInput | ExamMarksEntryUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ExamMarksEntryScalarWhereInput | ExamMarksEntryScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutStudentRegisteredInput = {
    create?: XOR<CourseCreateWithoutStudentRegisteredInput, CourseUncheckedCreateWithoutStudentRegisteredInput>
    connectOrCreate?: CourseCreateOrConnectWithoutStudentRegisteredInput
    connect?: CourseWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutCourseRegisteredInput = {
    create?: XOR<StudentCreateWithoutCourseRegisteredInput, StudentUncheckedCreateWithoutCourseRegisteredInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCourseRegisteredInput
    connect?: StudentWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutStudentRegisteredNestedInput = {
    create?: XOR<CourseCreateWithoutStudentRegisteredInput, CourseUncheckedCreateWithoutStudentRegisteredInput>
    connectOrCreate?: CourseCreateOrConnectWithoutStudentRegisteredInput
    upsert?: CourseUpsertWithoutStudentRegisteredInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutStudentRegisteredInput, CourseUpdateWithoutStudentRegisteredInput>, CourseUncheckedUpdateWithoutStudentRegisteredInput>
  }

  export type StudentUpdateOneRequiredWithoutCourseRegisteredNestedInput = {
    create?: XOR<StudentCreateWithoutCourseRegisteredInput, StudentUncheckedCreateWithoutCourseRegisteredInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCourseRegisteredInput
    upsert?: StudentUpsertWithoutCourseRegisteredInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutCourseRegisteredInput, StudentUpdateWithoutCourseRegisteredInput>, StudentUncheckedUpdateWithoutCourseRegisteredInput>
  }

  export type FacultyCreateNestedOneWithoutCourseAssignedInput = {
    create?: XOR<FacultyCreateWithoutCourseAssignedInput, FacultyUncheckedCreateWithoutCourseAssignedInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutCourseAssignedInput
    connect?: FacultyWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutFacultyAssignedInput = {
    create?: XOR<CourseCreateWithoutFacultyAssignedInput, CourseUncheckedCreateWithoutFacultyAssignedInput>
    connectOrCreate?: CourseCreateOrConnectWithoutFacultyAssignedInput
    connect?: CourseWhereUniqueInput
  }

  export type FacultyUpdateOneRequiredWithoutCourseAssignedNestedInput = {
    create?: XOR<FacultyCreateWithoutCourseAssignedInput, FacultyUncheckedCreateWithoutCourseAssignedInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutCourseAssignedInput
    upsert?: FacultyUpsertWithoutCourseAssignedInput
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutCourseAssignedInput, FacultyUpdateWithoutCourseAssignedInput>, FacultyUncheckedUpdateWithoutCourseAssignedInput>
  }

  export type CourseUpdateOneRequiredWithoutFacultyAssignedNestedInput = {
    create?: XOR<CourseCreateWithoutFacultyAssignedInput, CourseUncheckedCreateWithoutFacultyAssignedInput>
    connectOrCreate?: CourseCreateOrConnectWithoutFacultyAssignedInput
    upsert?: CourseUpsertWithoutFacultyAssignedInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutFacultyAssignedInput, CourseUpdateWithoutFacultyAssignedInput>, CourseUncheckedUpdateWithoutFacultyAssignedInput>
  }

  export type ExamMarksEntryCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamMarksEntryCreateWithoutExamInput, ExamMarksEntryUncheckedCreateWithoutExamInput> | ExamMarksEntryCreateWithoutExamInput[] | ExamMarksEntryUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutExamInput | ExamMarksEntryCreateOrConnectWithoutExamInput[]
    createMany?: ExamMarksEntryCreateManyExamInputEnvelope
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
  }

  export type ExamMarksEntryUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamMarksEntryCreateWithoutExamInput, ExamMarksEntryUncheckedCreateWithoutExamInput> | ExamMarksEntryCreateWithoutExamInput[] | ExamMarksEntryUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutExamInput | ExamMarksEntryCreateOrConnectWithoutExamInput[]
    createMany?: ExamMarksEntryCreateManyExamInputEnvelope
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
  }

  export type EnumexamTypeFieldUpdateOperationsInput = {
    set?: $Enums.examType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExamMarksEntryUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamMarksEntryCreateWithoutExamInput, ExamMarksEntryUncheckedCreateWithoutExamInput> | ExamMarksEntryCreateWithoutExamInput[] | ExamMarksEntryUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutExamInput | ExamMarksEntryCreateOrConnectWithoutExamInput[]
    upsert?: ExamMarksEntryUpsertWithWhereUniqueWithoutExamInput | ExamMarksEntryUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamMarksEntryCreateManyExamInputEnvelope
    set?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    disconnect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    delete?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    update?: ExamMarksEntryUpdateWithWhereUniqueWithoutExamInput | ExamMarksEntryUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamMarksEntryUpdateManyWithWhereWithoutExamInput | ExamMarksEntryUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamMarksEntryScalarWhereInput | ExamMarksEntryScalarWhereInput[]
  }

  export type ExamMarksEntryUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamMarksEntryCreateWithoutExamInput, ExamMarksEntryUncheckedCreateWithoutExamInput> | ExamMarksEntryCreateWithoutExamInput[] | ExamMarksEntryUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamMarksEntryCreateOrConnectWithoutExamInput | ExamMarksEntryCreateOrConnectWithoutExamInput[]
    upsert?: ExamMarksEntryUpsertWithWhereUniqueWithoutExamInput | ExamMarksEntryUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamMarksEntryCreateManyExamInputEnvelope
    set?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    disconnect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    delete?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    connect?: ExamMarksEntryWhereUniqueInput | ExamMarksEntryWhereUniqueInput[]
    update?: ExamMarksEntryUpdateWithWhereUniqueWithoutExamInput | ExamMarksEntryUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamMarksEntryUpdateManyWithWhereWithoutExamInput | ExamMarksEntryUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamMarksEntryScalarWhereInput | ExamMarksEntryScalarWhereInput[]
  }

  export type ExamCreateNestedOneWithoutMarksEntriesInput = {
    create?: XOR<ExamCreateWithoutMarksEntriesInput, ExamUncheckedCreateWithoutMarksEntriesInput>
    connectOrCreate?: ExamCreateOrConnectWithoutMarksEntriesInput
    connect?: ExamWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutExamEntriesInput = {
    create?: XOR<CourseCreateWithoutExamEntriesInput, CourseUncheckedCreateWithoutExamEntriesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutExamEntriesInput
    connect?: CourseWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutExamEntriesInput = {
    create?: XOR<StudentCreateWithoutExamEntriesInput, StudentUncheckedCreateWithoutExamEntriesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutExamEntriesInput
    connect?: StudentWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ExamUpdateOneRequiredWithoutMarksEntriesNestedInput = {
    create?: XOR<ExamCreateWithoutMarksEntriesInput, ExamUncheckedCreateWithoutMarksEntriesInput>
    connectOrCreate?: ExamCreateOrConnectWithoutMarksEntriesInput
    upsert?: ExamUpsertWithoutMarksEntriesInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutMarksEntriesInput, ExamUpdateWithoutMarksEntriesInput>, ExamUncheckedUpdateWithoutMarksEntriesInput>
  }

  export type CourseUpdateOneRequiredWithoutExamEntriesNestedInput = {
    create?: XOR<CourseCreateWithoutExamEntriesInput, CourseUncheckedCreateWithoutExamEntriesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutExamEntriesInput
    upsert?: CourseUpsertWithoutExamEntriesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutExamEntriesInput, CourseUpdateWithoutExamEntriesInput>, CourseUncheckedUpdateWithoutExamEntriesInput>
  }

  export type StudentUpdateOneRequiredWithoutExamEntriesNestedInput = {
    create?: XOR<StudentCreateWithoutExamEntriesInput, StudentUncheckedCreateWithoutExamEntriesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutExamEntriesInput
    upsert?: StudentUpsertWithoutExamEntriesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutExamEntriesInput, StudentUpdateWithoutExamEntriesInput>, StudentUncheckedUpdateWithoutExamEntriesInput>
  }

  export type StudentCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendancesInput
    connect?: StudentWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<CourseCreateWithoutAttendancesInput, CourseUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutAttendancesInput
    connect?: CourseWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendancesInput
    upsert?: StudentUpsertWithoutAttendancesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendancesInput, StudentUpdateWithoutAttendancesInput>, StudentUncheckedUpdateWithoutAttendancesInput>
  }

  export type CourseUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<CourseCreateWithoutAttendancesInput, CourseUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutAttendancesInput
    upsert?: CourseUpsertWithoutAttendancesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutAttendancesInput, CourseUpdateWithoutAttendancesInput>, CourseUncheckedUpdateWithoutAttendancesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumuserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumuserTypeFilter<$PrismaModel> | $Enums.userType
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumuserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.userType | EnumuserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.userType[] | ListEnumuserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumuserTypeWithAggregatesFilter<$PrismaModel> | $Enums.userType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuserTypeFilter<$PrismaModel>
    _max?: NestedEnumuserTypeFilter<$PrismaModel>
  }

  export type NestedEnumdepartmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.departmentType | EnumdepartmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.departmentType[] | ListEnumdepartmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.departmentType[] | ListEnumdepartmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumdepartmentTypeFilter<$PrismaModel> | $Enums.departmentType
  }

  export type NestedEnumdepartmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.departmentType | EnumdepartmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.departmentType[] | ListEnumdepartmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.departmentType[] | ListEnumdepartmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumdepartmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.departmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumdepartmentTypeFilter<$PrismaModel>
    _max?: NestedEnumdepartmentTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumexamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.examType | EnumexamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumexamTypeFilter<$PrismaModel> | $Enums.examType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumexamTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.examType | EnumexamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumexamTypeWithAggregatesFilter<$PrismaModel> | $Enums.examType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumexamTypeFilter<$PrismaModel>
    _max?: NestedEnumexamTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    rollNo: string
    fullName: string
    mobileNo: string
    email: string
    semester: SemesterCreateNestedOneWithoutStudentInput
    branch: BranchCreateNestedOneWithoutStudentInput
    courseRegistered?: StudentCourseRegistrationCreateNestedManyWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    branchId: string
    mobileNo: string
    email: string
    courseRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type FacultyCreateWithoutUserInput = {
    id?: string
    fullName: string
    department: $Enums.departmentType
    email: string
    courseAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    department: $Enums.departmentType
    email: string
    courseAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyCreateOrConnectWithoutUserInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
    fullName: string
    email: string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    email: string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutStudentNestedInput
    branch?: BranchUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: StudentCourseRegistrationUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    courseRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type FacultyUpsertWithoutUserInput = {
    update: XOR<FacultyUpdateWithoutUserInput, FacultyUncheckedUpdateWithoutUserInput>
    create: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput>
    where?: FacultyWhereInput
  }

  export type FacultyUpdateToOneWithWhereWithoutUserInput = {
    where?: FacultyWhereInput
    data: XOR<FacultyUpdateWithoutUserInput, FacultyUncheckedUpdateWithoutUserInput>
  }

  export type FacultyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: EnumdepartmentTypeFieldUpdateOperationsInput | $Enums.departmentType
    email?: StringFieldUpdateOperationsInput | string
    courseAssigned?: FacultyCourseAssignmentUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: EnumdepartmentTypeFieldUpdateOperationsInput | $Enums.departmentType
    email?: StringFieldUpdateOperationsInput | string
    courseAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterCreateWithoutStudentInput = {
    id?: string
    sem: number
    course?: CourseCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateWithoutStudentInput = {
    id?: string
    sem: number
    course?: CourseUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterCreateOrConnectWithoutStudentInput = {
    where: SemesterWhereUniqueInput
    create: XOR<SemesterCreateWithoutStudentInput, SemesterUncheckedCreateWithoutStudentInput>
  }

  export type BranchCreateWithoutStudentInput = {
    id?: string
    name: string
    course?: CourseCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutStudentInput = {
    id?: string
    name: string
    course?: CourseUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutStudentInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutStudentInput, BranchUncheckedCreateWithoutStudentInput>
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.userType
    faculty?: FacultyCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.userType
    faculty?: FacultyUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type StudentCourseRegistrationCreateWithoutStudentInput = {
    id?: string
    course: CourseCreateNestedOneWithoutStudentRegisteredInput
  }

  export type StudentCourseRegistrationUncheckedCreateWithoutStudentInput = {
    id?: string
    courseId: string
  }

  export type StudentCourseRegistrationCreateOrConnectWithoutStudentInput = {
    where: StudentCourseRegistrationWhereUniqueInput
    create: XOR<StudentCourseRegistrationCreateWithoutStudentInput, StudentCourseRegistrationUncheckedCreateWithoutStudentInput>
  }

  export type StudentCourseRegistrationCreateManyStudentInputEnvelope = {
    data: StudentCourseRegistrationCreateManyStudentInput | StudentCourseRegistrationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutStudentInput = {
    id?: string
    date?: Date | string
    isPresent: boolean
    course: CourseCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    courseId: string
    date?: Date | string
    isPresent: boolean
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ExamMarksEntryCreateWithoutStudentInput = {
    id?: string
    marksObtained: number
    remarks?: string | null
    exam: ExamCreateNestedOneWithoutMarksEntriesInput
    course: CourseCreateNestedOneWithoutExamEntriesInput
  }

  export type ExamMarksEntryUncheckedCreateWithoutStudentInput = {
    id?: string
    examId: string
    courseId: string
    marksObtained: number
    remarks?: string | null
  }

  export type ExamMarksEntryCreateOrConnectWithoutStudentInput = {
    where: ExamMarksEntryWhereUniqueInput
    create: XOR<ExamMarksEntryCreateWithoutStudentInput, ExamMarksEntryUncheckedCreateWithoutStudentInput>
  }

  export type ExamMarksEntryCreateManyStudentInputEnvelope = {
    data: ExamMarksEntryCreateManyStudentInput | ExamMarksEntryCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type SemesterUpsertWithoutStudentInput = {
    update: XOR<SemesterUpdateWithoutStudentInput, SemesterUncheckedUpdateWithoutStudentInput>
    create: XOR<SemesterCreateWithoutStudentInput, SemesterUncheckedCreateWithoutStudentInput>
    where?: SemesterWhereInput
  }

  export type SemesterUpdateToOneWithWhereWithoutStudentInput = {
    where?: SemesterWhereInput
    data: XOR<SemesterUpdateWithoutStudentInput, SemesterUncheckedUpdateWithoutStudentInput>
  }

  export type SemesterUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    course?: CourseUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    course?: CourseUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type BranchUpsertWithoutStudentInput = {
    update: XOR<BranchUpdateWithoutStudentInput, BranchUncheckedUpdateWithoutStudentInput>
    create: XOR<BranchCreateWithoutStudentInput, BranchUncheckedCreateWithoutStudentInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutStudentInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutStudentInput, BranchUncheckedUpdateWithoutStudentInput>
  }

  export type BranchUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    faculty?: FacultyUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    faculty?: FacultyUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type StudentCourseRegistrationUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentCourseRegistrationWhereUniqueInput
    update: XOR<StudentCourseRegistrationUpdateWithoutStudentInput, StudentCourseRegistrationUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentCourseRegistrationCreateWithoutStudentInput, StudentCourseRegistrationUncheckedCreateWithoutStudentInput>
  }

  export type StudentCourseRegistrationUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentCourseRegistrationWhereUniqueInput
    data: XOR<StudentCourseRegistrationUpdateWithoutStudentInput, StudentCourseRegistrationUncheckedUpdateWithoutStudentInput>
  }

  export type StudentCourseRegistrationUpdateManyWithWhereWithoutStudentInput = {
    where: StudentCourseRegistrationScalarWhereInput
    data: XOR<StudentCourseRegistrationUpdateManyMutationInput, StudentCourseRegistrationUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentCourseRegistrationScalarWhereInput = {
    AND?: StudentCourseRegistrationScalarWhereInput | StudentCourseRegistrationScalarWhereInput[]
    OR?: StudentCourseRegistrationScalarWhereInput[]
    NOT?: StudentCourseRegistrationScalarWhereInput | StudentCourseRegistrationScalarWhereInput[]
    id?: UuidFilter<"StudentCourseRegistration"> | string
    courseId?: UuidFilter<"StudentCourseRegistration"> | string
    studentId?: UuidFilter<"StudentCourseRegistration"> | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: UuidFilter<"Attendance"> | string
    courseId?: UuidFilter<"Attendance"> | string
    studentId?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    isPresent?: BoolFilter<"Attendance"> | boolean
  }

  export type ExamMarksEntryUpsertWithWhereUniqueWithoutStudentInput = {
    where: ExamMarksEntryWhereUniqueInput
    update: XOR<ExamMarksEntryUpdateWithoutStudentInput, ExamMarksEntryUncheckedUpdateWithoutStudentInput>
    create: XOR<ExamMarksEntryCreateWithoutStudentInput, ExamMarksEntryUncheckedCreateWithoutStudentInput>
  }

  export type ExamMarksEntryUpdateWithWhereUniqueWithoutStudentInput = {
    where: ExamMarksEntryWhereUniqueInput
    data: XOR<ExamMarksEntryUpdateWithoutStudentInput, ExamMarksEntryUncheckedUpdateWithoutStudentInput>
  }

  export type ExamMarksEntryUpdateManyWithWhereWithoutStudentInput = {
    where: ExamMarksEntryScalarWhereInput
    data: XOR<ExamMarksEntryUpdateManyMutationInput, ExamMarksEntryUncheckedUpdateManyWithoutStudentInput>
  }

  export type ExamMarksEntryScalarWhereInput = {
    AND?: ExamMarksEntryScalarWhereInput | ExamMarksEntryScalarWhereInput[]
    OR?: ExamMarksEntryScalarWhereInput[]
    NOT?: ExamMarksEntryScalarWhereInput | ExamMarksEntryScalarWhereInput[]
    id?: UuidFilter<"ExamMarksEntry"> | string
    examId?: UuidFilter<"ExamMarksEntry"> | string
    courseId?: UuidFilter<"ExamMarksEntry"> | string
    studentId?: UuidFilter<"ExamMarksEntry"> | string
    marksObtained?: FloatFilter<"ExamMarksEntry"> | number
    remarks?: StringNullableFilter<"ExamMarksEntry"> | string | null
  }

  export type UserCreateWithoutFacultyInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.userType
    student?: StudentCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFacultyInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.userType
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFacultyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFacultyInput, UserUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyCourseAssignmentCreateWithoutFacultyInput = {
    id?: string
    course: CourseCreateNestedOneWithoutFacultyAssignedInput
  }

  export type FacultyCourseAssignmentUncheckedCreateWithoutFacultyInput = {
    id?: string
    courseId: string
  }

  export type FacultyCourseAssignmentCreateOrConnectWithoutFacultyInput = {
    where: FacultyCourseAssignmentWhereUniqueInput
    create: XOR<FacultyCourseAssignmentCreateWithoutFacultyInput, FacultyCourseAssignmentUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyCourseAssignmentCreateManyFacultyInputEnvelope = {
    data: FacultyCourseAssignmentCreateManyFacultyInput | FacultyCourseAssignmentCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFacultyInput = {
    update: XOR<UserUpdateWithoutFacultyInput, UserUncheckedUpdateWithoutFacultyInput>
    create: XOR<UserCreateWithoutFacultyInput, UserUncheckedCreateWithoutFacultyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFacultyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFacultyInput, UserUncheckedUpdateWithoutFacultyInput>
  }

  export type UserUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    student?: StudentUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type FacultyCourseAssignmentUpsertWithWhereUniqueWithoutFacultyInput = {
    where: FacultyCourseAssignmentWhereUniqueInput
    update: XOR<FacultyCourseAssignmentUpdateWithoutFacultyInput, FacultyCourseAssignmentUncheckedUpdateWithoutFacultyInput>
    create: XOR<FacultyCourseAssignmentCreateWithoutFacultyInput, FacultyCourseAssignmentUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyCourseAssignmentUpdateWithWhereUniqueWithoutFacultyInput = {
    where: FacultyCourseAssignmentWhereUniqueInput
    data: XOR<FacultyCourseAssignmentUpdateWithoutFacultyInput, FacultyCourseAssignmentUncheckedUpdateWithoutFacultyInput>
  }

  export type FacultyCourseAssignmentUpdateManyWithWhereWithoutFacultyInput = {
    where: FacultyCourseAssignmentScalarWhereInput
    data: XOR<FacultyCourseAssignmentUpdateManyMutationInput, FacultyCourseAssignmentUncheckedUpdateManyWithoutFacultyInput>
  }

  export type FacultyCourseAssignmentScalarWhereInput = {
    AND?: FacultyCourseAssignmentScalarWhereInput | FacultyCourseAssignmentScalarWhereInput[]
    OR?: FacultyCourseAssignmentScalarWhereInput[]
    NOT?: FacultyCourseAssignmentScalarWhereInput | FacultyCourseAssignmentScalarWhereInput[]
    id?: UuidFilter<"FacultyCourseAssignment"> | string
    facultyId?: UuidFilter<"FacultyCourseAssignment"> | string
    courseId?: UuidFilter<"FacultyCourseAssignment"> | string
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.userType
    student?: StudentCreateNestedOneWithoutUserInput
    faculty?: FacultyCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    username: string
    password: string
    email: string
    role?: $Enums.userType
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    faculty?: FacultyUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    student?: StudentUpdateOneWithoutUserNestedInput
    faculty?: FacultyUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumuserTypeFieldUpdateOperationsInput | $Enums.userType
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    faculty?: FacultyUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CourseCreateWithoutSemesterInput = {
    id?: string
    courseId: string
    name: string
    branch: BranchCreateNestedOneWithoutCourseInput
    studentRegistered?: StudentCourseRegistrationCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSemesterInput = {
    id?: string
    courseId: string
    name: string
    branchId: string
    studentRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSemesterInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput>
  }

  export type CourseCreateManySemesterInputEnvelope = {
    data: CourseCreateManySemesterInput | CourseCreateManySemesterInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutSemesterInput = {
    id?: string
    rollNo: string
    fullName: string
    mobileNo: string
    email: string
    branch: BranchCreateNestedOneWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
    courseRegistered?: StudentCourseRegistrationCreateNestedManyWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSemesterInput = {
    id?: string
    rollNo: string
    fullName: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
    courseRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSemesterInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSemesterInput, StudentUncheckedCreateWithoutSemesterInput>
  }

  export type StudentCreateManySemesterInputEnvelope = {
    data: StudentCreateManySemesterInput | StudentCreateManySemesterInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutSemesterInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutSemesterInput, CourseUncheckedUpdateWithoutSemesterInput>
    create: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutSemesterInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutSemesterInput, CourseUncheckedUpdateWithoutSemesterInput>
  }

  export type CourseUpdateManyWithWhereWithoutSemesterInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutSemesterInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: UuidFilter<"Course"> | string
    courseId?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    semesterId?: UuidFilter<"Course"> | string
    branchId?: UuidFilter<"Course"> | string
  }

  export type StudentUpsertWithWhereUniqueWithoutSemesterInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutSemesterInput, StudentUncheckedUpdateWithoutSemesterInput>
    create: XOR<StudentCreateWithoutSemesterInput, StudentUncheckedCreateWithoutSemesterInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutSemesterInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutSemesterInput, StudentUncheckedUpdateWithoutSemesterInput>
  }

  export type StudentUpdateManyWithWhereWithoutSemesterInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutSemesterInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: UuidFilter<"Student"> | string
    rollNo?: StringFilter<"Student"> | string
    fullName?: StringFilter<"Student"> | string
    semesterId?: UuidFilter<"Student"> | string
    branchId?: UuidFilter<"Student"> | string
    mobileNo?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    userId?: UuidFilter<"Student"> | string
  }

  export type CourseCreateWithoutBranchInput = {
    id?: string
    courseId: string
    name: string
    semester: SemesterCreateNestedOneWithoutCourseInput
    studentRegistered?: StudentCourseRegistrationCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutBranchInput = {
    id?: string
    courseId: string
    name: string
    semesterId: string
    studentRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutBranchInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput>
  }

  export type CourseCreateManyBranchInputEnvelope = {
    data: CourseCreateManyBranchInput | CourseCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutBranchInput = {
    id?: string
    rollNo: string
    fullName: string
    mobileNo: string
    email: string
    semester: SemesterCreateNestedOneWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
    courseRegistered?: StudentCourseRegistrationCreateNestedManyWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutBranchInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    mobileNo: string
    email: string
    userId: string
    courseRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutBranchInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput>
  }

  export type StudentCreateManyBranchInputEnvelope = {
    data: StudentCreateManyBranchInput | StudentCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutBranchInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutBranchInput, CourseUncheckedUpdateWithoutBranchInput>
    create: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutBranchInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutBranchInput, CourseUncheckedUpdateWithoutBranchInput>
  }

  export type CourseUpdateManyWithWhereWithoutBranchInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutBranchInput>
  }

  export type StudentUpsertWithWhereUniqueWithoutBranchInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutBranchInput, StudentUncheckedUpdateWithoutBranchInput>
    create: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutBranchInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutBranchInput, StudentUncheckedUpdateWithoutBranchInput>
  }

  export type StudentUpdateManyWithWhereWithoutBranchInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutBranchInput>
  }

  export type SemesterCreateWithoutCourseInput = {
    id?: string
    sem: number
    student?: StudentCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateWithoutCourseInput = {
    id?: string
    sem: number
    student?: StudentUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterCreateOrConnectWithoutCourseInput = {
    where: SemesterWhereUniqueInput
    create: XOR<SemesterCreateWithoutCourseInput, SemesterUncheckedCreateWithoutCourseInput>
  }

  export type BranchCreateWithoutCourseInput = {
    id?: string
    name: string
    student?: StudentCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutCourseInput = {
    id?: string
    name: string
    student?: StudentUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutCourseInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutCourseInput, BranchUncheckedCreateWithoutCourseInput>
  }

  export type StudentCourseRegistrationCreateWithoutCourseInput = {
    id?: string
    student: StudentCreateNestedOneWithoutCourseRegisteredInput
  }

  export type StudentCourseRegistrationUncheckedCreateWithoutCourseInput = {
    id?: string
    studentId: string
  }

  export type StudentCourseRegistrationCreateOrConnectWithoutCourseInput = {
    where: StudentCourseRegistrationWhereUniqueInput
    create: XOR<StudentCourseRegistrationCreateWithoutCourseInput, StudentCourseRegistrationUncheckedCreateWithoutCourseInput>
  }

  export type StudentCourseRegistrationCreateManyCourseInputEnvelope = {
    data: StudentCourseRegistrationCreateManyCourseInput | StudentCourseRegistrationCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type FacultyCourseAssignmentCreateWithoutCourseInput = {
    id?: string
    faculty: FacultyCreateNestedOneWithoutCourseAssignedInput
  }

  export type FacultyCourseAssignmentUncheckedCreateWithoutCourseInput = {
    id?: string
    facultyId: string
  }

  export type FacultyCourseAssignmentCreateOrConnectWithoutCourseInput = {
    where: FacultyCourseAssignmentWhereUniqueInput
    create: XOR<FacultyCourseAssignmentCreateWithoutCourseInput, FacultyCourseAssignmentUncheckedCreateWithoutCourseInput>
  }

  export type FacultyCourseAssignmentCreateManyCourseInputEnvelope = {
    data: FacultyCourseAssignmentCreateManyCourseInput | FacultyCourseAssignmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutCourseInput = {
    id?: string
    date?: Date | string
    isPresent: boolean
    student: StudentCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutCourseInput = {
    id?: string
    studentId: string
    date?: Date | string
    isPresent: boolean
  }

  export type AttendanceCreateOrConnectWithoutCourseInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutCourseInput, AttendanceUncheckedCreateWithoutCourseInput>
  }

  export type AttendanceCreateManyCourseInputEnvelope = {
    data: AttendanceCreateManyCourseInput | AttendanceCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type ExamMarksEntryCreateWithoutCourseInput = {
    id?: string
    marksObtained: number
    remarks?: string | null
    exam: ExamCreateNestedOneWithoutMarksEntriesInput
    student: StudentCreateNestedOneWithoutExamEntriesInput
  }

  export type ExamMarksEntryUncheckedCreateWithoutCourseInput = {
    id?: string
    examId: string
    studentId: string
    marksObtained: number
    remarks?: string | null
  }

  export type ExamMarksEntryCreateOrConnectWithoutCourseInput = {
    where: ExamMarksEntryWhereUniqueInput
    create: XOR<ExamMarksEntryCreateWithoutCourseInput, ExamMarksEntryUncheckedCreateWithoutCourseInput>
  }

  export type ExamMarksEntryCreateManyCourseInputEnvelope = {
    data: ExamMarksEntryCreateManyCourseInput | ExamMarksEntryCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type SemesterUpsertWithoutCourseInput = {
    update: XOR<SemesterUpdateWithoutCourseInput, SemesterUncheckedUpdateWithoutCourseInput>
    create: XOR<SemesterCreateWithoutCourseInput, SemesterUncheckedCreateWithoutCourseInput>
    where?: SemesterWhereInput
  }

  export type SemesterUpdateToOneWithWhereWithoutCourseInput = {
    where?: SemesterWhereInput
    data: XOR<SemesterUpdateWithoutCourseInput, SemesterUncheckedUpdateWithoutCourseInput>
  }

  export type SemesterUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    student?: StudentUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    student?: StudentUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type BranchUpsertWithoutCourseInput = {
    update: XOR<BranchUpdateWithoutCourseInput, BranchUncheckedUpdateWithoutCourseInput>
    create: XOR<BranchCreateWithoutCourseInput, BranchUncheckedCreateWithoutCourseInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutCourseInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutCourseInput, BranchUncheckedUpdateWithoutCourseInput>
  }

  export type BranchUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    student?: StudentUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type StudentCourseRegistrationUpsertWithWhereUniqueWithoutCourseInput = {
    where: StudentCourseRegistrationWhereUniqueInput
    update: XOR<StudentCourseRegistrationUpdateWithoutCourseInput, StudentCourseRegistrationUncheckedUpdateWithoutCourseInput>
    create: XOR<StudentCourseRegistrationCreateWithoutCourseInput, StudentCourseRegistrationUncheckedCreateWithoutCourseInput>
  }

  export type StudentCourseRegistrationUpdateWithWhereUniqueWithoutCourseInput = {
    where: StudentCourseRegistrationWhereUniqueInput
    data: XOR<StudentCourseRegistrationUpdateWithoutCourseInput, StudentCourseRegistrationUncheckedUpdateWithoutCourseInput>
  }

  export type StudentCourseRegistrationUpdateManyWithWhereWithoutCourseInput = {
    where: StudentCourseRegistrationScalarWhereInput
    data: XOR<StudentCourseRegistrationUpdateManyMutationInput, StudentCourseRegistrationUncheckedUpdateManyWithoutCourseInput>
  }

  export type FacultyCourseAssignmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: FacultyCourseAssignmentWhereUniqueInput
    update: XOR<FacultyCourseAssignmentUpdateWithoutCourseInput, FacultyCourseAssignmentUncheckedUpdateWithoutCourseInput>
    create: XOR<FacultyCourseAssignmentCreateWithoutCourseInput, FacultyCourseAssignmentUncheckedCreateWithoutCourseInput>
  }

  export type FacultyCourseAssignmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: FacultyCourseAssignmentWhereUniqueInput
    data: XOR<FacultyCourseAssignmentUpdateWithoutCourseInput, FacultyCourseAssignmentUncheckedUpdateWithoutCourseInput>
  }

  export type FacultyCourseAssignmentUpdateManyWithWhereWithoutCourseInput = {
    where: FacultyCourseAssignmentScalarWhereInput
    data: XOR<FacultyCourseAssignmentUpdateManyMutationInput, FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutCourseInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutCourseInput, AttendanceUncheckedUpdateWithoutCourseInput>
    create: XOR<AttendanceCreateWithoutCourseInput, AttendanceUncheckedCreateWithoutCourseInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutCourseInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutCourseInput, AttendanceUncheckedUpdateWithoutCourseInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutCourseInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutCourseInput>
  }

  export type ExamMarksEntryUpsertWithWhereUniqueWithoutCourseInput = {
    where: ExamMarksEntryWhereUniqueInput
    update: XOR<ExamMarksEntryUpdateWithoutCourseInput, ExamMarksEntryUncheckedUpdateWithoutCourseInput>
    create: XOR<ExamMarksEntryCreateWithoutCourseInput, ExamMarksEntryUncheckedCreateWithoutCourseInput>
  }

  export type ExamMarksEntryUpdateWithWhereUniqueWithoutCourseInput = {
    where: ExamMarksEntryWhereUniqueInput
    data: XOR<ExamMarksEntryUpdateWithoutCourseInput, ExamMarksEntryUncheckedUpdateWithoutCourseInput>
  }

  export type ExamMarksEntryUpdateManyWithWhereWithoutCourseInput = {
    where: ExamMarksEntryScalarWhereInput
    data: XOR<ExamMarksEntryUpdateManyMutationInput, ExamMarksEntryUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutStudentRegisteredInput = {
    id?: string
    courseId: string
    name: string
    semester: SemesterCreateNestedOneWithoutCourseInput
    branch: BranchCreateNestedOneWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutStudentRegisteredInput = {
    id?: string
    courseId: string
    name: string
    semesterId: string
    branchId: string
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutStudentRegisteredInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutStudentRegisteredInput, CourseUncheckedCreateWithoutStudentRegisteredInput>
  }

  export type StudentCreateWithoutCourseRegisteredInput = {
    id?: string
    rollNo: string
    fullName: string
    mobileNo: string
    email: string
    semester: SemesterCreateNestedOneWithoutStudentInput
    branch: BranchCreateNestedOneWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutCourseRegisteredInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutCourseRegisteredInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCourseRegisteredInput, StudentUncheckedCreateWithoutCourseRegisteredInput>
  }

  export type CourseUpsertWithoutStudentRegisteredInput = {
    update: XOR<CourseUpdateWithoutStudentRegisteredInput, CourseUncheckedUpdateWithoutStudentRegisteredInput>
    create: XOR<CourseCreateWithoutStudentRegisteredInput, CourseUncheckedCreateWithoutStudentRegisteredInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutStudentRegisteredInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutStudentRegisteredInput, CourseUncheckedUpdateWithoutStudentRegisteredInput>
  }

  export type CourseUpdateWithoutStudentRegisteredInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutCourseNestedInput
    branch?: BranchUpdateOneRequiredWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutStudentRegisteredInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type StudentUpsertWithoutCourseRegisteredInput = {
    update: XOR<StudentUpdateWithoutCourseRegisteredInput, StudentUncheckedUpdateWithoutCourseRegisteredInput>
    create: XOR<StudentCreateWithoutCourseRegisteredInput, StudentUncheckedCreateWithoutCourseRegisteredInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutCourseRegisteredInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutCourseRegisteredInput, StudentUncheckedUpdateWithoutCourseRegisteredInput>
  }

  export type StudentUpdateWithoutCourseRegisteredInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutStudentNestedInput
    branch?: BranchUpdateOneRequiredWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutCourseRegisteredInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type FacultyCreateWithoutCourseAssignedInput = {
    id?: string
    fullName: string
    department: $Enums.departmentType
    email: string
    user: UserCreateNestedOneWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutCourseAssignedInput = {
    id?: string
    fullName: string
    department: $Enums.departmentType
    email: string
    userId: string
  }

  export type FacultyCreateOrConnectWithoutCourseAssignedInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutCourseAssignedInput, FacultyUncheckedCreateWithoutCourseAssignedInput>
  }

  export type CourseCreateWithoutFacultyAssignedInput = {
    id?: string
    courseId: string
    name: string
    semester: SemesterCreateNestedOneWithoutCourseInput
    branch: BranchCreateNestedOneWithoutCourseInput
    studentRegistered?: StudentCourseRegistrationCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutFacultyAssignedInput = {
    id?: string
    courseId: string
    name: string
    semesterId: string
    branchId: string
    studentRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutFacultyAssignedInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutFacultyAssignedInput, CourseUncheckedCreateWithoutFacultyAssignedInput>
  }

  export type FacultyUpsertWithoutCourseAssignedInput = {
    update: XOR<FacultyUpdateWithoutCourseAssignedInput, FacultyUncheckedUpdateWithoutCourseAssignedInput>
    create: XOR<FacultyCreateWithoutCourseAssignedInput, FacultyUncheckedCreateWithoutCourseAssignedInput>
    where?: FacultyWhereInput
  }

  export type FacultyUpdateToOneWithWhereWithoutCourseAssignedInput = {
    where?: FacultyWhereInput
    data: XOR<FacultyUpdateWithoutCourseAssignedInput, FacultyUncheckedUpdateWithoutCourseAssignedInput>
  }

  export type FacultyUpdateWithoutCourseAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: EnumdepartmentTypeFieldUpdateOperationsInput | $Enums.departmentType
    email?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutCourseAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    department?: EnumdepartmentTypeFieldUpdateOperationsInput | $Enums.departmentType
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUpsertWithoutFacultyAssignedInput = {
    update: XOR<CourseUpdateWithoutFacultyAssignedInput, CourseUncheckedUpdateWithoutFacultyAssignedInput>
    create: XOR<CourseCreateWithoutFacultyAssignedInput, CourseUncheckedCreateWithoutFacultyAssignedInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutFacultyAssignedInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutFacultyAssignedInput, CourseUncheckedUpdateWithoutFacultyAssignedInput>
  }

  export type CourseUpdateWithoutFacultyAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutCourseNestedInput
    branch?: BranchUpdateOneRequiredWithoutCourseNestedInput
    studentRegistered?: StudentCourseRegistrationUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutFacultyAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    studentRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type ExamMarksEntryCreateWithoutExamInput = {
    id?: string
    marksObtained: number
    remarks?: string | null
    course: CourseCreateNestedOneWithoutExamEntriesInput
    student: StudentCreateNestedOneWithoutExamEntriesInput
  }

  export type ExamMarksEntryUncheckedCreateWithoutExamInput = {
    id?: string
    courseId: string
    studentId: string
    marksObtained: number
    remarks?: string | null
  }

  export type ExamMarksEntryCreateOrConnectWithoutExamInput = {
    where: ExamMarksEntryWhereUniqueInput
    create: XOR<ExamMarksEntryCreateWithoutExamInput, ExamMarksEntryUncheckedCreateWithoutExamInput>
  }

  export type ExamMarksEntryCreateManyExamInputEnvelope = {
    data: ExamMarksEntryCreateManyExamInput | ExamMarksEntryCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type ExamMarksEntryUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamMarksEntryWhereUniqueInput
    update: XOR<ExamMarksEntryUpdateWithoutExamInput, ExamMarksEntryUncheckedUpdateWithoutExamInput>
    create: XOR<ExamMarksEntryCreateWithoutExamInput, ExamMarksEntryUncheckedCreateWithoutExamInput>
  }

  export type ExamMarksEntryUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamMarksEntryWhereUniqueInput
    data: XOR<ExamMarksEntryUpdateWithoutExamInput, ExamMarksEntryUncheckedUpdateWithoutExamInput>
  }

  export type ExamMarksEntryUpdateManyWithWhereWithoutExamInput = {
    where: ExamMarksEntryScalarWhereInput
    data: XOR<ExamMarksEntryUpdateManyMutationInput, ExamMarksEntryUncheckedUpdateManyWithoutExamInput>
  }

  export type ExamCreateWithoutMarksEntriesInput = {
    id?: string
    name: $Enums.examType
    code: string
    date?: Date | string
  }

  export type ExamUncheckedCreateWithoutMarksEntriesInput = {
    id?: string
    name: $Enums.examType
    code: string
    date?: Date | string
  }

  export type ExamCreateOrConnectWithoutMarksEntriesInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutMarksEntriesInput, ExamUncheckedCreateWithoutMarksEntriesInput>
  }

  export type CourseCreateWithoutExamEntriesInput = {
    id?: string
    courseId: string
    name: string
    semester: SemesterCreateNestedOneWithoutCourseInput
    branch: BranchCreateNestedOneWithoutCourseInput
    studentRegistered?: StudentCourseRegistrationCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutExamEntriesInput = {
    id?: string
    courseId: string
    name: string
    semesterId: string
    branchId: string
    studentRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutExamEntriesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutExamEntriesInput, CourseUncheckedCreateWithoutExamEntriesInput>
  }

  export type StudentCreateWithoutExamEntriesInput = {
    id?: string
    rollNo: string
    fullName: string
    mobileNo: string
    email: string
    semester: SemesterCreateNestedOneWithoutStudentInput
    branch: BranchCreateNestedOneWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
    courseRegistered?: StudentCourseRegistrationCreateNestedManyWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutExamEntriesInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
    courseRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutExamEntriesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutExamEntriesInput, StudentUncheckedCreateWithoutExamEntriesInput>
  }

  export type ExamUpsertWithoutMarksEntriesInput = {
    update: XOR<ExamUpdateWithoutMarksEntriesInput, ExamUncheckedUpdateWithoutMarksEntriesInput>
    create: XOR<ExamCreateWithoutMarksEntriesInput, ExamUncheckedCreateWithoutMarksEntriesInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutMarksEntriesInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutMarksEntriesInput, ExamUncheckedUpdateWithoutMarksEntriesInput>
  }

  export type ExamUpdateWithoutMarksEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateWithoutMarksEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    code?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUpsertWithoutExamEntriesInput = {
    update: XOR<CourseUpdateWithoutExamEntriesInput, CourseUncheckedUpdateWithoutExamEntriesInput>
    create: XOR<CourseCreateWithoutExamEntriesInput, CourseUncheckedCreateWithoutExamEntriesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutExamEntriesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutExamEntriesInput, CourseUncheckedUpdateWithoutExamEntriesInput>
  }

  export type CourseUpdateWithoutExamEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutCourseNestedInput
    branch?: BranchUpdateOneRequiredWithoutCourseNestedInput
    studentRegistered?: StudentCourseRegistrationUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutExamEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    studentRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type StudentUpsertWithoutExamEntriesInput = {
    update: XOR<StudentUpdateWithoutExamEntriesInput, StudentUncheckedUpdateWithoutExamEntriesInput>
    create: XOR<StudentCreateWithoutExamEntriesInput, StudentUncheckedCreateWithoutExamEntriesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutExamEntriesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutExamEntriesInput, StudentUncheckedUpdateWithoutExamEntriesInput>
  }

  export type StudentUpdateWithoutExamEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutStudentNestedInput
    branch?: BranchUpdateOneRequiredWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: StudentCourseRegistrationUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutExamEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateWithoutAttendancesInput = {
    id?: string
    rollNo: string
    fullName: string
    mobileNo: string
    email: string
    semester: SemesterCreateNestedOneWithoutStudentInput
    branch: BranchCreateNestedOneWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
    courseRegistered?: StudentCourseRegistrationCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAttendancesInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
    courseRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttendancesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
  }

  export type CourseCreateWithoutAttendancesInput = {
    id?: string
    courseId: string
    name: string
    semester: SemesterCreateNestedOneWithoutCourseInput
    branch: BranchCreateNestedOneWithoutCourseInput
    studentRegistered?: StudentCourseRegistrationCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutAttendancesInput = {
    id?: string
    courseId: string
    name: string
    semesterId: string
    branchId: string
    studentRegistered?: StudentCourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: ExamMarksEntryUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutAttendancesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutAttendancesInput, CourseUncheckedCreateWithoutAttendancesInput>
  }

  export type StudentUpsertWithoutAttendancesInput = {
    update: XOR<StudentUpdateWithoutAttendancesInput, StudentUncheckedUpdateWithoutAttendancesInput>
    create: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendancesInput, StudentUncheckedUpdateWithoutAttendancesInput>
  }

  export type StudentUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutStudentNestedInput
    branch?: BranchUpdateOneRequiredWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: StudentCourseRegistrationUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseUpsertWithoutAttendancesInput = {
    update: XOR<CourseUpdateWithoutAttendancesInput, CourseUncheckedUpdateWithoutAttendancesInput>
    create: XOR<CourseCreateWithoutAttendancesInput, CourseUncheckedCreateWithoutAttendancesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutAttendancesInput, CourseUncheckedUpdateWithoutAttendancesInput>
  }

  export type CourseUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutCourseNestedInput
    branch?: BranchUpdateOneRequiredWithoutCourseNestedInput
    studentRegistered?: StudentCourseRegistrationUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    studentRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type StudentCourseRegistrationCreateManyStudentInput = {
    id?: string
    courseId: string
  }

  export type AttendanceCreateManyStudentInput = {
    id?: string
    courseId: string
    date?: Date | string
    isPresent: boolean
  }

  export type ExamMarksEntryCreateManyStudentInput = {
    id?: string
    examId: string
    courseId: string
    marksObtained: number
    remarks?: string | null
  }

  export type StudentCourseRegistrationUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutStudentRegisteredNestedInput
  }

  export type StudentCourseRegistrationUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCourseRegistrationUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    course?: CourseUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamMarksEntryUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    exam?: ExamUpdateOneRequiredWithoutMarksEntriesNestedInput
    course?: CourseUpdateOneRequiredWithoutExamEntriesNestedInput
  }

  export type ExamMarksEntryUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamMarksEntryUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacultyCourseAssignmentCreateManyFacultyInput = {
    id?: string
    courseId: string
  }

  export type FacultyCourseAssignmentUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutFacultyAssignedNestedInput
  }

  export type FacultyCourseAssignmentUncheckedUpdateWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyCourseAssignmentUncheckedUpdateManyWithoutFacultyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateManySemesterInput = {
    id?: string
    courseId: string
    name: string
    branchId: string
  }

  export type StudentCreateManySemesterInput = {
    id?: string
    rollNo: string
    fullName: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
  }

  export type CourseUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneRequiredWithoutCourseNestedInput
    studentRegistered?: StudentCourseRegistrationUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    studentRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneRequiredWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: StudentCourseRegistrationUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateManyBranchInput = {
    id?: string
    courseId: string
    name: string
    semesterId: string
  }

  export type StudentCreateManyBranchInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    mobileNo: string
    email: string
    userId: string
  }

  export type CourseUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutCourseNestedInput
    studentRegistered?: StudentCourseRegistrationUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    studentRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: StudentCourseRegistrationUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: StudentCourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: ExamMarksEntryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCourseRegistrationCreateManyCourseInput = {
    id?: string
    studentId: string
  }

  export type FacultyCourseAssignmentCreateManyCourseInput = {
    id?: string
    facultyId: string
  }

  export type AttendanceCreateManyCourseInput = {
    id?: string
    studentId: string
    date?: Date | string
    isPresent: boolean
  }

  export type ExamMarksEntryCreateManyCourseInput = {
    id?: string
    examId: string
    studentId: string
    marksObtained: number
    remarks?: string | null
  }

  export type StudentCourseRegistrationUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutCourseRegisteredNestedInput
  }

  export type StudentCourseRegistrationUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCourseRegistrationUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyCourseAssignmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    faculty?: FacultyUpdateOneRequiredWithoutCourseAssignedNestedInput
  }

  export type FacultyCourseAssignmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    facultyId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttendanceUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExamMarksEntryUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    exam?: ExamUpdateOneRequiredWithoutMarksEntriesNestedInput
    student?: StudentUpdateOneRequiredWithoutExamEntriesNestedInput
  }

  export type ExamMarksEntryUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamMarksEntryUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamMarksEntryCreateManyExamInput = {
    id?: string
    courseId: string
    studentId: string
    marksObtained: number
    remarks?: string | null
  }

  export type ExamMarksEntryUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    course?: CourseUpdateOneRequiredWithoutExamEntriesNestedInput
    student?: StudentUpdateOneRequiredWithoutExamEntriesNestedInput
  }

  export type ExamMarksEntryUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamMarksEntryUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultyCountOutputTypeDefaultArgs instead
     */
    export type FacultyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SemesterCountOutputTypeDefaultArgs instead
     */
    export type SemesterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SemesterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchCountOutputTypeDefaultArgs instead
     */
    export type BranchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseCountOutputTypeDefaultArgs instead
     */
    export type CourseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamCountOutputTypeDefaultArgs instead
     */
    export type ExamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultyDefaultArgs instead
     */
    export type FacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SemesterDefaultArgs instead
     */
    export type SemesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SemesterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchDefaultArgs instead
     */
    export type BranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourseDefaultArgs instead
     */
    export type CourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentCourseRegistrationDefaultArgs instead
     */
    export type StudentCourseRegistrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCourseRegistrationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultyCourseAssignmentDefaultArgs instead
     */
    export type FacultyCourseAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultyCourseAssignmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamDefaultArgs instead
     */
    export type ExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamMarksEntryDefaultArgs instead
     */
    export type ExamMarksEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamMarksEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceDefaultArgs instead
     */
    export type AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}