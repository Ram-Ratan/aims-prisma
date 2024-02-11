
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model CourseRegistration
 * 
 */
export type CourseRegistration = $Result.DefaultSelection<Prisma.$CourseRegistrationPayload>
/**
 * Model FacultyCourseAssignment
 * 
 */
export type FacultyCourseAssignment = $Result.DefaultSelection<Prisma.$FacultyCourseAssignmentPayload>
/**
 * Model MarksEntry
 * 
 */
export type MarksEntry = $Result.DefaultSelection<Prisma.$MarksEntryPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Batch
 * 
 */
export type Batch = $Result.DefaultSelection<Prisma.$BatchPayload>
/**
 * Model SteamElective
 * 
 */
export type SteamElective = $Result.DefaultSelection<Prisma.$SteamElectivePayload>
/**
 * Model ProgramElective
 * 
 */
export type ProgramElective = $Result.DefaultSelection<Prisma.$ProgramElectivePayload>

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


export const courseType: {
  GIR: 'GIR',
  PC: 'PC',
  PE: 'PE',
  SE: 'SE'
};

export type courseType = (typeof courseType)[keyof typeof courseType]


export const examCode: {
  CT1: 'CT1',
  CT2: 'CT2',
  ENDSEM: 'ENDSEM'
};

export type examCode = (typeof examCode)[keyof typeof examCode]


export const examType: {
  LAB: 'LAB',
  THEORY: 'THEORY'
};

export type examType = (typeof examType)[keyof typeof examType]


export const classType: {
  EXTRA: 'EXTRA',
  REGULAR: 'REGULAR'
};

export type classType = (typeof classType)[keyof typeof classType]


export const attenanceType: {
  THEORY: 'THEORY',
  LAB: 'LAB'
};

export type attenanceType = (typeof attenanceType)[keyof typeof attenanceType]

}

export type userType = $Enums.userType

export const userType: typeof $Enums.userType

export type departmentType = $Enums.departmentType

export const departmentType: typeof $Enums.departmentType

export type courseType = $Enums.courseType

export const courseType: typeof $Enums.courseType

export type examCode = $Enums.examCode

export const examCode: typeof $Enums.examCode

export type examType = $Enums.examType

export const examType: typeof $Enums.examType

export type classType = $Enums.classType

export const classType: typeof $Enums.classType

export type attenanceType = $Enums.attenanceType

