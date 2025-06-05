
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
 * Model Treino
 * 
 */
export type Treino = $Result.DefaultSelection<Prisma.$TreinoPayload>
/**
 * Model TreinoCompartilhamento
 * 
 */
export type TreinoCompartilhamento = $Result.DefaultSelection<Prisma.$TreinoCompartilhamentoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ALUNO: 'ALUNO',
  INSTRUTOR: 'INSTRUTOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TipoCriador: {
  ALUNO: 'ALUNO',
  INSTRUTOR: 'INSTRUTOR'
};

export type TipoCriador = (typeof TipoCriador)[keyof typeof TipoCriador]


export const Visibilidade: {
  PUBLICO: 'PUBLICO',
  PRIVADO: 'PRIVADO',
  COMPARTILHADO: 'COMPARTILHADO'
};

export type Visibilidade = (typeof Visibilidade)[keyof typeof Visibilidade]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TipoCriador = $Enums.TipoCriador

export const TipoCriador: typeof $Enums.TipoCriador

export type Visibilidade = $Enums.Visibilidade

export const Visibilidade: typeof $Enums.Visibilidade

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treino`: Exposes CRUD operations for the **Treino** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Treinos
    * const treinos = await prisma.treino.findMany()
    * ```
    */
  get treino(): Prisma.TreinoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treinoCompartilhamento`: Exposes CRUD operations for the **TreinoCompartilhamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreinoCompartilhamentos
    * const treinoCompartilhamentos = await prisma.treinoCompartilhamento.findMany()
    * ```
    */
  get treinoCompartilhamento(): Prisma.TreinoCompartilhamentoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Treino: 'Treino',
    TreinoCompartilhamento: 'TreinoCompartilhamento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "treino" | "treinoCompartilhamento"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Treino: {
        payload: Prisma.$TreinoPayload<ExtArgs>
        fields: Prisma.TreinoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreinoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreinoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoPayload>
          }
          findFirst: {
            args: Prisma.TreinoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreinoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoPayload>
          }
          findMany: {
            args: Prisma.TreinoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoPayload>[]
          }
          create: {
            args: Prisma.TreinoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoPayload>
          }
          createMany: {
            args: Prisma.TreinoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TreinoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoPayload>
          }
          update: {
            args: Prisma.TreinoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoPayload>
          }
          deleteMany: {
            args: Prisma.TreinoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreinoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreinoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoPayload>
          }
          aggregate: {
            args: Prisma.TreinoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreino>
          }
          groupBy: {
            args: Prisma.TreinoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreinoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TreinoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TreinoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TreinoCountArgs<ExtArgs>
            result: $Utils.Optional<TreinoCountAggregateOutputType> | number
          }
        }
      }
      TreinoCompartilhamento: {
        payload: Prisma.$TreinoCompartilhamentoPayload<ExtArgs>
        fields: Prisma.TreinoCompartilhamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreinoCompartilhamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoCompartilhamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreinoCompartilhamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoCompartilhamentoPayload>
          }
          findFirst: {
            args: Prisma.TreinoCompartilhamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoCompartilhamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreinoCompartilhamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoCompartilhamentoPayload>
          }
          findMany: {
            args: Prisma.TreinoCompartilhamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoCompartilhamentoPayload>[]
          }
          create: {
            args: Prisma.TreinoCompartilhamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoCompartilhamentoPayload>
          }
          createMany: {
            args: Prisma.TreinoCompartilhamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TreinoCompartilhamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoCompartilhamentoPayload>
          }
          update: {
            args: Prisma.TreinoCompartilhamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoCompartilhamentoPayload>
          }
          deleteMany: {
            args: Prisma.TreinoCompartilhamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreinoCompartilhamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TreinoCompartilhamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinoCompartilhamentoPayload>
          }
          aggregate: {
            args: Prisma.TreinoCompartilhamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreinoCompartilhamento>
          }
          groupBy: {
            args: Prisma.TreinoCompartilhamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreinoCompartilhamentoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TreinoCompartilhamentoFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TreinoCompartilhamentoAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TreinoCompartilhamentoCountArgs<ExtArgs>
            result: $Utils.Optional<TreinoCompartilhamentoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    treino?: TreinoOmit
    treinoCompartilhamento?: TreinoCompartilhamentoOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    treinos: number
    TreinoCompartilhamento: number
    treinosInstrutor: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treinos?: boolean | UserCountOutputTypeCountTreinosArgs
    TreinoCompartilhamento?: boolean | UserCountOutputTypeCountTreinoCompartilhamentoArgs
    treinosInstrutor?: boolean | UserCountOutputTypeCountTreinosInstrutorArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTreinosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreinoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTreinoCompartilhamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreinoCompartilhamentoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTreinosInstrutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreinoWhereInput
  }


  /**
   * Count Type TreinoCountOutputType
   */

  export type TreinoCountOutputType = {
    alunosCompartilhados: number
  }

  export type TreinoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alunosCompartilhados?: boolean | TreinoCountOutputTypeCountAlunosCompartilhadosArgs
  }

  // Custom InputTypes
  /**
   * TreinoCountOutputType without action
   */
  export type TreinoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCountOutputType
     */
    select?: TreinoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreinoCountOutputType without action
   */
  export type TreinoCountOutputTypeCountAlunosCompartilhadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreinoCompartilhamentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    age: number | null
    createdAt: Date | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    age: number | null
    createdAt: Date | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    age: number
    createdAt: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    age?: true
    createdAt?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    age?: true
    createdAt?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    age?: true
    createdAt?: true
    password?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    age: number
    createdAt: Date
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    age?: boolean
    createdAt?: boolean
    password?: boolean
    role?: boolean
    treinos?: boolean | User$treinosArgs<ExtArgs>
    TreinoCompartilhamento?: boolean | User$TreinoCompartilhamentoArgs<ExtArgs>
    treinosInstrutor?: boolean | User$treinosInstrutorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    age?: boolean
    createdAt?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "age" | "createdAt" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treinos?: boolean | User$treinosArgs<ExtArgs>
    TreinoCompartilhamento?: boolean | User$TreinoCompartilhamentoArgs<ExtArgs>
    treinosInstrutor?: boolean | User$treinosInstrutorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      treinos: Prisma.$TreinoPayload<ExtArgs>[]
      TreinoCompartilhamento: Prisma.$TreinoCompartilhamentoPayload<ExtArgs>[]
      treinosInstrutor: Prisma.$TreinoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      age: number
      createdAt: Date
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    treinos<T extends User$treinosArgs<ExtArgs> = {}>(args?: Subset<T, User$treinosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TreinoCompartilhamento<T extends User$TreinoCompartilhamentoArgs<ExtArgs> = {}>(args?: Subset<T, User$TreinoCompartilhamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinoCompartilhamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    treinosInstrutor<T extends User$treinosInstrutorArgs<ExtArgs> = {}>(args?: Subset<T, User$treinosInstrutorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.treinos
   */
  export type User$treinosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
    where?: TreinoWhereInput
    orderBy?: TreinoOrderByWithRelationInput | TreinoOrderByWithRelationInput[]
    cursor?: TreinoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreinoScalarFieldEnum | TreinoScalarFieldEnum[]
  }

  /**
   * User.TreinoCompartilhamento
   */
  export type User$TreinoCompartilhamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
    where?: TreinoCompartilhamentoWhereInput
    orderBy?: TreinoCompartilhamentoOrderByWithRelationInput | TreinoCompartilhamentoOrderByWithRelationInput[]
    cursor?: TreinoCompartilhamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreinoCompartilhamentoScalarFieldEnum | TreinoCompartilhamentoScalarFieldEnum[]
  }

  /**
   * User.treinosInstrutor
   */
  export type User$treinosInstrutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
    where?: TreinoWhereInput
    orderBy?: TreinoOrderByWithRelationInput | TreinoOrderByWithRelationInput[]
    cursor?: TreinoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreinoScalarFieldEnum | TreinoScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Treino
   */

  export type AggregateTreino = {
    _count: TreinoCountAggregateOutputType | null
    _min: TreinoMinAggregateOutputType | null
    _max: TreinoMaxAggregateOutputType | null
  }

  export type TreinoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    instrutorId: string | null
    criadorId: string | null
    tipoCriador: $Enums.TipoCriador | null
    visibilidade: $Enums.Visibilidade | null
    userId: string | null
  }

  export type TreinoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    createdAt: Date | null
    updatedAt: Date | null
    instrutorId: string | null
    criadorId: string | null
    tipoCriador: $Enums.TipoCriador | null
    visibilidade: $Enums.Visibilidade | null
    userId: string | null
  }

  export type TreinoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    exercicios: number
    createdAt: number
    updatedAt: number
    instrutorId: number
    criadorId: number
    tipoCriador: number
    visibilidade: number
    userId: number
    _all: number
  }


  export type TreinoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    instrutorId?: true
    criadorId?: true
    tipoCriador?: true
    visibilidade?: true
    userId?: true
  }

  export type TreinoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    createdAt?: true
    updatedAt?: true
    instrutorId?: true
    criadorId?: true
    tipoCriador?: true
    visibilidade?: true
    userId?: true
  }

  export type TreinoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    exercicios?: true
    createdAt?: true
    updatedAt?: true
    instrutorId?: true
    criadorId?: true
    tipoCriador?: true
    visibilidade?: true
    userId?: true
    _all?: true
  }

  export type TreinoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treino to aggregate.
     */
    where?: TreinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinos to fetch.
     */
    orderBy?: TreinoOrderByWithRelationInput | TreinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Treinos
    **/
    _count?: true | TreinoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreinoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreinoMaxAggregateInputType
  }

  export type GetTreinoAggregateType<T extends TreinoAggregateArgs> = {
        [P in keyof T & keyof AggregateTreino]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreino[P]>
      : GetScalarType<T[P], AggregateTreino[P]>
  }




  export type TreinoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreinoWhereInput
    orderBy?: TreinoOrderByWithAggregationInput | TreinoOrderByWithAggregationInput[]
    by: TreinoScalarFieldEnum[] | TreinoScalarFieldEnum
    having?: TreinoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreinoCountAggregateInputType | true
    _min?: TreinoMinAggregateInputType
    _max?: TreinoMaxAggregateInputType
  }

  export type TreinoGroupByOutputType = {
    id: string
    nome: string
    descricao: string
    exercicios: JsonValue
    createdAt: Date
    updatedAt: Date
    instrutorId: string | null
    criadorId: string
    tipoCriador: $Enums.TipoCriador
    visibilidade: $Enums.Visibilidade
    userId: string | null
    _count: TreinoCountAggregateOutputType | null
    _min: TreinoMinAggregateOutputType | null
    _max: TreinoMaxAggregateOutputType | null
  }

  type GetTreinoGroupByPayload<T extends TreinoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreinoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreinoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreinoGroupByOutputType[P]>
            : GetScalarType<T[P], TreinoGroupByOutputType[P]>
        }
      >
    >


  export type TreinoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    exercicios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instrutorId?: boolean
    criadorId?: boolean
    tipoCriador?: boolean
    visibilidade?: boolean
    userId?: boolean
    instrutor?: boolean | Treino$instrutorArgs<ExtArgs>
    alunosCompartilhados?: boolean | Treino$alunosCompartilhadosArgs<ExtArgs>
    User?: boolean | Treino$UserArgs<ExtArgs>
    _count?: boolean | TreinoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treino"]>



  export type TreinoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    exercicios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instrutorId?: boolean
    criadorId?: boolean
    tipoCriador?: boolean
    visibilidade?: boolean
    userId?: boolean
  }

  export type TreinoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "exercicios" | "createdAt" | "updatedAt" | "instrutorId" | "criadorId" | "tipoCriador" | "visibilidade" | "userId", ExtArgs["result"]["treino"]>
  export type TreinoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrutor?: boolean | Treino$instrutorArgs<ExtArgs>
    alunosCompartilhados?: boolean | Treino$alunosCompartilhadosArgs<ExtArgs>
    User?: boolean | Treino$UserArgs<ExtArgs>
    _count?: boolean | TreinoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TreinoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Treino"
    objects: {
      instrutor: Prisma.$UserPayload<ExtArgs> | null
      alunosCompartilhados: Prisma.$TreinoCompartilhamentoPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string
      exercicios: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      instrutorId: string | null
      criadorId: string
      tipoCriador: $Enums.TipoCriador
      visibilidade: $Enums.Visibilidade
      userId: string | null
    }, ExtArgs["result"]["treino"]>
    composites: {}
  }

  type TreinoGetPayload<S extends boolean | null | undefined | TreinoDefaultArgs> = $Result.GetResult<Prisma.$TreinoPayload, S>

  type TreinoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreinoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreinoCountAggregateInputType | true
    }

  export interface TreinoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Treino'], meta: { name: 'Treino' } }
    /**
     * Find zero or one Treino that matches the filter.
     * @param {TreinoFindUniqueArgs} args - Arguments to find a Treino
     * @example
     * // Get one Treino
     * const treino = await prisma.treino.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreinoFindUniqueArgs>(args: SelectSubset<T, TreinoFindUniqueArgs<ExtArgs>>): Prisma__TreinoClient<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Treino that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreinoFindUniqueOrThrowArgs} args - Arguments to find a Treino
     * @example
     * // Get one Treino
     * const treino = await prisma.treino.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreinoFindUniqueOrThrowArgs>(args: SelectSubset<T, TreinoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreinoClient<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treino that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoFindFirstArgs} args - Arguments to find a Treino
     * @example
     * // Get one Treino
     * const treino = await prisma.treino.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreinoFindFirstArgs>(args?: SelectSubset<T, TreinoFindFirstArgs<ExtArgs>>): Prisma__TreinoClient<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treino that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoFindFirstOrThrowArgs} args - Arguments to find a Treino
     * @example
     * // Get one Treino
     * const treino = await prisma.treino.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreinoFindFirstOrThrowArgs>(args?: SelectSubset<T, TreinoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreinoClient<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Treinos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Treinos
     * const treinos = await prisma.treino.findMany()
     * 
     * // Get first 10 Treinos
     * const treinos = await prisma.treino.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treinoWithIdOnly = await prisma.treino.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreinoFindManyArgs>(args?: SelectSubset<T, TreinoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Treino.
     * @param {TreinoCreateArgs} args - Arguments to create a Treino.
     * @example
     * // Create one Treino
     * const Treino = await prisma.treino.create({
     *   data: {
     *     // ... data to create a Treino
     *   }
     * })
     * 
     */
    create<T extends TreinoCreateArgs>(args: SelectSubset<T, TreinoCreateArgs<ExtArgs>>): Prisma__TreinoClient<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Treinos.
     * @param {TreinoCreateManyArgs} args - Arguments to create many Treinos.
     * @example
     * // Create many Treinos
     * const treino = await prisma.treino.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreinoCreateManyArgs>(args?: SelectSubset<T, TreinoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Treino.
     * @param {TreinoDeleteArgs} args - Arguments to delete one Treino.
     * @example
     * // Delete one Treino
     * const Treino = await prisma.treino.delete({
     *   where: {
     *     // ... filter to delete one Treino
     *   }
     * })
     * 
     */
    delete<T extends TreinoDeleteArgs>(args: SelectSubset<T, TreinoDeleteArgs<ExtArgs>>): Prisma__TreinoClient<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Treino.
     * @param {TreinoUpdateArgs} args - Arguments to update one Treino.
     * @example
     * // Update one Treino
     * const treino = await prisma.treino.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreinoUpdateArgs>(args: SelectSubset<T, TreinoUpdateArgs<ExtArgs>>): Prisma__TreinoClient<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Treinos.
     * @param {TreinoDeleteManyArgs} args - Arguments to filter Treinos to delete.
     * @example
     * // Delete a few Treinos
     * const { count } = await prisma.treino.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreinoDeleteManyArgs>(args?: SelectSubset<T, TreinoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Treinos
     * const treino = await prisma.treino.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreinoUpdateManyArgs>(args: SelectSubset<T, TreinoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Treino.
     * @param {TreinoUpsertArgs} args - Arguments to update or create a Treino.
     * @example
     * // Update or create a Treino
     * const treino = await prisma.treino.upsert({
     *   create: {
     *     // ... data to create a Treino
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Treino we want to update
     *   }
     * })
     */
    upsert<T extends TreinoUpsertArgs>(args: SelectSubset<T, TreinoUpsertArgs<ExtArgs>>): Prisma__TreinoClient<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Treinos that matches the filter.
     * @param {TreinoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const treino = await prisma.treino.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TreinoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Treino.
     * @param {TreinoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const treino = await prisma.treino.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TreinoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Treinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoCountArgs} args - Arguments to filter Treinos to count.
     * @example
     * // Count the number of Treinos
     * const count = await prisma.treino.count({
     *   where: {
     *     // ... the filter for the Treinos we want to count
     *   }
     * })
    **/
    count<T extends TreinoCountArgs>(
      args?: Subset<T, TreinoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreinoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Treino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreinoAggregateArgs>(args: Subset<T, TreinoAggregateArgs>): Prisma.PrismaPromise<GetTreinoAggregateType<T>>

    /**
     * Group by Treino.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoGroupByArgs} args - Group by arguments.
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
      T extends TreinoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreinoGroupByArgs['orderBy'] }
        : { orderBy?: TreinoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreinoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreinoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Treino model
   */
  readonly fields: TreinoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Treino.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreinoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instrutor<T extends Treino$instrutorArgs<ExtArgs> = {}>(args?: Subset<T, Treino$instrutorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    alunosCompartilhados<T extends Treino$alunosCompartilhadosArgs<ExtArgs> = {}>(args?: Subset<T, Treino$alunosCompartilhadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinoCompartilhamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Treino$UserArgs<ExtArgs> = {}>(args?: Subset<T, Treino$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Treino model
   */
  interface TreinoFieldRefs {
    readonly id: FieldRef<"Treino", 'String'>
    readonly nome: FieldRef<"Treino", 'String'>
    readonly descricao: FieldRef<"Treino", 'String'>
    readonly exercicios: FieldRef<"Treino", 'Json'>
    readonly createdAt: FieldRef<"Treino", 'DateTime'>
    readonly updatedAt: FieldRef<"Treino", 'DateTime'>
    readonly instrutorId: FieldRef<"Treino", 'String'>
    readonly criadorId: FieldRef<"Treino", 'String'>
    readonly tipoCriador: FieldRef<"Treino", 'TipoCriador'>
    readonly visibilidade: FieldRef<"Treino", 'Visibilidade'>
    readonly userId: FieldRef<"Treino", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Treino findUnique
   */
  export type TreinoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
    /**
     * Filter, which Treino to fetch.
     */
    where: TreinoWhereUniqueInput
  }

  /**
   * Treino findUniqueOrThrow
   */
  export type TreinoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
    /**
     * Filter, which Treino to fetch.
     */
    where: TreinoWhereUniqueInput
  }

  /**
   * Treino findFirst
   */
  export type TreinoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
    /**
     * Filter, which Treino to fetch.
     */
    where?: TreinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinos to fetch.
     */
    orderBy?: TreinoOrderByWithRelationInput | TreinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treinos.
     */
    cursor?: TreinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treinos.
     */
    distinct?: TreinoScalarFieldEnum | TreinoScalarFieldEnum[]
  }

  /**
   * Treino findFirstOrThrow
   */
  export type TreinoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
    /**
     * Filter, which Treino to fetch.
     */
    where?: TreinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinos to fetch.
     */
    orderBy?: TreinoOrderByWithRelationInput | TreinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treinos.
     */
    cursor?: TreinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treinos.
     */
    distinct?: TreinoScalarFieldEnum | TreinoScalarFieldEnum[]
  }

  /**
   * Treino findMany
   */
  export type TreinoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
    /**
     * Filter, which Treinos to fetch.
     */
    where?: TreinoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinos to fetch.
     */
    orderBy?: TreinoOrderByWithRelationInput | TreinoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Treinos.
     */
    cursor?: TreinoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinos.
     */
    skip?: number
    distinct?: TreinoScalarFieldEnum | TreinoScalarFieldEnum[]
  }

  /**
   * Treino create
   */
  export type TreinoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
    /**
     * The data needed to create a Treino.
     */
    data: XOR<TreinoCreateInput, TreinoUncheckedCreateInput>
  }

  /**
   * Treino createMany
   */
  export type TreinoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Treinos.
     */
    data: TreinoCreateManyInput | TreinoCreateManyInput[]
  }

  /**
   * Treino update
   */
  export type TreinoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
    /**
     * The data needed to update a Treino.
     */
    data: XOR<TreinoUpdateInput, TreinoUncheckedUpdateInput>
    /**
     * Choose, which Treino to update.
     */
    where: TreinoWhereUniqueInput
  }

  /**
   * Treino updateMany
   */
  export type TreinoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Treinos.
     */
    data: XOR<TreinoUpdateManyMutationInput, TreinoUncheckedUpdateManyInput>
    /**
     * Filter which Treinos to update
     */
    where?: TreinoWhereInput
    /**
     * Limit how many Treinos to update.
     */
    limit?: number
  }

  /**
   * Treino upsert
   */
  export type TreinoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
    /**
     * The filter to search for the Treino to update in case it exists.
     */
    where: TreinoWhereUniqueInput
    /**
     * In case the Treino found by the `where` argument doesn't exist, create a new Treino with this data.
     */
    create: XOR<TreinoCreateInput, TreinoUncheckedCreateInput>
    /**
     * In case the Treino was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreinoUpdateInput, TreinoUncheckedUpdateInput>
  }

  /**
   * Treino delete
   */
  export type TreinoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
    /**
     * Filter which Treino to delete.
     */
    where: TreinoWhereUniqueInput
  }

  /**
   * Treino deleteMany
   */
  export type TreinoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treinos to delete
     */
    where?: TreinoWhereInput
    /**
     * Limit how many Treinos to delete.
     */
    limit?: number
  }

  /**
   * Treino findRaw
   */
  export type TreinoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Treino aggregateRaw
   */
  export type TreinoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Treino.instrutor
   */
  export type Treino$instrutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Treino.alunosCompartilhados
   */
  export type Treino$alunosCompartilhadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
    where?: TreinoCompartilhamentoWhereInput
    orderBy?: TreinoCompartilhamentoOrderByWithRelationInput | TreinoCompartilhamentoOrderByWithRelationInput[]
    cursor?: TreinoCompartilhamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreinoCompartilhamentoScalarFieldEnum | TreinoCompartilhamentoScalarFieldEnum[]
  }

  /**
   * Treino.User
   */
  export type Treino$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Treino without action
   */
  export type TreinoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treino
     */
    select?: TreinoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treino
     */
    omit?: TreinoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoInclude<ExtArgs> | null
  }


  /**
   * Model TreinoCompartilhamento
   */

  export type AggregateTreinoCompartilhamento = {
    _count: TreinoCompartilhamentoCountAggregateOutputType | null
    _min: TreinoCompartilhamentoMinAggregateOutputType | null
    _max: TreinoCompartilhamentoMaxAggregateOutputType | null
  }

  export type TreinoCompartilhamentoMinAggregateOutputType = {
    id: string | null
    treinoId: string | null
    alunoId: string | null
  }

  export type TreinoCompartilhamentoMaxAggregateOutputType = {
    id: string | null
    treinoId: string | null
    alunoId: string | null
  }

  export type TreinoCompartilhamentoCountAggregateOutputType = {
    id: number
    treinoId: number
    alunoId: number
    _all: number
  }


  export type TreinoCompartilhamentoMinAggregateInputType = {
    id?: true
    treinoId?: true
    alunoId?: true
  }

  export type TreinoCompartilhamentoMaxAggregateInputType = {
    id?: true
    treinoId?: true
    alunoId?: true
  }

  export type TreinoCompartilhamentoCountAggregateInputType = {
    id?: true
    treinoId?: true
    alunoId?: true
    _all?: true
  }

  export type TreinoCompartilhamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreinoCompartilhamento to aggregate.
     */
    where?: TreinoCompartilhamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreinoCompartilhamentos to fetch.
     */
    orderBy?: TreinoCompartilhamentoOrderByWithRelationInput | TreinoCompartilhamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreinoCompartilhamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreinoCompartilhamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreinoCompartilhamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreinoCompartilhamentos
    **/
    _count?: true | TreinoCompartilhamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreinoCompartilhamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreinoCompartilhamentoMaxAggregateInputType
  }

  export type GetTreinoCompartilhamentoAggregateType<T extends TreinoCompartilhamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateTreinoCompartilhamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreinoCompartilhamento[P]>
      : GetScalarType<T[P], AggregateTreinoCompartilhamento[P]>
  }




  export type TreinoCompartilhamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreinoCompartilhamentoWhereInput
    orderBy?: TreinoCompartilhamentoOrderByWithAggregationInput | TreinoCompartilhamentoOrderByWithAggregationInput[]
    by: TreinoCompartilhamentoScalarFieldEnum[] | TreinoCompartilhamentoScalarFieldEnum
    having?: TreinoCompartilhamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreinoCompartilhamentoCountAggregateInputType | true
    _min?: TreinoCompartilhamentoMinAggregateInputType
    _max?: TreinoCompartilhamentoMaxAggregateInputType
  }

  export type TreinoCompartilhamentoGroupByOutputType = {
    id: string
    treinoId: string
    alunoId: string
    _count: TreinoCompartilhamentoCountAggregateOutputType | null
    _min: TreinoCompartilhamentoMinAggregateOutputType | null
    _max: TreinoCompartilhamentoMaxAggregateOutputType | null
  }

  type GetTreinoCompartilhamentoGroupByPayload<T extends TreinoCompartilhamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreinoCompartilhamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreinoCompartilhamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreinoCompartilhamentoGroupByOutputType[P]>
            : GetScalarType<T[P], TreinoCompartilhamentoGroupByOutputType[P]>
        }
      >
    >


  export type TreinoCompartilhamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    treinoId?: boolean
    alunoId?: boolean
    treino?: boolean | TreinoDefaultArgs<ExtArgs>
    aluno?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treinoCompartilhamento"]>



  export type TreinoCompartilhamentoSelectScalar = {
    id?: boolean
    treinoId?: boolean
    alunoId?: boolean
  }

  export type TreinoCompartilhamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "treinoId" | "alunoId", ExtArgs["result"]["treinoCompartilhamento"]>
  export type TreinoCompartilhamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treino?: boolean | TreinoDefaultArgs<ExtArgs>
    aluno?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TreinoCompartilhamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreinoCompartilhamento"
    objects: {
      treino: Prisma.$TreinoPayload<ExtArgs>
      aluno: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      treinoId: string
      alunoId: string
    }, ExtArgs["result"]["treinoCompartilhamento"]>
    composites: {}
  }

  type TreinoCompartilhamentoGetPayload<S extends boolean | null | undefined | TreinoCompartilhamentoDefaultArgs> = $Result.GetResult<Prisma.$TreinoCompartilhamentoPayload, S>

  type TreinoCompartilhamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreinoCompartilhamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreinoCompartilhamentoCountAggregateInputType | true
    }

  export interface TreinoCompartilhamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreinoCompartilhamento'], meta: { name: 'TreinoCompartilhamento' } }
    /**
     * Find zero or one TreinoCompartilhamento that matches the filter.
     * @param {TreinoCompartilhamentoFindUniqueArgs} args - Arguments to find a TreinoCompartilhamento
     * @example
     * // Get one TreinoCompartilhamento
     * const treinoCompartilhamento = await prisma.treinoCompartilhamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreinoCompartilhamentoFindUniqueArgs>(args: SelectSubset<T, TreinoCompartilhamentoFindUniqueArgs<ExtArgs>>): Prisma__TreinoCompartilhamentoClient<$Result.GetResult<Prisma.$TreinoCompartilhamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreinoCompartilhamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreinoCompartilhamentoFindUniqueOrThrowArgs} args - Arguments to find a TreinoCompartilhamento
     * @example
     * // Get one TreinoCompartilhamento
     * const treinoCompartilhamento = await prisma.treinoCompartilhamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreinoCompartilhamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, TreinoCompartilhamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreinoCompartilhamentoClient<$Result.GetResult<Prisma.$TreinoCompartilhamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreinoCompartilhamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoCompartilhamentoFindFirstArgs} args - Arguments to find a TreinoCompartilhamento
     * @example
     * // Get one TreinoCompartilhamento
     * const treinoCompartilhamento = await prisma.treinoCompartilhamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreinoCompartilhamentoFindFirstArgs>(args?: SelectSubset<T, TreinoCompartilhamentoFindFirstArgs<ExtArgs>>): Prisma__TreinoCompartilhamentoClient<$Result.GetResult<Prisma.$TreinoCompartilhamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreinoCompartilhamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoCompartilhamentoFindFirstOrThrowArgs} args - Arguments to find a TreinoCompartilhamento
     * @example
     * // Get one TreinoCompartilhamento
     * const treinoCompartilhamento = await prisma.treinoCompartilhamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreinoCompartilhamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, TreinoCompartilhamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreinoCompartilhamentoClient<$Result.GetResult<Prisma.$TreinoCompartilhamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreinoCompartilhamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoCompartilhamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreinoCompartilhamentos
     * const treinoCompartilhamentos = await prisma.treinoCompartilhamento.findMany()
     * 
     * // Get first 10 TreinoCompartilhamentos
     * const treinoCompartilhamentos = await prisma.treinoCompartilhamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treinoCompartilhamentoWithIdOnly = await prisma.treinoCompartilhamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreinoCompartilhamentoFindManyArgs>(args?: SelectSubset<T, TreinoCompartilhamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinoCompartilhamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreinoCompartilhamento.
     * @param {TreinoCompartilhamentoCreateArgs} args - Arguments to create a TreinoCompartilhamento.
     * @example
     * // Create one TreinoCompartilhamento
     * const TreinoCompartilhamento = await prisma.treinoCompartilhamento.create({
     *   data: {
     *     // ... data to create a TreinoCompartilhamento
     *   }
     * })
     * 
     */
    create<T extends TreinoCompartilhamentoCreateArgs>(args: SelectSubset<T, TreinoCompartilhamentoCreateArgs<ExtArgs>>): Prisma__TreinoCompartilhamentoClient<$Result.GetResult<Prisma.$TreinoCompartilhamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreinoCompartilhamentos.
     * @param {TreinoCompartilhamentoCreateManyArgs} args - Arguments to create many TreinoCompartilhamentos.
     * @example
     * // Create many TreinoCompartilhamentos
     * const treinoCompartilhamento = await prisma.treinoCompartilhamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreinoCompartilhamentoCreateManyArgs>(args?: SelectSubset<T, TreinoCompartilhamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TreinoCompartilhamento.
     * @param {TreinoCompartilhamentoDeleteArgs} args - Arguments to delete one TreinoCompartilhamento.
     * @example
     * // Delete one TreinoCompartilhamento
     * const TreinoCompartilhamento = await prisma.treinoCompartilhamento.delete({
     *   where: {
     *     // ... filter to delete one TreinoCompartilhamento
     *   }
     * })
     * 
     */
    delete<T extends TreinoCompartilhamentoDeleteArgs>(args: SelectSubset<T, TreinoCompartilhamentoDeleteArgs<ExtArgs>>): Prisma__TreinoCompartilhamentoClient<$Result.GetResult<Prisma.$TreinoCompartilhamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreinoCompartilhamento.
     * @param {TreinoCompartilhamentoUpdateArgs} args - Arguments to update one TreinoCompartilhamento.
     * @example
     * // Update one TreinoCompartilhamento
     * const treinoCompartilhamento = await prisma.treinoCompartilhamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreinoCompartilhamentoUpdateArgs>(args: SelectSubset<T, TreinoCompartilhamentoUpdateArgs<ExtArgs>>): Prisma__TreinoCompartilhamentoClient<$Result.GetResult<Prisma.$TreinoCompartilhamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreinoCompartilhamentos.
     * @param {TreinoCompartilhamentoDeleteManyArgs} args - Arguments to filter TreinoCompartilhamentos to delete.
     * @example
     * // Delete a few TreinoCompartilhamentos
     * const { count } = await prisma.treinoCompartilhamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreinoCompartilhamentoDeleteManyArgs>(args?: SelectSubset<T, TreinoCompartilhamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreinoCompartilhamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoCompartilhamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreinoCompartilhamentos
     * const treinoCompartilhamento = await prisma.treinoCompartilhamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreinoCompartilhamentoUpdateManyArgs>(args: SelectSubset<T, TreinoCompartilhamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TreinoCompartilhamento.
     * @param {TreinoCompartilhamentoUpsertArgs} args - Arguments to update or create a TreinoCompartilhamento.
     * @example
     * // Update or create a TreinoCompartilhamento
     * const treinoCompartilhamento = await prisma.treinoCompartilhamento.upsert({
     *   create: {
     *     // ... data to create a TreinoCompartilhamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreinoCompartilhamento we want to update
     *   }
     * })
     */
    upsert<T extends TreinoCompartilhamentoUpsertArgs>(args: SelectSubset<T, TreinoCompartilhamentoUpsertArgs<ExtArgs>>): Prisma__TreinoCompartilhamentoClient<$Result.GetResult<Prisma.$TreinoCompartilhamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreinoCompartilhamentos that matches the filter.
     * @param {TreinoCompartilhamentoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const treinoCompartilhamento = await prisma.treinoCompartilhamento.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TreinoCompartilhamentoFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TreinoCompartilhamento.
     * @param {TreinoCompartilhamentoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const treinoCompartilhamento = await prisma.treinoCompartilhamento.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TreinoCompartilhamentoAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TreinoCompartilhamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoCompartilhamentoCountArgs} args - Arguments to filter TreinoCompartilhamentos to count.
     * @example
     * // Count the number of TreinoCompartilhamentos
     * const count = await prisma.treinoCompartilhamento.count({
     *   where: {
     *     // ... the filter for the TreinoCompartilhamentos we want to count
     *   }
     * })
    **/
    count<T extends TreinoCompartilhamentoCountArgs>(
      args?: Subset<T, TreinoCompartilhamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreinoCompartilhamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreinoCompartilhamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoCompartilhamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreinoCompartilhamentoAggregateArgs>(args: Subset<T, TreinoCompartilhamentoAggregateArgs>): Prisma.PrismaPromise<GetTreinoCompartilhamentoAggregateType<T>>

    /**
     * Group by TreinoCompartilhamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinoCompartilhamentoGroupByArgs} args - Group by arguments.
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
      T extends TreinoCompartilhamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreinoCompartilhamentoGroupByArgs['orderBy'] }
        : { orderBy?: TreinoCompartilhamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreinoCompartilhamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreinoCompartilhamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreinoCompartilhamento model
   */
  readonly fields: TreinoCompartilhamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreinoCompartilhamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreinoCompartilhamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    treino<T extends TreinoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreinoDefaultArgs<ExtArgs>>): Prisma__TreinoClient<$Result.GetResult<Prisma.$TreinoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aluno<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TreinoCompartilhamento model
   */
  interface TreinoCompartilhamentoFieldRefs {
    readonly id: FieldRef<"TreinoCompartilhamento", 'String'>
    readonly treinoId: FieldRef<"TreinoCompartilhamento", 'String'>
    readonly alunoId: FieldRef<"TreinoCompartilhamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TreinoCompartilhamento findUnique
   */
  export type TreinoCompartilhamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
    /**
     * Filter, which TreinoCompartilhamento to fetch.
     */
    where: TreinoCompartilhamentoWhereUniqueInput
  }

  /**
   * TreinoCompartilhamento findUniqueOrThrow
   */
  export type TreinoCompartilhamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
    /**
     * Filter, which TreinoCompartilhamento to fetch.
     */
    where: TreinoCompartilhamentoWhereUniqueInput
  }

  /**
   * TreinoCompartilhamento findFirst
   */
  export type TreinoCompartilhamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
    /**
     * Filter, which TreinoCompartilhamento to fetch.
     */
    where?: TreinoCompartilhamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreinoCompartilhamentos to fetch.
     */
    orderBy?: TreinoCompartilhamentoOrderByWithRelationInput | TreinoCompartilhamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreinoCompartilhamentos.
     */
    cursor?: TreinoCompartilhamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreinoCompartilhamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreinoCompartilhamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreinoCompartilhamentos.
     */
    distinct?: TreinoCompartilhamentoScalarFieldEnum | TreinoCompartilhamentoScalarFieldEnum[]
  }

  /**
   * TreinoCompartilhamento findFirstOrThrow
   */
  export type TreinoCompartilhamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
    /**
     * Filter, which TreinoCompartilhamento to fetch.
     */
    where?: TreinoCompartilhamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreinoCompartilhamentos to fetch.
     */
    orderBy?: TreinoCompartilhamentoOrderByWithRelationInput | TreinoCompartilhamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreinoCompartilhamentos.
     */
    cursor?: TreinoCompartilhamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreinoCompartilhamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreinoCompartilhamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreinoCompartilhamentos.
     */
    distinct?: TreinoCompartilhamentoScalarFieldEnum | TreinoCompartilhamentoScalarFieldEnum[]
  }

  /**
   * TreinoCompartilhamento findMany
   */
  export type TreinoCompartilhamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
    /**
     * Filter, which TreinoCompartilhamentos to fetch.
     */
    where?: TreinoCompartilhamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreinoCompartilhamentos to fetch.
     */
    orderBy?: TreinoCompartilhamentoOrderByWithRelationInput | TreinoCompartilhamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreinoCompartilhamentos.
     */
    cursor?: TreinoCompartilhamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreinoCompartilhamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreinoCompartilhamentos.
     */
    skip?: number
    distinct?: TreinoCompartilhamentoScalarFieldEnum | TreinoCompartilhamentoScalarFieldEnum[]
  }

  /**
   * TreinoCompartilhamento create
   */
  export type TreinoCompartilhamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a TreinoCompartilhamento.
     */
    data: XOR<TreinoCompartilhamentoCreateInput, TreinoCompartilhamentoUncheckedCreateInput>
  }

  /**
   * TreinoCompartilhamento createMany
   */
  export type TreinoCompartilhamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreinoCompartilhamentos.
     */
    data: TreinoCompartilhamentoCreateManyInput | TreinoCompartilhamentoCreateManyInput[]
  }

  /**
   * TreinoCompartilhamento update
   */
  export type TreinoCompartilhamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a TreinoCompartilhamento.
     */
    data: XOR<TreinoCompartilhamentoUpdateInput, TreinoCompartilhamentoUncheckedUpdateInput>
    /**
     * Choose, which TreinoCompartilhamento to update.
     */
    where: TreinoCompartilhamentoWhereUniqueInput
  }

  /**
   * TreinoCompartilhamento updateMany
   */
  export type TreinoCompartilhamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreinoCompartilhamentos.
     */
    data: XOR<TreinoCompartilhamentoUpdateManyMutationInput, TreinoCompartilhamentoUncheckedUpdateManyInput>
    /**
     * Filter which TreinoCompartilhamentos to update
     */
    where?: TreinoCompartilhamentoWhereInput
    /**
     * Limit how many TreinoCompartilhamentos to update.
     */
    limit?: number
  }

  /**
   * TreinoCompartilhamento upsert
   */
  export type TreinoCompartilhamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the TreinoCompartilhamento to update in case it exists.
     */
    where: TreinoCompartilhamentoWhereUniqueInput
    /**
     * In case the TreinoCompartilhamento found by the `where` argument doesn't exist, create a new TreinoCompartilhamento with this data.
     */
    create: XOR<TreinoCompartilhamentoCreateInput, TreinoCompartilhamentoUncheckedCreateInput>
    /**
     * In case the TreinoCompartilhamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreinoCompartilhamentoUpdateInput, TreinoCompartilhamentoUncheckedUpdateInput>
  }

  /**
   * TreinoCompartilhamento delete
   */
  export type TreinoCompartilhamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
    /**
     * Filter which TreinoCompartilhamento to delete.
     */
    where: TreinoCompartilhamentoWhereUniqueInput
  }

  /**
   * TreinoCompartilhamento deleteMany
   */
  export type TreinoCompartilhamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreinoCompartilhamentos to delete
     */
    where?: TreinoCompartilhamentoWhereInput
    /**
     * Limit how many TreinoCompartilhamentos to delete.
     */
    limit?: number
  }

  /**
   * TreinoCompartilhamento findRaw
   */
  export type TreinoCompartilhamentoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TreinoCompartilhamento aggregateRaw
   */
  export type TreinoCompartilhamentoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TreinoCompartilhamento without action
   */
  export type TreinoCompartilhamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreinoCompartilhamento
     */
    select?: TreinoCompartilhamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreinoCompartilhamento
     */
    omit?: TreinoCompartilhamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinoCompartilhamentoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    age: 'age',
    createdAt: 'createdAt',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TreinoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    exercicios: 'exercicios',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    instrutorId: 'instrutorId',
    criadorId: 'criadorId',
    tipoCriador: 'tipoCriador',
    visibilidade: 'visibilidade',
    userId: 'userId'
  };

  export type TreinoScalarFieldEnum = (typeof TreinoScalarFieldEnum)[keyof typeof TreinoScalarFieldEnum]


  export const TreinoCompartilhamentoScalarFieldEnum: {
    id: 'id',
    treinoId: 'treinoId',
    alunoId: 'alunoId'
  };

  export type TreinoCompartilhamentoScalarFieldEnum = (typeof TreinoCompartilhamentoScalarFieldEnum)[keyof typeof TreinoCompartilhamentoScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'TipoCriador'
   */
  export type EnumTipoCriadorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCriador'>
    


  /**
   * Reference to a field of type 'TipoCriador[]'
   */
  export type ListEnumTipoCriadorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCriador[]'>
    


  /**
   * Reference to a field of type 'Visibilidade'
   */
  export type EnumVisibilidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibilidade'>
    


  /**
   * Reference to a field of type 'Visibilidade[]'
   */
  export type ListEnumVisibilidadeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibilidade[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    treinos?: TreinoListRelationFilter
    TreinoCompartilhamento?: TreinoCompartilhamentoListRelationFilter
    treinosInstrutor?: TreinoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    role?: SortOrder
    treinos?: TreinoOrderByRelationAggregateInput
    TreinoCompartilhamento?: TreinoCompartilhamentoOrderByRelationAggregateInput
    treinosInstrutor?: TreinoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    treinos?: TreinoListRelationFilter
    TreinoCompartilhamento?: TreinoCompartilhamentoListRelationFilter
    treinosInstrutor?: TreinoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    age?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type TreinoWhereInput = {
    AND?: TreinoWhereInput | TreinoWhereInput[]
    OR?: TreinoWhereInput[]
    NOT?: TreinoWhereInput | TreinoWhereInput[]
    id?: StringFilter<"Treino"> | string
    nome?: StringFilter<"Treino"> | string
    descricao?: StringFilter<"Treino"> | string
    exercicios?: JsonFilter<"Treino">
    createdAt?: DateTimeFilter<"Treino"> | Date | string
    updatedAt?: DateTimeFilter<"Treino"> | Date | string
    instrutorId?: StringNullableFilter<"Treino"> | string | null
    criadorId?: StringFilter<"Treino"> | string
    tipoCriador?: EnumTipoCriadorFilter<"Treino"> | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFilter<"Treino"> | $Enums.Visibilidade
    userId?: StringNullableFilter<"Treino"> | string | null
    instrutor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    alunosCompartilhados?: TreinoCompartilhamentoListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TreinoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    exercicios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instrutorId?: SortOrder
    criadorId?: SortOrder
    tipoCriador?: SortOrder
    visibilidade?: SortOrder
    userId?: SortOrder
    instrutor?: UserOrderByWithRelationInput
    alunosCompartilhados?: TreinoCompartilhamentoOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type TreinoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TreinoWhereInput | TreinoWhereInput[]
    OR?: TreinoWhereInput[]
    NOT?: TreinoWhereInput | TreinoWhereInput[]
    nome?: StringFilter<"Treino"> | string
    descricao?: StringFilter<"Treino"> | string
    exercicios?: JsonFilter<"Treino">
    createdAt?: DateTimeFilter<"Treino"> | Date | string
    updatedAt?: DateTimeFilter<"Treino"> | Date | string
    instrutorId?: StringNullableFilter<"Treino"> | string | null
    criadorId?: StringFilter<"Treino"> | string
    tipoCriador?: EnumTipoCriadorFilter<"Treino"> | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFilter<"Treino"> | $Enums.Visibilidade
    userId?: StringNullableFilter<"Treino"> | string | null
    instrutor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    alunosCompartilhados?: TreinoCompartilhamentoListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TreinoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    exercicios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instrutorId?: SortOrder
    criadorId?: SortOrder
    tipoCriador?: SortOrder
    visibilidade?: SortOrder
    userId?: SortOrder
    _count?: TreinoCountOrderByAggregateInput
    _max?: TreinoMaxOrderByAggregateInput
    _min?: TreinoMinOrderByAggregateInput
  }

  export type TreinoScalarWhereWithAggregatesInput = {
    AND?: TreinoScalarWhereWithAggregatesInput | TreinoScalarWhereWithAggregatesInput[]
    OR?: TreinoScalarWhereWithAggregatesInput[]
    NOT?: TreinoScalarWhereWithAggregatesInput | TreinoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Treino"> | string
    nome?: StringWithAggregatesFilter<"Treino"> | string
    descricao?: StringWithAggregatesFilter<"Treino"> | string
    exercicios?: JsonWithAggregatesFilter<"Treino">
    createdAt?: DateTimeWithAggregatesFilter<"Treino"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Treino"> | Date | string
    instrutorId?: StringNullableWithAggregatesFilter<"Treino"> | string | null
    criadorId?: StringWithAggregatesFilter<"Treino"> | string
    tipoCriador?: EnumTipoCriadorWithAggregatesFilter<"Treino"> | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeWithAggregatesFilter<"Treino"> | $Enums.Visibilidade
    userId?: StringNullableWithAggregatesFilter<"Treino"> | string | null
  }

  export type TreinoCompartilhamentoWhereInput = {
    AND?: TreinoCompartilhamentoWhereInput | TreinoCompartilhamentoWhereInput[]
    OR?: TreinoCompartilhamentoWhereInput[]
    NOT?: TreinoCompartilhamentoWhereInput | TreinoCompartilhamentoWhereInput[]
    id?: StringFilter<"TreinoCompartilhamento"> | string
    treinoId?: StringFilter<"TreinoCompartilhamento"> | string
    alunoId?: StringFilter<"TreinoCompartilhamento"> | string
    treino?: XOR<TreinoScalarRelationFilter, TreinoWhereInput>
    aluno?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TreinoCompartilhamentoOrderByWithRelationInput = {
    id?: SortOrder
    treinoId?: SortOrder
    alunoId?: SortOrder
    treino?: TreinoOrderByWithRelationInput
    aluno?: UserOrderByWithRelationInput
  }

  export type TreinoCompartilhamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    treinoId_alunoId?: TreinoCompartilhamentoTreinoIdAlunoIdCompoundUniqueInput
    AND?: TreinoCompartilhamentoWhereInput | TreinoCompartilhamentoWhereInput[]
    OR?: TreinoCompartilhamentoWhereInput[]
    NOT?: TreinoCompartilhamentoWhereInput | TreinoCompartilhamentoWhereInput[]
    treinoId?: StringFilter<"TreinoCompartilhamento"> | string
    alunoId?: StringFilter<"TreinoCompartilhamento"> | string
    treino?: XOR<TreinoScalarRelationFilter, TreinoWhereInput>
    aluno?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "treinoId_alunoId">

  export type TreinoCompartilhamentoOrderByWithAggregationInput = {
    id?: SortOrder
    treinoId?: SortOrder
    alunoId?: SortOrder
    _count?: TreinoCompartilhamentoCountOrderByAggregateInput
    _max?: TreinoCompartilhamentoMaxOrderByAggregateInput
    _min?: TreinoCompartilhamentoMinOrderByAggregateInput
  }

  export type TreinoCompartilhamentoScalarWhereWithAggregatesInput = {
    AND?: TreinoCompartilhamentoScalarWhereWithAggregatesInput | TreinoCompartilhamentoScalarWhereWithAggregatesInput[]
    OR?: TreinoCompartilhamentoScalarWhereWithAggregatesInput[]
    NOT?: TreinoCompartilhamentoScalarWhereWithAggregatesInput | TreinoCompartilhamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TreinoCompartilhamento"> | string
    treinoId?: StringWithAggregatesFilter<"TreinoCompartilhamento"> | string
    alunoId?: StringWithAggregatesFilter<"TreinoCompartilhamento"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    age: number
    createdAt?: Date | string
    password: string
    role: $Enums.Role
    treinos?: TreinoCreateNestedManyWithoutUserInput
    TreinoCompartilhamento?: TreinoCompartilhamentoCreateNestedManyWithoutAlunoInput
    treinosInstrutor?: TreinoCreateNestedManyWithoutInstrutorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    age: number
    createdAt?: Date | string
    password: string
    role: $Enums.Role
    treinos?: TreinoUncheckedCreateNestedManyWithoutUserInput
    TreinoCompartilhamento?: TreinoCompartilhamentoUncheckedCreateNestedManyWithoutAlunoInput
    treinosInstrutor?: TreinoUncheckedCreateNestedManyWithoutInstrutorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    treinos?: TreinoUpdateManyWithoutUserNestedInput
    TreinoCompartilhamento?: TreinoCompartilhamentoUpdateManyWithoutAlunoNestedInput
    treinosInstrutor?: TreinoUpdateManyWithoutInstrutorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    treinos?: TreinoUncheckedUpdateManyWithoutUserNestedInput
    TreinoCompartilhamento?: TreinoCompartilhamentoUncheckedUpdateManyWithoutAlunoNestedInput
    treinosInstrutor?: TreinoUncheckedUpdateManyWithoutInstrutorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    age: number
    createdAt?: Date | string
    password: string
    role: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type TreinoCreateInput = {
    id?: string
    nome: string
    descricao: string
    exercicios: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    criadorId: string
    tipoCriador?: $Enums.TipoCriador
    visibilidade?: $Enums.Visibilidade
    instrutor?: UserCreateNestedOneWithoutTreinosInstrutorInput
    alunosCompartilhados?: TreinoCompartilhamentoCreateNestedManyWithoutTreinoInput
    User?: UserCreateNestedOneWithoutTreinosInput
  }

  export type TreinoUncheckedCreateInput = {
    id?: string
    nome: string
    descricao: string
    exercicios: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    instrutorId?: string | null
    criadorId: string
    tipoCriador?: $Enums.TipoCriador
    visibilidade?: $Enums.Visibilidade
    userId?: string | null
    alunosCompartilhados?: TreinoCompartilhamentoUncheckedCreateNestedManyWithoutTreinoInput
  }

  export type TreinoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
    instrutor?: UserUpdateOneWithoutTreinosInstrutorNestedInput
    alunosCompartilhados?: TreinoCompartilhamentoUpdateManyWithoutTreinoNestedInput
    User?: UserUpdateOneWithoutTreinosNestedInput
  }

  export type TreinoUncheckedUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrutorId?: NullableStringFieldUpdateOperationsInput | string | null
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    alunosCompartilhados?: TreinoCompartilhamentoUncheckedUpdateManyWithoutTreinoNestedInput
  }

  export type TreinoCreateManyInput = {
    id?: string
    nome: string
    descricao: string
    exercicios: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    instrutorId?: string | null
    criadorId: string
    tipoCriador?: $Enums.TipoCriador
    visibilidade?: $Enums.Visibilidade
    userId?: string | null
  }

  export type TreinoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
  }

  export type TreinoUncheckedUpdateManyInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrutorId?: NullableStringFieldUpdateOperationsInput | string | null
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TreinoCompartilhamentoCreateInput = {
    id?: string
    treino: TreinoCreateNestedOneWithoutAlunosCompartilhadosInput
    aluno: UserCreateNestedOneWithoutTreinoCompartilhamentoInput
  }

  export type TreinoCompartilhamentoUncheckedCreateInput = {
    id?: string
    treinoId: string
    alunoId: string
  }

  export type TreinoCompartilhamentoUpdateInput = {
    treino?: TreinoUpdateOneRequiredWithoutAlunosCompartilhadosNestedInput
    aluno?: UserUpdateOneRequiredWithoutTreinoCompartilhamentoNestedInput
  }

  export type TreinoCompartilhamentoUncheckedUpdateInput = {
    treinoId?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
  }

  export type TreinoCompartilhamentoCreateManyInput = {
    id?: string
    treinoId: string
    alunoId: string
  }

  export type TreinoCompartilhamentoUpdateManyMutationInput = {

  }

  export type TreinoCompartilhamentoUncheckedUpdateManyInput = {
    treinoId?: StringFieldUpdateOperationsInput | string
    alunoId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type TreinoListRelationFilter = {
    every?: TreinoWhereInput
    some?: TreinoWhereInput
    none?: TreinoWhereInput
  }

  export type TreinoCompartilhamentoListRelationFilter = {
    every?: TreinoCompartilhamentoWhereInput
    some?: TreinoCompartilhamentoWhereInput
    none?: TreinoCompartilhamentoWhereInput
  }

  export type TreinoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreinoCompartilhamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
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
    isSet?: boolean
  }

  export type EnumTipoCriadorFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCriador | EnumTipoCriadorFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCriador[] | ListEnumTipoCriadorFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCriador[] | ListEnumTipoCriadorFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCriadorFilter<$PrismaModel> | $Enums.TipoCriador
  }

  export type EnumVisibilidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibilidade | EnumVisibilidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Visibilidade[] | ListEnumVisibilidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibilidade[] | ListEnumVisibilidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilidadeFilter<$PrismaModel> | $Enums.Visibilidade
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TreinoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    exercicios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instrutorId?: SortOrder
    criadorId?: SortOrder
    tipoCriador?: SortOrder
    visibilidade?: SortOrder
    userId?: SortOrder
  }

  export type TreinoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instrutorId?: SortOrder
    criadorId?: SortOrder
    tipoCriador?: SortOrder
    visibilidade?: SortOrder
    userId?: SortOrder
  }

  export type TreinoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instrutorId?: SortOrder
    criadorId?: SortOrder
    tipoCriador?: SortOrder
    visibilidade?: SortOrder
    userId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type EnumTipoCriadorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCriador | EnumTipoCriadorFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCriador[] | ListEnumTipoCriadorFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCriador[] | ListEnumTipoCriadorFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCriadorWithAggregatesFilter<$PrismaModel> | $Enums.TipoCriador
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCriadorFilter<$PrismaModel>
    _max?: NestedEnumTipoCriadorFilter<$PrismaModel>
  }

  export type EnumVisibilidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibilidade | EnumVisibilidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Visibilidade[] | ListEnumVisibilidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibilidade[] | ListEnumVisibilidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilidadeWithAggregatesFilter<$PrismaModel> | $Enums.Visibilidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilidadeFilter<$PrismaModel>
    _max?: NestedEnumVisibilidadeFilter<$PrismaModel>
  }

  export type TreinoScalarRelationFilter = {
    is?: TreinoWhereInput
    isNot?: TreinoWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TreinoCompartilhamentoTreinoIdAlunoIdCompoundUniqueInput = {
    treinoId: string
    alunoId: string
  }

  export type TreinoCompartilhamentoCountOrderByAggregateInput = {
    id?: SortOrder
    treinoId?: SortOrder
    alunoId?: SortOrder
  }

  export type TreinoCompartilhamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    treinoId?: SortOrder
    alunoId?: SortOrder
  }

  export type TreinoCompartilhamentoMinOrderByAggregateInput = {
    id?: SortOrder
    treinoId?: SortOrder
    alunoId?: SortOrder
  }

  export type TreinoCreateNestedManyWithoutUserInput = {
    create?: XOR<TreinoCreateWithoutUserInput, TreinoUncheckedCreateWithoutUserInput> | TreinoCreateWithoutUserInput[] | TreinoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreinoCreateOrConnectWithoutUserInput | TreinoCreateOrConnectWithoutUserInput[]
    createMany?: TreinoCreateManyUserInputEnvelope
    connect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
  }

  export type TreinoCompartilhamentoCreateNestedManyWithoutAlunoInput = {
    create?: XOR<TreinoCompartilhamentoCreateWithoutAlunoInput, TreinoCompartilhamentoUncheckedCreateWithoutAlunoInput> | TreinoCompartilhamentoCreateWithoutAlunoInput[] | TreinoCompartilhamentoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TreinoCompartilhamentoCreateOrConnectWithoutAlunoInput | TreinoCompartilhamentoCreateOrConnectWithoutAlunoInput[]
    createMany?: TreinoCompartilhamentoCreateManyAlunoInputEnvelope
    connect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
  }

  export type TreinoCreateNestedManyWithoutInstrutorInput = {
    create?: XOR<TreinoCreateWithoutInstrutorInput, TreinoUncheckedCreateWithoutInstrutorInput> | TreinoCreateWithoutInstrutorInput[] | TreinoUncheckedCreateWithoutInstrutorInput[]
    connectOrCreate?: TreinoCreateOrConnectWithoutInstrutorInput | TreinoCreateOrConnectWithoutInstrutorInput[]
    createMany?: TreinoCreateManyInstrutorInputEnvelope
    connect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
  }

  export type TreinoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TreinoCreateWithoutUserInput, TreinoUncheckedCreateWithoutUserInput> | TreinoCreateWithoutUserInput[] | TreinoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreinoCreateOrConnectWithoutUserInput | TreinoCreateOrConnectWithoutUserInput[]
    createMany?: TreinoCreateManyUserInputEnvelope
    connect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
  }

  export type TreinoCompartilhamentoUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<TreinoCompartilhamentoCreateWithoutAlunoInput, TreinoCompartilhamentoUncheckedCreateWithoutAlunoInput> | TreinoCompartilhamentoCreateWithoutAlunoInput[] | TreinoCompartilhamentoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TreinoCompartilhamentoCreateOrConnectWithoutAlunoInput | TreinoCompartilhamentoCreateOrConnectWithoutAlunoInput[]
    createMany?: TreinoCompartilhamentoCreateManyAlunoInputEnvelope
    connect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
  }

  export type TreinoUncheckedCreateNestedManyWithoutInstrutorInput = {
    create?: XOR<TreinoCreateWithoutInstrutorInput, TreinoUncheckedCreateWithoutInstrutorInput> | TreinoCreateWithoutInstrutorInput[] | TreinoUncheckedCreateWithoutInstrutorInput[]
    connectOrCreate?: TreinoCreateOrConnectWithoutInstrutorInput | TreinoCreateOrConnectWithoutInstrutorInput[]
    createMany?: TreinoCreateManyInstrutorInputEnvelope
    connect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type TreinoUpdateManyWithoutUserNestedInput = {
    create?: XOR<TreinoCreateWithoutUserInput, TreinoUncheckedCreateWithoutUserInput> | TreinoCreateWithoutUserInput[] | TreinoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreinoCreateOrConnectWithoutUserInput | TreinoCreateOrConnectWithoutUserInput[]
    upsert?: TreinoUpsertWithWhereUniqueWithoutUserInput | TreinoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TreinoCreateManyUserInputEnvelope
    set?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    disconnect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    delete?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    connect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    update?: TreinoUpdateWithWhereUniqueWithoutUserInput | TreinoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TreinoUpdateManyWithWhereWithoutUserInput | TreinoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TreinoScalarWhereInput | TreinoScalarWhereInput[]
  }

  export type TreinoCompartilhamentoUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<TreinoCompartilhamentoCreateWithoutAlunoInput, TreinoCompartilhamentoUncheckedCreateWithoutAlunoInput> | TreinoCompartilhamentoCreateWithoutAlunoInput[] | TreinoCompartilhamentoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TreinoCompartilhamentoCreateOrConnectWithoutAlunoInput | TreinoCompartilhamentoCreateOrConnectWithoutAlunoInput[]
    upsert?: TreinoCompartilhamentoUpsertWithWhereUniqueWithoutAlunoInput | TreinoCompartilhamentoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: TreinoCompartilhamentoCreateManyAlunoInputEnvelope
    set?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    disconnect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    delete?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    connect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    update?: TreinoCompartilhamentoUpdateWithWhereUniqueWithoutAlunoInput | TreinoCompartilhamentoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: TreinoCompartilhamentoUpdateManyWithWhereWithoutAlunoInput | TreinoCompartilhamentoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: TreinoCompartilhamentoScalarWhereInput | TreinoCompartilhamentoScalarWhereInput[]
  }

  export type TreinoUpdateManyWithoutInstrutorNestedInput = {
    create?: XOR<TreinoCreateWithoutInstrutorInput, TreinoUncheckedCreateWithoutInstrutorInput> | TreinoCreateWithoutInstrutorInput[] | TreinoUncheckedCreateWithoutInstrutorInput[]
    connectOrCreate?: TreinoCreateOrConnectWithoutInstrutorInput | TreinoCreateOrConnectWithoutInstrutorInput[]
    upsert?: TreinoUpsertWithWhereUniqueWithoutInstrutorInput | TreinoUpsertWithWhereUniqueWithoutInstrutorInput[]
    createMany?: TreinoCreateManyInstrutorInputEnvelope
    set?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    disconnect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    delete?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    connect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    update?: TreinoUpdateWithWhereUniqueWithoutInstrutorInput | TreinoUpdateWithWhereUniqueWithoutInstrutorInput[]
    updateMany?: TreinoUpdateManyWithWhereWithoutInstrutorInput | TreinoUpdateManyWithWhereWithoutInstrutorInput[]
    deleteMany?: TreinoScalarWhereInput | TreinoScalarWhereInput[]
  }

  export type TreinoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TreinoCreateWithoutUserInput, TreinoUncheckedCreateWithoutUserInput> | TreinoCreateWithoutUserInput[] | TreinoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TreinoCreateOrConnectWithoutUserInput | TreinoCreateOrConnectWithoutUserInput[]
    upsert?: TreinoUpsertWithWhereUniqueWithoutUserInput | TreinoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TreinoCreateManyUserInputEnvelope
    set?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    disconnect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    delete?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    connect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    update?: TreinoUpdateWithWhereUniqueWithoutUserInput | TreinoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TreinoUpdateManyWithWhereWithoutUserInput | TreinoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TreinoScalarWhereInput | TreinoScalarWhereInput[]
  }

  export type TreinoCompartilhamentoUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<TreinoCompartilhamentoCreateWithoutAlunoInput, TreinoCompartilhamentoUncheckedCreateWithoutAlunoInput> | TreinoCompartilhamentoCreateWithoutAlunoInput[] | TreinoCompartilhamentoUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TreinoCompartilhamentoCreateOrConnectWithoutAlunoInput | TreinoCompartilhamentoCreateOrConnectWithoutAlunoInput[]
    upsert?: TreinoCompartilhamentoUpsertWithWhereUniqueWithoutAlunoInput | TreinoCompartilhamentoUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: TreinoCompartilhamentoCreateManyAlunoInputEnvelope
    set?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    disconnect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    delete?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    connect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    update?: TreinoCompartilhamentoUpdateWithWhereUniqueWithoutAlunoInput | TreinoCompartilhamentoUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: TreinoCompartilhamentoUpdateManyWithWhereWithoutAlunoInput | TreinoCompartilhamentoUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: TreinoCompartilhamentoScalarWhereInput | TreinoCompartilhamentoScalarWhereInput[]
  }

  export type TreinoUncheckedUpdateManyWithoutInstrutorNestedInput = {
    create?: XOR<TreinoCreateWithoutInstrutorInput, TreinoUncheckedCreateWithoutInstrutorInput> | TreinoCreateWithoutInstrutorInput[] | TreinoUncheckedCreateWithoutInstrutorInput[]
    connectOrCreate?: TreinoCreateOrConnectWithoutInstrutorInput | TreinoCreateOrConnectWithoutInstrutorInput[]
    upsert?: TreinoUpsertWithWhereUniqueWithoutInstrutorInput | TreinoUpsertWithWhereUniqueWithoutInstrutorInput[]
    createMany?: TreinoCreateManyInstrutorInputEnvelope
    set?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    disconnect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    delete?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    connect?: TreinoWhereUniqueInput | TreinoWhereUniqueInput[]
    update?: TreinoUpdateWithWhereUniqueWithoutInstrutorInput | TreinoUpdateWithWhereUniqueWithoutInstrutorInput[]
    updateMany?: TreinoUpdateManyWithWhereWithoutInstrutorInput | TreinoUpdateManyWithWhereWithoutInstrutorInput[]
    deleteMany?: TreinoScalarWhereInput | TreinoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTreinosInstrutorInput = {
    create?: XOR<UserCreateWithoutTreinosInstrutorInput, UserUncheckedCreateWithoutTreinosInstrutorInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreinosInstrutorInput
    connect?: UserWhereUniqueInput
  }

  export type TreinoCompartilhamentoCreateNestedManyWithoutTreinoInput = {
    create?: XOR<TreinoCompartilhamentoCreateWithoutTreinoInput, TreinoCompartilhamentoUncheckedCreateWithoutTreinoInput> | TreinoCompartilhamentoCreateWithoutTreinoInput[] | TreinoCompartilhamentoUncheckedCreateWithoutTreinoInput[]
    connectOrCreate?: TreinoCompartilhamentoCreateOrConnectWithoutTreinoInput | TreinoCompartilhamentoCreateOrConnectWithoutTreinoInput[]
    createMany?: TreinoCompartilhamentoCreateManyTreinoInputEnvelope
    connect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTreinosInput = {
    create?: XOR<UserCreateWithoutTreinosInput, UserUncheckedCreateWithoutTreinosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreinosInput
    connect?: UserWhereUniqueInput
  }

  export type TreinoCompartilhamentoUncheckedCreateNestedManyWithoutTreinoInput = {
    create?: XOR<TreinoCompartilhamentoCreateWithoutTreinoInput, TreinoCompartilhamentoUncheckedCreateWithoutTreinoInput> | TreinoCompartilhamentoCreateWithoutTreinoInput[] | TreinoCompartilhamentoUncheckedCreateWithoutTreinoInput[]
    connectOrCreate?: TreinoCompartilhamentoCreateOrConnectWithoutTreinoInput | TreinoCompartilhamentoCreateOrConnectWithoutTreinoInput[]
    createMany?: TreinoCompartilhamentoCreateManyTreinoInputEnvelope
    connect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
  }

  export type EnumTipoCriadorFieldUpdateOperationsInput = {
    set?: $Enums.TipoCriador
  }

  export type EnumVisibilidadeFieldUpdateOperationsInput = {
    set?: $Enums.Visibilidade
  }

  export type UserUpdateOneWithoutTreinosInstrutorNestedInput = {
    create?: XOR<UserCreateWithoutTreinosInstrutorInput, UserUncheckedCreateWithoutTreinosInstrutorInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreinosInstrutorInput
    upsert?: UserUpsertWithoutTreinosInstrutorInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTreinosInstrutorInput, UserUpdateWithoutTreinosInstrutorInput>, UserUncheckedUpdateWithoutTreinosInstrutorInput>
  }

  export type TreinoCompartilhamentoUpdateManyWithoutTreinoNestedInput = {
    create?: XOR<TreinoCompartilhamentoCreateWithoutTreinoInput, TreinoCompartilhamentoUncheckedCreateWithoutTreinoInput> | TreinoCompartilhamentoCreateWithoutTreinoInput[] | TreinoCompartilhamentoUncheckedCreateWithoutTreinoInput[]
    connectOrCreate?: TreinoCompartilhamentoCreateOrConnectWithoutTreinoInput | TreinoCompartilhamentoCreateOrConnectWithoutTreinoInput[]
    upsert?: TreinoCompartilhamentoUpsertWithWhereUniqueWithoutTreinoInput | TreinoCompartilhamentoUpsertWithWhereUniqueWithoutTreinoInput[]
    createMany?: TreinoCompartilhamentoCreateManyTreinoInputEnvelope
    set?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    disconnect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    delete?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    connect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    update?: TreinoCompartilhamentoUpdateWithWhereUniqueWithoutTreinoInput | TreinoCompartilhamentoUpdateWithWhereUniqueWithoutTreinoInput[]
    updateMany?: TreinoCompartilhamentoUpdateManyWithWhereWithoutTreinoInput | TreinoCompartilhamentoUpdateManyWithWhereWithoutTreinoInput[]
    deleteMany?: TreinoCompartilhamentoScalarWhereInput | TreinoCompartilhamentoScalarWhereInput[]
  }

  export type UserUpdateOneWithoutTreinosNestedInput = {
    create?: XOR<UserCreateWithoutTreinosInput, UserUncheckedCreateWithoutTreinosInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreinosInput
    upsert?: UserUpsertWithoutTreinosInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTreinosInput, UserUpdateWithoutTreinosInput>, UserUncheckedUpdateWithoutTreinosInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type TreinoCompartilhamentoUncheckedUpdateManyWithoutTreinoNestedInput = {
    create?: XOR<TreinoCompartilhamentoCreateWithoutTreinoInput, TreinoCompartilhamentoUncheckedCreateWithoutTreinoInput> | TreinoCompartilhamentoCreateWithoutTreinoInput[] | TreinoCompartilhamentoUncheckedCreateWithoutTreinoInput[]
    connectOrCreate?: TreinoCompartilhamentoCreateOrConnectWithoutTreinoInput | TreinoCompartilhamentoCreateOrConnectWithoutTreinoInput[]
    upsert?: TreinoCompartilhamentoUpsertWithWhereUniqueWithoutTreinoInput | TreinoCompartilhamentoUpsertWithWhereUniqueWithoutTreinoInput[]
    createMany?: TreinoCompartilhamentoCreateManyTreinoInputEnvelope
    set?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    disconnect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    delete?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    connect?: TreinoCompartilhamentoWhereUniqueInput | TreinoCompartilhamentoWhereUniqueInput[]
    update?: TreinoCompartilhamentoUpdateWithWhereUniqueWithoutTreinoInput | TreinoCompartilhamentoUpdateWithWhereUniqueWithoutTreinoInput[]
    updateMany?: TreinoCompartilhamentoUpdateManyWithWhereWithoutTreinoInput | TreinoCompartilhamentoUpdateManyWithWhereWithoutTreinoInput[]
    deleteMany?: TreinoCompartilhamentoScalarWhereInput | TreinoCompartilhamentoScalarWhereInput[]
  }

  export type TreinoCreateNestedOneWithoutAlunosCompartilhadosInput = {
    create?: XOR<TreinoCreateWithoutAlunosCompartilhadosInput, TreinoUncheckedCreateWithoutAlunosCompartilhadosInput>
    connectOrCreate?: TreinoCreateOrConnectWithoutAlunosCompartilhadosInput
    connect?: TreinoWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTreinoCompartilhamentoInput = {
    create?: XOR<UserCreateWithoutTreinoCompartilhamentoInput, UserUncheckedCreateWithoutTreinoCompartilhamentoInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreinoCompartilhamentoInput
    connect?: UserWhereUniqueInput
  }

  export type TreinoUpdateOneRequiredWithoutAlunosCompartilhadosNestedInput = {
    create?: XOR<TreinoCreateWithoutAlunosCompartilhadosInput, TreinoUncheckedCreateWithoutAlunosCompartilhadosInput>
    connectOrCreate?: TreinoCreateOrConnectWithoutAlunosCompartilhadosInput
    upsert?: TreinoUpsertWithoutAlunosCompartilhadosInput
    connect?: TreinoWhereUniqueInput
    update?: XOR<XOR<TreinoUpdateToOneWithWhereWithoutAlunosCompartilhadosInput, TreinoUpdateWithoutAlunosCompartilhadosInput>, TreinoUncheckedUpdateWithoutAlunosCompartilhadosInput>
  }

  export type UserUpdateOneRequiredWithoutTreinoCompartilhamentoNestedInput = {
    create?: XOR<UserCreateWithoutTreinoCompartilhamentoInput, UserUncheckedCreateWithoutTreinoCompartilhamentoInput>
    connectOrCreate?: UserCreateOrConnectWithoutTreinoCompartilhamentoInput
    upsert?: UserUpsertWithoutTreinoCompartilhamentoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTreinoCompartilhamentoInput, UserUpdateWithoutTreinoCompartilhamentoInput>, UserUncheckedUpdateWithoutTreinoCompartilhamentoInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type NestedEnumTipoCriadorFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCriador | EnumTipoCriadorFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCriador[] | ListEnumTipoCriadorFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCriador[] | ListEnumTipoCriadorFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCriadorFilter<$PrismaModel> | $Enums.TipoCriador
  }

  export type NestedEnumVisibilidadeFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibilidade | EnumVisibilidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Visibilidade[] | ListEnumVisibilidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibilidade[] | ListEnumVisibilidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilidadeFilter<$PrismaModel> | $Enums.Visibilidade
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedEnumTipoCriadorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCriador | EnumTipoCriadorFieldRefInput<$PrismaModel>
    in?: $Enums.TipoCriador[] | ListEnumTipoCriadorFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoCriador[] | ListEnumTipoCriadorFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoCriadorWithAggregatesFilter<$PrismaModel> | $Enums.TipoCriador
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoCriadorFilter<$PrismaModel>
    _max?: NestedEnumTipoCriadorFilter<$PrismaModel>
  }

  export type NestedEnumVisibilidadeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibilidade | EnumVisibilidadeFieldRefInput<$PrismaModel>
    in?: $Enums.Visibilidade[] | ListEnumVisibilidadeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibilidade[] | ListEnumVisibilidadeFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilidadeWithAggregatesFilter<$PrismaModel> | $Enums.Visibilidade
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilidadeFilter<$PrismaModel>
    _max?: NestedEnumVisibilidadeFilter<$PrismaModel>
  }

  export type TreinoCreateWithoutUserInput = {
    id?: string
    nome: string
    descricao: string
    exercicios: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    criadorId: string
    tipoCriador?: $Enums.TipoCriador
    visibilidade?: $Enums.Visibilidade
    instrutor?: UserCreateNestedOneWithoutTreinosInstrutorInput
    alunosCompartilhados?: TreinoCompartilhamentoCreateNestedManyWithoutTreinoInput
  }

  export type TreinoUncheckedCreateWithoutUserInput = {
    id?: string
    nome: string
    descricao: string
    exercicios: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    instrutorId?: string | null
    criadorId: string
    tipoCriador?: $Enums.TipoCriador
    visibilidade?: $Enums.Visibilidade
    alunosCompartilhados?: TreinoCompartilhamentoUncheckedCreateNestedManyWithoutTreinoInput
  }

  export type TreinoCreateOrConnectWithoutUserInput = {
    where: TreinoWhereUniqueInput
    create: XOR<TreinoCreateWithoutUserInput, TreinoUncheckedCreateWithoutUserInput>
  }

  export type TreinoCreateManyUserInputEnvelope = {
    data: TreinoCreateManyUserInput | TreinoCreateManyUserInput[]
  }

  export type TreinoCompartilhamentoCreateWithoutAlunoInput = {
    id?: string
    treino: TreinoCreateNestedOneWithoutAlunosCompartilhadosInput
  }

  export type TreinoCompartilhamentoUncheckedCreateWithoutAlunoInput = {
    id?: string
    treinoId: string
  }

  export type TreinoCompartilhamentoCreateOrConnectWithoutAlunoInput = {
    where: TreinoCompartilhamentoWhereUniqueInput
    create: XOR<TreinoCompartilhamentoCreateWithoutAlunoInput, TreinoCompartilhamentoUncheckedCreateWithoutAlunoInput>
  }

  export type TreinoCompartilhamentoCreateManyAlunoInputEnvelope = {
    data: TreinoCompartilhamentoCreateManyAlunoInput | TreinoCompartilhamentoCreateManyAlunoInput[]
  }

  export type TreinoCreateWithoutInstrutorInput = {
    id?: string
    nome: string
    descricao: string
    exercicios: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    criadorId: string
    tipoCriador?: $Enums.TipoCriador
    visibilidade?: $Enums.Visibilidade
    alunosCompartilhados?: TreinoCompartilhamentoCreateNestedManyWithoutTreinoInput
    User?: UserCreateNestedOneWithoutTreinosInput
  }

  export type TreinoUncheckedCreateWithoutInstrutorInput = {
    id?: string
    nome: string
    descricao: string
    exercicios: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    criadorId: string
    tipoCriador?: $Enums.TipoCriador
    visibilidade?: $Enums.Visibilidade
    userId?: string | null
    alunosCompartilhados?: TreinoCompartilhamentoUncheckedCreateNestedManyWithoutTreinoInput
  }

  export type TreinoCreateOrConnectWithoutInstrutorInput = {
    where: TreinoWhereUniqueInput
    create: XOR<TreinoCreateWithoutInstrutorInput, TreinoUncheckedCreateWithoutInstrutorInput>
  }

  export type TreinoCreateManyInstrutorInputEnvelope = {
    data: TreinoCreateManyInstrutorInput | TreinoCreateManyInstrutorInput[]
  }

  export type TreinoUpsertWithWhereUniqueWithoutUserInput = {
    where: TreinoWhereUniqueInput
    update: XOR<TreinoUpdateWithoutUserInput, TreinoUncheckedUpdateWithoutUserInput>
    create: XOR<TreinoCreateWithoutUserInput, TreinoUncheckedCreateWithoutUserInput>
  }

  export type TreinoUpdateWithWhereUniqueWithoutUserInput = {
    where: TreinoWhereUniqueInput
    data: XOR<TreinoUpdateWithoutUserInput, TreinoUncheckedUpdateWithoutUserInput>
  }

  export type TreinoUpdateManyWithWhereWithoutUserInput = {
    where: TreinoScalarWhereInput
    data: XOR<TreinoUpdateManyMutationInput, TreinoUncheckedUpdateManyWithoutUserInput>
  }

  export type TreinoScalarWhereInput = {
    AND?: TreinoScalarWhereInput | TreinoScalarWhereInput[]
    OR?: TreinoScalarWhereInput[]
    NOT?: TreinoScalarWhereInput | TreinoScalarWhereInput[]
    id?: StringFilter<"Treino"> | string
    nome?: StringFilter<"Treino"> | string
    descricao?: StringFilter<"Treino"> | string
    exercicios?: JsonFilter<"Treino">
    createdAt?: DateTimeFilter<"Treino"> | Date | string
    updatedAt?: DateTimeFilter<"Treino"> | Date | string
    instrutorId?: StringNullableFilter<"Treino"> | string | null
    criadorId?: StringFilter<"Treino"> | string
    tipoCriador?: EnumTipoCriadorFilter<"Treino"> | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFilter<"Treino"> | $Enums.Visibilidade
    userId?: StringNullableFilter<"Treino"> | string | null
  }

  export type TreinoCompartilhamentoUpsertWithWhereUniqueWithoutAlunoInput = {
    where: TreinoCompartilhamentoWhereUniqueInput
    update: XOR<TreinoCompartilhamentoUpdateWithoutAlunoInput, TreinoCompartilhamentoUncheckedUpdateWithoutAlunoInput>
    create: XOR<TreinoCompartilhamentoCreateWithoutAlunoInput, TreinoCompartilhamentoUncheckedCreateWithoutAlunoInput>
  }

  export type TreinoCompartilhamentoUpdateWithWhereUniqueWithoutAlunoInput = {
    where: TreinoCompartilhamentoWhereUniqueInput
    data: XOR<TreinoCompartilhamentoUpdateWithoutAlunoInput, TreinoCompartilhamentoUncheckedUpdateWithoutAlunoInput>
  }

  export type TreinoCompartilhamentoUpdateManyWithWhereWithoutAlunoInput = {
    where: TreinoCompartilhamentoScalarWhereInput
    data: XOR<TreinoCompartilhamentoUpdateManyMutationInput, TreinoCompartilhamentoUncheckedUpdateManyWithoutAlunoInput>
  }

  export type TreinoCompartilhamentoScalarWhereInput = {
    AND?: TreinoCompartilhamentoScalarWhereInput | TreinoCompartilhamentoScalarWhereInput[]
    OR?: TreinoCompartilhamentoScalarWhereInput[]
    NOT?: TreinoCompartilhamentoScalarWhereInput | TreinoCompartilhamentoScalarWhereInput[]
    id?: StringFilter<"TreinoCompartilhamento"> | string
    treinoId?: StringFilter<"TreinoCompartilhamento"> | string
    alunoId?: StringFilter<"TreinoCompartilhamento"> | string
  }

  export type TreinoUpsertWithWhereUniqueWithoutInstrutorInput = {
    where: TreinoWhereUniqueInput
    update: XOR<TreinoUpdateWithoutInstrutorInput, TreinoUncheckedUpdateWithoutInstrutorInput>
    create: XOR<TreinoCreateWithoutInstrutorInput, TreinoUncheckedCreateWithoutInstrutorInput>
  }

  export type TreinoUpdateWithWhereUniqueWithoutInstrutorInput = {
    where: TreinoWhereUniqueInput
    data: XOR<TreinoUpdateWithoutInstrutorInput, TreinoUncheckedUpdateWithoutInstrutorInput>
  }

  export type TreinoUpdateManyWithWhereWithoutInstrutorInput = {
    where: TreinoScalarWhereInput
    data: XOR<TreinoUpdateManyMutationInput, TreinoUncheckedUpdateManyWithoutInstrutorInput>
  }

  export type UserCreateWithoutTreinosInstrutorInput = {
    id?: string
    email: string
    name: string
    age: number
    createdAt?: Date | string
    password: string
    role: $Enums.Role
    treinos?: TreinoCreateNestedManyWithoutUserInput
    TreinoCompartilhamento?: TreinoCompartilhamentoCreateNestedManyWithoutAlunoInput
  }

  export type UserUncheckedCreateWithoutTreinosInstrutorInput = {
    id?: string
    email: string
    name: string
    age: number
    createdAt?: Date | string
    password: string
    role: $Enums.Role
    treinos?: TreinoUncheckedCreateNestedManyWithoutUserInput
    TreinoCompartilhamento?: TreinoCompartilhamentoUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type UserCreateOrConnectWithoutTreinosInstrutorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTreinosInstrutorInput, UserUncheckedCreateWithoutTreinosInstrutorInput>
  }

  export type TreinoCompartilhamentoCreateWithoutTreinoInput = {
    id?: string
    aluno: UserCreateNestedOneWithoutTreinoCompartilhamentoInput
  }

  export type TreinoCompartilhamentoUncheckedCreateWithoutTreinoInput = {
    id?: string
    alunoId: string
  }

  export type TreinoCompartilhamentoCreateOrConnectWithoutTreinoInput = {
    where: TreinoCompartilhamentoWhereUniqueInput
    create: XOR<TreinoCompartilhamentoCreateWithoutTreinoInput, TreinoCompartilhamentoUncheckedCreateWithoutTreinoInput>
  }

  export type TreinoCompartilhamentoCreateManyTreinoInputEnvelope = {
    data: TreinoCompartilhamentoCreateManyTreinoInput | TreinoCompartilhamentoCreateManyTreinoInput[]
  }

  export type UserCreateWithoutTreinosInput = {
    id?: string
    email: string
    name: string
    age: number
    createdAt?: Date | string
    password: string
    role: $Enums.Role
    TreinoCompartilhamento?: TreinoCompartilhamentoCreateNestedManyWithoutAlunoInput
    treinosInstrutor?: TreinoCreateNestedManyWithoutInstrutorInput
  }

  export type UserUncheckedCreateWithoutTreinosInput = {
    id?: string
    email: string
    name: string
    age: number
    createdAt?: Date | string
    password: string
    role: $Enums.Role
    TreinoCompartilhamento?: TreinoCompartilhamentoUncheckedCreateNestedManyWithoutAlunoInput
    treinosInstrutor?: TreinoUncheckedCreateNestedManyWithoutInstrutorInput
  }

  export type UserCreateOrConnectWithoutTreinosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTreinosInput, UserUncheckedCreateWithoutTreinosInput>
  }

  export type UserUpsertWithoutTreinosInstrutorInput = {
    update: XOR<UserUpdateWithoutTreinosInstrutorInput, UserUncheckedUpdateWithoutTreinosInstrutorInput>
    create: XOR<UserCreateWithoutTreinosInstrutorInput, UserUncheckedCreateWithoutTreinosInstrutorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTreinosInstrutorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTreinosInstrutorInput, UserUncheckedUpdateWithoutTreinosInstrutorInput>
  }

  export type UserUpdateWithoutTreinosInstrutorInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    treinos?: TreinoUpdateManyWithoutUserNestedInput
    TreinoCompartilhamento?: TreinoCompartilhamentoUpdateManyWithoutAlunoNestedInput
  }

  export type UserUncheckedUpdateWithoutTreinosInstrutorInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    treinos?: TreinoUncheckedUpdateManyWithoutUserNestedInput
    TreinoCompartilhamento?: TreinoCompartilhamentoUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type TreinoCompartilhamentoUpsertWithWhereUniqueWithoutTreinoInput = {
    where: TreinoCompartilhamentoWhereUniqueInput
    update: XOR<TreinoCompartilhamentoUpdateWithoutTreinoInput, TreinoCompartilhamentoUncheckedUpdateWithoutTreinoInput>
    create: XOR<TreinoCompartilhamentoCreateWithoutTreinoInput, TreinoCompartilhamentoUncheckedCreateWithoutTreinoInput>
  }

  export type TreinoCompartilhamentoUpdateWithWhereUniqueWithoutTreinoInput = {
    where: TreinoCompartilhamentoWhereUniqueInput
    data: XOR<TreinoCompartilhamentoUpdateWithoutTreinoInput, TreinoCompartilhamentoUncheckedUpdateWithoutTreinoInput>
  }

  export type TreinoCompartilhamentoUpdateManyWithWhereWithoutTreinoInput = {
    where: TreinoCompartilhamentoScalarWhereInput
    data: XOR<TreinoCompartilhamentoUpdateManyMutationInput, TreinoCompartilhamentoUncheckedUpdateManyWithoutTreinoInput>
  }

  export type UserUpsertWithoutTreinosInput = {
    update: XOR<UserUpdateWithoutTreinosInput, UserUncheckedUpdateWithoutTreinosInput>
    create: XOR<UserCreateWithoutTreinosInput, UserUncheckedCreateWithoutTreinosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTreinosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTreinosInput, UserUncheckedUpdateWithoutTreinosInput>
  }

  export type UserUpdateWithoutTreinosInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    TreinoCompartilhamento?: TreinoCompartilhamentoUpdateManyWithoutAlunoNestedInput
    treinosInstrutor?: TreinoUpdateManyWithoutInstrutorNestedInput
  }

  export type UserUncheckedUpdateWithoutTreinosInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    TreinoCompartilhamento?: TreinoCompartilhamentoUncheckedUpdateManyWithoutAlunoNestedInput
    treinosInstrutor?: TreinoUncheckedUpdateManyWithoutInstrutorNestedInput
  }

  export type TreinoCreateWithoutAlunosCompartilhadosInput = {
    id?: string
    nome: string
    descricao: string
    exercicios: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    criadorId: string
    tipoCriador?: $Enums.TipoCriador
    visibilidade?: $Enums.Visibilidade
    instrutor?: UserCreateNestedOneWithoutTreinosInstrutorInput
    User?: UserCreateNestedOneWithoutTreinosInput
  }

  export type TreinoUncheckedCreateWithoutAlunosCompartilhadosInput = {
    id?: string
    nome: string
    descricao: string
    exercicios: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    instrutorId?: string | null
    criadorId: string
    tipoCriador?: $Enums.TipoCriador
    visibilidade?: $Enums.Visibilidade
    userId?: string | null
  }

  export type TreinoCreateOrConnectWithoutAlunosCompartilhadosInput = {
    where: TreinoWhereUniqueInput
    create: XOR<TreinoCreateWithoutAlunosCompartilhadosInput, TreinoUncheckedCreateWithoutAlunosCompartilhadosInput>
  }

  export type UserCreateWithoutTreinoCompartilhamentoInput = {
    id?: string
    email: string
    name: string
    age: number
    createdAt?: Date | string
    password: string
    role: $Enums.Role
    treinos?: TreinoCreateNestedManyWithoutUserInput
    treinosInstrutor?: TreinoCreateNestedManyWithoutInstrutorInput
  }

  export type UserUncheckedCreateWithoutTreinoCompartilhamentoInput = {
    id?: string
    email: string
    name: string
    age: number
    createdAt?: Date | string
    password: string
    role: $Enums.Role
    treinos?: TreinoUncheckedCreateNestedManyWithoutUserInput
    treinosInstrutor?: TreinoUncheckedCreateNestedManyWithoutInstrutorInput
  }

  export type UserCreateOrConnectWithoutTreinoCompartilhamentoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTreinoCompartilhamentoInput, UserUncheckedCreateWithoutTreinoCompartilhamentoInput>
  }

  export type TreinoUpsertWithoutAlunosCompartilhadosInput = {
    update: XOR<TreinoUpdateWithoutAlunosCompartilhadosInput, TreinoUncheckedUpdateWithoutAlunosCompartilhadosInput>
    create: XOR<TreinoCreateWithoutAlunosCompartilhadosInput, TreinoUncheckedCreateWithoutAlunosCompartilhadosInput>
    where?: TreinoWhereInput
  }

  export type TreinoUpdateToOneWithWhereWithoutAlunosCompartilhadosInput = {
    where?: TreinoWhereInput
    data: XOR<TreinoUpdateWithoutAlunosCompartilhadosInput, TreinoUncheckedUpdateWithoutAlunosCompartilhadosInput>
  }

  export type TreinoUpdateWithoutAlunosCompartilhadosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
    instrutor?: UserUpdateOneWithoutTreinosInstrutorNestedInput
    User?: UserUpdateOneWithoutTreinosNestedInput
  }

  export type TreinoUncheckedUpdateWithoutAlunosCompartilhadosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrutorId?: NullableStringFieldUpdateOperationsInput | string | null
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutTreinoCompartilhamentoInput = {
    update: XOR<UserUpdateWithoutTreinoCompartilhamentoInput, UserUncheckedUpdateWithoutTreinoCompartilhamentoInput>
    create: XOR<UserCreateWithoutTreinoCompartilhamentoInput, UserUncheckedCreateWithoutTreinoCompartilhamentoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTreinoCompartilhamentoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTreinoCompartilhamentoInput, UserUncheckedUpdateWithoutTreinoCompartilhamentoInput>
  }

  export type UserUpdateWithoutTreinoCompartilhamentoInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    treinos?: TreinoUpdateManyWithoutUserNestedInput
    treinosInstrutor?: TreinoUpdateManyWithoutInstrutorNestedInput
  }

  export type UserUncheckedUpdateWithoutTreinoCompartilhamentoInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    treinos?: TreinoUncheckedUpdateManyWithoutUserNestedInput
    treinosInstrutor?: TreinoUncheckedUpdateManyWithoutInstrutorNestedInput
  }

  export type TreinoCreateManyUserInput = {
    id?: string
    nome: string
    descricao: string
    exercicios: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    instrutorId?: string | null
    criadorId: string
    tipoCriador?: $Enums.TipoCriador
    visibilidade?: $Enums.Visibilidade
  }

  export type TreinoCompartilhamentoCreateManyAlunoInput = {
    id?: string
    treinoId: string
  }

  export type TreinoCreateManyInstrutorInput = {
    id?: string
    nome: string
    descricao: string
    exercicios: InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    criadorId: string
    tipoCriador?: $Enums.TipoCriador
    visibilidade?: $Enums.Visibilidade
    userId?: string | null
  }

  export type TreinoUpdateWithoutUserInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
    instrutor?: UserUpdateOneWithoutTreinosInstrutorNestedInput
    alunosCompartilhados?: TreinoCompartilhamentoUpdateManyWithoutTreinoNestedInput
  }

  export type TreinoUncheckedUpdateWithoutUserInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrutorId?: NullableStringFieldUpdateOperationsInput | string | null
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
    alunosCompartilhados?: TreinoCompartilhamentoUncheckedUpdateManyWithoutTreinoNestedInput
  }

  export type TreinoUncheckedUpdateManyWithoutUserInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrutorId?: NullableStringFieldUpdateOperationsInput | string | null
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
  }

  export type TreinoCompartilhamentoUpdateWithoutAlunoInput = {
    treino?: TreinoUpdateOneRequiredWithoutAlunosCompartilhadosNestedInput
  }

  export type TreinoCompartilhamentoUncheckedUpdateWithoutAlunoInput = {
    treinoId?: StringFieldUpdateOperationsInput | string
  }

  export type TreinoCompartilhamentoUncheckedUpdateManyWithoutAlunoInput = {
    treinoId?: StringFieldUpdateOperationsInput | string
  }

  export type TreinoUpdateWithoutInstrutorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
    alunosCompartilhados?: TreinoCompartilhamentoUpdateManyWithoutTreinoNestedInput
    User?: UserUpdateOneWithoutTreinosNestedInput
  }

  export type TreinoUncheckedUpdateWithoutInstrutorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    alunosCompartilhados?: TreinoCompartilhamentoUncheckedUpdateManyWithoutTreinoNestedInput
  }

  export type TreinoUncheckedUpdateManyWithoutInstrutorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    exercicios?: InputJsonValue | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadorId?: StringFieldUpdateOperationsInput | string
    tipoCriador?: EnumTipoCriadorFieldUpdateOperationsInput | $Enums.TipoCriador
    visibilidade?: EnumVisibilidadeFieldUpdateOperationsInput | $Enums.Visibilidade
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TreinoCompartilhamentoCreateManyTreinoInput = {
    id?: string
    alunoId: string
  }

  export type TreinoCompartilhamentoUpdateWithoutTreinoInput = {
    aluno?: UserUpdateOneRequiredWithoutTreinoCompartilhamentoNestedInput
  }

  export type TreinoCompartilhamentoUncheckedUpdateWithoutTreinoInput = {
    alunoId?: StringFieldUpdateOperationsInput | string
  }

  export type TreinoCompartilhamentoUncheckedUpdateManyWithoutTreinoInput = {
    alunoId?: StringFieldUpdateOperationsInput | string
  }



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