export const attenanceType: typeof $Enums.attenanceType

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
   * `prisma.courseRegistration`: Exposes CRUD operations for the **CourseRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseRegistrations
    * const courseRegistrations = await prisma.courseRegistration.findMany()
    * ```
    */
  get courseRegistration(): Prisma.CourseRegistrationDelegate<ExtArgs>;

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
   * `prisma.marksEntry`: Exposes CRUD operations for the **MarksEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarksEntries
    * const marksEntries = await prisma.marksEntry.findMany()
    * ```
    */
  get marksEntry(): Prisma.MarksEntryDelegate<ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs>;

  /**
   * `prisma.batch`: Exposes CRUD operations for the **Batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batches
    * const batches = await prisma.batch.findMany()
    * ```
    */
  get batch(): Prisma.BatchDelegate<ExtArgs>;

  /**
   * `prisma.steamElective`: Exposes CRUD operations for the **SteamElective** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SteamElectives
    * const steamElectives = await prisma.steamElective.findMany()
    * ```
    */
  get steamElective(): Prisma.SteamElectiveDelegate<ExtArgs>;

  /**
   * `prisma.programElective`: Exposes CRUD operations for the **ProgramElective** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramElectives
    * const programElectives = await prisma.programElective.findMany()
    * ```
    */
  get programElective(): Prisma.ProgramElectiveDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
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
    CourseRegistration: 'CourseRegistration',
    FacultyCourseAssignment: 'FacultyCourseAssignment',
    MarksEntry: 'MarksEntry',
    Attendance: 'Attendance',
    Batch: 'Batch',
    SteamElective: 'SteamElective',
    ProgramElective: 'ProgramElective'
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
      modelProps: 'user' | 'student' | 'faculty' | 'admin' | 'semester' | 'branch' | 'course' | 'courseRegistration' | 'facultyCourseAssignment' | 'marksEntry' | 'attendance' | 'batch' | 'steamElective' | 'programElective'
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
      CourseRegistration: {
        payload: Prisma.$CourseRegistrationPayload<ExtArgs>
        fields: Prisma.CourseRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseRegistrationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseRegistrationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRegistrationPayload>
          }
          findFirst: {
            args: Prisma.CourseRegistrationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseRegistrationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRegistrationPayload>
          }
          findMany: {
            args: Prisma.CourseRegistrationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRegistrationPayload>[]
          }
          create: {
            args: Prisma.CourseRegistrationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRegistrationPayload>
          }
          createMany: {
            args: Prisma.CourseRegistrationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CourseRegistrationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRegistrationPayload>
          }
          update: {
            args: Prisma.CourseRegistrationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.CourseRegistrationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CourseRegistrationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CourseRegistrationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CourseRegistrationPayload>
          }
          aggregate: {
            args: Prisma.CourseRegistrationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCourseRegistration>
          }
          groupBy: {
            args: Prisma.CourseRegistrationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CourseRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseRegistrationCountArgs<ExtArgs>,
            result: $Utils.Optional<CourseRegistrationCountAggregateOutputType> | number
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
      MarksEntry: {
        payload: Prisma.$MarksEntryPayload<ExtArgs>
        fields: Prisma.MarksEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarksEntryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarksEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarksEntryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarksEntryPayload>
          }
          findFirst: {
            args: Prisma.MarksEntryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarksEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarksEntryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarksEntryPayload>
          }
          findMany: {
            args: Prisma.MarksEntryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarksEntryPayload>[]
          }
          create: {
            args: Prisma.MarksEntryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarksEntryPayload>
          }
          createMany: {
            args: Prisma.MarksEntryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MarksEntryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarksEntryPayload>
          }
          update: {
            args: Prisma.MarksEntryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarksEntryPayload>
          }
          deleteMany: {
            args: Prisma.MarksEntryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MarksEntryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MarksEntryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MarksEntryPayload>
          }
          aggregate: {
            args: Prisma.MarksEntryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMarksEntry>
          }
          groupBy: {
            args: Prisma.MarksEntryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MarksEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarksEntryCountArgs<ExtArgs>,
            result: $Utils.Optional<MarksEntryCountAggregateOutputType> | number
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
      Batch: {
        payload: Prisma.$BatchPayload<ExtArgs>
        fields: Prisma.BatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findFirst: {
            args: Prisma.BatchFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findMany: {
            args: Prisma.BatchFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          create: {
            args: Prisma.BatchCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          createMany: {
            args: Prisma.BatchCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BatchDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          update: {
            args: Prisma.BatchUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          deleteMany: {
            args: Prisma.BatchDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BatchUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BatchUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          aggregate: {
            args: Prisma.BatchAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBatch>
          }
          groupBy: {
            args: Prisma.BatchGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchCountArgs<ExtArgs>,
            result: $Utils.Optional<BatchCountAggregateOutputType> | number
          }
        }
      }
      SteamElective: {
        payload: Prisma.$SteamElectivePayload<ExtArgs>
        fields: Prisma.SteamElectiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SteamElectiveFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SteamElectivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SteamElectiveFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SteamElectivePayload>
          }
          findFirst: {
            args: Prisma.SteamElectiveFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SteamElectivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SteamElectiveFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SteamElectivePayload>
          }
          findMany: {
            args: Prisma.SteamElectiveFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SteamElectivePayload>[]
          }
          create: {
            args: Prisma.SteamElectiveCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SteamElectivePayload>
          }
          createMany: {
            args: Prisma.SteamElectiveCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SteamElectiveDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SteamElectivePayload>
          }
          update: {
            args: Prisma.SteamElectiveUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SteamElectivePayload>
          }
          deleteMany: {
            args: Prisma.SteamElectiveDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SteamElectiveUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SteamElectiveUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SteamElectivePayload>
          }
          aggregate: {
            args: Prisma.SteamElectiveAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSteamElective>
          }
          groupBy: {
            args: Prisma.SteamElectiveGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SteamElectiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.SteamElectiveCountArgs<ExtArgs>,
            result: $Utils.Optional<SteamElectiveCountAggregateOutputType> | number
          }
        }
      }
      ProgramElective: {
        payload: Prisma.$ProgramElectivePayload<ExtArgs>
        fields: Prisma.ProgramElectiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramElectiveFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgramElectivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramElectiveFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgramElectivePayload>
          }
          findFirst: {
            args: Prisma.ProgramElectiveFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgramElectivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramElectiveFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgramElectivePayload>
          }
          findMany: {
            args: Prisma.ProgramElectiveFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgramElectivePayload>[]
          }
          create: {
            args: Prisma.ProgramElectiveCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgramElectivePayload>
          }
          createMany: {
            args: Prisma.ProgramElectiveCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProgramElectiveDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgramElectivePayload>
          }
          update: {
            args: Prisma.ProgramElectiveUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgramElectivePayload>
          }
          deleteMany: {
            args: Prisma.ProgramElectiveDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramElectiveUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProgramElectiveUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProgramElectivePayload>
          }
          aggregate: {
            args: Prisma.ProgramElectiveAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProgramElective>
          }
          groupBy: {
            args: Prisma.ProgramElectiveGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProgramElectiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramElectiveCountArgs<ExtArgs>,
            result: $Utils.Optional<ProgramElectiveCountAggregateOutputType> | number
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
    where?: CourseRegistrationWhereInput
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
    where?: MarksEntryWhereInput
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
    courseRegistration: number
  }

  export type SemesterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | SemesterCountOutputTypeCountCourseArgs
    student?: boolean | SemesterCountOutputTypeCountStudentArgs
    courseRegistration?: boolean | SemesterCountOutputTypeCountCourseRegistrationArgs
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
   * SemesterCountOutputType without action
   */
  export type SemesterCountOutputTypeCountCourseRegistrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseRegistrationWhereInput
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
    branch: number
    semester: number
    studentRegistered: number
    facultyAssigned: number
    attendances: number
    examEntries: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | CourseCountOutputTypeCountBranchArgs
    semester?: boolean | CourseCountOutputTypeCountSemesterArgs
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
  export type CourseCountOutputTypeCountBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSemesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SemesterWhereInput
  }


  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountStudentRegisteredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseRegistrationWhereInput
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
    where?: MarksEntryWhereInput
  }



  /**
   * Count Type BatchCountOutputType
   */

  export type BatchCountOutputType = {
    course: number
    student: number
  }

  export type BatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | BatchCountOutputTypeCountCourseArgs
    student?: boolean | BatchCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchCountOutputType
     */
    select?: BatchCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
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
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
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
    batchId: string | null
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
    batchId: string | null
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
    batchId: number
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
    batchId?: true
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
    batchId?: true
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
    batchId?: true
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
    batchId: string
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
    batchId?: boolean
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    batch?: boolean | BatchDefaultArgs<ExtArgs>
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
    batchId?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    batch?: boolean | BatchDefaultArgs<ExtArgs>
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
      batch: Prisma.$BatchPayload<ExtArgs>
      courseRegistered: Prisma.$CourseRegistrationPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      examEntries: Prisma.$MarksEntryPayload<ExtArgs>[]
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
      batchId: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }


  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
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

    batch<T extends BatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchDefaultArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    courseRegistered<T extends Student$courseRegisteredArgs<ExtArgs> = {}>(args?: Subset<T, Student$courseRegisteredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'findMany'> | Null>;

    attendances<T extends Student$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Student$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findMany'> | Null>;

    examEntries<T extends Student$examEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Student$examEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly batchId: FieldRef<"Student", 'String'>
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
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    where?: CourseRegistrationWhereInput
    orderBy?: CourseRegistrationOrderByWithRelationInput | CourseRegistrationOrderByWithRelationInput[]
    cursor?: CourseRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseRegistrationScalarFieldEnum | CourseRegistrationScalarFieldEnum[]
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
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
    where?: MarksEntryWhereInput
    orderBy?: MarksEntryOrderByWithRelationInput | MarksEntryOrderByWithRelationInput[]
    cursor?: MarksEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarksEntryScalarFieldEnum | MarksEntryScalarFieldEnum[]
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
    Omit<FacultyFindManyArgs, 'select' | 'include' | 'distinct'> & {
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
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
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
    name: string | null
  }

  export type SemesterMaxAggregateOutputType = {
    id: string | null
    sem: number | null
    name: string | null
  }

  export type SemesterCountAggregateOutputType = {
    id: number
    sem: number
    name: number
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
    name?: true
  }

  export type SemesterMaxAggregateInputType = {
    id?: true
    sem?: true
    name?: true
  }

  export type SemesterCountAggregateInputType = {
    id?: true
    sem?: true
    name?: true
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
    name: string
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
    name?: boolean
    course?: boolean | Semester$courseArgs<ExtArgs>
    student?: boolean | Semester$studentArgs<ExtArgs>
    courseRegistration?: boolean | Semester$courseRegistrationArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semester"]>

  export type SemesterSelectScalar = {
    id?: boolean
    sem?: boolean
    name?: boolean
  }

  export type SemesterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Semester$courseArgs<ExtArgs>
    student?: boolean | Semester$studentArgs<ExtArgs>
    courseRegistration?: boolean | Semester$courseRegistrationArgs<ExtArgs>
    _count?: boolean | SemesterCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SemesterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Semester"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>[]
      student: Prisma.$StudentPayload<ExtArgs>[]
      courseRegistration: Prisma.$CourseRegistrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sem: number
      name: string
    }, ExtArgs["result"]["semester"]>
    composites: {}
  }


  type SemesterGetPayload<S extends boolean | null | undefined | SemesterDefaultArgs> = $Result.GetResult<Prisma.$SemesterPayload, S>

  type SemesterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SemesterFindManyArgs, 'select' | 'include' | 'distinct'> & {
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

    courseRegistration<T extends Semester$courseRegistrationArgs<ExtArgs> = {}>(args?: Subset<T, Semester$courseRegistrationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly name: FieldRef<"Semester", 'String'>
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
   * Semester.courseRegistration
   */
  export type Semester$courseRegistrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    where?: CourseRegistrationWhereInput
    orderBy?: CourseRegistrationOrderByWithRelationInput | CourseRegistrationOrderByWithRelationInput[]
    cursor?: CourseRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseRegistrationScalarFieldEnum | CourseRegistrationScalarFieldEnum[]
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
    code: string | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    code: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
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
    code: string
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
    code?: boolean
    course?: boolean | Branch$courseArgs<ExtArgs>
    student?: boolean | Branch$studentArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
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
      code: string
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }


  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct'> & {
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
    readonly code: FieldRef<"Branch", 'String'>
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
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    credit: number | null
  }

  export type CourseSumAggregateOutputType = {
    credit: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    courseType: $Enums.courseType | null
    electiveCode: string | null
    credit: number | null
    labIncluded: boolean | null
    batchId: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    courseType: $Enums.courseType | null
    electiveCode: string | null
    credit: number | null
    labIncluded: boolean | null
    batchId: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    code: number
    name: number
    courseType: number
    electiveCode: number
    credit: number
    labIncluded: number
    batchId: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    credit?: true
  }

  export type CourseSumAggregateInputType = {
    credit?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    courseType?: true
    electiveCode?: true
    credit?: true
    labIncluded?: true
    batchId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    courseType?: true
    electiveCode?: true
    credit?: true
    labIncluded?: true
    batchId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    courseType?: true
    electiveCode?: true
    credit?: true
    labIncluded?: true
    batchId?: true
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
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
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
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode: string | null
    credit: number
    labIncluded: boolean
    batchId: string
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
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
    code?: boolean
    name?: boolean
    courseType?: boolean
    electiveCode?: boolean
    credit?: boolean
    labIncluded?: boolean
    batchId?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
    branch?: boolean | Course$branchArgs<ExtArgs>
    semester?: boolean | Course$semesterArgs<ExtArgs>
    studentRegistered?: boolean | Course$studentRegisteredArgs<ExtArgs>
    facultyAssigned?: boolean | Course$facultyAssignedArgs<ExtArgs>
    attendances?: boolean | Course$attendancesArgs<ExtArgs>
    examEntries?: boolean | Course$examEntriesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    courseType?: boolean
    electiveCode?: boolean
    credit?: boolean
    labIncluded?: boolean
    batchId?: boolean
  }

  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
    branch?: boolean | Course$branchArgs<ExtArgs>
    semester?: boolean | Course$semesterArgs<ExtArgs>
    studentRegistered?: boolean | Course$studentRegisteredArgs<ExtArgs>
    facultyAssigned?: boolean | Course$facultyAssignedArgs<ExtArgs>
    attendances?: boolean | Course$attendancesArgs<ExtArgs>
    examEntries?: boolean | Course$examEntriesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      batch: Prisma.$BatchPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>[]
      semester: Prisma.$SemesterPayload<ExtArgs>[]
      studentRegistered: Prisma.$CourseRegistrationPayload<ExtArgs>[]
      facultyAssigned: Prisma.$FacultyCourseAssignmentPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      examEntries: Prisma.$MarksEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      courseType: $Enums.courseType
      electiveCode: string | null
      credit: number
      labIncluded: boolean
      batchId: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }


  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct'> & {
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

    batch<T extends BatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchDefaultArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    branch<T extends Course$branchArgs<ExtArgs> = {}>(args?: Subset<T, Course$branchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, 'findMany'> | Null>;

    semester<T extends Course$semesterArgs<ExtArgs> = {}>(args?: Subset<T, Course$semesterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'findMany'> | Null>;

    studentRegistered<T extends Course$studentRegisteredArgs<ExtArgs> = {}>(args?: Subset<T, Course$studentRegisteredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'findMany'> | Null>;

    facultyAssigned<T extends Course$facultyAssignedArgs<ExtArgs> = {}>(args?: Subset<T, Course$facultyAssignedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyCourseAssignmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    attendances<T extends Course$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Course$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, 'findMany'> | Null>;

    examEntries<T extends Course$examEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Course$examEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksEntryPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly code: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly courseType: FieldRef<"Course", 'courseType'>
    readonly electiveCode: FieldRef<"Course", 'String'>
    readonly credit: FieldRef<"Course", 'Int'>
    readonly labIncluded: FieldRef<"Course", 'Boolean'>
    readonly batchId: FieldRef<"Course", 'String'>
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
   * Course.branch
   */
  export type Course$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }


  /**
   * Course.semester
   */
  export type Course$semesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Semester
     */
    select?: SemesterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SemesterInclude<ExtArgs> | null
    where?: SemesterWhereInput
    orderBy?: SemesterOrderByWithRelationInput | SemesterOrderByWithRelationInput[]
    cursor?: SemesterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[]
  }


  /**
   * Course.studentRegistered
   */
  export type Course$studentRegisteredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    where?: CourseRegistrationWhereInput
    orderBy?: CourseRegistrationOrderByWithRelationInput | CourseRegistrationOrderByWithRelationInput[]
    cursor?: CourseRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseRegistrationScalarFieldEnum | CourseRegistrationScalarFieldEnum[]
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
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
    where?: MarksEntryWhereInput
    orderBy?: MarksEntryOrderByWithRelationInput | MarksEntryOrderByWithRelationInput[]
    cursor?: MarksEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarksEntryScalarFieldEnum | MarksEntryScalarFieldEnum[]
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
   * Model CourseRegistration
   */

  export type AggregateCourseRegistration = {
    _count: CourseRegistrationCountAggregateOutputType | null
    _min: CourseRegistrationMinAggregateOutputType | null
    _max: CourseRegistrationMaxAggregateOutputType | null
  }

  export type CourseRegistrationMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    studentId: string | null
    semesterId: string | null
  }

  export type CourseRegistrationMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    studentId: string | null
    semesterId: string | null
  }

  export type CourseRegistrationCountAggregateOutputType = {
    id: number
    courseId: number
    studentId: number
    semesterId: number
    _all: number
  }


  export type CourseRegistrationMinAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    semesterId?: true
  }

  export type CourseRegistrationMaxAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    semesterId?: true
  }

  export type CourseRegistrationCountAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    semesterId?: true
    _all?: true
  }

  export type CourseRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseRegistration to aggregate.
     */
    where?: CourseRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRegistrations to fetch.
     */
    orderBy?: CourseRegistrationOrderByWithRelationInput | CourseRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseRegistrations
    **/
    _count?: true | CourseRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseRegistrationMaxAggregateInputType
  }

  export type GetCourseRegistrationAggregateType<T extends CourseRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseRegistration[P]>
      : GetScalarType<T[P], AggregateCourseRegistration[P]>
  }




  export type CourseRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseRegistrationWhereInput
    orderBy?: CourseRegistrationOrderByWithAggregationInput | CourseRegistrationOrderByWithAggregationInput[]
    by: CourseRegistrationScalarFieldEnum[] | CourseRegistrationScalarFieldEnum
    having?: CourseRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseRegistrationCountAggregateInputType | true
    _min?: CourseRegistrationMinAggregateInputType
    _max?: CourseRegistrationMaxAggregateInputType
  }

  export type CourseRegistrationGroupByOutputType = {
    id: string
    courseId: string
    studentId: string
    semesterId: string
    _count: CourseRegistrationCountAggregateOutputType | null
    _min: CourseRegistrationMinAggregateOutputType | null
    _max: CourseRegistrationMaxAggregateOutputType | null
  }

  type GetCourseRegistrationGroupByPayload<T extends CourseRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], CourseRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type CourseRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    semesterId?: boolean
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseRegistration"]>

  export type CourseRegistrationSelectScalar = {
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    semesterId?: boolean
  }

  export type CourseRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semester?: boolean | SemesterDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }


  export type $CourseRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseRegistration"
    objects: {
      semester: Prisma.$SemesterPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      studentId: string
      semesterId: string
    }, ExtArgs["result"]["courseRegistration"]>
    composites: {}
  }


  type CourseRegistrationGetPayload<S extends boolean | null | undefined | CourseRegistrationDefaultArgs> = $Result.GetResult<Prisma.$CourseRegistrationPayload, S>

  type CourseRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourseRegistrationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourseRegistrationCountAggregateInputType | true
    }

  export interface CourseRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseRegistration'], meta: { name: 'CourseRegistration' } }
    /**
     * Find zero or one CourseRegistration that matches the filter.
     * @param {CourseRegistrationFindUniqueArgs} args - Arguments to find a CourseRegistration
     * @example
     * // Get one CourseRegistration
     * const courseRegistration = await prisma.courseRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CourseRegistrationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRegistrationFindUniqueArgs<ExtArgs>>
    ): Prisma__CourseRegistrationClient<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CourseRegistration that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CourseRegistrationFindUniqueOrThrowArgs} args - Arguments to find a CourseRegistration
     * @example
     * // Get one CourseRegistration
     * const courseRegistration = await prisma.courseRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CourseRegistrationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRegistrationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CourseRegistrationClient<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CourseRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRegistrationFindFirstArgs} args - Arguments to find a CourseRegistration
     * @example
     * // Get one CourseRegistration
     * const courseRegistration = await prisma.courseRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CourseRegistrationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRegistrationFindFirstArgs<ExtArgs>>
    ): Prisma__CourseRegistrationClient<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CourseRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRegistrationFindFirstOrThrowArgs} args - Arguments to find a CourseRegistration
     * @example
     * // Get one CourseRegistration
     * const courseRegistration = await prisma.courseRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CourseRegistrationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRegistrationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CourseRegistrationClient<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CourseRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRegistrationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseRegistrations
     * const courseRegistrations = await prisma.courseRegistration.findMany()
     * 
     * // Get first 10 CourseRegistrations
     * const courseRegistrations = await prisma.courseRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseRegistrationWithIdOnly = await prisma.courseRegistration.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CourseRegistrationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRegistrationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CourseRegistration.
     * @param {CourseRegistrationCreateArgs} args - Arguments to create a CourseRegistration.
     * @example
     * // Create one CourseRegistration
     * const CourseRegistration = await prisma.courseRegistration.create({
     *   data: {
     *     // ... data to create a CourseRegistration
     *   }
     * })
     * 
    **/
    create<T extends CourseRegistrationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRegistrationCreateArgs<ExtArgs>>
    ): Prisma__CourseRegistrationClient<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CourseRegistrations.
     *     @param {CourseRegistrationCreateManyArgs} args - Arguments to create many CourseRegistrations.
     *     @example
     *     // Create many CourseRegistrations
     *     const courseRegistration = await prisma.courseRegistration.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CourseRegistrationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRegistrationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CourseRegistration.
     * @param {CourseRegistrationDeleteArgs} args - Arguments to delete one CourseRegistration.
     * @example
     * // Delete one CourseRegistration
     * const CourseRegistration = await prisma.courseRegistration.delete({
     *   where: {
     *     // ... filter to delete one CourseRegistration
     *   }
     * })
     * 
    **/
    delete<T extends CourseRegistrationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRegistrationDeleteArgs<ExtArgs>>
    ): Prisma__CourseRegistrationClient<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CourseRegistration.
     * @param {CourseRegistrationUpdateArgs} args - Arguments to update one CourseRegistration.
     * @example
     * // Update one CourseRegistration
     * const courseRegistration = await prisma.courseRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CourseRegistrationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRegistrationUpdateArgs<ExtArgs>>
    ): Prisma__CourseRegistrationClient<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CourseRegistrations.
     * @param {CourseRegistrationDeleteManyArgs} args - Arguments to filter CourseRegistrations to delete.
     * @example
     * // Delete a few CourseRegistrations
     * const { count } = await prisma.courseRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CourseRegistrationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CourseRegistrationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseRegistrations
     * const courseRegistration = await prisma.courseRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CourseRegistrationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRegistrationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourseRegistration.
     * @param {CourseRegistrationUpsertArgs} args - Arguments to update or create a CourseRegistration.
     * @example
     * // Update or create a CourseRegistration
     * const courseRegistration = await prisma.courseRegistration.upsert({
     *   create: {
     *     // ... data to create a CourseRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseRegistration we want to update
     *   }
     * })
    **/
    upsert<T extends CourseRegistrationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CourseRegistrationUpsertArgs<ExtArgs>>
    ): Prisma__CourseRegistrationClient<$Result.GetResult<Prisma.$CourseRegistrationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CourseRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRegistrationCountArgs} args - Arguments to filter CourseRegistrations to count.
     * @example
     * // Count the number of CourseRegistrations
     * const count = await prisma.courseRegistration.count({
     *   where: {
     *     // ... the filter for the CourseRegistrations we want to count
     *   }
     * })
    **/
    count<T extends CourseRegistrationCountArgs>(
      args?: Subset<T, CourseRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseRegistrationAggregateArgs>(args: Subset<T, CourseRegistrationAggregateArgs>): Prisma.PrismaPromise<GetCourseRegistrationAggregateType<T>>

    /**
     * Group by CourseRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseRegistrationGroupByArgs} args - Group by arguments.
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
      T extends CourseRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: CourseRegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseRegistration model
   */
  readonly fields: CourseRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    semester<T extends SemesterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SemesterDefaultArgs<ExtArgs>>): Prisma__SemesterClient<$Result.GetResult<Prisma.$SemesterPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the CourseRegistration model
   */ 
  interface CourseRegistrationFieldRefs {
    readonly id: FieldRef<"CourseRegistration", 'String'>
    readonly courseId: FieldRef<"CourseRegistration", 'String'>
    readonly studentId: FieldRef<"CourseRegistration", 'String'>
    readonly semesterId: FieldRef<"CourseRegistration", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CourseRegistration findUnique
   */
  export type CourseRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which CourseRegistration to fetch.
     */
    where: CourseRegistrationWhereUniqueInput
  }


  /**
   * CourseRegistration findUniqueOrThrow
   */
  export type CourseRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which CourseRegistration to fetch.
     */
    where: CourseRegistrationWhereUniqueInput
  }


  /**
   * CourseRegistration findFirst
   */
  export type CourseRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which CourseRegistration to fetch.
     */
    where?: CourseRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRegistrations to fetch.
     */
    orderBy?: CourseRegistrationOrderByWithRelationInput | CourseRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseRegistrations.
     */
    cursor?: CourseRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseRegistrations.
     */
    distinct?: CourseRegistrationScalarFieldEnum | CourseRegistrationScalarFieldEnum[]
  }


  /**
   * CourseRegistration findFirstOrThrow
   */
  export type CourseRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which CourseRegistration to fetch.
     */
    where?: CourseRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRegistrations to fetch.
     */
    orderBy?: CourseRegistrationOrderByWithRelationInput | CourseRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseRegistrations.
     */
    cursor?: CourseRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseRegistrations.
     */
    distinct?: CourseRegistrationScalarFieldEnum | CourseRegistrationScalarFieldEnum[]
  }


  /**
   * CourseRegistration findMany
   */
  export type CourseRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which CourseRegistrations to fetch.
     */
    where?: CourseRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseRegistrations to fetch.
     */
    orderBy?: CourseRegistrationOrderByWithRelationInput | CourseRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseRegistrations.
     */
    cursor?: CourseRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseRegistrations.
     */
    skip?: number
    distinct?: CourseRegistrationScalarFieldEnum | CourseRegistrationScalarFieldEnum[]
  }


  /**
   * CourseRegistration create
   */
  export type CourseRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseRegistration.
     */
    data: XOR<CourseRegistrationCreateInput, CourseRegistrationUncheckedCreateInput>
  }


  /**
   * CourseRegistration createMany
   */
  export type CourseRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseRegistrations.
     */
    data: CourseRegistrationCreateManyInput | CourseRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CourseRegistration update
   */
  export type CourseRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseRegistration.
     */
    data: XOR<CourseRegistrationUpdateInput, CourseRegistrationUncheckedUpdateInput>
    /**
     * Choose, which CourseRegistration to update.
     */
    where: CourseRegistrationWhereUniqueInput
  }


  /**
   * CourseRegistration updateMany
   */
  export type CourseRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseRegistrations.
     */
    data: XOR<CourseRegistrationUpdateManyMutationInput, CourseRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which CourseRegistrations to update
     */
    where?: CourseRegistrationWhereInput
  }


  /**
   * CourseRegistration upsert
   */
  export type CourseRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseRegistration to update in case it exists.
     */
    where: CourseRegistrationWhereUniqueInput
    /**
     * In case the CourseRegistration found by the `where` argument doesn't exist, create a new CourseRegistration with this data.
     */
    create: XOR<CourseRegistrationCreateInput, CourseRegistrationUncheckedCreateInput>
    /**
     * In case the CourseRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseRegistrationUpdateInput, CourseRegistrationUncheckedUpdateInput>
  }


  /**
   * CourseRegistration delete
   */
  export type CourseRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
    /**
     * Filter which CourseRegistration to delete.
     */
    where: CourseRegistrationWhereUniqueInput
  }


  /**
   * CourseRegistration deleteMany
   */
  export type CourseRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseRegistrations to delete
     */
    where?: CourseRegistrationWhereInput
  }


  /**
   * CourseRegistration without action
   */
  export type CourseRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseRegistration
     */
    select?: CourseRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CourseRegistrationInclude<ExtArgs> | null
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
    Omit<FacultyCourseAssignmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
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
   * Model MarksEntry
   */

  export type AggregateMarksEntry = {
    _count: MarksEntryCountAggregateOutputType | null
    _avg: MarksEntryAvgAggregateOutputType | null
    _sum: MarksEntrySumAggregateOutputType | null
    _min: MarksEntryMinAggregateOutputType | null
    _max: MarksEntryMaxAggregateOutputType | null
  }

  export type MarksEntryAvgAggregateOutputType = {
    marksObtained: number | null
  }

  export type MarksEntrySumAggregateOutputType = {
    marksObtained: number | null
  }

  export type MarksEntryMinAggregateOutputType = {
    id: string | null
    examCode: $Enums.examCode | null
    examType: $Enums.examType | null
    courseId: string | null
    studentId: string | null
    marksObtained: number | null
    remarks: string | null
  }

  export type MarksEntryMaxAggregateOutputType = {
    id: string | null
    examCode: $Enums.examCode | null
    examType: $Enums.examType | null
    courseId: string | null
    studentId: string | null
    marksObtained: number | null
    remarks: string | null
  }

  export type MarksEntryCountAggregateOutputType = {
    id: number
    examCode: number
    examType: number
    courseId: number
    studentId: number
    marksObtained: number
    remarks: number
    _all: number
  }


  export type MarksEntryAvgAggregateInputType = {
    marksObtained?: true
  }

  export type MarksEntrySumAggregateInputType = {
    marksObtained?: true
  }

  export type MarksEntryMinAggregateInputType = {
    id?: true
    examCode?: true
    examType?: true
    courseId?: true
    studentId?: true
    marksObtained?: true
    remarks?: true
  }

  export type MarksEntryMaxAggregateInputType = {
    id?: true
    examCode?: true
    examType?: true
    courseId?: true
    studentId?: true
    marksObtained?: true
    remarks?: true
  }

  export type MarksEntryCountAggregateInputType = {
    id?: true
    examCode?: true
    examType?: true
    courseId?: true
    studentId?: true
    marksObtained?: true
    remarks?: true
    _all?: true
  }

  export type MarksEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarksEntry to aggregate.
     */
    where?: MarksEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarksEntries to fetch.
     */
    orderBy?: MarksEntryOrderByWithRelationInput | MarksEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarksEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarksEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarksEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarksEntries
    **/
    _count?: true | MarksEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarksEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarksEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarksEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarksEntryMaxAggregateInputType
  }

  export type GetMarksEntryAggregateType<T extends MarksEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateMarksEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarksEntry[P]>
      : GetScalarType<T[P], AggregateMarksEntry[P]>
  }




  export type MarksEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarksEntryWhereInput
    orderBy?: MarksEntryOrderByWithAggregationInput | MarksEntryOrderByWithAggregationInput[]
    by: MarksEntryScalarFieldEnum[] | MarksEntryScalarFieldEnum
    having?: MarksEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarksEntryCountAggregateInputType | true
    _avg?: MarksEntryAvgAggregateInputType
    _sum?: MarksEntrySumAggregateInputType
    _min?: MarksEntryMinAggregateInputType
    _max?: MarksEntryMaxAggregateInputType
  }

  export type MarksEntryGroupByOutputType = {
    id: string
    examCode: $Enums.examCode
    examType: $Enums.examType
    courseId: string
    studentId: string
    marksObtained: number
    remarks: string | null
    _count: MarksEntryCountAggregateOutputType | null
    _avg: MarksEntryAvgAggregateOutputType | null
    _sum: MarksEntrySumAggregateOutputType | null
    _min: MarksEntryMinAggregateOutputType | null
    _max: MarksEntryMaxAggregateOutputType | null
  }

  type GetMarksEntryGroupByPayload<T extends MarksEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarksEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarksEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarksEntryGroupByOutputType[P]>
            : GetScalarType<T[P], MarksEntryGroupByOutputType[P]>
        }
      >
    >


  export type MarksEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examCode?: boolean
    examType?: boolean
    courseId?: boolean
    studentId?: boolean
    marksObtained?: boolean
    remarks?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marksEntry"]>

  export type MarksEntrySelectScalar = {
    id?: boolean
    examCode?: boolean
    examType?: boolean
    courseId?: boolean
    studentId?: boolean
    marksObtained?: boolean
    remarks?: boolean
  }

  export type MarksEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }


  export type $MarksEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarksEntry"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examCode: $Enums.examCode
      examType: $Enums.examType
      courseId: string
      studentId: string
      marksObtained: number
      remarks: string | null
    }, ExtArgs["result"]["marksEntry"]>
    composites: {}
  }


  type MarksEntryGetPayload<S extends boolean | null | undefined | MarksEntryDefaultArgs> = $Result.GetResult<Prisma.$MarksEntryPayload, S>

  type MarksEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarksEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarksEntryCountAggregateInputType | true
    }

  export interface MarksEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarksEntry'], meta: { name: 'MarksEntry' } }
    /**
     * Find zero or one MarksEntry that matches the filter.
     * @param {MarksEntryFindUniqueArgs} args - Arguments to find a MarksEntry
     * @example
     * // Get one MarksEntry
     * const marksEntry = await prisma.marksEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MarksEntryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MarksEntryFindUniqueArgs<ExtArgs>>
    ): Prisma__MarksEntryClient<$Result.GetResult<Prisma.$MarksEntryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MarksEntry that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MarksEntryFindUniqueOrThrowArgs} args - Arguments to find a MarksEntry
     * @example
     * // Get one MarksEntry
     * const marksEntry = await prisma.marksEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MarksEntryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MarksEntryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MarksEntryClient<$Result.GetResult<Prisma.$MarksEntryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MarksEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksEntryFindFirstArgs} args - Arguments to find a MarksEntry
     * @example
     * // Get one MarksEntry
     * const marksEntry = await prisma.marksEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MarksEntryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MarksEntryFindFirstArgs<ExtArgs>>
    ): Prisma__MarksEntryClient<$Result.GetResult<Prisma.$MarksEntryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MarksEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksEntryFindFirstOrThrowArgs} args - Arguments to find a MarksEntry
     * @example
     * // Get one MarksEntry
     * const marksEntry = await prisma.marksEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MarksEntryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MarksEntryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MarksEntryClient<$Result.GetResult<Prisma.$MarksEntryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MarksEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksEntryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarksEntries
     * const marksEntries = await prisma.marksEntry.findMany()
     * 
     * // Get first 10 MarksEntries
     * const marksEntries = await prisma.marksEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marksEntryWithIdOnly = await prisma.marksEntry.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MarksEntryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MarksEntryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarksEntryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MarksEntry.
     * @param {MarksEntryCreateArgs} args - Arguments to create a MarksEntry.
     * @example
     * // Create one MarksEntry
     * const MarksEntry = await prisma.marksEntry.create({
     *   data: {
     *     // ... data to create a MarksEntry
     *   }
     * })
     * 
    **/
    create<T extends MarksEntryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MarksEntryCreateArgs<ExtArgs>>
    ): Prisma__MarksEntryClient<$Result.GetResult<Prisma.$MarksEntryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MarksEntries.
     *     @param {MarksEntryCreateManyArgs} args - Arguments to create many MarksEntries.
     *     @example
     *     // Create many MarksEntries
     *     const marksEntry = await prisma.marksEntry.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MarksEntryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MarksEntryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MarksEntry.
     * @param {MarksEntryDeleteArgs} args - Arguments to delete one MarksEntry.
     * @example
     * // Delete one MarksEntry
     * const MarksEntry = await prisma.marksEntry.delete({
     *   where: {
     *     // ... filter to delete one MarksEntry
     *   }
     * })
     * 
    **/
    delete<T extends MarksEntryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MarksEntryDeleteArgs<ExtArgs>>
    ): Prisma__MarksEntryClient<$Result.GetResult<Prisma.$MarksEntryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MarksEntry.
     * @param {MarksEntryUpdateArgs} args - Arguments to update one MarksEntry.
     * @example
     * // Update one MarksEntry
     * const marksEntry = await prisma.marksEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MarksEntryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MarksEntryUpdateArgs<ExtArgs>>
    ): Prisma__MarksEntryClient<$Result.GetResult<Prisma.$MarksEntryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MarksEntries.
     * @param {MarksEntryDeleteManyArgs} args - Arguments to filter MarksEntries to delete.
     * @example
     * // Delete a few MarksEntries
     * const { count } = await prisma.marksEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MarksEntryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MarksEntryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarksEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarksEntries
     * const marksEntry = await prisma.marksEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MarksEntryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MarksEntryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarksEntry.
     * @param {MarksEntryUpsertArgs} args - Arguments to update or create a MarksEntry.
     * @example
     * // Update or create a MarksEntry
     * const marksEntry = await prisma.marksEntry.upsert({
     *   create: {
     *     // ... data to create a MarksEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarksEntry we want to update
     *   }
     * })
    **/
    upsert<T extends MarksEntryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MarksEntryUpsertArgs<ExtArgs>>
    ): Prisma__MarksEntryClient<$Result.GetResult<Prisma.$MarksEntryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MarksEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksEntryCountArgs} args - Arguments to filter MarksEntries to count.
     * @example
     * // Count the number of MarksEntries
     * const count = await prisma.marksEntry.count({
     *   where: {
     *     // ... the filter for the MarksEntries we want to count
     *   }
     * })
    **/
    count<T extends MarksEntryCountArgs>(
      args?: Subset<T, MarksEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarksEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarksEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarksEntryAggregateArgs>(args: Subset<T, MarksEntryAggregateArgs>): Prisma.PrismaPromise<GetMarksEntryAggregateType<T>>

    /**
     * Group by MarksEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarksEntryGroupByArgs} args - Group by arguments.
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
      T extends MarksEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarksEntryGroupByArgs['orderBy'] }
        : { orderBy?: MarksEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarksEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarksEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarksEntry model
   */
  readonly fields: MarksEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarksEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarksEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MarksEntry model
   */ 
  interface MarksEntryFieldRefs {
    readonly id: FieldRef<"MarksEntry", 'String'>
    readonly examCode: FieldRef<"MarksEntry", 'examCode'>
    readonly examType: FieldRef<"MarksEntry", 'examType'>
    readonly courseId: FieldRef<"MarksEntry", 'String'>
    readonly studentId: FieldRef<"MarksEntry", 'String'>
    readonly marksObtained: FieldRef<"MarksEntry", 'Float'>
    readonly remarks: FieldRef<"MarksEntry", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MarksEntry findUnique
   */
  export type MarksEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
    /**
     * Filter, which MarksEntry to fetch.
     */
    where: MarksEntryWhereUniqueInput
  }


  /**
   * MarksEntry findUniqueOrThrow
   */
  export type MarksEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
    /**
     * Filter, which MarksEntry to fetch.
     */
    where: MarksEntryWhereUniqueInput
  }


  /**
   * MarksEntry findFirst
   */
  export type MarksEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
    /**
     * Filter, which MarksEntry to fetch.
     */
    where?: MarksEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarksEntries to fetch.
     */
    orderBy?: MarksEntryOrderByWithRelationInput | MarksEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarksEntries.
     */
    cursor?: MarksEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarksEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarksEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarksEntries.
     */
    distinct?: MarksEntryScalarFieldEnum | MarksEntryScalarFieldEnum[]
  }


  /**
   * MarksEntry findFirstOrThrow
   */
  export type MarksEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
    /**
     * Filter, which MarksEntry to fetch.
     */
    where?: MarksEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarksEntries to fetch.
     */
    orderBy?: MarksEntryOrderByWithRelationInput | MarksEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarksEntries.
     */
    cursor?: MarksEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarksEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarksEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarksEntries.
     */
    distinct?: MarksEntryScalarFieldEnum | MarksEntryScalarFieldEnum[]
  }


  /**
   * MarksEntry findMany
   */
  export type MarksEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
    /**
     * Filter, which MarksEntries to fetch.
     */
    where?: MarksEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarksEntries to fetch.
     */
    orderBy?: MarksEntryOrderByWithRelationInput | MarksEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarksEntries.
     */
    cursor?: MarksEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarksEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarksEntries.
     */
    skip?: number
    distinct?: MarksEntryScalarFieldEnum | MarksEntryScalarFieldEnum[]
  }


  /**
   * MarksEntry create
   */
  export type MarksEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a MarksEntry.
     */
    data: XOR<MarksEntryCreateInput, MarksEntryUncheckedCreateInput>
  }


  /**
   * MarksEntry createMany
   */
  export type MarksEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarksEntries.
     */
    data: MarksEntryCreateManyInput | MarksEntryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MarksEntry update
   */
  export type MarksEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a MarksEntry.
     */
    data: XOR<MarksEntryUpdateInput, MarksEntryUncheckedUpdateInput>
    /**
     * Choose, which MarksEntry to update.
     */
    where: MarksEntryWhereUniqueInput
  }


  /**
   * MarksEntry updateMany
   */
  export type MarksEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarksEntries.
     */
    data: XOR<MarksEntryUpdateManyMutationInput, MarksEntryUncheckedUpdateManyInput>
    /**
     * Filter which MarksEntries to update
     */
    where?: MarksEntryWhereInput
  }


  /**
   * MarksEntry upsert
   */
  export type MarksEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the MarksEntry to update in case it exists.
     */
    where: MarksEntryWhereUniqueInput
    /**
     * In case the MarksEntry found by the `where` argument doesn't exist, create a new MarksEntry with this data.
     */
    create: XOR<MarksEntryCreateInput, MarksEntryUncheckedCreateInput>
    /**
     * In case the MarksEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarksEntryUpdateInput, MarksEntryUncheckedUpdateInput>
  }


  /**
   * MarksEntry delete
   */
  export type MarksEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
    /**
     * Filter which MarksEntry to delete.
     */
    where: MarksEntryWhereUniqueInput
  }


  /**
   * MarksEntry deleteMany
   */
  export type MarksEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarksEntries to delete
     */
    where?: MarksEntryWhereInput
  }


  /**
   * MarksEntry without action
   */
  export type MarksEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarksEntry
     */
    select?: MarksEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MarksEntryInclude<ExtArgs> | null
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
    classType: $Enums.classType | null
    attendanceType: $Enums.attenanceType | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    studentId: string | null
    date: Date | null
    isPresent: boolean | null
    classType: $Enums.classType | null
    attendanceType: $Enums.attenanceType | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    courseId: number
    studentId: number
    date: number
    isPresent: number
    classType: number
    attendanceType: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    date?: true
    isPresent?: true
    classType?: true
    attendanceType?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    date?: true
    isPresent?: true
    classType?: true
    attendanceType?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    courseId?: true
    studentId?: true
    date?: true
    isPresent?: true
    classType?: true
    attendanceType?: true
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
    classType: $Enums.classType
    attendanceType: $Enums.attenanceType
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
    classType?: boolean
    attendanceType?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    courseId?: boolean
    studentId?: boolean
    date?: boolean
    isPresent?: boolean
    classType?: boolean
    attendanceType?: boolean
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
      classType: $Enums.classType
      attendanceType: $Enums.attenanceType
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }


  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
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
    readonly classType: FieldRef<"Attendance", 'classType'>
    readonly attendanceType: FieldRef<"Attendance", 'attenanceType'>
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
   * Model Batch
   */

  export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  export type BatchMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
  }

  export type BatchMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
  }

  export type BatchCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type BatchMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type BatchMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type BatchCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type BatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batch to aggregate.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batches
    **/
    _count?: true | BatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchMaxAggregateInputType
  }

  export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
        [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch[P]>
      : GetScalarType<T[P], AggregateBatch[P]>
  }




  export type BatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithAggregationInput | BatchOrderByWithAggregationInput[]
    by: BatchScalarFieldEnum[] | BatchScalarFieldEnum
    having?: BatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchCountAggregateInputType | true
    _min?: BatchMinAggregateInputType
    _max?: BatchMaxAggregateInputType
  }

  export type BatchGroupByOutputType = {
    id: string
    code: string
    name: string
    _count: BatchCountAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchGroupByOutputType[P]>
            : GetScalarType<T[P], BatchGroupByOutputType[P]>
        }
      >
    >


  export type BatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    course?: boolean | Batch$courseArgs<ExtArgs>
    student?: boolean | Batch$studentArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>

  export type BatchSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }

  export type BatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Batch$courseArgs<ExtArgs>
    student?: boolean | Batch$studentArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batch"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>[]
      student: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
    }, ExtArgs["result"]["batch"]>
    composites: {}
  }


  type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = $Result.GetResult<Prisma.$BatchPayload, S>

  type BatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BatchCountAggregateInputType | true
    }

  export interface BatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batch'], meta: { name: 'Batch' } }
    /**
     * Find zero or one Batch that matches the filter.
     * @param {BatchFindUniqueArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BatchFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>
    ): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Batch that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BatchFindUniqueOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BatchFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BatchFindFirstArgs<ExtArgs>>
    ): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Batch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batches
     * const batches = await prisma.batch.findMany()
     * 
     * // Get first 10 Batches
     * const batches = await prisma.batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchWithIdOnly = await prisma.batch.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BatchFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BatchFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Batch.
     * @param {BatchCreateArgs} args - Arguments to create a Batch.
     * @example
     * // Create one Batch
     * const Batch = await prisma.batch.create({
     *   data: {
     *     // ... data to create a Batch
     *   }
     * })
     * 
    **/
    create<T extends BatchCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BatchCreateArgs<ExtArgs>>
    ): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Batches.
     *     @param {BatchCreateManyArgs} args - Arguments to create many Batches.
     *     @example
     *     // Create many Batches
     *     const batch = await prisma.batch.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BatchCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BatchCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Batch.
     * @param {BatchDeleteArgs} args - Arguments to delete one Batch.
     * @example
     * // Delete one Batch
     * const Batch = await prisma.batch.delete({
     *   where: {
     *     // ... filter to delete one Batch
     *   }
     * })
     * 
    **/
    delete<T extends BatchDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BatchDeleteArgs<ExtArgs>>
    ): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Batch.
     * @param {BatchUpdateArgs} args - Arguments to update one Batch.
     * @example
     * // Update one Batch
     * const batch = await prisma.batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BatchUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BatchUpdateArgs<ExtArgs>>
    ): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Batches.
     * @param {BatchDeleteManyArgs} args - Arguments to filter Batches to delete.
     * @example
     * // Delete a few Batches
     * const { count } = await prisma.batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BatchDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BatchUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Batch.
     * @param {BatchUpsertArgs} args - Arguments to update or create a Batch.
     * @example
     * // Update or create a Batch
     * const batch = await prisma.batch.upsert({
     *   create: {
     *     // ... data to create a Batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch we want to update
     *   }
     * })
    **/
    upsert<T extends BatchUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BatchUpsertArgs<ExtArgs>>
    ): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchCountArgs} args - Arguments to filter Batches to count.
     * @example
     * // Count the number of Batches
     * const count = await prisma.batch.count({
     *   where: {
     *     // ... the filter for the Batches we want to count
     *   }
     * })
    **/
    count<T extends BatchCountArgs>(
      args?: Subset<T, BatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchAggregateArgs>(args: Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>

    /**
     * Group by Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchGroupByArgs} args - Group by arguments.
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
      T extends BatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchGroupByArgs['orderBy'] }
        : { orderBy?: BatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batch model
   */
  readonly fields: BatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends Batch$courseArgs<ExtArgs> = {}>(args?: Subset<T, Batch$courseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, 'findMany'> | Null>;

    student<T extends Batch$studentArgs<ExtArgs> = {}>(args?: Subset<T, Batch$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Batch model
   */ 
  interface BatchFieldRefs {
    readonly id: FieldRef<"Batch", 'String'>
    readonly code: FieldRef<"Batch", 'String'>
    readonly name: FieldRef<"Batch", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Batch findUnique
   */
  export type BatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }


  /**
   * Batch findUniqueOrThrow
   */
  export type BatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }


  /**
   * Batch findFirst
   */
  export type BatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }


  /**
   * Batch findFirstOrThrow
   */
  export type BatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }


  /**
   * Batch findMany
   */
  export type BatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batches to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }


  /**
   * Batch create
   */
  export type BatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Batch.
     */
    data: XOR<BatchCreateInput, BatchUncheckedCreateInput>
  }


  /**
   * Batch createMany
   */
  export type BatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Batch update
   */
  export type BatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Batch.
     */
    data: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
    /**
     * Choose, which Batch to update.
     */
    where: BatchWhereUniqueInput
  }


  /**
   * Batch updateMany
   */
  export type BatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
  }


  /**
   * Batch upsert
   */
  export type BatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Batch to update in case it exists.
     */
    where: BatchWhereUniqueInput
    /**
     * In case the Batch found by the `where` argument doesn't exist, create a new Batch with this data.
     */
    create: XOR<BatchCreateInput, BatchUncheckedCreateInput>
    /**
     * In case the Batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
  }


  /**
   * Batch delete
   */
  export type BatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter which Batch to delete.
     */
    where: BatchWhereUniqueInput
  }


  /**
   * Batch deleteMany
   */
  export type BatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batches to delete
     */
    where?: BatchWhereInput
  }


  /**
   * Batch.course
   */
  export type Batch$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Batch.student
   */
  export type Batch$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Batch without action
   */
  export type BatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BatchInclude<ExtArgs> | null
  }



  /**
   * Model SteamElective
   */

  export type AggregateSteamElective = {
    _count: SteamElectiveCountAggregateOutputType | null
    _min: SteamElectiveMinAggregateOutputType | null
    _max: SteamElectiveMaxAggregateOutputType | null
  }

  export type SteamElectiveMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
  }

  export type SteamElectiveMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
  }

  export type SteamElectiveCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type SteamElectiveMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type SteamElectiveMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type SteamElectiveCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type SteamElectiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SteamElective to aggregate.
     */
    where?: SteamElectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SteamElectives to fetch.
     */
    orderBy?: SteamElectiveOrderByWithRelationInput | SteamElectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SteamElectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SteamElectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SteamElectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SteamElectives
    **/
    _count?: true | SteamElectiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SteamElectiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SteamElectiveMaxAggregateInputType
  }

  export type GetSteamElectiveAggregateType<T extends SteamElectiveAggregateArgs> = {
        [P in keyof T & keyof AggregateSteamElective]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSteamElective[P]>
      : GetScalarType<T[P], AggregateSteamElective[P]>
  }




  export type SteamElectiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SteamElectiveWhereInput
    orderBy?: SteamElectiveOrderByWithAggregationInput | SteamElectiveOrderByWithAggregationInput[]
    by: SteamElectiveScalarFieldEnum[] | SteamElectiveScalarFieldEnum
    having?: SteamElectiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SteamElectiveCountAggregateInputType | true
    _min?: SteamElectiveMinAggregateInputType
    _max?: SteamElectiveMaxAggregateInputType
  }

  export type SteamElectiveGroupByOutputType = {
    id: string
    code: string
    name: string
    _count: SteamElectiveCountAggregateOutputType | null
    _min: SteamElectiveMinAggregateOutputType | null
    _max: SteamElectiveMaxAggregateOutputType | null
  }

  type GetSteamElectiveGroupByPayload<T extends SteamElectiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SteamElectiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SteamElectiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SteamElectiveGroupByOutputType[P]>
            : GetScalarType<T[P], SteamElectiveGroupByOutputType[P]>
        }
      >
    >


  export type SteamElectiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["steamElective"]>

  export type SteamElectiveSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }


  export type $SteamElectivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SteamElective"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
    }, ExtArgs["result"]["steamElective"]>
    composites: {}
  }


  type SteamElectiveGetPayload<S extends boolean | null | undefined | SteamElectiveDefaultArgs> = $Result.GetResult<Prisma.$SteamElectivePayload, S>

  type SteamElectiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SteamElectiveFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SteamElectiveCountAggregateInputType | true
    }

  export interface SteamElectiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SteamElective'], meta: { name: 'SteamElective' } }
    /**
     * Find zero or one SteamElective that matches the filter.
     * @param {SteamElectiveFindUniqueArgs} args - Arguments to find a SteamElective
     * @example
     * // Get one SteamElective
     * const steamElective = await prisma.steamElective.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SteamElectiveFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SteamElectiveFindUniqueArgs<ExtArgs>>
    ): Prisma__SteamElectiveClient<$Result.GetResult<Prisma.$SteamElectivePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SteamElective that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SteamElectiveFindUniqueOrThrowArgs} args - Arguments to find a SteamElective
     * @example
     * // Get one SteamElective
     * const steamElective = await prisma.steamElective.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SteamElectiveFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SteamElectiveFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SteamElectiveClient<$Result.GetResult<Prisma.$SteamElectivePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SteamElective that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamElectiveFindFirstArgs} args - Arguments to find a SteamElective
     * @example
     * // Get one SteamElective
     * const steamElective = await prisma.steamElective.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SteamElectiveFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SteamElectiveFindFirstArgs<ExtArgs>>
    ): Prisma__SteamElectiveClient<$Result.GetResult<Prisma.$SteamElectivePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SteamElective that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamElectiveFindFirstOrThrowArgs} args - Arguments to find a SteamElective
     * @example
     * // Get one SteamElective
     * const steamElective = await prisma.steamElective.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SteamElectiveFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SteamElectiveFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SteamElectiveClient<$Result.GetResult<Prisma.$SteamElectivePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SteamElectives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamElectiveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SteamElectives
     * const steamElectives = await prisma.steamElective.findMany()
     * 
     * // Get first 10 SteamElectives
     * const steamElectives = await prisma.steamElective.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const steamElectiveWithIdOnly = await prisma.steamElective.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SteamElectiveFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SteamElectiveFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SteamElectivePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SteamElective.
     * @param {SteamElectiveCreateArgs} args - Arguments to create a SteamElective.
     * @example
     * // Create one SteamElective
     * const SteamElective = await prisma.steamElective.create({
     *   data: {
     *     // ... data to create a SteamElective
     *   }
     * })
     * 
    **/
    create<T extends SteamElectiveCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SteamElectiveCreateArgs<ExtArgs>>
    ): Prisma__SteamElectiveClient<$Result.GetResult<Prisma.$SteamElectivePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SteamElectives.
     *     @param {SteamElectiveCreateManyArgs} args - Arguments to create many SteamElectives.
     *     @example
     *     // Create many SteamElectives
     *     const steamElective = await prisma.steamElective.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SteamElectiveCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SteamElectiveCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SteamElective.
     * @param {SteamElectiveDeleteArgs} args - Arguments to delete one SteamElective.
     * @example
     * // Delete one SteamElective
     * const SteamElective = await prisma.steamElective.delete({
     *   where: {
     *     // ... filter to delete one SteamElective
     *   }
     * })
     * 
    **/
    delete<T extends SteamElectiveDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SteamElectiveDeleteArgs<ExtArgs>>
    ): Prisma__SteamElectiveClient<$Result.GetResult<Prisma.$SteamElectivePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SteamElective.
     * @param {SteamElectiveUpdateArgs} args - Arguments to update one SteamElective.
     * @example
     * // Update one SteamElective
     * const steamElective = await prisma.steamElective.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SteamElectiveUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SteamElectiveUpdateArgs<ExtArgs>>
    ): Prisma__SteamElectiveClient<$Result.GetResult<Prisma.$SteamElectivePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SteamElectives.
     * @param {SteamElectiveDeleteManyArgs} args - Arguments to filter SteamElectives to delete.
     * @example
     * // Delete a few SteamElectives
     * const { count } = await prisma.steamElective.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SteamElectiveDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SteamElectiveDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SteamElectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamElectiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SteamElectives
     * const steamElective = await prisma.steamElective.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SteamElectiveUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SteamElectiveUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SteamElective.
     * @param {SteamElectiveUpsertArgs} args - Arguments to update or create a SteamElective.
     * @example
     * // Update or create a SteamElective
     * const steamElective = await prisma.steamElective.upsert({
     *   create: {
     *     // ... data to create a SteamElective
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SteamElective we want to update
     *   }
     * })
    **/
    upsert<T extends SteamElectiveUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SteamElectiveUpsertArgs<ExtArgs>>
    ): Prisma__SteamElectiveClient<$Result.GetResult<Prisma.$SteamElectivePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SteamElectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamElectiveCountArgs} args - Arguments to filter SteamElectives to count.
     * @example
     * // Count the number of SteamElectives
     * const count = await prisma.steamElective.count({
     *   where: {
     *     // ... the filter for the SteamElectives we want to count
     *   }
     * })
    **/
    count<T extends SteamElectiveCountArgs>(
      args?: Subset<T, SteamElectiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SteamElectiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SteamElective.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamElectiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SteamElectiveAggregateArgs>(args: Subset<T, SteamElectiveAggregateArgs>): Prisma.PrismaPromise<GetSteamElectiveAggregateType<T>>

    /**
     * Group by SteamElective.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamElectiveGroupByArgs} args - Group by arguments.
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
      T extends SteamElectiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SteamElectiveGroupByArgs['orderBy'] }
        : { orderBy?: SteamElectiveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SteamElectiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSteamElectiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SteamElective model
   */
  readonly fields: SteamElectiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SteamElective.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SteamElectiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the SteamElective model
   */ 
  interface SteamElectiveFieldRefs {
    readonly id: FieldRef<"SteamElective", 'String'>
    readonly code: FieldRef<"SteamElective", 'String'>
    readonly name: FieldRef<"SteamElective", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SteamElective findUnique
   */
  export type SteamElectiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamElective
     */
    select?: SteamElectiveSelect<ExtArgs> | null
    /**
     * Filter, which SteamElective to fetch.
     */
    where: SteamElectiveWhereUniqueInput
  }


  /**
   * SteamElective findUniqueOrThrow
   */
  export type SteamElectiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamElective
     */
    select?: SteamElectiveSelect<ExtArgs> | null
    /**
     * Filter, which SteamElective to fetch.
     */
    where: SteamElectiveWhereUniqueInput
  }


  /**
   * SteamElective findFirst
   */
  export type SteamElectiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamElective
     */
    select?: SteamElectiveSelect<ExtArgs> | null
    /**
     * Filter, which SteamElective to fetch.
     */
    where?: SteamElectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SteamElectives to fetch.
     */
    orderBy?: SteamElectiveOrderByWithRelationInput | SteamElectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SteamElectives.
     */
    cursor?: SteamElectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SteamElectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SteamElectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SteamElectives.
     */
    distinct?: SteamElectiveScalarFieldEnum | SteamElectiveScalarFieldEnum[]
  }


  /**
   * SteamElective findFirstOrThrow
   */
  export type SteamElectiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamElective
     */
    select?: SteamElectiveSelect<ExtArgs> | null
    /**
     * Filter, which SteamElective to fetch.
     */
    where?: SteamElectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SteamElectives to fetch.
     */
    orderBy?: SteamElectiveOrderByWithRelationInput | SteamElectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SteamElectives.
     */
    cursor?: SteamElectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SteamElectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SteamElectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SteamElectives.
     */
    distinct?: SteamElectiveScalarFieldEnum | SteamElectiveScalarFieldEnum[]
  }


  /**
   * SteamElective findMany
   */
  export type SteamElectiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamElective
     */
    select?: SteamElectiveSelect<ExtArgs> | null
    /**
     * Filter, which SteamElectives to fetch.
     */
    where?: SteamElectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SteamElectives to fetch.
     */
    orderBy?: SteamElectiveOrderByWithRelationInput | SteamElectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SteamElectives.
     */
    cursor?: SteamElectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SteamElectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SteamElectives.
     */
    skip?: number
    distinct?: SteamElectiveScalarFieldEnum | SteamElectiveScalarFieldEnum[]
  }


  /**
   * SteamElective create
   */
  export type SteamElectiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamElective
     */
    select?: SteamElectiveSelect<ExtArgs> | null
    /**
     * The data needed to create a SteamElective.
     */
    data: XOR<SteamElectiveCreateInput, SteamElectiveUncheckedCreateInput>
  }


  /**
   * SteamElective createMany
   */
  export type SteamElectiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SteamElectives.
     */
    data: SteamElectiveCreateManyInput | SteamElectiveCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SteamElective update
   */
  export type SteamElectiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamElective
     */
    select?: SteamElectiveSelect<ExtArgs> | null
    /**
     * The data needed to update a SteamElective.
     */
    data: XOR<SteamElectiveUpdateInput, SteamElectiveUncheckedUpdateInput>
    /**
     * Choose, which SteamElective to update.
     */
    where: SteamElectiveWhereUniqueInput
  }


  /**
   * SteamElective updateMany
   */
  export type SteamElectiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SteamElectives.
     */
    data: XOR<SteamElectiveUpdateManyMutationInput, SteamElectiveUncheckedUpdateManyInput>
    /**
     * Filter which SteamElectives to update
     */
    where?: SteamElectiveWhereInput
  }


  /**
   * SteamElective upsert
   */
  export type SteamElectiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamElective
     */
    select?: SteamElectiveSelect<ExtArgs> | null
    /**
     * The filter to search for the SteamElective to update in case it exists.
     */
    where: SteamElectiveWhereUniqueInput
    /**
     * In case the SteamElective found by the `where` argument doesn't exist, create a new SteamElective with this data.
     */
    create: XOR<SteamElectiveCreateInput, SteamElectiveUncheckedCreateInput>
    /**
     * In case the SteamElective was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SteamElectiveUpdateInput, SteamElectiveUncheckedUpdateInput>
  }


  /**
   * SteamElective delete
   */
  export type SteamElectiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamElective
     */
    select?: SteamElectiveSelect<ExtArgs> | null
    /**
     * Filter which SteamElective to delete.
     */
    where: SteamElectiveWhereUniqueInput
  }


  /**
   * SteamElective deleteMany
   */
  export type SteamElectiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SteamElectives to delete
     */
    where?: SteamElectiveWhereInput
  }


  /**
   * SteamElective without action
   */
  export type SteamElectiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamElective
     */
    select?: SteamElectiveSelect<ExtArgs> | null
  }



  /**
   * Model ProgramElective
   */

  export type AggregateProgramElective = {
    _count: ProgramElectiveCountAggregateOutputType | null
    _min: ProgramElectiveMinAggregateOutputType | null
    _max: ProgramElectiveMaxAggregateOutputType | null
  }

  export type ProgramElectiveMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
  }

  export type ProgramElectiveMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
  }

  export type ProgramElectiveCountAggregateOutputType = {
    id: number
    code: number
    name: number
    _all: number
  }


  export type ProgramElectiveMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type ProgramElectiveMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type ProgramElectiveCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    _all?: true
  }

  export type ProgramElectiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramElective to aggregate.
     */
    where?: ProgramElectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramElectives to fetch.
     */
    orderBy?: ProgramElectiveOrderByWithRelationInput | ProgramElectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramElectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramElectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramElectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramElectives
    **/
    _count?: true | ProgramElectiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramElectiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramElectiveMaxAggregateInputType
  }

  export type GetProgramElectiveAggregateType<T extends ProgramElectiveAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramElective]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramElective[P]>
      : GetScalarType<T[P], AggregateProgramElective[P]>
  }




  export type ProgramElectiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramElectiveWhereInput
    orderBy?: ProgramElectiveOrderByWithAggregationInput | ProgramElectiveOrderByWithAggregationInput[]
    by: ProgramElectiveScalarFieldEnum[] | ProgramElectiveScalarFieldEnum
    having?: ProgramElectiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramElectiveCountAggregateInputType | true
    _min?: ProgramElectiveMinAggregateInputType
    _max?: ProgramElectiveMaxAggregateInputType
  }

  export type ProgramElectiveGroupByOutputType = {
    id: string
    code: string
    name: string
    _count: ProgramElectiveCountAggregateOutputType | null
    _min: ProgramElectiveMinAggregateOutputType | null
    _max: ProgramElectiveMaxAggregateOutputType | null
  }

  type GetProgramElectiveGroupByPayload<T extends ProgramElectiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramElectiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramElectiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramElectiveGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramElectiveGroupByOutputType[P]>
        }
      >
    >


  export type ProgramElectiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
  }, ExtArgs["result"]["programElective"]>

  export type ProgramElectiveSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
  }


  export type $ProgramElectivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramElective"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
    }, ExtArgs["result"]["programElective"]>
    composites: {}
  }


  type ProgramElectiveGetPayload<S extends boolean | null | undefined | ProgramElectiveDefaultArgs> = $Result.GetResult<Prisma.$ProgramElectivePayload, S>

  type ProgramElectiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProgramElectiveFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProgramElectiveCountAggregateInputType | true
    }

  export interface ProgramElectiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramElective'], meta: { name: 'ProgramElective' } }
    /**
     * Find zero or one ProgramElective that matches the filter.
     * @param {ProgramElectiveFindUniqueArgs} args - Arguments to find a ProgramElective
     * @example
     * // Get one ProgramElective
     * const programElective = await prisma.programElective.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProgramElectiveFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProgramElectiveFindUniqueArgs<ExtArgs>>
    ): Prisma__ProgramElectiveClient<$Result.GetResult<Prisma.$ProgramElectivePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProgramElective that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProgramElectiveFindUniqueOrThrowArgs} args - Arguments to find a ProgramElective
     * @example
     * // Get one ProgramElective
     * const programElective = await prisma.programElective.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProgramElectiveFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgramElectiveFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProgramElectiveClient<$Result.GetResult<Prisma.$ProgramElectivePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProgramElective that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramElectiveFindFirstArgs} args - Arguments to find a ProgramElective
     * @example
     * // Get one ProgramElective
     * const programElective = await prisma.programElective.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProgramElectiveFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgramElectiveFindFirstArgs<ExtArgs>>
    ): Prisma__ProgramElectiveClient<$Result.GetResult<Prisma.$ProgramElectivePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProgramElective that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramElectiveFindFirstOrThrowArgs} args - Arguments to find a ProgramElective
     * @example
     * // Get one ProgramElective
     * const programElective = await prisma.programElective.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProgramElectiveFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgramElectiveFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProgramElectiveClient<$Result.GetResult<Prisma.$ProgramElectivePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProgramElectives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramElectiveFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramElectives
     * const programElectives = await prisma.programElective.findMany()
     * 
     * // Get first 10 ProgramElectives
     * const programElectives = await prisma.programElective.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programElectiveWithIdOnly = await prisma.programElective.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProgramElectiveFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgramElectiveFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramElectivePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProgramElective.
     * @param {ProgramElectiveCreateArgs} args - Arguments to create a ProgramElective.
     * @example
     * // Create one ProgramElective
     * const ProgramElective = await prisma.programElective.create({
     *   data: {
     *     // ... data to create a ProgramElective
     *   }
     * })
     * 
    **/
    create<T extends ProgramElectiveCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgramElectiveCreateArgs<ExtArgs>>
    ): Prisma__ProgramElectiveClient<$Result.GetResult<Prisma.$ProgramElectivePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProgramElectives.
     *     @param {ProgramElectiveCreateManyArgs} args - Arguments to create many ProgramElectives.
     *     @example
     *     // Create many ProgramElectives
     *     const programElective = await prisma.programElective.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProgramElectiveCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgramElectiveCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgramElective.
     * @param {ProgramElectiveDeleteArgs} args - Arguments to delete one ProgramElective.
     * @example
     * // Delete one ProgramElective
     * const ProgramElective = await prisma.programElective.delete({
     *   where: {
     *     // ... filter to delete one ProgramElective
     *   }
     * })
     * 
    **/
    delete<T extends ProgramElectiveDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProgramElectiveDeleteArgs<ExtArgs>>
    ): Prisma__ProgramElectiveClient<$Result.GetResult<Prisma.$ProgramElectivePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProgramElective.
     * @param {ProgramElectiveUpdateArgs} args - Arguments to update one ProgramElective.
     * @example
     * // Update one ProgramElective
     * const programElective = await prisma.programElective.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProgramElectiveUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProgramElectiveUpdateArgs<ExtArgs>>
    ): Prisma__ProgramElectiveClient<$Result.GetResult<Prisma.$ProgramElectivePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProgramElectives.
     * @param {ProgramElectiveDeleteManyArgs} args - Arguments to filter ProgramElectives to delete.
     * @example
     * // Delete a few ProgramElectives
     * const { count } = await prisma.programElective.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProgramElectiveDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProgramElectiveDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramElectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramElectiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramElectives
     * const programElective = await prisma.programElective.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProgramElectiveUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProgramElectiveUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgramElective.
     * @param {ProgramElectiveUpsertArgs} args - Arguments to update or create a ProgramElective.
     * @example
     * // Update or create a ProgramElective
     * const programElective = await prisma.programElective.upsert({
     *   create: {
     *     // ... data to create a ProgramElective
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramElective we want to update
     *   }
     * })
    **/
    upsert<T extends ProgramElectiveUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProgramElectiveUpsertArgs<ExtArgs>>
    ): Prisma__ProgramElectiveClient<$Result.GetResult<Prisma.$ProgramElectivePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProgramElectives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramElectiveCountArgs} args - Arguments to filter ProgramElectives to count.
     * @example
     * // Count the number of ProgramElectives
     * const count = await prisma.programElective.count({
     *   where: {
     *     // ... the filter for the ProgramElectives we want to count
     *   }
     * })
    **/
    count<T extends ProgramElectiveCountArgs>(
      args?: Subset<T, ProgramElectiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramElectiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramElective.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramElectiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramElectiveAggregateArgs>(args: Subset<T, ProgramElectiveAggregateArgs>): Prisma.PrismaPromise<GetProgramElectiveAggregateType<T>>

    /**
     * Group by ProgramElective.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramElectiveGroupByArgs} args - Group by arguments.
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
      T extends ProgramElectiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramElectiveGroupByArgs['orderBy'] }
        : { orderBy?: ProgramElectiveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramElectiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramElectiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramElective model
   */
  readonly fields: ProgramElectiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramElective.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramElectiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the ProgramElective model
   */ 
  interface ProgramElectiveFieldRefs {
    readonly id: FieldRef<"ProgramElective", 'String'>
    readonly code: FieldRef<"ProgramElective", 'String'>
    readonly name: FieldRef<"ProgramElective", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ProgramElective findUnique
   */
  export type ProgramElectiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramElective
     */
    select?: ProgramElectiveSelect<ExtArgs> | null
    /**
     * Filter, which ProgramElective to fetch.
     */
    where: ProgramElectiveWhereUniqueInput
  }


  /**
   * ProgramElective findUniqueOrThrow
   */
  export type ProgramElectiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramElective
     */
    select?: ProgramElectiveSelect<ExtArgs> | null
    /**
     * Filter, which ProgramElective to fetch.
     */
    where: ProgramElectiveWhereUniqueInput
  }


  /**
   * ProgramElective findFirst
   */
  export type ProgramElectiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramElective
     */
    select?: ProgramElectiveSelect<ExtArgs> | null
    /**
     * Filter, which ProgramElective to fetch.
     */
    where?: ProgramElectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramElectives to fetch.
     */
    orderBy?: ProgramElectiveOrderByWithRelationInput | ProgramElectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramElectives.
     */
    cursor?: ProgramElectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramElectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramElectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramElectives.
     */
    distinct?: ProgramElectiveScalarFieldEnum | ProgramElectiveScalarFieldEnum[]
  }


  /**
   * ProgramElective findFirstOrThrow
   */
  export type ProgramElectiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramElective
     */
    select?: ProgramElectiveSelect<ExtArgs> | null
    /**
     * Filter, which ProgramElective to fetch.
     */
    where?: ProgramElectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramElectives to fetch.
     */
    orderBy?: ProgramElectiveOrderByWithRelationInput | ProgramElectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramElectives.
     */
    cursor?: ProgramElectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramElectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramElectives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramElectives.
     */
    distinct?: ProgramElectiveScalarFieldEnum | ProgramElectiveScalarFieldEnum[]
  }


  /**
   * ProgramElective findMany
   */
  export type ProgramElectiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramElective
     */
    select?: ProgramElectiveSelect<ExtArgs> | null
    /**
     * Filter, which ProgramElectives to fetch.
     */
    where?: ProgramElectiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramElectives to fetch.
     */
    orderBy?: ProgramElectiveOrderByWithRelationInput | ProgramElectiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramElectives.
     */
    cursor?: ProgramElectiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramElectives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramElectives.
     */
    skip?: number
    distinct?: ProgramElectiveScalarFieldEnum | ProgramElectiveScalarFieldEnum[]
  }


  /**
   * ProgramElective create
   */
  export type ProgramElectiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramElective
     */
    select?: ProgramElectiveSelect<ExtArgs> | null
    /**
     * The data needed to create a ProgramElective.
     */
    data: XOR<ProgramElectiveCreateInput, ProgramElectiveUncheckedCreateInput>
  }


  /**
   * ProgramElective createMany
   */
  export type ProgramElectiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramElectives.
     */
    data: ProgramElectiveCreateManyInput | ProgramElectiveCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProgramElective update
   */
  export type ProgramElectiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramElective
     */
    select?: ProgramElectiveSelect<ExtArgs> | null
    /**
     * The data needed to update a ProgramElective.
     */
    data: XOR<ProgramElectiveUpdateInput, ProgramElectiveUncheckedUpdateInput>
    /**
     * Choose, which ProgramElective to update.
     */
    where: ProgramElectiveWhereUniqueInput
  }


  /**
   * ProgramElective updateMany
   */
  export type ProgramElectiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramElectives.
     */
    data: XOR<ProgramElectiveUpdateManyMutationInput, ProgramElectiveUncheckedUpdateManyInput>
    /**
     * Filter which ProgramElectives to update
     */
    where?: ProgramElectiveWhereInput
  }


  /**
   * ProgramElective upsert
   */
  export type ProgramElectiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramElective
     */
    select?: ProgramElectiveSelect<ExtArgs> | null
    /**
     * The filter to search for the ProgramElective to update in case it exists.
     */
    where: ProgramElectiveWhereUniqueInput
    /**
     * In case the ProgramElective found by the `where` argument doesn't exist, create a new ProgramElective with this data.
     */
    create: XOR<ProgramElectiveCreateInput, ProgramElectiveUncheckedCreateInput>
    /**
     * In case the ProgramElective was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramElectiveUpdateInput, ProgramElectiveUncheckedUpdateInput>
  }


  /**
   * ProgramElective delete
   */
  export type ProgramElectiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramElective
     */
    select?: ProgramElectiveSelect<ExtArgs> | null
    /**
     * Filter which ProgramElective to delete.
     */
    where: ProgramElectiveWhereUniqueInput
  }


  /**
   * ProgramElective deleteMany
   */
  export type ProgramElectiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramElectives to delete
     */
    where?: ProgramElectiveWhereInput
  }


  /**
   * ProgramElective without action
   */
  export type ProgramElectiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramElective
     */
    select?: ProgramElectiveSelect<ExtArgs> | null
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
    userId: 'userId',
    batchId: 'batchId'
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
    sem: 'sem',
    name: 'name'
  };

  export type SemesterScalarFieldEnum = (typeof SemesterScalarFieldEnum)[keyof typeof SemesterScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    courseType: 'courseType',
    electiveCode: 'electiveCode',
    credit: 'credit',
    labIncluded: 'labIncluded',
    batchId: 'batchId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseRegistrationScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    studentId: 'studentId',
    semesterId: 'semesterId'
  };

  export type CourseRegistrationScalarFieldEnum = (typeof CourseRegistrationScalarFieldEnum)[keyof typeof CourseRegistrationScalarFieldEnum]


  export const FacultyCourseAssignmentScalarFieldEnum: {
    id: 'id',
    facultyId: 'facultyId',
    courseId: 'courseId'
  };

  export type FacultyCourseAssignmentScalarFieldEnum = (typeof FacultyCourseAssignmentScalarFieldEnum)[keyof typeof FacultyCourseAssignmentScalarFieldEnum]


  export const MarksEntryScalarFieldEnum: {
    id: 'id',
    examCode: 'examCode',
    examType: 'examType',
    courseId: 'courseId',
    studentId: 'studentId',
    marksObtained: 'marksObtained',
    remarks: 'remarks'
  };

  export type MarksEntryScalarFieldEnum = (typeof MarksEntryScalarFieldEnum)[keyof typeof MarksEntryScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    studentId: 'studentId',
    date: 'date',
    isPresent: 'isPresent',
    classType: 'classType',
    attendanceType: 'attendanceType'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const BatchScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum]


  export const SteamElectiveScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type SteamElectiveScalarFieldEnum = (typeof SteamElectiveScalarFieldEnum)[keyof typeof SteamElectiveScalarFieldEnum]


  export const ProgramElectiveScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name'
  };

  export type ProgramElectiveScalarFieldEnum = (typeof ProgramElectiveScalarFieldEnum)[keyof typeof ProgramElectiveScalarFieldEnum]


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
   * Reference to a field of type 'courseType'
   */
  export type EnumcourseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'courseType'>
    


  /**
   * Reference to a field of type 'courseType[]'
   */
  export type ListEnumcourseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'courseType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'examCode'
   */
  export type EnumexamCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'examCode'>
    


  /**
   * Reference to a field of type 'examCode[]'
   */
  export type ListEnumexamCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'examCode[]'>
    


  /**
   * Reference to a field of type 'examType'
   */
  export type EnumexamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'examType'>
    


  /**
   * Reference to a field of type 'examType[]'
   */
  export type ListEnumexamTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'examType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'classType'
   */
  export type EnumclassTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'classType'>
    


  /**
   * Reference to a field of type 'classType[]'
   */
  export type ListEnumclassTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'classType[]'>
    


  /**
   * Reference to a field of type 'attenanceType'
   */
  export type EnumattenanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'attenanceType'>
    


  /**
   * Reference to a field of type 'attenanceType[]'
   */
  export type ListEnumattenanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'attenanceType[]'>
    
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
    batchId?: UuidFilter<"Student"> | string
    semester?: XOR<SemesterRelationFilter, SemesterWhereInput>
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    batch?: XOR<BatchRelationFilter, BatchWhereInput>
    courseRegistered?: CourseRegistrationListRelationFilter
    attendances?: AttendanceListRelationFilter
    examEntries?: MarksEntryListRelationFilter
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
    batchId?: SortOrder
    semester?: SemesterOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    batch?: BatchOrderByWithRelationInput
    courseRegistered?: CourseRegistrationOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    examEntries?: MarksEntryOrderByRelationAggregateInput
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
    batchId?: UuidFilter<"Student"> | string
    semester?: XOR<SemesterRelationFilter, SemesterWhereInput>
    branch?: XOR<BranchRelationFilter, BranchWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    batch?: XOR<BatchRelationFilter, BatchWhereInput>
    courseRegistered?: CourseRegistrationListRelationFilter
    attendances?: AttendanceListRelationFilter
    examEntries?: MarksEntryListRelationFilter
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
    batchId?: SortOrder
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
    batchId?: UuidWithAggregatesFilter<"Student"> | string
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
    name?: StringFilter<"Semester"> | string
    course?: CourseListRelationFilter
    student?: StudentListRelationFilter
    courseRegistration?: CourseRegistrationListRelationFilter
  }

  export type SemesterOrderByWithRelationInput = {
    id?: SortOrder
    sem?: SortOrder
    name?: SortOrder
    course?: CourseOrderByRelationAggregateInput
    student?: StudentOrderByRelationAggregateInput
    courseRegistration?: CourseRegistrationOrderByRelationAggregateInput
  }

  export type SemesterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sem?: number
    name?: string
    AND?: SemesterWhereInput | SemesterWhereInput[]
    OR?: SemesterWhereInput[]
    NOT?: SemesterWhereInput | SemesterWhereInput[]
    course?: CourseListRelationFilter
    student?: StudentListRelationFilter
    courseRegistration?: CourseRegistrationListRelationFilter
  }, "id" | "sem" | "name">

  export type SemesterOrderByWithAggregationInput = {
    id?: SortOrder
    sem?: SortOrder
    name?: SortOrder
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
    name?: StringWithAggregatesFilter<"Semester"> | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: UuidFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    code?: StringFilter<"Branch"> | string
    course?: CourseListRelationFilter
    student?: StudentListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    course?: CourseOrderByRelationAggregateInput
    student?: StudentOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    code?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    course?: CourseListRelationFilter
    student?: StudentListRelationFilter
  }, "id" | "name" | "code">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
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
    code?: StringWithAggregatesFilter<"Branch"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: UuidFilter<"Course"> | string
    code?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    courseType?: EnumcourseTypeFilter<"Course"> | $Enums.courseType
    electiveCode?: StringNullableFilter<"Course"> | string | null
    credit?: IntFilter<"Course"> | number
    labIncluded?: BoolFilter<"Course"> | boolean
    batchId?: UuidFilter<"Course"> | string
    batch?: XOR<BatchRelationFilter, BatchWhereInput>
    branch?: BranchListRelationFilter
    semester?: SemesterListRelationFilter
    studentRegistered?: CourseRegistrationListRelationFilter
    facultyAssigned?: FacultyCourseAssignmentListRelationFilter
    attendances?: AttendanceListRelationFilter
    examEntries?: MarksEntryListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    courseType?: SortOrder
    electiveCode?: SortOrderInput | SortOrder
    credit?: SortOrder
    labIncluded?: SortOrder
    batchId?: SortOrder
    batch?: BatchOrderByWithRelationInput
    branch?: BranchOrderByRelationAggregateInput
    semester?: SemesterOrderByRelationAggregateInput
    studentRegistered?: CourseRegistrationOrderByRelationAggregateInput
    facultyAssigned?: FacultyCourseAssignmentOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    examEntries?: MarksEntryOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    courseType?: EnumcourseTypeFilter<"Course"> | $Enums.courseType
    electiveCode?: StringNullableFilter<"Course"> | string | null
    credit?: IntFilter<"Course"> | number
    labIncluded?: BoolFilter<"Course"> | boolean
    batchId?: UuidFilter<"Course"> | string
    batch?: XOR<BatchRelationFilter, BatchWhereInput>
    branch?: BranchListRelationFilter
    semester?: SemesterListRelationFilter
    studentRegistered?: CourseRegistrationListRelationFilter
    facultyAssigned?: FacultyCourseAssignmentListRelationFilter
    attendances?: AttendanceListRelationFilter
    examEntries?: MarksEntryListRelationFilter
  }, "id" | "code">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    courseType?: SortOrder
    electiveCode?: SortOrderInput | SortOrder
    credit?: SortOrder
    labIncluded?: SortOrder
    batchId?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Course"> | string
    code?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    courseType?: EnumcourseTypeWithAggregatesFilter<"Course"> | $Enums.courseType
    electiveCode?: StringNullableWithAggregatesFilter<"Course"> | string | null
    credit?: IntWithAggregatesFilter<"Course"> | number
    labIncluded?: BoolWithAggregatesFilter<"Course"> | boolean
    batchId?: UuidWithAggregatesFilter<"Course"> | string
  }

  export type CourseRegistrationWhereInput = {
    AND?: CourseRegistrationWhereInput | CourseRegistrationWhereInput[]
    OR?: CourseRegistrationWhereInput[]
    NOT?: CourseRegistrationWhereInput | CourseRegistrationWhereInput[]
    id?: UuidFilter<"CourseRegistration"> | string
    courseId?: UuidFilter<"CourseRegistration"> | string
    studentId?: UuidFilter<"CourseRegistration"> | string
    semesterId?: UuidFilter<"CourseRegistration"> | string
    semester?: XOR<SemesterRelationFilter, SemesterWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type CourseRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    semesterId?: SortOrder
    semester?: SemesterOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type CourseRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseRegistrationWhereInput | CourseRegistrationWhereInput[]
    OR?: CourseRegistrationWhereInput[]
    NOT?: CourseRegistrationWhereInput | CourseRegistrationWhereInput[]
    courseId?: UuidFilter<"CourseRegistration"> | string
    studentId?: UuidFilter<"CourseRegistration"> | string
    semesterId?: UuidFilter<"CourseRegistration"> | string
    semester?: XOR<SemesterRelationFilter, SemesterWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }, "id">

  export type CourseRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    semesterId?: SortOrder
    _count?: CourseRegistrationCountOrderByAggregateInput
    _max?: CourseRegistrationMaxOrderByAggregateInput
    _min?: CourseRegistrationMinOrderByAggregateInput
  }

  export type CourseRegistrationScalarWhereWithAggregatesInput = {
    AND?: CourseRegistrationScalarWhereWithAggregatesInput | CourseRegistrationScalarWhereWithAggregatesInput[]
    OR?: CourseRegistrationScalarWhereWithAggregatesInput[]
    NOT?: CourseRegistrationScalarWhereWithAggregatesInput | CourseRegistrationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CourseRegistration"> | string
    courseId?: UuidWithAggregatesFilter<"CourseRegistration"> | string
    studentId?: UuidWithAggregatesFilter<"CourseRegistration"> | string
    semesterId?: UuidWithAggregatesFilter<"CourseRegistration"> | string
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
    facultyId_courseId?: FacultyCourseAssignmentFacultyIdCourseIdCompoundUniqueInput
    AND?: FacultyCourseAssignmentWhereInput | FacultyCourseAssignmentWhereInput[]
    OR?: FacultyCourseAssignmentWhereInput[]
    NOT?: FacultyCourseAssignmentWhereInput | FacultyCourseAssignmentWhereInput[]
    facultyId?: UuidFilter<"FacultyCourseAssignment"> | string
    courseId?: UuidFilter<"FacultyCourseAssignment"> | string
    faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }, "id" | "facultyId_courseId">

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

  export type MarksEntryWhereInput = {
    AND?: MarksEntryWhereInput | MarksEntryWhereInput[]
    OR?: MarksEntryWhereInput[]
    NOT?: MarksEntryWhereInput | MarksEntryWhereInput[]
    id?: UuidFilter<"MarksEntry"> | string
    examCode?: EnumexamCodeFilter<"MarksEntry"> | $Enums.examCode
    examType?: EnumexamTypeFilter<"MarksEntry"> | $Enums.examType
    courseId?: UuidFilter<"MarksEntry"> | string
    studentId?: UuidFilter<"MarksEntry"> | string
    marksObtained?: FloatFilter<"MarksEntry"> | number
    remarks?: StringNullableFilter<"MarksEntry"> | string | null
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type MarksEntryOrderByWithRelationInput = {
    id?: SortOrder
    examCode?: SortOrder
    examType?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    marksObtained?: SortOrder
    remarks?: SortOrderInput | SortOrder
    course?: CourseOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type MarksEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    examCode_examType_courseId_studentId?: MarksEntryExamCodeExamTypeCourseIdStudentIdCompoundUniqueInput
    AND?: MarksEntryWhereInput | MarksEntryWhereInput[]
    OR?: MarksEntryWhereInput[]
    NOT?: MarksEntryWhereInput | MarksEntryWhereInput[]
    examCode?: EnumexamCodeFilter<"MarksEntry"> | $Enums.examCode
    examType?: EnumexamTypeFilter<"MarksEntry"> | $Enums.examType
    courseId?: UuidFilter<"MarksEntry"> | string
    studentId?: UuidFilter<"MarksEntry"> | string
    marksObtained?: FloatFilter<"MarksEntry"> | number
    remarks?: StringNullableFilter<"MarksEntry"> | string | null
    course?: XOR<CourseRelationFilter, CourseWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }, "id" | "examCode_examType_courseId_studentId">

  export type MarksEntryOrderByWithAggregationInput = {
    id?: SortOrder
    examCode?: SortOrder
    examType?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    marksObtained?: SortOrder
    remarks?: SortOrderInput | SortOrder
    _count?: MarksEntryCountOrderByAggregateInput
    _avg?: MarksEntryAvgOrderByAggregateInput
    _max?: MarksEntryMaxOrderByAggregateInput
    _min?: MarksEntryMinOrderByAggregateInput
    _sum?: MarksEntrySumOrderByAggregateInput
  }

  export type MarksEntryScalarWhereWithAggregatesInput = {
    AND?: MarksEntryScalarWhereWithAggregatesInput | MarksEntryScalarWhereWithAggregatesInput[]
    OR?: MarksEntryScalarWhereWithAggregatesInput[]
    NOT?: MarksEntryScalarWhereWithAggregatesInput | MarksEntryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MarksEntry"> | string
    examCode?: EnumexamCodeWithAggregatesFilter<"MarksEntry"> | $Enums.examCode
    examType?: EnumexamTypeWithAggregatesFilter<"MarksEntry"> | $Enums.examType
    courseId?: UuidWithAggregatesFilter<"MarksEntry"> | string
    studentId?: UuidWithAggregatesFilter<"MarksEntry"> | string
    marksObtained?: FloatWithAggregatesFilter<"MarksEntry"> | number
    remarks?: StringNullableWithAggregatesFilter<"MarksEntry"> | string | null
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
    classType?: EnumclassTypeFilter<"Attendance"> | $Enums.classType
    attendanceType?: EnumattenanceTypeFilter<"Attendance"> | $Enums.attenanceType
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    classType?: SortOrder
    attendanceType?: SortOrder
    student?: StudentOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_studentId_date?: AttendanceCourseIdStudentIdDateCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    courseId?: UuidFilter<"Attendance"> | string
    studentId?: UuidFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    isPresent?: BoolFilter<"Attendance"> | boolean
    classType?: EnumclassTypeFilter<"Attendance"> | $Enums.classType
    attendanceType?: EnumattenanceTypeFilter<"Attendance"> | $Enums.attenanceType
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    course?: XOR<CourseRelationFilter, CourseWhereInput>
  }, "id" | "courseId_studentId_date">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    classType?: SortOrder
    attendanceType?: SortOrder
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
    classType?: EnumclassTypeWithAggregatesFilter<"Attendance"> | $Enums.classType
    attendanceType?: EnumattenanceTypeWithAggregatesFilter<"Attendance"> | $Enums.attenanceType
  }

  export type BatchWhereInput = {
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    id?: UuidFilter<"Batch"> | string
    code?: StringFilter<"Batch"> | string
    name?: StringFilter<"Batch"> | string
    course?: CourseListRelationFilter
    student?: StudentListRelationFilter
  }

  export type BatchOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    course?: CourseOrderByRelationAggregateInput
    student?: StudentOrderByRelationAggregateInput
  }

  export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    name?: StringFilter<"Batch"> | string
    course?: CourseListRelationFilter
    student?: StudentListRelationFilter
  }, "id" | "code">

  export type BatchOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: BatchCountOrderByAggregateInput
    _max?: BatchMaxOrderByAggregateInput
    _min?: BatchMinOrderByAggregateInput
  }

  export type BatchScalarWhereWithAggregatesInput = {
    AND?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    OR?: BatchScalarWhereWithAggregatesInput[]
    NOT?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Batch"> | string
    code?: StringWithAggregatesFilter<"Batch"> | string
    name?: StringWithAggregatesFilter<"Batch"> | string
  }

  export type SteamElectiveWhereInput = {
    AND?: SteamElectiveWhereInput | SteamElectiveWhereInput[]
    OR?: SteamElectiveWhereInput[]
    NOT?: SteamElectiveWhereInput | SteamElectiveWhereInput[]
    id?: UuidFilter<"SteamElective"> | string
    code?: StringFilter<"SteamElective"> | string
    name?: StringFilter<"SteamElective"> | string
  }

  export type SteamElectiveOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type SteamElectiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: SteamElectiveWhereInput | SteamElectiveWhereInput[]
    OR?: SteamElectiveWhereInput[]
    NOT?: SteamElectiveWhereInput | SteamElectiveWhereInput[]
    name?: StringFilter<"SteamElective"> | string
  }, "id" | "code">

  export type SteamElectiveOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: SteamElectiveCountOrderByAggregateInput
    _max?: SteamElectiveMaxOrderByAggregateInput
    _min?: SteamElectiveMinOrderByAggregateInput
  }

  export type SteamElectiveScalarWhereWithAggregatesInput = {
    AND?: SteamElectiveScalarWhereWithAggregatesInput | SteamElectiveScalarWhereWithAggregatesInput[]
    OR?: SteamElectiveScalarWhereWithAggregatesInput[]
    NOT?: SteamElectiveScalarWhereWithAggregatesInput | SteamElectiveScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"SteamElective"> | string
    code?: StringWithAggregatesFilter<"SteamElective"> | string
    name?: StringWithAggregatesFilter<"SteamElective"> | string
  }

  export type ProgramElectiveWhereInput = {
    AND?: ProgramElectiveWhereInput | ProgramElectiveWhereInput[]
    OR?: ProgramElectiveWhereInput[]
    NOT?: ProgramElectiveWhereInput | ProgramElectiveWhereInput[]
    id?: UuidFilter<"ProgramElective"> | string
    code?: StringFilter<"ProgramElective"> | string
    name?: StringFilter<"ProgramElective"> | string
  }

  export type ProgramElectiveOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type ProgramElectiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProgramElectiveWhereInput | ProgramElectiveWhereInput[]
    OR?: ProgramElectiveWhereInput[]
    NOT?: ProgramElectiveWhereInput | ProgramElectiveWhereInput[]
    name?: StringFilter<"ProgramElective"> | string
  }, "id" | "code">

  export type ProgramElectiveOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    _count?: ProgramElectiveCountOrderByAggregateInput
    _max?: ProgramElectiveMaxOrderByAggregateInput
    _min?: ProgramElectiveMinOrderByAggregateInput
  }

  export type ProgramElectiveScalarWhereWithAggregatesInput = {
    AND?: ProgramElectiveScalarWhereWithAggregatesInput | ProgramElectiveScalarWhereWithAggregatesInput[]
    OR?: ProgramElectiveScalarWhereWithAggregatesInput[]
    NOT?: ProgramElectiveScalarWhereWithAggregatesInput | ProgramElectiveScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProgramElective"> | string
    code?: StringWithAggregatesFilter<"ProgramElective"> | string
    name?: StringWithAggregatesFilter<"ProgramElective"> | string
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
    batch: BatchCreateNestedOneWithoutStudentInput
    courseRegistered?: CourseRegistrationCreateNestedManyWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryCreateNestedManyWithoutStudentInput
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
    batchId: string
    courseRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutStudentInput
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
    batch?: BatchUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: CourseRegistrationUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUpdateManyWithoutStudentNestedInput
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
    batchId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: CourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutStudentNestedInput
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
    batchId: string
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
    batchId?: StringFieldUpdateOperationsInput | string
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
    name: string
    course?: CourseCreateNestedManyWithoutSemesterInput
    student?: StudentCreateNestedManyWithoutSemesterInput
    courseRegistration?: CourseRegistrationCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateInput = {
    id?: string
    sem: number
    name: string
    course?: CourseUncheckedCreateNestedManyWithoutSemesterInput
    student?: StudentUncheckedCreateNestedManyWithoutSemesterInput
    courseRegistration?: CourseRegistrationUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateManyWithoutSemesterNestedInput
    student?: StudentUpdateManyWithoutSemesterNestedInput
    courseRegistration?: CourseRegistrationUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUncheckedUpdateManyWithoutSemesterNestedInput
    student?: StudentUncheckedUpdateManyWithoutSemesterNestedInput
    courseRegistration?: CourseRegistrationUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterCreateManyInput = {
    id?: string
    sem: number
    name: string
  }

  export type SemesterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    code: string
    course?: CourseCreateNestedManyWithoutBranchInput
    student?: StudentCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    course?: CourseUncheckedCreateNestedManyWithoutBranchInput
    student?: StudentUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateManyWithoutBranchNestedInput
    student?: StudentUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    course?: CourseUncheckedUpdateManyWithoutBranchNestedInput
    student?: StudentUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
    code: string
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batch: BatchCreateNestedOneWithoutCourseInput
    branch?: BranchCreateNestedManyWithoutCourseInput
    semester?: SemesterCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batchId: string
    branch?: BranchUncheckedCreateNestedManyWithoutCourseInput
    semester?: SemesterUncheckedCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batch?: BatchUpdateOneRequiredWithoutCourseNestedInput
    branch?: BranchUpdateManyWithoutCourseNestedInput
    semester?: SemesterUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batchId?: StringFieldUpdateOperationsInput | string
    branch?: BranchUncheckedUpdateManyWithoutCourseNestedInput
    semester?: SemesterUncheckedUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batchId: string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batchId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseRegistrationCreateInput = {
    id?: string
    semester: SemesterCreateNestedOneWithoutCourseRegistrationInput
    course: CourseCreateNestedOneWithoutStudentRegisteredInput
    student: StudentCreateNestedOneWithoutCourseRegisteredInput
  }

  export type CourseRegistrationUncheckedCreateInput = {
    id?: string
    courseId: string
    studentId: string
    semesterId: string
  }

  export type CourseRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutCourseRegistrationNestedInput
    course?: CourseUpdateOneRequiredWithoutStudentRegisteredNestedInput
    student?: StudentUpdateOneRequiredWithoutCourseRegisteredNestedInput
  }

  export type CourseRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseRegistrationCreateManyInput = {
    id?: string
    courseId: string
    studentId: string
    semesterId: string
  }

  export type CourseRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CourseRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
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

  export type MarksEntryCreateInput = {
    id?: string
    examCode: $Enums.examCode
    examType: $Enums.examType
    marksObtained: number
    remarks?: string | null
    course: CourseCreateNestedOneWithoutExamEntriesInput
    student: StudentCreateNestedOneWithoutExamEntriesInput
  }

  export type MarksEntryUncheckedCreateInput = {
    id?: string
    examCode: $Enums.examCode
    examType: $Enums.examType
    courseId: string
    studentId: string
    marksObtained: number
    remarks?: string | null
  }

  export type MarksEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examCode?: EnumexamCodeFieldUpdateOperationsInput | $Enums.examCode
    examType?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    course?: CourseUpdateOneRequiredWithoutExamEntriesNestedInput
    student?: StudentUpdateOneRequiredWithoutExamEntriesNestedInput
  }

  export type MarksEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examCode?: EnumexamCodeFieldUpdateOperationsInput | $Enums.examCode
    examType?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarksEntryCreateManyInput = {
    id?: string
    examCode: $Enums.examCode
    examType: $Enums.examType
    courseId: string
    studentId: string
    marksObtained: number
    remarks?: string | null
  }

  export type MarksEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    examCode?: EnumexamCodeFieldUpdateOperationsInput | $Enums.examCode
    examType?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarksEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examCode?: EnumexamCodeFieldUpdateOperationsInput | $Enums.examCode
    examType?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateInput = {
    id?: string
    date?: Date | string
    isPresent: boolean
    classType?: $Enums.classType
    attendanceType?: $Enums.attenanceType
    student: StudentCreateNestedOneWithoutAttendancesInput
    course: CourseCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    courseId: string
    studentId: string
    date?: Date | string
    isPresent: boolean
    classType?: $Enums.classType
    attendanceType?: $Enums.attenanceType
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    classType?: EnumclassTypeFieldUpdateOperationsInput | $Enums.classType
    attendanceType?: EnumattenanceTypeFieldUpdateOperationsInput | $Enums.attenanceType
    student?: StudentUpdateOneRequiredWithoutAttendancesNestedInput
    course?: CourseUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    classType?: EnumclassTypeFieldUpdateOperationsInput | $Enums.classType
    attendanceType?: EnumattenanceTypeFieldUpdateOperationsInput | $Enums.attenanceType
  }

  export type AttendanceCreateManyInput = {
    id?: string
    courseId: string
    studentId: string
    date?: Date | string
    isPresent: boolean
    classType?: $Enums.classType
    attendanceType?: $Enums.attenanceType
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    classType?: EnumclassTypeFieldUpdateOperationsInput | $Enums.classType
    attendanceType?: EnumattenanceTypeFieldUpdateOperationsInput | $Enums.attenanceType
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    classType?: EnumclassTypeFieldUpdateOperationsInput | $Enums.classType
    attendanceType?: EnumattenanceTypeFieldUpdateOperationsInput | $Enums.attenanceType
  }

  export type BatchCreateInput = {
    id?: string
    code: string
    name: string
    course?: CourseCreateNestedManyWithoutBatchInput
    student?: StudentCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    course?: CourseUncheckedCreateNestedManyWithoutBatchInput
    student?: StudentUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateManyWithoutBatchNestedInput
    student?: StudentUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUncheckedUpdateManyWithoutBatchNestedInput
    student?: StudentUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchCreateManyInput = {
    id?: string
    code: string
    name: string
  }

  export type BatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SteamElectiveCreateInput = {
    id?: string
    code: string
    name: string
  }

  export type SteamElectiveUncheckedCreateInput = {
    id?: string
    code: string
    name: string
  }

  export type SteamElectiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SteamElectiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SteamElectiveCreateManyInput = {
    id?: string
    code: string
    name: string
  }

  export type SteamElectiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SteamElectiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProgramElectiveCreateInput = {
    id?: string
    code: string
    name: string
  }

  export type ProgramElectiveUncheckedCreateInput = {
    id?: string
    code: string
    name: string
  }

  export type ProgramElectiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProgramElectiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProgramElectiveCreateManyInput = {
    id?: string
    code: string
    name: string
  }

  export type ProgramElectiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProgramElectiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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

  export type BatchRelationFilter = {
    is?: BatchWhereInput
    isNot?: BatchWhereInput
  }

  export type CourseRegistrationListRelationFilter = {
    every?: CourseRegistrationWhereInput
    some?: CourseRegistrationWhereInput
    none?: CourseRegistrationWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type MarksEntryListRelationFilter = {
    every?: MarksEntryWhereInput
    some?: MarksEntryWhereInput
    none?: MarksEntryWhereInput
  }

  export type CourseRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarksEntryOrderByRelationAggregateInput = {
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
    batchId?: SortOrder
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
    batchId?: SortOrder
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
    batchId?: SortOrder
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
    name?: SortOrder
  }

  export type SemesterAvgOrderByAggregateInput = {
    sem?: SortOrder
  }

  export type SemesterMaxOrderByAggregateInput = {
    id?: SortOrder
    sem?: SortOrder
    name?: SortOrder
  }

  export type SemesterMinOrderByAggregateInput = {
    id?: SortOrder
    sem?: SortOrder
    name?: SortOrder
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
    code?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
  }

  export type EnumcourseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.courseType | EnumcourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.courseType[] | ListEnumcourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.courseType[] | ListEnumcourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcourseTypeFilter<$PrismaModel> | $Enums.courseType
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BranchListRelationFilter = {
    every?: BranchWhereInput
    some?: BranchWhereInput
    none?: BranchWhereInput
  }

  export type SemesterListRelationFilter = {
    every?: SemesterWhereInput
    some?: SemesterWhereInput
    none?: SemesterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SemesterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    courseType?: SortOrder
    electiveCode?: SortOrder
    credit?: SortOrder
    labIncluded?: SortOrder
    batchId?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    credit?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    courseType?: SortOrder
    electiveCode?: SortOrder
    credit?: SortOrder
    labIncluded?: SortOrder
    batchId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    courseType?: SortOrder
    electiveCode?: SortOrder
    credit?: SortOrder
    labIncluded?: SortOrder
    batchId?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    credit?: SortOrder
  }

  export type EnumcourseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.courseType | EnumcourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.courseType[] | ListEnumcourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.courseType[] | ListEnumcourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcourseTypeWithAggregatesFilter<$PrismaModel> | $Enums.courseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcourseTypeFilter<$PrismaModel>
    _max?: NestedEnumcourseTypeFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CourseRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type CourseRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    semesterId?: SortOrder
  }

  export type CourseRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    semesterId?: SortOrder
  }

  export type CourseRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    semesterId?: SortOrder
  }

  export type FacultyRelationFilter = {
    is?: FacultyWhereInput
    isNot?: FacultyWhereInput
  }

  export type FacultyCourseAssignmentFacultyIdCourseIdCompoundUniqueInput = {
    facultyId: string
    courseId: string
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

  export type EnumexamCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.examCode | EnumexamCodeFieldRefInput<$PrismaModel>
    in?: $Enums.examCode[] | ListEnumexamCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.examCode[] | ListEnumexamCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumexamCodeFilter<$PrismaModel> | $Enums.examCode
  }

  export type EnumexamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.examType | EnumexamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumexamTypeFilter<$PrismaModel> | $Enums.examType
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

  export type MarksEntryExamCodeExamTypeCourseIdStudentIdCompoundUniqueInput = {
    examCode: $Enums.examCode
    examType: $Enums.examType
    courseId: string
    studentId: string
  }

  export type MarksEntryCountOrderByAggregateInput = {
    id?: SortOrder
    examCode?: SortOrder
    examType?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    marksObtained?: SortOrder
    remarks?: SortOrder
  }

  export type MarksEntryAvgOrderByAggregateInput = {
    marksObtained?: SortOrder
  }

  export type MarksEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    examCode?: SortOrder
    examType?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    marksObtained?: SortOrder
    remarks?: SortOrder
  }

  export type MarksEntryMinOrderByAggregateInput = {
    id?: SortOrder
    examCode?: SortOrder
    examType?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    marksObtained?: SortOrder
    remarks?: SortOrder
  }

  export type MarksEntrySumOrderByAggregateInput = {
    marksObtained?: SortOrder
  }

  export type EnumexamCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.examCode | EnumexamCodeFieldRefInput<$PrismaModel>
    in?: $Enums.examCode[] | ListEnumexamCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.examCode[] | ListEnumexamCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumexamCodeWithAggregatesFilter<$PrismaModel> | $Enums.examCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumexamCodeFilter<$PrismaModel>
    _max?: NestedEnumexamCodeFilter<$PrismaModel>
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

  export type EnumclassTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.classType | EnumclassTypeFieldRefInput<$PrismaModel>
    in?: $Enums.classType[] | ListEnumclassTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.classType[] | ListEnumclassTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumclassTypeFilter<$PrismaModel> | $Enums.classType
  }

  export type EnumattenanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.attenanceType | EnumattenanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.attenanceType[] | ListEnumattenanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.attenanceType[] | ListEnumattenanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumattenanceTypeFilter<$PrismaModel> | $Enums.attenanceType
  }

  export type AttendanceCourseIdStudentIdDateCompoundUniqueInput = {
    courseId: string
    studentId: string
    date: Date | string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    classType?: SortOrder
    attendanceType?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    classType?: SortOrder
    attendanceType?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    date?: SortOrder
    isPresent?: SortOrder
    classType?: SortOrder
    attendanceType?: SortOrder
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

  export type EnumclassTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.classType | EnumclassTypeFieldRefInput<$PrismaModel>
    in?: $Enums.classType[] | ListEnumclassTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.classType[] | ListEnumclassTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumclassTypeWithAggregatesFilter<$PrismaModel> | $Enums.classType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclassTypeFilter<$PrismaModel>
    _max?: NestedEnumclassTypeFilter<$PrismaModel>
  }

  export type EnumattenanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.attenanceType | EnumattenanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.attenanceType[] | ListEnumattenanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.attenanceType[] | ListEnumattenanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumattenanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.attenanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumattenanceTypeFilter<$PrismaModel>
    _max?: NestedEnumattenanceTypeFilter<$PrismaModel>
  }

  export type BatchCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type BatchMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type BatchMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type SteamElectiveCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type SteamElectiveMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type SteamElectiveMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type ProgramElectiveCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type ProgramElectiveMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type ProgramElectiveMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
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

  export type BatchCreateNestedOneWithoutStudentInput = {
    create?: XOR<BatchCreateWithoutStudentInput, BatchUncheckedCreateWithoutStudentInput>
    connectOrCreate?: BatchCreateOrConnectWithoutStudentInput
    connect?: BatchWhereUniqueInput
  }

  export type CourseRegistrationCreateNestedManyWithoutStudentInput = {
    create?: XOR<CourseRegistrationCreateWithoutStudentInput, CourseRegistrationUncheckedCreateWithoutStudentInput> | CourseRegistrationCreateWithoutStudentInput[] | CourseRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutStudentInput | CourseRegistrationCreateOrConnectWithoutStudentInput[]
    createMany?: CourseRegistrationCreateManyStudentInputEnvelope
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type MarksEntryCreateNestedManyWithoutStudentInput = {
    create?: XOR<MarksEntryCreateWithoutStudentInput, MarksEntryUncheckedCreateWithoutStudentInput> | MarksEntryCreateWithoutStudentInput[] | MarksEntryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarksEntryCreateOrConnectWithoutStudentInput | MarksEntryCreateOrConnectWithoutStudentInput[]
    createMany?: MarksEntryCreateManyStudentInputEnvelope
    connect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
  }

  export type CourseRegistrationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<CourseRegistrationCreateWithoutStudentInput, CourseRegistrationUncheckedCreateWithoutStudentInput> | CourseRegistrationCreateWithoutStudentInput[] | CourseRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutStudentInput | CourseRegistrationCreateOrConnectWithoutStudentInput[]
    createMany?: CourseRegistrationCreateManyStudentInputEnvelope
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type MarksEntryUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<MarksEntryCreateWithoutStudentInput, MarksEntryUncheckedCreateWithoutStudentInput> | MarksEntryCreateWithoutStudentInput[] | MarksEntryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarksEntryCreateOrConnectWithoutStudentInput | MarksEntryCreateOrConnectWithoutStudentInput[]
    createMany?: MarksEntryCreateManyStudentInputEnvelope
    connect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
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

  export type BatchUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<BatchCreateWithoutStudentInput, BatchUncheckedCreateWithoutStudentInput>
    connectOrCreate?: BatchCreateOrConnectWithoutStudentInput
    upsert?: BatchUpsertWithoutStudentInput
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutStudentInput, BatchUpdateWithoutStudentInput>, BatchUncheckedUpdateWithoutStudentInput>
  }

  export type CourseRegistrationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CourseRegistrationCreateWithoutStudentInput, CourseRegistrationUncheckedCreateWithoutStudentInput> | CourseRegistrationCreateWithoutStudentInput[] | CourseRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutStudentInput | CourseRegistrationCreateOrConnectWithoutStudentInput[]
    upsert?: CourseRegistrationUpsertWithWhereUniqueWithoutStudentInput | CourseRegistrationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CourseRegistrationCreateManyStudentInputEnvelope
    set?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    disconnect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    delete?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    update?: CourseRegistrationUpdateWithWhereUniqueWithoutStudentInput | CourseRegistrationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CourseRegistrationUpdateManyWithWhereWithoutStudentInput | CourseRegistrationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CourseRegistrationScalarWhereInput | CourseRegistrationScalarWhereInput[]
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

  export type MarksEntryUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MarksEntryCreateWithoutStudentInput, MarksEntryUncheckedCreateWithoutStudentInput> | MarksEntryCreateWithoutStudentInput[] | MarksEntryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarksEntryCreateOrConnectWithoutStudentInput | MarksEntryCreateOrConnectWithoutStudentInput[]
    upsert?: MarksEntryUpsertWithWhereUniqueWithoutStudentInput | MarksEntryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MarksEntryCreateManyStudentInputEnvelope
    set?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    disconnect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    delete?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    connect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    update?: MarksEntryUpdateWithWhereUniqueWithoutStudentInput | MarksEntryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MarksEntryUpdateManyWithWhereWithoutStudentInput | MarksEntryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MarksEntryScalarWhereInput | MarksEntryScalarWhereInput[]
  }

  export type CourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CourseRegistrationCreateWithoutStudentInput, CourseRegistrationUncheckedCreateWithoutStudentInput> | CourseRegistrationCreateWithoutStudentInput[] | CourseRegistrationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutStudentInput | CourseRegistrationCreateOrConnectWithoutStudentInput[]
    upsert?: CourseRegistrationUpsertWithWhereUniqueWithoutStudentInput | CourseRegistrationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CourseRegistrationCreateManyStudentInputEnvelope
    set?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    disconnect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    delete?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    update?: CourseRegistrationUpdateWithWhereUniqueWithoutStudentInput | CourseRegistrationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CourseRegistrationUpdateManyWithWhereWithoutStudentInput | CourseRegistrationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CourseRegistrationScalarWhereInput | CourseRegistrationScalarWhereInput[]
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

  export type MarksEntryUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MarksEntryCreateWithoutStudentInput, MarksEntryUncheckedCreateWithoutStudentInput> | MarksEntryCreateWithoutStudentInput[] | MarksEntryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MarksEntryCreateOrConnectWithoutStudentInput | MarksEntryCreateOrConnectWithoutStudentInput[]
    upsert?: MarksEntryUpsertWithWhereUniqueWithoutStudentInput | MarksEntryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MarksEntryCreateManyStudentInputEnvelope
    set?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    disconnect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    delete?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    connect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    update?: MarksEntryUpdateWithWhereUniqueWithoutStudentInput | MarksEntryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MarksEntryUpdateManyWithWhereWithoutStudentInput | MarksEntryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MarksEntryScalarWhereInput | MarksEntryScalarWhereInput[]
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
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutSemesterInput = {
    create?: XOR<StudentCreateWithoutSemesterInput, StudentUncheckedCreateWithoutSemesterInput> | StudentCreateWithoutSemesterInput[] | StudentUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSemesterInput | StudentCreateOrConnectWithoutSemesterInput[]
    createMany?: StudentCreateManySemesterInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type CourseRegistrationCreateNestedManyWithoutSemesterInput = {
    create?: XOR<CourseRegistrationCreateWithoutSemesterInput, CourseRegistrationUncheckedCreateWithoutSemesterInput> | CourseRegistrationCreateWithoutSemesterInput[] | CourseRegistrationUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutSemesterInput | CourseRegistrationCreateOrConnectWithoutSemesterInput[]
    createMany?: CourseRegistrationCreateManySemesterInputEnvelope
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput> | CourseCreateWithoutSemesterInput[] | CourseUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSemesterInput | CourseCreateOrConnectWithoutSemesterInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: XOR<StudentCreateWithoutSemesterInput, StudentUncheckedCreateWithoutSemesterInput> | StudentCreateWithoutSemesterInput[] | StudentUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutSemesterInput | StudentCreateOrConnectWithoutSemesterInput[]
    createMany?: StudentCreateManySemesterInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type CourseRegistrationUncheckedCreateNestedManyWithoutSemesterInput = {
    create?: XOR<CourseRegistrationCreateWithoutSemesterInput, CourseRegistrationUncheckedCreateWithoutSemesterInput> | CourseRegistrationCreateWithoutSemesterInput[] | CourseRegistrationUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutSemesterInput | CourseRegistrationCreateOrConnectWithoutSemesterInput[]
    createMany?: CourseRegistrationCreateManySemesterInputEnvelope
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
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

  export type CourseRegistrationUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<CourseRegistrationCreateWithoutSemesterInput, CourseRegistrationUncheckedCreateWithoutSemesterInput> | CourseRegistrationCreateWithoutSemesterInput[] | CourseRegistrationUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutSemesterInput | CourseRegistrationCreateOrConnectWithoutSemesterInput[]
    upsert?: CourseRegistrationUpsertWithWhereUniqueWithoutSemesterInput | CourseRegistrationUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: CourseRegistrationCreateManySemesterInputEnvelope
    set?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    disconnect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    delete?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    update?: CourseRegistrationUpdateWithWhereUniqueWithoutSemesterInput | CourseRegistrationUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: CourseRegistrationUpdateManyWithWhereWithoutSemesterInput | CourseRegistrationUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: CourseRegistrationScalarWhereInput | CourseRegistrationScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput> | CourseCreateWithoutSemesterInput[] | CourseUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSemesterInput | CourseCreateOrConnectWithoutSemesterInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutSemesterInput | CourseUpsertWithWhereUniqueWithoutSemesterInput[]
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

  export type CourseRegistrationUncheckedUpdateManyWithoutSemesterNestedInput = {
    create?: XOR<CourseRegistrationCreateWithoutSemesterInput, CourseRegistrationUncheckedCreateWithoutSemesterInput> | CourseRegistrationCreateWithoutSemesterInput[] | CourseRegistrationUncheckedCreateWithoutSemesterInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutSemesterInput | CourseRegistrationCreateOrConnectWithoutSemesterInput[]
    upsert?: CourseRegistrationUpsertWithWhereUniqueWithoutSemesterInput | CourseRegistrationUpsertWithWhereUniqueWithoutSemesterInput[]
    createMany?: CourseRegistrationCreateManySemesterInputEnvelope
    set?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    disconnect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    delete?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    update?: CourseRegistrationUpdateWithWhereUniqueWithoutSemesterInput | CourseRegistrationUpdateWithWhereUniqueWithoutSemesterInput[]
    updateMany?: CourseRegistrationUpdateManyWithWhereWithoutSemesterInput | CourseRegistrationUpdateManyWithWhereWithoutSemesterInput[]
    deleteMany?: CourseRegistrationScalarWhereInput | CourseRegistrationScalarWhereInput[]
  }

  export type CourseCreateNestedManyWithoutBranchInput = {
    create?: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput> | CourseCreateWithoutBranchInput[] | CourseUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBranchInput | CourseCreateOrConnectWithoutBranchInput[]
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

  export type BatchCreateNestedOneWithoutCourseInput = {
    create?: XOR<BatchCreateWithoutCourseInput, BatchUncheckedCreateWithoutCourseInput>
    connectOrCreate?: BatchCreateOrConnectWithoutCourseInput
    connect?: BatchWhereUniqueInput
  }

  export type BranchCreateNestedManyWithoutCourseInput = {
    create?: XOR<BranchCreateWithoutCourseInput, BranchUncheckedCreateWithoutCourseInput> | BranchCreateWithoutCourseInput[] | BranchUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCourseInput | BranchCreateOrConnectWithoutCourseInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type SemesterCreateNestedManyWithoutCourseInput = {
    create?: XOR<SemesterCreateWithoutCourseInput, SemesterUncheckedCreateWithoutCourseInput> | SemesterCreateWithoutCourseInput[] | SemesterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SemesterCreateOrConnectWithoutCourseInput | SemesterCreateOrConnectWithoutCourseInput[]
    connect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
  }

  export type CourseRegistrationCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseRegistrationCreateWithoutCourseInput, CourseRegistrationUncheckedCreateWithoutCourseInput> | CourseRegistrationCreateWithoutCourseInput[] | CourseRegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutCourseInput | CourseRegistrationCreateOrConnectWithoutCourseInput[]
    createMany?: CourseRegistrationCreateManyCourseInputEnvelope
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
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

  export type MarksEntryCreateNestedManyWithoutCourseInput = {
    create?: XOR<MarksEntryCreateWithoutCourseInput, MarksEntryUncheckedCreateWithoutCourseInput> | MarksEntryCreateWithoutCourseInput[] | MarksEntryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MarksEntryCreateOrConnectWithoutCourseInput | MarksEntryCreateOrConnectWithoutCourseInput[]
    createMany?: MarksEntryCreateManyCourseInputEnvelope
    connect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<BranchCreateWithoutCourseInput, BranchUncheckedCreateWithoutCourseInput> | BranchCreateWithoutCourseInput[] | BranchUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCourseInput | BranchCreateOrConnectWithoutCourseInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type SemesterUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<SemesterCreateWithoutCourseInput, SemesterUncheckedCreateWithoutCourseInput> | SemesterCreateWithoutCourseInput[] | SemesterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SemesterCreateOrConnectWithoutCourseInput | SemesterCreateOrConnectWithoutCourseInput[]
    connect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
  }

  export type CourseRegistrationUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseRegistrationCreateWithoutCourseInput, CourseRegistrationUncheckedCreateWithoutCourseInput> | CourseRegistrationCreateWithoutCourseInput[] | CourseRegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutCourseInput | CourseRegistrationCreateOrConnectWithoutCourseInput[]
    createMany?: CourseRegistrationCreateManyCourseInputEnvelope
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
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

  export type MarksEntryUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<MarksEntryCreateWithoutCourseInput, MarksEntryUncheckedCreateWithoutCourseInput> | MarksEntryCreateWithoutCourseInput[] | MarksEntryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MarksEntryCreateOrConnectWithoutCourseInput | MarksEntryCreateOrConnectWithoutCourseInput[]
    createMany?: MarksEntryCreateManyCourseInputEnvelope
    connect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
  }

  export type EnumcourseTypeFieldUpdateOperationsInput = {
    set?: $Enums.courseType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BatchUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<BatchCreateWithoutCourseInput, BatchUncheckedCreateWithoutCourseInput>
    connectOrCreate?: BatchCreateOrConnectWithoutCourseInput
    upsert?: BatchUpsertWithoutCourseInput
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutCourseInput, BatchUpdateWithoutCourseInput>, BatchUncheckedUpdateWithoutCourseInput>
  }

  export type BranchUpdateManyWithoutCourseNestedInput = {
    create?: XOR<BranchCreateWithoutCourseInput, BranchUncheckedCreateWithoutCourseInput> | BranchCreateWithoutCourseInput[] | BranchUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCourseInput | BranchCreateOrConnectWithoutCourseInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutCourseInput | BranchUpsertWithWhereUniqueWithoutCourseInput[]
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutCourseInput | BranchUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutCourseInput | BranchUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type SemesterUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SemesterCreateWithoutCourseInput, SemesterUncheckedCreateWithoutCourseInput> | SemesterCreateWithoutCourseInput[] | SemesterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SemesterCreateOrConnectWithoutCourseInput | SemesterCreateOrConnectWithoutCourseInput[]
    upsert?: SemesterUpsertWithWhereUniqueWithoutCourseInput | SemesterUpsertWithWhereUniqueWithoutCourseInput[]
    set?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    disconnect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    delete?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    connect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    update?: SemesterUpdateWithWhereUniqueWithoutCourseInput | SemesterUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SemesterUpdateManyWithWhereWithoutCourseInput | SemesterUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SemesterScalarWhereInput | SemesterScalarWhereInput[]
  }

  export type CourseRegistrationUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseRegistrationCreateWithoutCourseInput, CourseRegistrationUncheckedCreateWithoutCourseInput> | CourseRegistrationCreateWithoutCourseInput[] | CourseRegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutCourseInput | CourseRegistrationCreateOrConnectWithoutCourseInput[]
    upsert?: CourseRegistrationUpsertWithWhereUniqueWithoutCourseInput | CourseRegistrationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseRegistrationCreateManyCourseInputEnvelope
    set?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    disconnect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    delete?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    update?: CourseRegistrationUpdateWithWhereUniqueWithoutCourseInput | CourseRegistrationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseRegistrationUpdateManyWithWhereWithoutCourseInput | CourseRegistrationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseRegistrationScalarWhereInput | CourseRegistrationScalarWhereInput[]
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

  export type MarksEntryUpdateManyWithoutCourseNestedInput = {
    create?: XOR<MarksEntryCreateWithoutCourseInput, MarksEntryUncheckedCreateWithoutCourseInput> | MarksEntryCreateWithoutCourseInput[] | MarksEntryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MarksEntryCreateOrConnectWithoutCourseInput | MarksEntryCreateOrConnectWithoutCourseInput[]
    upsert?: MarksEntryUpsertWithWhereUniqueWithoutCourseInput | MarksEntryUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: MarksEntryCreateManyCourseInputEnvelope
    set?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    disconnect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    delete?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    connect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    update?: MarksEntryUpdateWithWhereUniqueWithoutCourseInput | MarksEntryUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: MarksEntryUpdateManyWithWhereWithoutCourseInput | MarksEntryUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: MarksEntryScalarWhereInput | MarksEntryScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<BranchCreateWithoutCourseInput, BranchUncheckedCreateWithoutCourseInput> | BranchCreateWithoutCourseInput[] | BranchUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutCourseInput | BranchCreateOrConnectWithoutCourseInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutCourseInput | BranchUpsertWithWhereUniqueWithoutCourseInput[]
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutCourseInput | BranchUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutCourseInput | BranchUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type SemesterUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SemesterCreateWithoutCourseInput, SemesterUncheckedCreateWithoutCourseInput> | SemesterCreateWithoutCourseInput[] | SemesterUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SemesterCreateOrConnectWithoutCourseInput | SemesterCreateOrConnectWithoutCourseInput[]
    upsert?: SemesterUpsertWithWhereUniqueWithoutCourseInput | SemesterUpsertWithWhereUniqueWithoutCourseInput[]
    set?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    disconnect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    delete?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    connect?: SemesterWhereUniqueInput | SemesterWhereUniqueInput[]
    update?: SemesterUpdateWithWhereUniqueWithoutCourseInput | SemesterUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SemesterUpdateManyWithWhereWithoutCourseInput | SemesterUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SemesterScalarWhereInput | SemesterScalarWhereInput[]
  }

  export type CourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseRegistrationCreateWithoutCourseInput, CourseRegistrationUncheckedCreateWithoutCourseInput> | CourseRegistrationCreateWithoutCourseInput[] | CourseRegistrationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseRegistrationCreateOrConnectWithoutCourseInput | CourseRegistrationCreateOrConnectWithoutCourseInput[]
    upsert?: CourseRegistrationUpsertWithWhereUniqueWithoutCourseInput | CourseRegistrationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseRegistrationCreateManyCourseInputEnvelope
    set?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    disconnect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    delete?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    connect?: CourseRegistrationWhereUniqueInput | CourseRegistrationWhereUniqueInput[]
    update?: CourseRegistrationUpdateWithWhereUniqueWithoutCourseInput | CourseRegistrationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseRegistrationUpdateManyWithWhereWithoutCourseInput | CourseRegistrationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseRegistrationScalarWhereInput | CourseRegistrationScalarWhereInput[]
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

  export type MarksEntryUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<MarksEntryCreateWithoutCourseInput, MarksEntryUncheckedCreateWithoutCourseInput> | MarksEntryCreateWithoutCourseInput[] | MarksEntryUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MarksEntryCreateOrConnectWithoutCourseInput | MarksEntryCreateOrConnectWithoutCourseInput[]
    upsert?: MarksEntryUpsertWithWhereUniqueWithoutCourseInput | MarksEntryUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: MarksEntryCreateManyCourseInputEnvelope
    set?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    disconnect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    delete?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    connect?: MarksEntryWhereUniqueInput | MarksEntryWhereUniqueInput[]
    update?: MarksEntryUpdateWithWhereUniqueWithoutCourseInput | MarksEntryUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: MarksEntryUpdateManyWithWhereWithoutCourseInput | MarksEntryUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: MarksEntryScalarWhereInput | MarksEntryScalarWhereInput[]
  }

  export type SemesterCreateNestedOneWithoutCourseRegistrationInput = {
    create?: XOR<SemesterCreateWithoutCourseRegistrationInput, SemesterUncheckedCreateWithoutCourseRegistrationInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutCourseRegistrationInput
    connect?: SemesterWhereUniqueInput
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

  export type SemesterUpdateOneRequiredWithoutCourseRegistrationNestedInput = {
    create?: XOR<SemesterCreateWithoutCourseRegistrationInput, SemesterUncheckedCreateWithoutCourseRegistrationInput>
    connectOrCreate?: SemesterCreateOrConnectWithoutCourseRegistrationInput
    upsert?: SemesterUpsertWithoutCourseRegistrationInput
    connect?: SemesterWhereUniqueInput
    update?: XOR<XOR<SemesterUpdateToOneWithWhereWithoutCourseRegistrationInput, SemesterUpdateWithoutCourseRegistrationInput>, SemesterUncheckedUpdateWithoutCourseRegistrationInput>
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

  export type EnumexamCodeFieldUpdateOperationsInput = {
    set?: $Enums.examCode
  }

  export type EnumexamTypeFieldUpdateOperationsInput = {
    set?: $Enums.examType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumclassTypeFieldUpdateOperationsInput = {
    set?: $Enums.classType
  }

  export type EnumattenanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.attenanceType
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

  export type CourseCreateNestedManyWithoutBatchInput = {
    create?: XOR<CourseCreateWithoutBatchInput, CourseUncheckedCreateWithoutBatchInput> | CourseCreateWithoutBatchInput[] | CourseUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBatchInput | CourseCreateOrConnectWithoutBatchInput[]
    createMany?: CourseCreateManyBatchInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutBatchInput = {
    create?: XOR<StudentCreateWithoutBatchInput, StudentUncheckedCreateWithoutBatchInput> | StudentCreateWithoutBatchInput[] | StudentUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBatchInput | StudentCreateOrConnectWithoutBatchInput[]
    createMany?: StudentCreateManyBatchInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<CourseCreateWithoutBatchInput, CourseUncheckedCreateWithoutBatchInput> | CourseCreateWithoutBatchInput[] | CourseUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBatchInput | CourseCreateOrConnectWithoutBatchInput[]
    createMany?: CourseCreateManyBatchInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<StudentCreateWithoutBatchInput, StudentUncheckedCreateWithoutBatchInput> | StudentCreateWithoutBatchInput[] | StudentUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBatchInput | StudentCreateOrConnectWithoutBatchInput[]
    createMany?: StudentCreateManyBatchInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutBatchNestedInput = {
    create?: XOR<CourseCreateWithoutBatchInput, CourseUncheckedCreateWithoutBatchInput> | CourseCreateWithoutBatchInput[] | CourseUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBatchInput | CourseCreateOrConnectWithoutBatchInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutBatchInput | CourseUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: CourseCreateManyBatchInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutBatchInput | CourseUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutBatchInput | CourseUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutBatchNestedInput = {
    create?: XOR<StudentCreateWithoutBatchInput, StudentUncheckedCreateWithoutBatchInput> | StudentCreateWithoutBatchInput[] | StudentUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBatchInput | StudentCreateOrConnectWithoutBatchInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutBatchInput | StudentUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: StudentCreateManyBatchInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutBatchInput | StudentUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutBatchInput | StudentUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<CourseCreateWithoutBatchInput, CourseUncheckedCreateWithoutBatchInput> | CourseCreateWithoutBatchInput[] | CourseUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutBatchInput | CourseCreateOrConnectWithoutBatchInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutBatchInput | CourseUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: CourseCreateManyBatchInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutBatchInput | CourseUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutBatchInput | CourseUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<StudentCreateWithoutBatchInput, StudentUncheckedCreateWithoutBatchInput> | StudentCreateWithoutBatchInput[] | StudentUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBatchInput | StudentCreateOrConnectWithoutBatchInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutBatchInput | StudentUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: StudentCreateManyBatchInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutBatchInput | StudentUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutBatchInput | StudentUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
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

  export type NestedEnumcourseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.courseType | EnumcourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.courseType[] | ListEnumcourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.courseType[] | ListEnumcourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcourseTypeFilter<$PrismaModel> | $Enums.courseType
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumcourseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.courseType | EnumcourseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.courseType[] | ListEnumcourseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.courseType[] | ListEnumcourseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumcourseTypeWithAggregatesFilter<$PrismaModel> | $Enums.courseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcourseTypeFilter<$PrismaModel>
    _max?: NestedEnumcourseTypeFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumexamCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.examCode | EnumexamCodeFieldRefInput<$PrismaModel>
    in?: $Enums.examCode[] | ListEnumexamCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.examCode[] | ListEnumexamCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumexamCodeFilter<$PrismaModel> | $Enums.examCode
  }

  export type NestedEnumexamTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.examType | EnumexamTypeFieldRefInput<$PrismaModel>
    in?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.examType[] | ListEnumexamTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumexamTypeFilter<$PrismaModel> | $Enums.examType
  }

  export type NestedEnumexamCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.examCode | EnumexamCodeFieldRefInput<$PrismaModel>
    in?: $Enums.examCode[] | ListEnumexamCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.examCode[] | ListEnumexamCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumexamCodeWithAggregatesFilter<$PrismaModel> | $Enums.examCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumexamCodeFilter<$PrismaModel>
    _max?: NestedEnumexamCodeFilter<$PrismaModel>
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

  export type NestedEnumclassTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.classType | EnumclassTypeFieldRefInput<$PrismaModel>
    in?: $Enums.classType[] | ListEnumclassTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.classType[] | ListEnumclassTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumclassTypeFilter<$PrismaModel> | $Enums.classType
  }

  export type NestedEnumattenanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.attenanceType | EnumattenanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.attenanceType[] | ListEnumattenanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.attenanceType[] | ListEnumattenanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumattenanceTypeFilter<$PrismaModel> | $Enums.attenanceType
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

  export type NestedEnumclassTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.classType | EnumclassTypeFieldRefInput<$PrismaModel>
    in?: $Enums.classType[] | ListEnumclassTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.classType[] | ListEnumclassTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumclassTypeWithAggregatesFilter<$PrismaModel> | $Enums.classType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumclassTypeFilter<$PrismaModel>
    _max?: NestedEnumclassTypeFilter<$PrismaModel>
  }

  export type NestedEnumattenanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.attenanceType | EnumattenanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.attenanceType[] | ListEnumattenanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.attenanceType[] | ListEnumattenanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumattenanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.attenanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumattenanceTypeFilter<$PrismaModel>
    _max?: NestedEnumattenanceTypeFilter<$PrismaModel>
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    rollNo: string
    fullName: string
    mobileNo: string
    email: string
    semester: SemesterCreateNestedOneWithoutStudentInput
    branch: BranchCreateNestedOneWithoutStudentInput
    batch: BatchCreateNestedOneWithoutStudentInput
    courseRegistered?: CourseRegistrationCreateNestedManyWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    branchId: string
    mobileNo: string
    email: string
    batchId: string
    courseRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutStudentInput
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
    batch?: BatchUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: CourseRegistrationUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: CourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutStudentNestedInput
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
    name: string
    course?: CourseCreateNestedManyWithoutSemesterInput
    courseRegistration?: CourseRegistrationCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateWithoutStudentInput = {
    id?: string
    sem: number
    name: string
    course?: CourseUncheckedCreateNestedManyWithoutSemesterInput
    courseRegistration?: CourseRegistrationUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterCreateOrConnectWithoutStudentInput = {
    where: SemesterWhereUniqueInput
    create: XOR<SemesterCreateWithoutStudentInput, SemesterUncheckedCreateWithoutStudentInput>
  }

  export type BranchCreateWithoutStudentInput = {
    id?: string
    name: string
    code: string
    course?: CourseCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutStudentInput = {
    id?: string
    name: string
    code: string
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

  export type BatchCreateWithoutStudentInput = {
    id?: string
    code: string
    name: string
    course?: CourseCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutStudentInput = {
    id?: string
    code: string
    name: string
    course?: CourseUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchCreateOrConnectWithoutStudentInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutStudentInput, BatchUncheckedCreateWithoutStudentInput>
  }

  export type CourseRegistrationCreateWithoutStudentInput = {
    id?: string
    semester: SemesterCreateNestedOneWithoutCourseRegistrationInput
    course: CourseCreateNestedOneWithoutStudentRegisteredInput
  }

  export type CourseRegistrationUncheckedCreateWithoutStudentInput = {
    id?: string
    courseId: string
    semesterId: string
  }

  export type CourseRegistrationCreateOrConnectWithoutStudentInput = {
    where: CourseRegistrationWhereUniqueInput
    create: XOR<CourseRegistrationCreateWithoutStudentInput, CourseRegistrationUncheckedCreateWithoutStudentInput>
  }

  export type CourseRegistrationCreateManyStudentInputEnvelope = {
    data: CourseRegistrationCreateManyStudentInput | CourseRegistrationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutStudentInput = {
    id?: string
    date?: Date | string
    isPresent: boolean
    classType?: $Enums.classType
    attendanceType?: $Enums.attenanceType
    course: CourseCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    courseId: string
    date?: Date | string
    isPresent: boolean
    classType?: $Enums.classType
    attendanceType?: $Enums.attenanceType
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type MarksEntryCreateWithoutStudentInput = {
    id?: string
    examCode: $Enums.examCode
    examType: $Enums.examType
    marksObtained: number
    remarks?: string | null
    course: CourseCreateNestedOneWithoutExamEntriesInput
  }

  export type MarksEntryUncheckedCreateWithoutStudentInput = {
    id?: string
    examCode: $Enums.examCode
    examType: $Enums.examType
    courseId: string
    marksObtained: number
    remarks?: string | null
  }

  export type MarksEntryCreateOrConnectWithoutStudentInput = {
    where: MarksEntryWhereUniqueInput
    create: XOR<MarksEntryCreateWithoutStudentInput, MarksEntryUncheckedCreateWithoutStudentInput>
  }

  export type MarksEntryCreateManyStudentInputEnvelope = {
    data: MarksEntryCreateManyStudentInput | MarksEntryCreateManyStudentInput[]
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
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateManyWithoutSemesterNestedInput
    courseRegistration?: CourseRegistrationUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUncheckedUpdateManyWithoutSemesterNestedInput
    courseRegistration?: CourseRegistrationUncheckedUpdateManyWithoutSemesterNestedInput
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
    code?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
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

  export type BatchUpsertWithoutStudentInput = {
    update: XOR<BatchUpdateWithoutStudentInput, BatchUncheckedUpdateWithoutStudentInput>
    create: XOR<BatchCreateWithoutStudentInput, BatchUncheckedCreateWithoutStudentInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutStudentInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutStudentInput, BatchUncheckedUpdateWithoutStudentInput>
  }

  export type BatchUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type CourseRegistrationUpsertWithWhereUniqueWithoutStudentInput = {
    where: CourseRegistrationWhereUniqueInput
    update: XOR<CourseRegistrationUpdateWithoutStudentInput, CourseRegistrationUncheckedUpdateWithoutStudentInput>
    create: XOR<CourseRegistrationCreateWithoutStudentInput, CourseRegistrationUncheckedCreateWithoutStudentInput>
  }

  export type CourseRegistrationUpdateWithWhereUniqueWithoutStudentInput = {
    where: CourseRegistrationWhereUniqueInput
    data: XOR<CourseRegistrationUpdateWithoutStudentInput, CourseRegistrationUncheckedUpdateWithoutStudentInput>
  }

  export type CourseRegistrationUpdateManyWithWhereWithoutStudentInput = {
    where: CourseRegistrationScalarWhereInput
    data: XOR<CourseRegistrationUpdateManyMutationInput, CourseRegistrationUncheckedUpdateManyWithoutStudentInput>
  }

  export type CourseRegistrationScalarWhereInput = {
    AND?: CourseRegistrationScalarWhereInput | CourseRegistrationScalarWhereInput[]
    OR?: CourseRegistrationScalarWhereInput[]
    NOT?: CourseRegistrationScalarWhereInput | CourseRegistrationScalarWhereInput[]
    id?: UuidFilter<"CourseRegistration"> | string
    courseId?: UuidFilter<"CourseRegistration"> | string
    studentId?: UuidFilter<"CourseRegistration"> | string
    semesterId?: UuidFilter<"CourseRegistration"> | string
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
    classType?: EnumclassTypeFilter<"Attendance"> | $Enums.classType
    attendanceType?: EnumattenanceTypeFilter<"Attendance"> | $Enums.attenanceType
  }

  export type MarksEntryUpsertWithWhereUniqueWithoutStudentInput = {
    where: MarksEntryWhereUniqueInput
    update: XOR<MarksEntryUpdateWithoutStudentInput, MarksEntryUncheckedUpdateWithoutStudentInput>
    create: XOR<MarksEntryCreateWithoutStudentInput, MarksEntryUncheckedCreateWithoutStudentInput>
  }

  export type MarksEntryUpdateWithWhereUniqueWithoutStudentInput = {
    where: MarksEntryWhereUniqueInput
    data: XOR<MarksEntryUpdateWithoutStudentInput, MarksEntryUncheckedUpdateWithoutStudentInput>
  }

  export type MarksEntryUpdateManyWithWhereWithoutStudentInput = {
    where: MarksEntryScalarWhereInput
    data: XOR<MarksEntryUpdateManyMutationInput, MarksEntryUncheckedUpdateManyWithoutStudentInput>
  }

  export type MarksEntryScalarWhereInput = {
    AND?: MarksEntryScalarWhereInput | MarksEntryScalarWhereInput[]
    OR?: MarksEntryScalarWhereInput[]
    NOT?: MarksEntryScalarWhereInput | MarksEntryScalarWhereInput[]
    id?: UuidFilter<"MarksEntry"> | string
    examCode?: EnumexamCodeFilter<"MarksEntry"> | $Enums.examCode
    examType?: EnumexamTypeFilter<"MarksEntry"> | $Enums.examType
    courseId?: UuidFilter<"MarksEntry"> | string
    studentId?: UuidFilter<"MarksEntry"> | string
    marksObtained?: FloatFilter<"MarksEntry"> | number
    remarks?: StringNullableFilter<"MarksEntry"> | string | null
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
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batch: BatchCreateNestedOneWithoutCourseInput
    branch?: BranchCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSemesterInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batchId: string
    branch?: BranchUncheckedCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSemesterInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSemesterInput, CourseUncheckedCreateWithoutSemesterInput>
  }

  export type StudentCreateWithoutSemesterInput = {
    id?: string
    rollNo: string
    fullName: string
    mobileNo: string
    email: string
    branch: BranchCreateNestedOneWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
    batch: BatchCreateNestedOneWithoutStudentInput
    courseRegistered?: CourseRegistrationCreateNestedManyWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSemesterInput = {
    id?: string
    rollNo: string
    fullName: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
    batchId: string
    courseRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSemesterInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSemesterInput, StudentUncheckedCreateWithoutSemesterInput>
  }

  export type StudentCreateManySemesterInputEnvelope = {
    data: StudentCreateManySemesterInput | StudentCreateManySemesterInput[]
    skipDuplicates?: boolean
  }

  export type CourseRegistrationCreateWithoutSemesterInput = {
    id?: string
    course: CourseCreateNestedOneWithoutStudentRegisteredInput
    student: StudentCreateNestedOneWithoutCourseRegisteredInput
  }

  export type CourseRegistrationUncheckedCreateWithoutSemesterInput = {
    id?: string
    courseId: string
    studentId: string
  }

  export type CourseRegistrationCreateOrConnectWithoutSemesterInput = {
    where: CourseRegistrationWhereUniqueInput
    create: XOR<CourseRegistrationCreateWithoutSemesterInput, CourseRegistrationUncheckedCreateWithoutSemesterInput>
  }

  export type CourseRegistrationCreateManySemesterInputEnvelope = {
    data: CourseRegistrationCreateManySemesterInput | CourseRegistrationCreateManySemesterInput[]
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
    code?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    courseType?: EnumcourseTypeFilter<"Course"> | $Enums.courseType
    electiveCode?: StringNullableFilter<"Course"> | string | null
    credit?: IntFilter<"Course"> | number
    labIncluded?: BoolFilter<"Course"> | boolean
    batchId?: UuidFilter<"Course"> | string
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
    batchId?: UuidFilter<"Student"> | string
  }

  export type CourseRegistrationUpsertWithWhereUniqueWithoutSemesterInput = {
    where: CourseRegistrationWhereUniqueInput
    update: XOR<CourseRegistrationUpdateWithoutSemesterInput, CourseRegistrationUncheckedUpdateWithoutSemesterInput>
    create: XOR<CourseRegistrationCreateWithoutSemesterInput, CourseRegistrationUncheckedCreateWithoutSemesterInput>
  }

  export type CourseRegistrationUpdateWithWhereUniqueWithoutSemesterInput = {
    where: CourseRegistrationWhereUniqueInput
    data: XOR<CourseRegistrationUpdateWithoutSemesterInput, CourseRegistrationUncheckedUpdateWithoutSemesterInput>
  }

  export type CourseRegistrationUpdateManyWithWhereWithoutSemesterInput = {
    where: CourseRegistrationScalarWhereInput
    data: XOR<CourseRegistrationUpdateManyMutationInput, CourseRegistrationUncheckedUpdateManyWithoutSemesterInput>
  }

  export type CourseCreateWithoutBranchInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batch: BatchCreateNestedOneWithoutCourseInput
    semester?: SemesterCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutBranchInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batchId: string
    semester?: SemesterUncheckedCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutBranchInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutBranchInput, CourseUncheckedCreateWithoutBranchInput>
  }

  export type StudentCreateWithoutBranchInput = {
    id?: string
    rollNo: string
    fullName: string
    mobileNo: string
    email: string
    semester: SemesterCreateNestedOneWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
    batch: BatchCreateNestedOneWithoutStudentInput
    courseRegistered?: CourseRegistrationCreateNestedManyWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutBranchInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    mobileNo: string
    email: string
    userId: string
    batchId: string
    courseRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutStudentInput
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

  export type BatchCreateWithoutCourseInput = {
    id?: string
    code: string
    name: string
    student?: StudentCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutCourseInput = {
    id?: string
    code: string
    name: string
    student?: StudentUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchCreateOrConnectWithoutCourseInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutCourseInput, BatchUncheckedCreateWithoutCourseInput>
  }

  export type BranchCreateWithoutCourseInput = {
    id?: string
    name: string
    code: string
    student?: StudentCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutCourseInput = {
    id?: string
    name: string
    code: string
    student?: StudentUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutCourseInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutCourseInput, BranchUncheckedCreateWithoutCourseInput>
  }

  export type SemesterCreateWithoutCourseInput = {
    id?: string
    sem: number
    name: string
    student?: StudentCreateNestedManyWithoutSemesterInput
    courseRegistration?: CourseRegistrationCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateWithoutCourseInput = {
    id?: string
    sem: number
    name: string
    student?: StudentUncheckedCreateNestedManyWithoutSemesterInput
    courseRegistration?: CourseRegistrationUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterCreateOrConnectWithoutCourseInput = {
    where: SemesterWhereUniqueInput
    create: XOR<SemesterCreateWithoutCourseInput, SemesterUncheckedCreateWithoutCourseInput>
  }

  export type CourseRegistrationCreateWithoutCourseInput = {
    id?: string
    semester: SemesterCreateNestedOneWithoutCourseRegistrationInput
    student: StudentCreateNestedOneWithoutCourseRegisteredInput
  }

  export type CourseRegistrationUncheckedCreateWithoutCourseInput = {
    id?: string
    studentId: string
    semesterId: string
  }

  export type CourseRegistrationCreateOrConnectWithoutCourseInput = {
    where: CourseRegistrationWhereUniqueInput
    create: XOR<CourseRegistrationCreateWithoutCourseInput, CourseRegistrationUncheckedCreateWithoutCourseInput>
  }

  export type CourseRegistrationCreateManyCourseInputEnvelope = {
    data: CourseRegistrationCreateManyCourseInput | CourseRegistrationCreateManyCourseInput[]
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
    classType?: $Enums.classType
    attendanceType?: $Enums.attenanceType
    student: StudentCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutCourseInput = {
    id?: string
    studentId: string
    date?: Date | string
    isPresent: boolean
    classType?: $Enums.classType
    attendanceType?: $Enums.attenanceType
  }

  export type AttendanceCreateOrConnectWithoutCourseInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutCourseInput, AttendanceUncheckedCreateWithoutCourseInput>
  }

  export type AttendanceCreateManyCourseInputEnvelope = {
    data: AttendanceCreateManyCourseInput | AttendanceCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type MarksEntryCreateWithoutCourseInput = {
    id?: string
    examCode: $Enums.examCode
    examType: $Enums.examType
    marksObtained: number
    remarks?: string | null
    student: StudentCreateNestedOneWithoutExamEntriesInput
  }

  export type MarksEntryUncheckedCreateWithoutCourseInput = {
    id?: string
    examCode: $Enums.examCode
    examType: $Enums.examType
    studentId: string
    marksObtained: number
    remarks?: string | null
  }

  export type MarksEntryCreateOrConnectWithoutCourseInput = {
    where: MarksEntryWhereUniqueInput
    create: XOR<MarksEntryCreateWithoutCourseInput, MarksEntryUncheckedCreateWithoutCourseInput>
  }

  export type MarksEntryCreateManyCourseInputEnvelope = {
    data: MarksEntryCreateManyCourseInput | MarksEntryCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type BatchUpsertWithoutCourseInput = {
    update: XOR<BatchUpdateWithoutCourseInput, BatchUncheckedUpdateWithoutCourseInput>
    create: XOR<BatchCreateWithoutCourseInput, BatchUncheckedCreateWithoutCourseInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutCourseInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutCourseInput, BatchUncheckedUpdateWithoutCourseInput>
  }

  export type BatchUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    student?: StudentUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BranchUpsertWithWhereUniqueWithoutCourseInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutCourseInput, BranchUncheckedUpdateWithoutCourseInput>
    create: XOR<BranchCreateWithoutCourseInput, BranchUncheckedCreateWithoutCourseInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutCourseInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutCourseInput, BranchUncheckedUpdateWithoutCourseInput>
  }

  export type BranchUpdateManyWithWhereWithoutCourseInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutCourseInput>
  }

  export type BranchScalarWhereInput = {
    AND?: BranchScalarWhereInput | BranchScalarWhereInput[]
    OR?: BranchScalarWhereInput[]
    NOT?: BranchScalarWhereInput | BranchScalarWhereInput[]
    id?: UuidFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    code?: StringFilter<"Branch"> | string
  }

  export type SemesterUpsertWithWhereUniqueWithoutCourseInput = {
    where: SemesterWhereUniqueInput
    update: XOR<SemesterUpdateWithoutCourseInput, SemesterUncheckedUpdateWithoutCourseInput>
    create: XOR<SemesterCreateWithoutCourseInput, SemesterUncheckedCreateWithoutCourseInput>
  }

  export type SemesterUpdateWithWhereUniqueWithoutCourseInput = {
    where: SemesterWhereUniqueInput
    data: XOR<SemesterUpdateWithoutCourseInput, SemesterUncheckedUpdateWithoutCourseInput>
  }

  export type SemesterUpdateManyWithWhereWithoutCourseInput = {
    where: SemesterScalarWhereInput
    data: XOR<SemesterUpdateManyMutationInput, SemesterUncheckedUpdateManyWithoutCourseInput>
  }

  export type SemesterScalarWhereInput = {
    AND?: SemesterScalarWhereInput | SemesterScalarWhereInput[]
    OR?: SemesterScalarWhereInput[]
    NOT?: SemesterScalarWhereInput | SemesterScalarWhereInput[]
    id?: UuidFilter<"Semester"> | string
    sem?: IntFilter<"Semester"> | number
    name?: StringFilter<"Semester"> | string
  }

  export type CourseRegistrationUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseRegistrationWhereUniqueInput
    update: XOR<CourseRegistrationUpdateWithoutCourseInput, CourseRegistrationUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseRegistrationCreateWithoutCourseInput, CourseRegistrationUncheckedCreateWithoutCourseInput>
  }

  export type CourseRegistrationUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseRegistrationWhereUniqueInput
    data: XOR<CourseRegistrationUpdateWithoutCourseInput, CourseRegistrationUncheckedUpdateWithoutCourseInput>
  }

  export type CourseRegistrationUpdateManyWithWhereWithoutCourseInput = {
    where: CourseRegistrationScalarWhereInput
    data: XOR<CourseRegistrationUpdateManyMutationInput, CourseRegistrationUncheckedUpdateManyWithoutCourseInput>
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

  export type MarksEntryUpsertWithWhereUniqueWithoutCourseInput = {
    where: MarksEntryWhereUniqueInput
    update: XOR<MarksEntryUpdateWithoutCourseInput, MarksEntryUncheckedUpdateWithoutCourseInput>
    create: XOR<MarksEntryCreateWithoutCourseInput, MarksEntryUncheckedCreateWithoutCourseInput>
  }

  export type MarksEntryUpdateWithWhereUniqueWithoutCourseInput = {
    where: MarksEntryWhereUniqueInput
    data: XOR<MarksEntryUpdateWithoutCourseInput, MarksEntryUncheckedUpdateWithoutCourseInput>
  }

  export type MarksEntryUpdateManyWithWhereWithoutCourseInput = {
    where: MarksEntryScalarWhereInput
    data: XOR<MarksEntryUpdateManyMutationInput, MarksEntryUncheckedUpdateManyWithoutCourseInput>
  }

  export type SemesterCreateWithoutCourseRegistrationInput = {
    id?: string
    sem: number
    name: string
    course?: CourseCreateNestedManyWithoutSemesterInput
    student?: StudentCreateNestedManyWithoutSemesterInput
  }

  export type SemesterUncheckedCreateWithoutCourseRegistrationInput = {
    id?: string
    sem: number
    name: string
    course?: CourseUncheckedCreateNestedManyWithoutSemesterInput
    student?: StudentUncheckedCreateNestedManyWithoutSemesterInput
  }

  export type SemesterCreateOrConnectWithoutCourseRegistrationInput = {
    where: SemesterWhereUniqueInput
    create: XOR<SemesterCreateWithoutCourseRegistrationInput, SemesterUncheckedCreateWithoutCourseRegistrationInput>
  }

  export type CourseCreateWithoutStudentRegisteredInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batch: BatchCreateNestedOneWithoutCourseInput
    branch?: BranchCreateNestedManyWithoutCourseInput
    semester?: SemesterCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutStudentRegisteredInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batchId: string
    branch?: BranchUncheckedCreateNestedManyWithoutCourseInput
    semester?: SemesterUncheckedCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutCourseInput
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
    batch: BatchCreateNestedOneWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryCreateNestedManyWithoutStudentInput
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
    batchId: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutCourseRegisteredInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCourseRegisteredInput, StudentUncheckedCreateWithoutCourseRegisteredInput>
  }

  export type SemesterUpsertWithoutCourseRegistrationInput = {
    update: XOR<SemesterUpdateWithoutCourseRegistrationInput, SemesterUncheckedUpdateWithoutCourseRegistrationInput>
    create: XOR<SemesterCreateWithoutCourseRegistrationInput, SemesterUncheckedCreateWithoutCourseRegistrationInput>
    where?: SemesterWhereInput
  }

  export type SemesterUpdateToOneWithWhereWithoutCourseRegistrationInput = {
    where?: SemesterWhereInput
    data: XOR<SemesterUpdateWithoutCourseRegistrationInput, SemesterUncheckedUpdateWithoutCourseRegistrationInput>
  }

  export type SemesterUpdateWithoutCourseRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateManyWithoutSemesterNestedInput
    student?: StudentUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateWithoutCourseRegistrationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    course?: CourseUncheckedUpdateManyWithoutSemesterNestedInput
    student?: StudentUncheckedUpdateManyWithoutSemesterNestedInput
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
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batch?: BatchUpdateOneRequiredWithoutCourseNestedInput
    branch?: BranchUpdateManyWithoutCourseNestedInput
    semester?: SemesterUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutStudentRegisteredInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batchId?: StringFieldUpdateOperationsInput | string
    branch?: BranchUncheckedUpdateManyWithoutCourseNestedInput
    semester?: SemesterUncheckedUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutCourseNestedInput
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
    batch?: BatchUpdateOneRequiredWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUpdateManyWithoutStudentNestedInput
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
    batchId?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutStudentNestedInput
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
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batch: BatchCreateNestedOneWithoutCourseInput
    branch?: BranchCreateNestedManyWithoutCourseInput
    semester?: SemesterCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutFacultyAssignedInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batchId: string
    branch?: BranchUncheckedCreateNestedManyWithoutCourseInput
    semester?: SemesterUncheckedCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutCourseInput
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
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batch?: BatchUpdateOneRequiredWithoutCourseNestedInput
    branch?: BranchUpdateManyWithoutCourseNestedInput
    semester?: SemesterUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutFacultyAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batchId?: StringFieldUpdateOperationsInput | string
    branch?: BranchUncheckedUpdateManyWithoutCourseNestedInput
    semester?: SemesterUncheckedUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutExamEntriesInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batch: BatchCreateNestedOneWithoutCourseInput
    branch?: BranchCreateNestedManyWithoutCourseInput
    semester?: SemesterCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutExamEntriesInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batchId: string
    branch?: BranchUncheckedCreateNestedManyWithoutCourseInput
    semester?: SemesterUncheckedCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
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
    batch: BatchCreateNestedOneWithoutStudentInput
    courseRegistered?: CourseRegistrationCreateNestedManyWithoutStudentInput
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
    batchId: string
    courseRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutExamEntriesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutExamEntriesInput, StudentUncheckedCreateWithoutExamEntriesInput>
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
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batch?: BatchUpdateOneRequiredWithoutCourseNestedInput
    branch?: BranchUpdateManyWithoutCourseNestedInput
    semester?: SemesterUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutExamEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batchId?: StringFieldUpdateOperationsInput | string
    branch?: BranchUncheckedUpdateManyWithoutCourseNestedInput
    semester?: SemesterUncheckedUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
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
    batch?: BatchUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: CourseRegistrationUpdateManyWithoutStudentNestedInput
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
    batchId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: CourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
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
    batch: BatchCreateNestedOneWithoutStudentInput
    courseRegistered?: CourseRegistrationCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryCreateNestedManyWithoutStudentInput
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
    batchId: string
    courseRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttendancesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
  }

  export type CourseCreateWithoutAttendancesInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batch: BatchCreateNestedOneWithoutCourseInput
    branch?: BranchCreateNestedManyWithoutCourseInput
    semester?: SemesterCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutAttendancesInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    batchId: string
    branch?: BranchUncheckedCreateNestedManyWithoutCourseInput
    semester?: SemesterUncheckedCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutCourseInput
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
    batch?: BatchUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: CourseRegistrationUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUpdateManyWithoutStudentNestedInput
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
    batchId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: CourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutStudentNestedInput
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
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batch?: BatchUpdateOneRequiredWithoutCourseNestedInput
    branch?: BranchUpdateManyWithoutCourseNestedInput
    semester?: SemesterUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batchId?: StringFieldUpdateOperationsInput | string
    branch?: BranchUncheckedUpdateManyWithoutCourseNestedInput
    semester?: SemesterUncheckedUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutBatchInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    branch?: BranchCreateNestedManyWithoutCourseInput
    semester?: SemesterCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentCreateNestedManyWithoutCourseInput
    attendances?: AttendanceCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutBatchInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
    branch?: BranchUncheckedCreateNestedManyWithoutCourseInput
    semester?: SemesterUncheckedCreateNestedManyWithoutCourseInput
    studentRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutCourseInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedCreateNestedManyWithoutCourseInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutCourseInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutBatchInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutBatchInput, CourseUncheckedCreateWithoutBatchInput>
  }

  export type CourseCreateManyBatchInputEnvelope = {
    data: CourseCreateManyBatchInput | CourseCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutBatchInput = {
    id?: string
    rollNo: string
    fullName: string
    mobileNo: string
    email: string
    semester: SemesterCreateNestedOneWithoutStudentInput
    branch: BranchCreateNestedOneWithoutStudentInput
    user: UserCreateNestedOneWithoutStudentInput
    courseRegistered?: CourseRegistrationCreateNestedManyWithoutStudentInput
    attendances?: AttendanceCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutBatchInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
    courseRegistered?: CourseRegistrationUncheckedCreateNestedManyWithoutStudentInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    examEntries?: MarksEntryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutBatchInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutBatchInput, StudentUncheckedCreateWithoutBatchInput>
  }

  export type StudentCreateManyBatchInputEnvelope = {
    data: StudentCreateManyBatchInput | StudentCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutBatchInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutBatchInput, CourseUncheckedUpdateWithoutBatchInput>
    create: XOR<CourseCreateWithoutBatchInput, CourseUncheckedCreateWithoutBatchInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutBatchInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutBatchInput, CourseUncheckedUpdateWithoutBatchInput>
  }

  export type CourseUpdateManyWithWhereWithoutBatchInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutBatchInput>
  }

  export type StudentUpsertWithWhereUniqueWithoutBatchInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutBatchInput, StudentUncheckedUpdateWithoutBatchInput>
    create: XOR<StudentCreateWithoutBatchInput, StudentUncheckedCreateWithoutBatchInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutBatchInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutBatchInput, StudentUncheckedUpdateWithoutBatchInput>
  }

  export type StudentUpdateManyWithWhereWithoutBatchInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutBatchInput>
  }

  export type CourseRegistrationCreateManyStudentInput = {
    id?: string
    courseId: string
    semesterId: string
  }

  export type AttendanceCreateManyStudentInput = {
    id?: string
    courseId: string
    date?: Date | string
    isPresent: boolean
    classType?: $Enums.classType
    attendanceType?: $Enums.attenanceType
  }

  export type MarksEntryCreateManyStudentInput = {
    id?: string
    examCode: $Enums.examCode
    examType: $Enums.examType
    courseId: string
    marksObtained: number
    remarks?: string | null
  }

  export type CourseRegistrationUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutCourseRegistrationNestedInput
    course?: CourseUpdateOneRequiredWithoutStudentRegisteredNestedInput
  }

  export type CourseRegistrationUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseRegistrationUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    classType?: EnumclassTypeFieldUpdateOperationsInput | $Enums.classType
    attendanceType?: EnumattenanceTypeFieldUpdateOperationsInput | $Enums.attenanceType
    course?: CourseUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    classType?: EnumclassTypeFieldUpdateOperationsInput | $Enums.classType
    attendanceType?: EnumattenanceTypeFieldUpdateOperationsInput | $Enums.attenanceType
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    classType?: EnumclassTypeFieldUpdateOperationsInput | $Enums.classType
    attendanceType?: EnumattenanceTypeFieldUpdateOperationsInput | $Enums.attenanceType
  }

  export type MarksEntryUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examCode?: EnumexamCodeFieldUpdateOperationsInput | $Enums.examCode
    examType?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    course?: CourseUpdateOneRequiredWithoutExamEntriesNestedInput
  }

  export type MarksEntryUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examCode?: EnumexamCodeFieldUpdateOperationsInput | $Enums.examCode
    examType?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    courseId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarksEntryUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examCode?: EnumexamCodeFieldUpdateOperationsInput | $Enums.examCode
    examType?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
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

  export type StudentCreateManySemesterInput = {
    id?: string
    rollNo: string
    fullName: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
    batchId: string
  }

  export type CourseRegistrationCreateManySemesterInput = {
    id?: string
    courseId: string
    studentId: string
  }

  export type CourseUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batch?: BatchUpdateOneRequiredWithoutCourseNestedInput
    branch?: BranchUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batchId?: StringFieldUpdateOperationsInput | string
    branch?: BranchUncheckedUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batchId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    branch?: BranchUpdateOneRequiredWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    batch?: BatchUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: CourseRegistrationUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: CourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseRegistrationUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutStudentRegisteredNestedInput
    student?: StudentUpdateOneRequiredWithoutCourseRegisteredNestedInput
  }

  export type CourseRegistrationUncheckedUpdateWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseRegistrationUncheckedUpdateManyWithoutSemesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManyBranchInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    mobileNo: string
    email: string
    userId: string
    batchId: string
  }

  export type CourseUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batch?: BatchUpdateOneRequiredWithoutCourseNestedInput
    semester?: SemesterUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batchId?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUncheckedUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    batchId?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    batch?: BatchUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: CourseRegistrationUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: CourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseRegistrationCreateManyCourseInput = {
    id?: string
    studentId: string
    semesterId: string
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
    classType?: $Enums.classType
    attendanceType?: $Enums.attenanceType
  }

  export type MarksEntryCreateManyCourseInput = {
    id?: string
    examCode: $Enums.examCode
    examType: $Enums.examType
    studentId: string
    marksObtained: number
    remarks?: string | null
  }

  export type BranchUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    student?: StudentUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type SemesterUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateManyWithoutSemesterNestedInput
    courseRegistration?: CourseRegistrationUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    student?: StudentUncheckedUpdateManyWithoutSemesterNestedInput
    courseRegistration?: CourseRegistrationUncheckedUpdateManyWithoutSemesterNestedInput
  }

  export type SemesterUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    sem?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseRegistrationUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutCourseRegistrationNestedInput
    student?: StudentUpdateOneRequiredWithoutCourseRegisteredNestedInput
  }

  export type CourseRegistrationUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseRegistrationUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
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
    classType?: EnumclassTypeFieldUpdateOperationsInput | $Enums.classType
    attendanceType?: EnumattenanceTypeFieldUpdateOperationsInput | $Enums.attenanceType
    student?: StudentUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    classType?: EnumclassTypeFieldUpdateOperationsInput | $Enums.classType
    attendanceType?: EnumattenanceTypeFieldUpdateOperationsInput | $Enums.attenanceType
  }

  export type AttendanceUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isPresent?: BoolFieldUpdateOperationsInput | boolean
    classType?: EnumclassTypeFieldUpdateOperationsInput | $Enums.classType
    attendanceType?: EnumattenanceTypeFieldUpdateOperationsInput | $Enums.attenanceType
  }

  export type MarksEntryUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    examCode?: EnumexamCodeFieldUpdateOperationsInput | $Enums.examCode
    examType?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneRequiredWithoutExamEntriesNestedInput
  }

  export type MarksEntryUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    examCode?: EnumexamCodeFieldUpdateOperationsInput | $Enums.examCode
    examType?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    studentId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarksEntryUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    examCode?: EnumexamCodeFieldUpdateOperationsInput | $Enums.examCode
    examType?: EnumexamTypeFieldUpdateOperationsInput | $Enums.examType
    studentId?: StringFieldUpdateOperationsInput | string
    marksObtained?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CourseCreateManyBatchInput = {
    id?: string
    code: string
    name: string
    courseType: $Enums.courseType
    electiveCode?: string | null
    credit: number
    labIncluded?: boolean
  }

  export type StudentCreateManyBatchInput = {
    id?: string
    rollNo: string
    fullName: string
    semesterId: string
    branchId: string
    mobileNo: string
    email: string
    userId: string
  }

  export type CourseUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    branch?: BranchUpdateManyWithoutCourseNestedInput
    semester?: SemesterUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
    branch?: BranchUncheckedUpdateManyWithoutCourseNestedInput
    semester?: SemesterUncheckedUpdateManyWithoutCourseNestedInput
    studentRegistered?: CourseRegistrationUncheckedUpdateManyWithoutCourseNestedInput
    facultyAssigned?: FacultyCourseAssignmentUncheckedUpdateManyWithoutCourseNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutCourseNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseType?: EnumcourseTypeFieldUpdateOperationsInput | $Enums.courseType
    electiveCode?: NullableStringFieldUpdateOperationsInput | string | null
    credit?: IntFieldUpdateOperationsInput | number
    labIncluded?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StudentUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    semester?: SemesterUpdateOneRequiredWithoutStudentNestedInput
    branch?: BranchUpdateOneRequiredWithoutStudentNestedInput
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    courseRegistered?: CourseRegistrationUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseRegistered?: CourseRegistrationUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    examEntries?: MarksEntryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rollNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    semesterId?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    mobileNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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
     * @deprecated Use BatchCountOutputTypeDefaultArgs instead
     */
    export type BatchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BatchCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use CourseRegistrationDefaultArgs instead
     */
    export type CourseRegistrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourseRegistrationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultyCourseAssignmentDefaultArgs instead
     */
    export type FacultyCourseAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultyCourseAssignmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarksEntryDefaultArgs instead
     */
    export type MarksEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarksEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceDefaultArgs instead
     */
    export type AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BatchDefaultArgs instead
     */
    export type BatchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BatchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SteamElectiveDefaultArgs instead
     */
    export type SteamElectiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SteamElectiveDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgramElectiveDefaultArgs instead
     */
    export type ProgramElectiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgramElectiveDefaultArgs<ExtArgs>

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