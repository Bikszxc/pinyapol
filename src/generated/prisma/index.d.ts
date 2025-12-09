
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model GuildConfig
 * 
 */
export type GuildConfig = $Result.DefaultSelection<Prisma.$GuildConfigPayload>
/**
 * Model ModWatchlist
 * 
 */
export type ModWatchlist = $Result.DefaultSelection<Prisma.$ModWatchlistPayload>
/**
 * Model TicketSettings
 * 
 */
export type TicketSettings = $Result.DefaultSelection<Prisma.$TicketSettingsPayload>
/**
 * Model TicketCategory
 * 
 */
export type TicketCategory = $Result.DefaultSelection<Prisma.$TicketCategoryPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model CustomEmbed
 * 
 */
export type CustomEmbed = $Result.DefaultSelection<Prisma.$CustomEmbedPayload>
/**
 * Model CustomCommand
 * 
 */
export type CustomCommand = $Result.DefaultSelection<Prisma.$CustomCommandPayload>
/**
 * Model KnowledgeSnippet
 * 
 */
export type KnowledgeSnippet = $Result.DefaultSelection<Prisma.$KnowledgeSnippetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TicketStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  ARCHIVED: 'ARCHIVED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]

}

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more GuildConfigs
 * const guildConfigs = await prisma.guildConfig.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more GuildConfigs
   * const guildConfigs = await prisma.guildConfig.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.guildConfig`: Exposes CRUD operations for the **GuildConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GuildConfigs
    * const guildConfigs = await prisma.guildConfig.findMany()
    * ```
    */
  get guildConfig(): Prisma.GuildConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modWatchlist`: Exposes CRUD operations for the **ModWatchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModWatchlists
    * const modWatchlists = await prisma.modWatchlist.findMany()
    * ```
    */
  get modWatchlist(): Prisma.ModWatchlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketSettings`: Exposes CRUD operations for the **TicketSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketSettings
    * const ticketSettings = await prisma.ticketSettings.findMany()
    * ```
    */
  get ticketSettings(): Prisma.TicketSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketCategory`: Exposes CRUD operations for the **TicketCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketCategories
    * const ticketCategories = await prisma.ticketCategory.findMany()
    * ```
    */
  get ticketCategory(): Prisma.TicketCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customEmbed`: Exposes CRUD operations for the **CustomEmbed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomEmbeds
    * const customEmbeds = await prisma.customEmbed.findMany()
    * ```
    */
  get customEmbed(): Prisma.CustomEmbedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customCommand`: Exposes CRUD operations for the **CustomCommand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomCommands
    * const customCommands = await prisma.customCommand.findMany()
    * ```
    */
  get customCommand(): Prisma.CustomCommandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.knowledgeSnippet`: Exposes CRUD operations for the **KnowledgeSnippet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KnowledgeSnippets
    * const knowledgeSnippets = await prisma.knowledgeSnippet.findMany()
    * ```
    */
  get knowledgeSnippet(): Prisma.KnowledgeSnippetDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    GuildConfig: 'GuildConfig',
    ModWatchlist: 'ModWatchlist',
    TicketSettings: 'TicketSettings',
    TicketCategory: 'TicketCategory',
    Ticket: 'Ticket',
    CustomEmbed: 'CustomEmbed',
    CustomCommand: 'CustomCommand',
    KnowledgeSnippet: 'KnowledgeSnippet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "guildConfig" | "modWatchlist" | "ticketSettings" | "ticketCategory" | "ticket" | "customEmbed" | "customCommand" | "knowledgeSnippet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GuildConfig: {
        payload: Prisma.$GuildConfigPayload<ExtArgs>
        fields: Prisma.GuildConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuildConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuildConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          findFirst: {
            args: Prisma.GuildConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuildConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          findMany: {
            args: Prisma.GuildConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          create: {
            args: Prisma.GuildConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          createMany: {
            args: Prisma.GuildConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuildConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          delete: {
            args: Prisma.GuildConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          update: {
            args: Prisma.GuildConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          deleteMany: {
            args: Prisma.GuildConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuildConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuildConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>[]
          }
          upsert: {
            args: Prisma.GuildConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuildConfigPayload>
          }
          aggregate: {
            args: Prisma.GuildConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuildConfig>
          }
          groupBy: {
            args: Prisma.GuildConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuildConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuildConfigCountArgs<ExtArgs>
            result: $Utils.Optional<GuildConfigCountAggregateOutputType> | number
          }
        }
      }
      ModWatchlist: {
        payload: Prisma.$ModWatchlistPayload<ExtArgs>
        fields: Prisma.ModWatchlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModWatchlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModWatchlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModWatchlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModWatchlistPayload>
          }
          findFirst: {
            args: Prisma.ModWatchlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModWatchlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModWatchlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModWatchlistPayload>
          }
          findMany: {
            args: Prisma.ModWatchlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModWatchlistPayload>[]
          }
          create: {
            args: Prisma.ModWatchlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModWatchlistPayload>
          }
          createMany: {
            args: Prisma.ModWatchlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModWatchlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModWatchlistPayload>[]
          }
          delete: {
            args: Prisma.ModWatchlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModWatchlistPayload>
          }
          update: {
            args: Prisma.ModWatchlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModWatchlistPayload>
          }
          deleteMany: {
            args: Prisma.ModWatchlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModWatchlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModWatchlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModWatchlistPayload>[]
          }
          upsert: {
            args: Prisma.ModWatchlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModWatchlistPayload>
          }
          aggregate: {
            args: Prisma.ModWatchlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModWatchlist>
          }
          groupBy: {
            args: Prisma.ModWatchlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModWatchlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModWatchlistCountArgs<ExtArgs>
            result: $Utils.Optional<ModWatchlistCountAggregateOutputType> | number
          }
        }
      }
      TicketSettings: {
        payload: Prisma.$TicketSettingsPayload<ExtArgs>
        fields: Prisma.TicketSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSettingsPayload>
          }
          findFirst: {
            args: Prisma.TicketSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSettingsPayload>
          }
          findMany: {
            args: Prisma.TicketSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSettingsPayload>[]
          }
          create: {
            args: Prisma.TicketSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSettingsPayload>
          }
          createMany: {
            args: Prisma.TicketSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSettingsPayload>[]
          }
          delete: {
            args: Prisma.TicketSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSettingsPayload>
          }
          update: {
            args: Prisma.TicketSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSettingsPayload>
          }
          deleteMany: {
            args: Prisma.TicketSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSettingsPayload>[]
          }
          upsert: {
            args: Prisma.TicketSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketSettingsPayload>
          }
          aggregate: {
            args: Prisma.TicketSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketSettings>
          }
          groupBy: {
            args: Prisma.TicketSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketSettingsCountAggregateOutputType> | number
          }
        }
      }
      TicketCategory: {
        payload: Prisma.$TicketCategoryPayload<ExtArgs>
        fields: Prisma.TicketCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          findFirst: {
            args: Prisma.TicketCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          findMany: {
            args: Prisma.TicketCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>[]
          }
          create: {
            args: Prisma.TicketCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          createMany: {
            args: Prisma.TicketCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>[]
          }
          delete: {
            args: Prisma.TicketCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          update: {
            args: Prisma.TicketCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          deleteMany: {
            args: Prisma.TicketCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>[]
          }
          upsert: {
            args: Prisma.TicketCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          aggregate: {
            args: Prisma.TicketCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketCategory>
          }
          groupBy: {
            args: Prisma.TicketCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCategoryCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      CustomEmbed: {
        payload: Prisma.$CustomEmbedPayload<ExtArgs>
        fields: Prisma.CustomEmbedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomEmbedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomEmbedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomEmbedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomEmbedPayload>
          }
          findFirst: {
            args: Prisma.CustomEmbedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomEmbedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomEmbedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomEmbedPayload>
          }
          findMany: {
            args: Prisma.CustomEmbedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomEmbedPayload>[]
          }
          create: {
            args: Prisma.CustomEmbedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomEmbedPayload>
          }
          createMany: {
            args: Prisma.CustomEmbedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomEmbedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomEmbedPayload>[]
          }
          delete: {
            args: Prisma.CustomEmbedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomEmbedPayload>
          }
          update: {
            args: Prisma.CustomEmbedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomEmbedPayload>
          }
          deleteMany: {
            args: Prisma.CustomEmbedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomEmbedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomEmbedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomEmbedPayload>[]
          }
          upsert: {
            args: Prisma.CustomEmbedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomEmbedPayload>
          }
          aggregate: {
            args: Prisma.CustomEmbedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomEmbed>
          }
          groupBy: {
            args: Prisma.CustomEmbedGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomEmbedGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomEmbedCountArgs<ExtArgs>
            result: $Utils.Optional<CustomEmbedCountAggregateOutputType> | number
          }
        }
      }
      CustomCommand: {
        payload: Prisma.$CustomCommandPayload<ExtArgs>
        fields: Prisma.CustomCommandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomCommandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomCommandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          findFirst: {
            args: Prisma.CustomCommandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomCommandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          findMany: {
            args: Prisma.CustomCommandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>[]
          }
          create: {
            args: Prisma.CustomCommandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          createMany: {
            args: Prisma.CustomCommandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomCommandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>[]
          }
          delete: {
            args: Prisma.CustomCommandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          update: {
            args: Prisma.CustomCommandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          deleteMany: {
            args: Prisma.CustomCommandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomCommandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomCommandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>[]
          }
          upsert: {
            args: Prisma.CustomCommandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomCommandPayload>
          }
          aggregate: {
            args: Prisma.CustomCommandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomCommand>
          }
          groupBy: {
            args: Prisma.CustomCommandGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomCommandGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomCommandCountArgs<ExtArgs>
            result: $Utils.Optional<CustomCommandCountAggregateOutputType> | number
          }
        }
      }
      KnowledgeSnippet: {
        payload: Prisma.$KnowledgeSnippetPayload<ExtArgs>
        fields: Prisma.KnowledgeSnippetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgeSnippetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeSnippetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgeSnippetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeSnippetPayload>
          }
          findFirst: {
            args: Prisma.KnowledgeSnippetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeSnippetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgeSnippetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeSnippetPayload>
          }
          findMany: {
            args: Prisma.KnowledgeSnippetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeSnippetPayload>[]
          }
          create: {
            args: Prisma.KnowledgeSnippetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeSnippetPayload>
          }
          createMany: {
            args: Prisma.KnowledgeSnippetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KnowledgeSnippetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeSnippetPayload>[]
          }
          delete: {
            args: Prisma.KnowledgeSnippetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeSnippetPayload>
          }
          update: {
            args: Prisma.KnowledgeSnippetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeSnippetPayload>
          }
          deleteMany: {
            args: Prisma.KnowledgeSnippetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgeSnippetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KnowledgeSnippetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeSnippetPayload>[]
          }
          upsert: {
            args: Prisma.KnowledgeSnippetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KnowledgeSnippetPayload>
          }
          aggregate: {
            args: Prisma.KnowledgeSnippetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKnowledgeSnippet>
          }
          groupBy: {
            args: Prisma.KnowledgeSnippetGroupByArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeSnippetGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgeSnippetCountArgs<ExtArgs>
            result: $Utils.Optional<KnowledgeSnippetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    guildConfig?: GuildConfigOmit
    modWatchlist?: ModWatchlistOmit
    ticketSettings?: TicketSettingsOmit
    ticketCategory?: TicketCategoryOmit
    ticket?: TicketOmit
    customEmbed?: CustomEmbedOmit
    customCommand?: CustomCommandOmit
    knowledgeSnippet?: KnowledgeSnippetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type GuildConfigCountOutputType
   */

  export type GuildConfigCountOutputType = {
    ModWatchlist: number
    CustomEmbed: number
    CustomCommand: number
    KnowledgeSnippet: number
  }

  export type GuildConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ModWatchlist?: boolean | GuildConfigCountOutputTypeCountModWatchlistArgs
    CustomEmbed?: boolean | GuildConfigCountOutputTypeCountCustomEmbedArgs
    CustomCommand?: boolean | GuildConfigCountOutputTypeCountCustomCommandArgs
    KnowledgeSnippet?: boolean | GuildConfigCountOutputTypeCountKnowledgeSnippetArgs
  }

  // Custom InputTypes
  /**
   * GuildConfigCountOutputType without action
   */
  export type GuildConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfigCountOutputType
     */
    select?: GuildConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuildConfigCountOutputType without action
   */
  export type GuildConfigCountOutputTypeCountModWatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModWatchlistWhereInput
  }

  /**
   * GuildConfigCountOutputType without action
   */
  export type GuildConfigCountOutputTypeCountCustomEmbedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomEmbedWhereInput
  }

  /**
   * GuildConfigCountOutputType without action
   */
  export type GuildConfigCountOutputTypeCountCustomCommandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomCommandWhereInput
  }

  /**
   * GuildConfigCountOutputType without action
   */
  export type GuildConfigCountOutputTypeCountKnowledgeSnippetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeSnippetWhereInput
  }


  /**
   * Count Type TicketSettingsCountOutputType
   */

  export type TicketSettingsCountOutputType = {
    categories: number
    tickets: number
  }

  export type TicketSettingsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TicketSettingsCountOutputTypeCountCategoriesArgs
    tickets?: boolean | TicketSettingsCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * TicketSettingsCountOutputType without action
   */
  export type TicketSettingsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettingsCountOutputType
     */
    select?: TicketSettingsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketSettingsCountOutputType without action
   */
  export type TicketSettingsCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCategoryWhereInput
  }

  /**
   * TicketSettingsCountOutputType without action
   */
  export type TicketSettingsCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type CustomEmbedCountOutputType
   */

  export type CustomEmbedCountOutputType = {
    commands: number
  }

  export type CustomEmbedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commands?: boolean | CustomEmbedCountOutputTypeCountCommandsArgs
  }

  // Custom InputTypes
  /**
   * CustomEmbedCountOutputType without action
   */
  export type CustomEmbedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbedCountOutputType
     */
    select?: CustomEmbedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomEmbedCountOutputType without action
   */
  export type CustomEmbedCountOutputTypeCountCommandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomCommandWhereInput
  }


  /**
   * Models
   */

  /**
   * Model GuildConfig
   */

  export type AggregateGuildConfig = {
    _count: GuildConfigCountAggregateOutputType | null
    _avg: GuildConfigAvgAggregateOutputType | null
    _sum: GuildConfigSumAggregateOutputType | null
    _min: GuildConfigMinAggregateOutputType | null
    _max: GuildConfigMaxAggregateOutputType | null
  }

  export type GuildConfigAvgAggregateOutputType = {
    statusInterval: number | null
    serverPort: number | null
  }

  export type GuildConfigSumAggregateOutputType = {
    statusInterval: number | null
    serverPort: number | null
  }

  export type GuildConfigMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    statusChannelId: string | null
    updateChannelId: string | null
    logChannelId: string | null
    statusInterval: number | null
    onlineMessage: string | null
    offlineMessage: string | null
    serverIp: string | null
    serverPort: number | null
  }

  export type GuildConfigMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    statusChannelId: string | null
    updateChannelId: string | null
    logChannelId: string | null
    statusInterval: number | null
    onlineMessage: string | null
    offlineMessage: string | null
    serverIp: string | null
    serverPort: number | null
  }

  export type GuildConfigCountAggregateOutputType = {
    id: number
    guildId: number
    statusChannelId: number
    updateChannelId: number
    logChannelId: number
    statusInterval: number
    onlineMessage: number
    offlineMessage: number
    serverIp: number
    serverPort: number
    adminRoleIds: number
    updateMentionIds: number
    _all: number
  }


  export type GuildConfigAvgAggregateInputType = {
    statusInterval?: true
    serverPort?: true
  }

  export type GuildConfigSumAggregateInputType = {
    statusInterval?: true
    serverPort?: true
  }

  export type GuildConfigMinAggregateInputType = {
    id?: true
    guildId?: true
    statusChannelId?: true
    updateChannelId?: true
    logChannelId?: true
    statusInterval?: true
    onlineMessage?: true
    offlineMessage?: true
    serverIp?: true
    serverPort?: true
  }

  export type GuildConfigMaxAggregateInputType = {
    id?: true
    guildId?: true
    statusChannelId?: true
    updateChannelId?: true
    logChannelId?: true
    statusInterval?: true
    onlineMessage?: true
    offlineMessage?: true
    serverIp?: true
    serverPort?: true
  }

  export type GuildConfigCountAggregateInputType = {
    id?: true
    guildId?: true
    statusChannelId?: true
    updateChannelId?: true
    logChannelId?: true
    statusInterval?: true
    onlineMessage?: true
    offlineMessage?: true
    serverIp?: true
    serverPort?: true
    adminRoleIds?: true
    updateMentionIds?: true
    _all?: true
  }

  export type GuildConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildConfig to aggregate.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GuildConfigs
    **/
    _count?: true | GuildConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuildConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuildConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuildConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuildConfigMaxAggregateInputType
  }

  export type GetGuildConfigAggregateType<T extends GuildConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateGuildConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuildConfig[P]>
      : GetScalarType<T[P], AggregateGuildConfig[P]>
  }




  export type GuildConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuildConfigWhereInput
    orderBy?: GuildConfigOrderByWithAggregationInput | GuildConfigOrderByWithAggregationInput[]
    by: GuildConfigScalarFieldEnum[] | GuildConfigScalarFieldEnum
    having?: GuildConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuildConfigCountAggregateInputType | true
    _avg?: GuildConfigAvgAggregateInputType
    _sum?: GuildConfigSumAggregateInputType
    _min?: GuildConfigMinAggregateInputType
    _max?: GuildConfigMaxAggregateInputType
  }

  export type GuildConfigGroupByOutputType = {
    id: string
    guildId: string
    statusChannelId: string | null
    updateChannelId: string | null
    logChannelId: string | null
    statusInterval: number
    onlineMessage: string
    offlineMessage: string
    serverIp: string | null
    serverPort: number | null
    adminRoleIds: string[]
    updateMentionIds: string[]
    _count: GuildConfigCountAggregateOutputType | null
    _avg: GuildConfigAvgAggregateOutputType | null
    _sum: GuildConfigSumAggregateOutputType | null
    _min: GuildConfigMinAggregateOutputType | null
    _max: GuildConfigMaxAggregateOutputType | null
  }

  type GetGuildConfigGroupByPayload<T extends GuildConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuildConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuildConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuildConfigGroupByOutputType[P]>
            : GetScalarType<T[P], GuildConfigGroupByOutputType[P]>
        }
      >
    >


  export type GuildConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    statusChannelId?: boolean
    updateChannelId?: boolean
    logChannelId?: boolean
    statusInterval?: boolean
    onlineMessage?: boolean
    offlineMessage?: boolean
    serverIp?: boolean
    serverPort?: boolean
    adminRoleIds?: boolean
    updateMentionIds?: boolean
    ModWatchlist?: boolean | GuildConfig$ModWatchlistArgs<ExtArgs>
    TicketSettings?: boolean | GuildConfig$TicketSettingsArgs<ExtArgs>
    CustomEmbed?: boolean | GuildConfig$CustomEmbedArgs<ExtArgs>
    CustomCommand?: boolean | GuildConfig$CustomCommandArgs<ExtArgs>
    KnowledgeSnippet?: boolean | GuildConfig$KnowledgeSnippetArgs<ExtArgs>
    _count?: boolean | GuildConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    statusChannelId?: boolean
    updateChannelId?: boolean
    logChannelId?: boolean
    statusInterval?: boolean
    onlineMessage?: boolean
    offlineMessage?: boolean
    serverIp?: boolean
    serverPort?: boolean
    adminRoleIds?: boolean
    updateMentionIds?: boolean
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    statusChannelId?: boolean
    updateChannelId?: boolean
    logChannelId?: boolean
    statusInterval?: boolean
    onlineMessage?: boolean
    offlineMessage?: boolean
    serverIp?: boolean
    serverPort?: boolean
    adminRoleIds?: boolean
    updateMentionIds?: boolean
  }, ExtArgs["result"]["guildConfig"]>

  export type GuildConfigSelectScalar = {
    id?: boolean
    guildId?: boolean
    statusChannelId?: boolean
    updateChannelId?: boolean
    logChannelId?: boolean
    statusInterval?: boolean
    onlineMessage?: boolean
    offlineMessage?: boolean
    serverIp?: boolean
    serverPort?: boolean
    adminRoleIds?: boolean
    updateMentionIds?: boolean
  }

  export type GuildConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "statusChannelId" | "updateChannelId" | "logChannelId" | "statusInterval" | "onlineMessage" | "offlineMessage" | "serverIp" | "serverPort" | "adminRoleIds" | "updateMentionIds", ExtArgs["result"]["guildConfig"]>
  export type GuildConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ModWatchlist?: boolean | GuildConfig$ModWatchlistArgs<ExtArgs>
    TicketSettings?: boolean | GuildConfig$TicketSettingsArgs<ExtArgs>
    CustomEmbed?: boolean | GuildConfig$CustomEmbedArgs<ExtArgs>
    CustomCommand?: boolean | GuildConfig$CustomCommandArgs<ExtArgs>
    KnowledgeSnippet?: boolean | GuildConfig$KnowledgeSnippetArgs<ExtArgs>
    _count?: boolean | GuildConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuildConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GuildConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GuildConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GuildConfig"
    objects: {
      ModWatchlist: Prisma.$ModWatchlistPayload<ExtArgs>[]
      TicketSettings: Prisma.$TicketSettingsPayload<ExtArgs> | null
      CustomEmbed: Prisma.$CustomEmbedPayload<ExtArgs>[]
      CustomCommand: Prisma.$CustomCommandPayload<ExtArgs>[]
      KnowledgeSnippet: Prisma.$KnowledgeSnippetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      statusChannelId: string | null
      updateChannelId: string | null
      logChannelId: string | null
      statusInterval: number
      onlineMessage: string
      offlineMessage: string
      serverIp: string | null
      serverPort: number | null
      adminRoleIds: string[]
      updateMentionIds: string[]
    }, ExtArgs["result"]["guildConfig"]>
    composites: {}
  }

  type GuildConfigGetPayload<S extends boolean | null | undefined | GuildConfigDefaultArgs> = $Result.GetResult<Prisma.$GuildConfigPayload, S>

  type GuildConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuildConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuildConfigCountAggregateInputType | true
    }

  export interface GuildConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GuildConfig'], meta: { name: 'GuildConfig' } }
    /**
     * Find zero or one GuildConfig that matches the filter.
     * @param {GuildConfigFindUniqueArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuildConfigFindUniqueArgs>(args: SelectSubset<T, GuildConfigFindUniqueArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GuildConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuildConfigFindUniqueOrThrowArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuildConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, GuildConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindFirstArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuildConfigFindFirstArgs>(args?: SelectSubset<T, GuildConfigFindFirstArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GuildConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindFirstOrThrowArgs} args - Arguments to find a GuildConfig
     * @example
     * // Get one GuildConfig
     * const guildConfig = await prisma.guildConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuildConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, GuildConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GuildConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GuildConfigs
     * const guildConfigs = await prisma.guildConfig.findMany()
     * 
     * // Get first 10 GuildConfigs
     * const guildConfigs = await prisma.guildConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guildConfigWithIdOnly = await prisma.guildConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuildConfigFindManyArgs>(args?: SelectSubset<T, GuildConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GuildConfig.
     * @param {GuildConfigCreateArgs} args - Arguments to create a GuildConfig.
     * @example
     * // Create one GuildConfig
     * const GuildConfig = await prisma.guildConfig.create({
     *   data: {
     *     // ... data to create a GuildConfig
     *   }
     * })
     * 
     */
    create<T extends GuildConfigCreateArgs>(args: SelectSubset<T, GuildConfigCreateArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GuildConfigs.
     * @param {GuildConfigCreateManyArgs} args - Arguments to create many GuildConfigs.
     * @example
     * // Create many GuildConfigs
     * const guildConfig = await prisma.guildConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuildConfigCreateManyArgs>(args?: SelectSubset<T, GuildConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GuildConfigs and returns the data saved in the database.
     * @param {GuildConfigCreateManyAndReturnArgs} args - Arguments to create many GuildConfigs.
     * @example
     * // Create many GuildConfigs
     * const guildConfig = await prisma.guildConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GuildConfigs and only return the `id`
     * const guildConfigWithIdOnly = await prisma.guildConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuildConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, GuildConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GuildConfig.
     * @param {GuildConfigDeleteArgs} args - Arguments to delete one GuildConfig.
     * @example
     * // Delete one GuildConfig
     * const GuildConfig = await prisma.guildConfig.delete({
     *   where: {
     *     // ... filter to delete one GuildConfig
     *   }
     * })
     * 
     */
    delete<T extends GuildConfigDeleteArgs>(args: SelectSubset<T, GuildConfigDeleteArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GuildConfig.
     * @param {GuildConfigUpdateArgs} args - Arguments to update one GuildConfig.
     * @example
     * // Update one GuildConfig
     * const guildConfig = await prisma.guildConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuildConfigUpdateArgs>(args: SelectSubset<T, GuildConfigUpdateArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GuildConfigs.
     * @param {GuildConfigDeleteManyArgs} args - Arguments to filter GuildConfigs to delete.
     * @example
     * // Delete a few GuildConfigs
     * const { count } = await prisma.guildConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuildConfigDeleteManyArgs>(args?: SelectSubset<T, GuildConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GuildConfigs
     * const guildConfig = await prisma.guildConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuildConfigUpdateManyArgs>(args: SelectSubset<T, GuildConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GuildConfigs and returns the data updated in the database.
     * @param {GuildConfigUpdateManyAndReturnArgs} args - Arguments to update many GuildConfigs.
     * @example
     * // Update many GuildConfigs
     * const guildConfig = await prisma.guildConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GuildConfigs and only return the `id`
     * const guildConfigWithIdOnly = await prisma.guildConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuildConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, GuildConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GuildConfig.
     * @param {GuildConfigUpsertArgs} args - Arguments to update or create a GuildConfig.
     * @example
     * // Update or create a GuildConfig
     * const guildConfig = await prisma.guildConfig.upsert({
     *   create: {
     *     // ... data to create a GuildConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GuildConfig we want to update
     *   }
     * })
     */
    upsert<T extends GuildConfigUpsertArgs>(args: SelectSubset<T, GuildConfigUpsertArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GuildConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigCountArgs} args - Arguments to filter GuildConfigs to count.
     * @example
     * // Count the number of GuildConfigs
     * const count = await prisma.guildConfig.count({
     *   where: {
     *     // ... the filter for the GuildConfigs we want to count
     *   }
     * })
    **/
    count<T extends GuildConfigCountArgs>(
      args?: Subset<T, GuildConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuildConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GuildConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuildConfigAggregateArgs>(args: Subset<T, GuildConfigAggregateArgs>): Prisma.PrismaPromise<GetGuildConfigAggregateType<T>>

    /**
     * Group by GuildConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuildConfigGroupByArgs} args - Group by arguments.
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
      T extends GuildConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuildConfigGroupByArgs['orderBy'] }
        : { orderBy?: GuildConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuildConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuildConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GuildConfig model
   */
  readonly fields: GuildConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GuildConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuildConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ModWatchlist<T extends GuildConfig$ModWatchlistArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfig$ModWatchlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    TicketSettings<T extends GuildConfig$TicketSettingsArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfig$TicketSettingsArgs<ExtArgs>>): Prisma__TicketSettingsClient<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    CustomEmbed<T extends GuildConfig$CustomEmbedArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfig$CustomEmbedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CustomCommand<T extends GuildConfig$CustomCommandArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfig$CustomCommandArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    KnowledgeSnippet<T extends GuildConfig$KnowledgeSnippetArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfig$KnowledgeSnippetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GuildConfig model
   */
  interface GuildConfigFieldRefs {
    readonly id: FieldRef<"GuildConfig", 'String'>
    readonly guildId: FieldRef<"GuildConfig", 'String'>
    readonly statusChannelId: FieldRef<"GuildConfig", 'String'>
    readonly updateChannelId: FieldRef<"GuildConfig", 'String'>
    readonly logChannelId: FieldRef<"GuildConfig", 'String'>
    readonly statusInterval: FieldRef<"GuildConfig", 'Int'>
    readonly onlineMessage: FieldRef<"GuildConfig", 'String'>
    readonly offlineMessage: FieldRef<"GuildConfig", 'String'>
    readonly serverIp: FieldRef<"GuildConfig", 'String'>
    readonly serverPort: FieldRef<"GuildConfig", 'Int'>
    readonly adminRoleIds: FieldRef<"GuildConfig", 'String[]'>
    readonly updateMentionIds: FieldRef<"GuildConfig", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * GuildConfig findUnique
   */
  export type GuildConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig findUniqueOrThrow
   */
  export type GuildConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig findFirst
   */
  export type GuildConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildConfigs.
     */
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig findFirstOrThrow
   */
  export type GuildConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter, which GuildConfig to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GuildConfigs.
     */
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig findMany
   */
  export type GuildConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter, which GuildConfigs to fetch.
     */
    where?: GuildConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GuildConfigs to fetch.
     */
    orderBy?: GuildConfigOrderByWithRelationInput | GuildConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GuildConfigs.
     */
    cursor?: GuildConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GuildConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GuildConfigs.
     */
    skip?: number
    distinct?: GuildConfigScalarFieldEnum | GuildConfigScalarFieldEnum[]
  }

  /**
   * GuildConfig create
   */
  export type GuildConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a GuildConfig.
     */
    data: XOR<GuildConfigCreateInput, GuildConfigUncheckedCreateInput>
  }

  /**
   * GuildConfig createMany
   */
  export type GuildConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GuildConfigs.
     */
    data: GuildConfigCreateManyInput | GuildConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildConfig createManyAndReturn
   */
  export type GuildConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data used to create many GuildConfigs.
     */
    data: GuildConfigCreateManyInput | GuildConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GuildConfig update
   */
  export type GuildConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a GuildConfig.
     */
    data: XOR<GuildConfigUpdateInput, GuildConfigUncheckedUpdateInput>
    /**
     * Choose, which GuildConfig to update.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig updateMany
   */
  export type GuildConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GuildConfigs.
     */
    data: XOR<GuildConfigUpdateManyMutationInput, GuildConfigUncheckedUpdateManyInput>
    /**
     * Filter which GuildConfigs to update
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to update.
     */
    limit?: number
  }

  /**
   * GuildConfig updateManyAndReturn
   */
  export type GuildConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * The data used to update GuildConfigs.
     */
    data: XOR<GuildConfigUpdateManyMutationInput, GuildConfigUncheckedUpdateManyInput>
    /**
     * Filter which GuildConfigs to update
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to update.
     */
    limit?: number
  }

  /**
   * GuildConfig upsert
   */
  export type GuildConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the GuildConfig to update in case it exists.
     */
    where: GuildConfigWhereUniqueInput
    /**
     * In case the GuildConfig found by the `where` argument doesn't exist, create a new GuildConfig with this data.
     */
    create: XOR<GuildConfigCreateInput, GuildConfigUncheckedCreateInput>
    /**
     * In case the GuildConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuildConfigUpdateInput, GuildConfigUncheckedUpdateInput>
  }

  /**
   * GuildConfig delete
   */
  export type GuildConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
    /**
     * Filter which GuildConfig to delete.
     */
    where: GuildConfigWhereUniqueInput
  }

  /**
   * GuildConfig deleteMany
   */
  export type GuildConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GuildConfigs to delete
     */
    where?: GuildConfigWhereInput
    /**
     * Limit how many GuildConfigs to delete.
     */
    limit?: number
  }

  /**
   * GuildConfig.ModWatchlist
   */
  export type GuildConfig$ModWatchlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistInclude<ExtArgs> | null
    where?: ModWatchlistWhereInput
    orderBy?: ModWatchlistOrderByWithRelationInput | ModWatchlistOrderByWithRelationInput[]
    cursor?: ModWatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModWatchlistScalarFieldEnum | ModWatchlistScalarFieldEnum[]
  }

  /**
   * GuildConfig.TicketSettings
   */
  export type GuildConfig$TicketSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsInclude<ExtArgs> | null
    where?: TicketSettingsWhereInput
  }

  /**
   * GuildConfig.CustomEmbed
   */
  export type GuildConfig$CustomEmbedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedInclude<ExtArgs> | null
    where?: CustomEmbedWhereInput
    orderBy?: CustomEmbedOrderByWithRelationInput | CustomEmbedOrderByWithRelationInput[]
    cursor?: CustomEmbedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomEmbedScalarFieldEnum | CustomEmbedScalarFieldEnum[]
  }

  /**
   * GuildConfig.CustomCommand
   */
  export type GuildConfig$CustomCommandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    where?: CustomCommandWhereInput
    orderBy?: CustomCommandOrderByWithRelationInput | CustomCommandOrderByWithRelationInput[]
    cursor?: CustomCommandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomCommandScalarFieldEnum | CustomCommandScalarFieldEnum[]
  }

  /**
   * GuildConfig.KnowledgeSnippet
   */
  export type GuildConfig$KnowledgeSnippetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetInclude<ExtArgs> | null
    where?: KnowledgeSnippetWhereInput
    orderBy?: KnowledgeSnippetOrderByWithRelationInput | KnowledgeSnippetOrderByWithRelationInput[]
    cursor?: KnowledgeSnippetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KnowledgeSnippetScalarFieldEnum | KnowledgeSnippetScalarFieldEnum[]
  }

  /**
   * GuildConfig without action
   */
  export type GuildConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuildConfig
     */
    select?: GuildConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GuildConfig
     */
    omit?: GuildConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuildConfigInclude<ExtArgs> | null
  }


  /**
   * Model ModWatchlist
   */

  export type AggregateModWatchlist = {
    _count: ModWatchlistCountAggregateOutputType | null
    _min: ModWatchlistMinAggregateOutputType | null
    _max: ModWatchlistMaxAggregateOutputType | null
  }

  export type ModWatchlistMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    workshopId: string | null
    title: string | null
    lastUpdated: Date | null
  }

  export type ModWatchlistMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    workshopId: string | null
    title: string | null
    lastUpdated: Date | null
  }

  export type ModWatchlistCountAggregateOutputType = {
    id: number
    guildId: number
    workshopId: number
    title: number
    lastUpdated: number
    _all: number
  }


  export type ModWatchlistMinAggregateInputType = {
    id?: true
    guildId?: true
    workshopId?: true
    title?: true
    lastUpdated?: true
  }

  export type ModWatchlistMaxAggregateInputType = {
    id?: true
    guildId?: true
    workshopId?: true
    title?: true
    lastUpdated?: true
  }

  export type ModWatchlistCountAggregateInputType = {
    id?: true
    guildId?: true
    workshopId?: true
    title?: true
    lastUpdated?: true
    _all?: true
  }

  export type ModWatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModWatchlist to aggregate.
     */
    where?: ModWatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModWatchlists to fetch.
     */
    orderBy?: ModWatchlistOrderByWithRelationInput | ModWatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModWatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModWatchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModWatchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModWatchlists
    **/
    _count?: true | ModWatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModWatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModWatchlistMaxAggregateInputType
  }

  export type GetModWatchlistAggregateType<T extends ModWatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateModWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModWatchlist[P]>
      : GetScalarType<T[P], AggregateModWatchlist[P]>
  }




  export type ModWatchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModWatchlistWhereInput
    orderBy?: ModWatchlistOrderByWithAggregationInput | ModWatchlistOrderByWithAggregationInput[]
    by: ModWatchlistScalarFieldEnum[] | ModWatchlistScalarFieldEnum
    having?: ModWatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModWatchlistCountAggregateInputType | true
    _min?: ModWatchlistMinAggregateInputType
    _max?: ModWatchlistMaxAggregateInputType
  }

  export type ModWatchlistGroupByOutputType = {
    id: string
    guildId: string
    workshopId: string
    title: string | null
    lastUpdated: Date
    _count: ModWatchlistCountAggregateOutputType | null
    _min: ModWatchlistMinAggregateOutputType | null
    _max: ModWatchlistMaxAggregateOutputType | null
  }

  type GetModWatchlistGroupByPayload<T extends ModWatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModWatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModWatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModWatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], ModWatchlistGroupByOutputType[P]>
        }
      >
    >


  export type ModWatchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    workshopId?: boolean
    title?: boolean
    lastUpdated?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modWatchlist"]>

  export type ModWatchlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    workshopId?: boolean
    title?: boolean
    lastUpdated?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modWatchlist"]>

  export type ModWatchlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    workshopId?: boolean
    title?: boolean
    lastUpdated?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modWatchlist"]>

  export type ModWatchlistSelectScalar = {
    id?: boolean
    guildId?: boolean
    workshopId?: boolean
    title?: boolean
    lastUpdated?: boolean
  }

  export type ModWatchlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "workshopId" | "title" | "lastUpdated", ExtArgs["result"]["modWatchlist"]>
  export type ModWatchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }
  export type ModWatchlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }
  export type ModWatchlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }

  export type $ModWatchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModWatchlist"
    objects: {
      guild: Prisma.$GuildConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      workshopId: string
      title: string | null
      lastUpdated: Date
    }, ExtArgs["result"]["modWatchlist"]>
    composites: {}
  }

  type ModWatchlistGetPayload<S extends boolean | null | undefined | ModWatchlistDefaultArgs> = $Result.GetResult<Prisma.$ModWatchlistPayload, S>

  type ModWatchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModWatchlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModWatchlistCountAggregateInputType | true
    }

  export interface ModWatchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModWatchlist'], meta: { name: 'ModWatchlist' } }
    /**
     * Find zero or one ModWatchlist that matches the filter.
     * @param {ModWatchlistFindUniqueArgs} args - Arguments to find a ModWatchlist
     * @example
     * // Get one ModWatchlist
     * const modWatchlist = await prisma.modWatchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModWatchlistFindUniqueArgs>(args: SelectSubset<T, ModWatchlistFindUniqueArgs<ExtArgs>>): Prisma__ModWatchlistClient<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModWatchlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModWatchlistFindUniqueOrThrowArgs} args - Arguments to find a ModWatchlist
     * @example
     * // Get one ModWatchlist
     * const modWatchlist = await prisma.modWatchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModWatchlistFindUniqueOrThrowArgs>(args: SelectSubset<T, ModWatchlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModWatchlistClient<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModWatchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModWatchlistFindFirstArgs} args - Arguments to find a ModWatchlist
     * @example
     * // Get one ModWatchlist
     * const modWatchlist = await prisma.modWatchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModWatchlistFindFirstArgs>(args?: SelectSubset<T, ModWatchlistFindFirstArgs<ExtArgs>>): Prisma__ModWatchlistClient<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModWatchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModWatchlistFindFirstOrThrowArgs} args - Arguments to find a ModWatchlist
     * @example
     * // Get one ModWatchlist
     * const modWatchlist = await prisma.modWatchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModWatchlistFindFirstOrThrowArgs>(args?: SelectSubset<T, ModWatchlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModWatchlistClient<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModWatchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModWatchlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModWatchlists
     * const modWatchlists = await prisma.modWatchlist.findMany()
     * 
     * // Get first 10 ModWatchlists
     * const modWatchlists = await prisma.modWatchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modWatchlistWithIdOnly = await prisma.modWatchlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModWatchlistFindManyArgs>(args?: SelectSubset<T, ModWatchlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModWatchlist.
     * @param {ModWatchlistCreateArgs} args - Arguments to create a ModWatchlist.
     * @example
     * // Create one ModWatchlist
     * const ModWatchlist = await prisma.modWatchlist.create({
     *   data: {
     *     // ... data to create a ModWatchlist
     *   }
     * })
     * 
     */
    create<T extends ModWatchlistCreateArgs>(args: SelectSubset<T, ModWatchlistCreateArgs<ExtArgs>>): Prisma__ModWatchlistClient<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModWatchlists.
     * @param {ModWatchlistCreateManyArgs} args - Arguments to create many ModWatchlists.
     * @example
     * // Create many ModWatchlists
     * const modWatchlist = await prisma.modWatchlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModWatchlistCreateManyArgs>(args?: SelectSubset<T, ModWatchlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModWatchlists and returns the data saved in the database.
     * @param {ModWatchlistCreateManyAndReturnArgs} args - Arguments to create many ModWatchlists.
     * @example
     * // Create many ModWatchlists
     * const modWatchlist = await prisma.modWatchlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModWatchlists and only return the `id`
     * const modWatchlistWithIdOnly = await prisma.modWatchlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModWatchlistCreateManyAndReturnArgs>(args?: SelectSubset<T, ModWatchlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModWatchlist.
     * @param {ModWatchlistDeleteArgs} args - Arguments to delete one ModWatchlist.
     * @example
     * // Delete one ModWatchlist
     * const ModWatchlist = await prisma.modWatchlist.delete({
     *   where: {
     *     // ... filter to delete one ModWatchlist
     *   }
     * })
     * 
     */
    delete<T extends ModWatchlistDeleteArgs>(args: SelectSubset<T, ModWatchlistDeleteArgs<ExtArgs>>): Prisma__ModWatchlistClient<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModWatchlist.
     * @param {ModWatchlistUpdateArgs} args - Arguments to update one ModWatchlist.
     * @example
     * // Update one ModWatchlist
     * const modWatchlist = await prisma.modWatchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModWatchlistUpdateArgs>(args: SelectSubset<T, ModWatchlistUpdateArgs<ExtArgs>>): Prisma__ModWatchlistClient<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModWatchlists.
     * @param {ModWatchlistDeleteManyArgs} args - Arguments to filter ModWatchlists to delete.
     * @example
     * // Delete a few ModWatchlists
     * const { count } = await prisma.modWatchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModWatchlistDeleteManyArgs>(args?: SelectSubset<T, ModWatchlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModWatchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModWatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModWatchlists
     * const modWatchlist = await prisma.modWatchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModWatchlistUpdateManyArgs>(args: SelectSubset<T, ModWatchlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModWatchlists and returns the data updated in the database.
     * @param {ModWatchlistUpdateManyAndReturnArgs} args - Arguments to update many ModWatchlists.
     * @example
     * // Update many ModWatchlists
     * const modWatchlist = await prisma.modWatchlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModWatchlists and only return the `id`
     * const modWatchlistWithIdOnly = await prisma.modWatchlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModWatchlistUpdateManyAndReturnArgs>(args: SelectSubset<T, ModWatchlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModWatchlist.
     * @param {ModWatchlistUpsertArgs} args - Arguments to update or create a ModWatchlist.
     * @example
     * // Update or create a ModWatchlist
     * const modWatchlist = await prisma.modWatchlist.upsert({
     *   create: {
     *     // ... data to create a ModWatchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModWatchlist we want to update
     *   }
     * })
     */
    upsert<T extends ModWatchlistUpsertArgs>(args: SelectSubset<T, ModWatchlistUpsertArgs<ExtArgs>>): Prisma__ModWatchlistClient<$Result.GetResult<Prisma.$ModWatchlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModWatchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModWatchlistCountArgs} args - Arguments to filter ModWatchlists to count.
     * @example
     * // Count the number of ModWatchlists
     * const count = await prisma.modWatchlist.count({
     *   where: {
     *     // ... the filter for the ModWatchlists we want to count
     *   }
     * })
    **/
    count<T extends ModWatchlistCountArgs>(
      args?: Subset<T, ModWatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModWatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModWatchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModWatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModWatchlistAggregateArgs>(args: Subset<T, ModWatchlistAggregateArgs>): Prisma.PrismaPromise<GetModWatchlistAggregateType<T>>

    /**
     * Group by ModWatchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModWatchlistGroupByArgs} args - Group by arguments.
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
      T extends ModWatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModWatchlistGroupByArgs['orderBy'] }
        : { orderBy?: ModWatchlistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModWatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModWatchlist model
   */
  readonly fields: ModWatchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModWatchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModWatchlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfigDefaultArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ModWatchlist model
   */
  interface ModWatchlistFieldRefs {
    readonly id: FieldRef<"ModWatchlist", 'String'>
    readonly guildId: FieldRef<"ModWatchlist", 'String'>
    readonly workshopId: FieldRef<"ModWatchlist", 'String'>
    readonly title: FieldRef<"ModWatchlist", 'String'>
    readonly lastUpdated: FieldRef<"ModWatchlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModWatchlist findUnique
   */
  export type ModWatchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistInclude<ExtArgs> | null
    /**
     * Filter, which ModWatchlist to fetch.
     */
    where: ModWatchlistWhereUniqueInput
  }

  /**
   * ModWatchlist findUniqueOrThrow
   */
  export type ModWatchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistInclude<ExtArgs> | null
    /**
     * Filter, which ModWatchlist to fetch.
     */
    where: ModWatchlistWhereUniqueInput
  }

  /**
   * ModWatchlist findFirst
   */
  export type ModWatchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistInclude<ExtArgs> | null
    /**
     * Filter, which ModWatchlist to fetch.
     */
    where?: ModWatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModWatchlists to fetch.
     */
    orderBy?: ModWatchlistOrderByWithRelationInput | ModWatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModWatchlists.
     */
    cursor?: ModWatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModWatchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModWatchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModWatchlists.
     */
    distinct?: ModWatchlistScalarFieldEnum | ModWatchlistScalarFieldEnum[]
  }

  /**
   * ModWatchlist findFirstOrThrow
   */
  export type ModWatchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistInclude<ExtArgs> | null
    /**
     * Filter, which ModWatchlist to fetch.
     */
    where?: ModWatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModWatchlists to fetch.
     */
    orderBy?: ModWatchlistOrderByWithRelationInput | ModWatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModWatchlists.
     */
    cursor?: ModWatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModWatchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModWatchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModWatchlists.
     */
    distinct?: ModWatchlistScalarFieldEnum | ModWatchlistScalarFieldEnum[]
  }

  /**
   * ModWatchlist findMany
   */
  export type ModWatchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistInclude<ExtArgs> | null
    /**
     * Filter, which ModWatchlists to fetch.
     */
    where?: ModWatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModWatchlists to fetch.
     */
    orderBy?: ModWatchlistOrderByWithRelationInput | ModWatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModWatchlists.
     */
    cursor?: ModWatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModWatchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModWatchlists.
     */
    skip?: number
    distinct?: ModWatchlistScalarFieldEnum | ModWatchlistScalarFieldEnum[]
  }

  /**
   * ModWatchlist create
   */
  export type ModWatchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistInclude<ExtArgs> | null
    /**
     * The data needed to create a ModWatchlist.
     */
    data: XOR<ModWatchlistCreateInput, ModWatchlistUncheckedCreateInput>
  }

  /**
   * ModWatchlist createMany
   */
  export type ModWatchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModWatchlists.
     */
    data: ModWatchlistCreateManyInput | ModWatchlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModWatchlist createManyAndReturn
   */
  export type ModWatchlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * The data used to create many ModWatchlists.
     */
    data: ModWatchlistCreateManyInput | ModWatchlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModWatchlist update
   */
  export type ModWatchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistInclude<ExtArgs> | null
    /**
     * The data needed to update a ModWatchlist.
     */
    data: XOR<ModWatchlistUpdateInput, ModWatchlistUncheckedUpdateInput>
    /**
     * Choose, which ModWatchlist to update.
     */
    where: ModWatchlistWhereUniqueInput
  }

  /**
   * ModWatchlist updateMany
   */
  export type ModWatchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModWatchlists.
     */
    data: XOR<ModWatchlistUpdateManyMutationInput, ModWatchlistUncheckedUpdateManyInput>
    /**
     * Filter which ModWatchlists to update
     */
    where?: ModWatchlistWhereInput
    /**
     * Limit how many ModWatchlists to update.
     */
    limit?: number
  }

  /**
   * ModWatchlist updateManyAndReturn
   */
  export type ModWatchlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * The data used to update ModWatchlists.
     */
    data: XOR<ModWatchlistUpdateManyMutationInput, ModWatchlistUncheckedUpdateManyInput>
    /**
     * Filter which ModWatchlists to update
     */
    where?: ModWatchlistWhereInput
    /**
     * Limit how many ModWatchlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModWatchlist upsert
   */
  export type ModWatchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistInclude<ExtArgs> | null
    /**
     * The filter to search for the ModWatchlist to update in case it exists.
     */
    where: ModWatchlistWhereUniqueInput
    /**
     * In case the ModWatchlist found by the `where` argument doesn't exist, create a new ModWatchlist with this data.
     */
    create: XOR<ModWatchlistCreateInput, ModWatchlistUncheckedCreateInput>
    /**
     * In case the ModWatchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModWatchlistUpdateInput, ModWatchlistUncheckedUpdateInput>
  }

  /**
   * ModWatchlist delete
   */
  export type ModWatchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistInclude<ExtArgs> | null
    /**
     * Filter which ModWatchlist to delete.
     */
    where: ModWatchlistWhereUniqueInput
  }

  /**
   * ModWatchlist deleteMany
   */
  export type ModWatchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModWatchlists to delete
     */
    where?: ModWatchlistWhereInput
    /**
     * Limit how many ModWatchlists to delete.
     */
    limit?: number
  }

  /**
   * ModWatchlist without action
   */
  export type ModWatchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModWatchlist
     */
    select?: ModWatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModWatchlist
     */
    omit?: ModWatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModWatchlistInclude<ExtArgs> | null
  }


  /**
   * Model TicketSettings
   */

  export type AggregateTicketSettings = {
    _count: TicketSettingsCountAggregateOutputType | null
    _min: TicketSettingsMinAggregateOutputType | null
    _max: TicketSettingsMaxAggregateOutputType | null
  }

  export type TicketSettingsMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    ticketPanelMessageId: string | null
    welcomeMessage: string | null
    ticketPanelMessage: string | null
  }

  export type TicketSettingsMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    ticketPanelMessageId: string | null
    welcomeMessage: string | null
    ticketPanelMessage: string | null
  }

  export type TicketSettingsCountAggregateOutputType = {
    id: number
    guildId: number
    ticketPanelMessageId: number
    welcomeMessage: number
    ticketPanelMessage: number
    _all: number
  }


  export type TicketSettingsMinAggregateInputType = {
    id?: true
    guildId?: true
    ticketPanelMessageId?: true
    welcomeMessage?: true
    ticketPanelMessage?: true
  }

  export type TicketSettingsMaxAggregateInputType = {
    id?: true
    guildId?: true
    ticketPanelMessageId?: true
    welcomeMessage?: true
    ticketPanelMessage?: true
  }

  export type TicketSettingsCountAggregateInputType = {
    id?: true
    guildId?: true
    ticketPanelMessageId?: true
    welcomeMessage?: true
    ticketPanelMessage?: true
    _all?: true
  }

  export type TicketSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketSettings to aggregate.
     */
    where?: TicketSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSettings to fetch.
     */
    orderBy?: TicketSettingsOrderByWithRelationInput | TicketSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketSettings
    **/
    _count?: true | TicketSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketSettingsMaxAggregateInputType
  }

  export type GetTicketSettingsAggregateType<T extends TicketSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketSettings[P]>
      : GetScalarType<T[P], AggregateTicketSettings[P]>
  }




  export type TicketSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketSettingsWhereInput
    orderBy?: TicketSettingsOrderByWithAggregationInput | TicketSettingsOrderByWithAggregationInput[]
    by: TicketSettingsScalarFieldEnum[] | TicketSettingsScalarFieldEnum
    having?: TicketSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketSettingsCountAggregateInputType | true
    _min?: TicketSettingsMinAggregateInputType
    _max?: TicketSettingsMaxAggregateInputType
  }

  export type TicketSettingsGroupByOutputType = {
    id: string
    guildId: string
    ticketPanelMessageId: string | null
    welcomeMessage: string
    ticketPanelMessage: string
    _count: TicketSettingsCountAggregateOutputType | null
    _min: TicketSettingsMinAggregateOutputType | null
    _max: TicketSettingsMaxAggregateOutputType | null
  }

  type GetTicketSettingsGroupByPayload<T extends TicketSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketSettingsGroupByOutputType[P]>
        }
      >
    >


  export type TicketSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    ticketPanelMessageId?: boolean
    welcomeMessage?: boolean
    ticketPanelMessage?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
    categories?: boolean | TicketSettings$categoriesArgs<ExtArgs>
    tickets?: boolean | TicketSettings$ticketsArgs<ExtArgs>
    _count?: boolean | TicketSettingsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketSettings"]>

  export type TicketSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    ticketPanelMessageId?: boolean
    welcomeMessage?: boolean
    ticketPanelMessage?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketSettings"]>

  export type TicketSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    ticketPanelMessageId?: boolean
    welcomeMessage?: boolean
    ticketPanelMessage?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketSettings"]>

  export type TicketSettingsSelectScalar = {
    id?: boolean
    guildId?: boolean
    ticketPanelMessageId?: boolean
    welcomeMessage?: boolean
    ticketPanelMessage?: boolean
  }

  export type TicketSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "ticketPanelMessageId" | "welcomeMessage" | "ticketPanelMessage", ExtArgs["result"]["ticketSettings"]>
  export type TicketSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
    categories?: boolean | TicketSettings$categoriesArgs<ExtArgs>
    tickets?: boolean | TicketSettings$ticketsArgs<ExtArgs>
    _count?: boolean | TicketSettingsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }
  export type TicketSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }

  export type $TicketSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketSettings"
    objects: {
      guild: Prisma.$GuildConfigPayload<ExtArgs>
      categories: Prisma.$TicketCategoryPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      ticketPanelMessageId: string | null
      welcomeMessage: string
      ticketPanelMessage: string
    }, ExtArgs["result"]["ticketSettings"]>
    composites: {}
  }

  type TicketSettingsGetPayload<S extends boolean | null | undefined | TicketSettingsDefaultArgs> = $Result.GetResult<Prisma.$TicketSettingsPayload, S>

  type TicketSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketSettingsCountAggregateInputType | true
    }

  export interface TicketSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketSettings'], meta: { name: 'TicketSettings' } }
    /**
     * Find zero or one TicketSettings that matches the filter.
     * @param {TicketSettingsFindUniqueArgs} args - Arguments to find a TicketSettings
     * @example
     * // Get one TicketSettings
     * const ticketSettings = await prisma.ticketSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketSettingsFindUniqueArgs>(args: SelectSubset<T, TicketSettingsFindUniqueArgs<ExtArgs>>): Prisma__TicketSettingsClient<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketSettingsFindUniqueOrThrowArgs} args - Arguments to find a TicketSettings
     * @example
     * // Get one TicketSettings
     * const ticketSettings = await prisma.ticketSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketSettingsClient<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSettingsFindFirstArgs} args - Arguments to find a TicketSettings
     * @example
     * // Get one TicketSettings
     * const ticketSettings = await prisma.ticketSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketSettingsFindFirstArgs>(args?: SelectSubset<T, TicketSettingsFindFirstArgs<ExtArgs>>): Prisma__TicketSettingsClient<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSettingsFindFirstOrThrowArgs} args - Arguments to find a TicketSettings
     * @example
     * // Get one TicketSettings
     * const ticketSettings = await prisma.ticketSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketSettingsClient<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketSettings
     * const ticketSettings = await prisma.ticketSettings.findMany()
     * 
     * // Get first 10 TicketSettings
     * const ticketSettings = await prisma.ticketSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketSettingsWithIdOnly = await prisma.ticketSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketSettingsFindManyArgs>(args?: SelectSubset<T, TicketSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketSettings.
     * @param {TicketSettingsCreateArgs} args - Arguments to create a TicketSettings.
     * @example
     * // Create one TicketSettings
     * const TicketSettings = await prisma.ticketSettings.create({
     *   data: {
     *     // ... data to create a TicketSettings
     *   }
     * })
     * 
     */
    create<T extends TicketSettingsCreateArgs>(args: SelectSubset<T, TicketSettingsCreateArgs<ExtArgs>>): Prisma__TicketSettingsClient<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketSettings.
     * @param {TicketSettingsCreateManyArgs} args - Arguments to create many TicketSettings.
     * @example
     * // Create many TicketSettings
     * const ticketSettings = await prisma.ticketSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketSettingsCreateManyArgs>(args?: SelectSubset<T, TicketSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketSettings and returns the data saved in the database.
     * @param {TicketSettingsCreateManyAndReturnArgs} args - Arguments to create many TicketSettings.
     * @example
     * // Create many TicketSettings
     * const ticketSettings = await prisma.ticketSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketSettings and only return the `id`
     * const ticketSettingsWithIdOnly = await prisma.ticketSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketSettings.
     * @param {TicketSettingsDeleteArgs} args - Arguments to delete one TicketSettings.
     * @example
     * // Delete one TicketSettings
     * const TicketSettings = await prisma.ticketSettings.delete({
     *   where: {
     *     // ... filter to delete one TicketSettings
     *   }
     * })
     * 
     */
    delete<T extends TicketSettingsDeleteArgs>(args: SelectSubset<T, TicketSettingsDeleteArgs<ExtArgs>>): Prisma__TicketSettingsClient<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketSettings.
     * @param {TicketSettingsUpdateArgs} args - Arguments to update one TicketSettings.
     * @example
     * // Update one TicketSettings
     * const ticketSettings = await prisma.ticketSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketSettingsUpdateArgs>(args: SelectSubset<T, TicketSettingsUpdateArgs<ExtArgs>>): Prisma__TicketSettingsClient<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketSettings.
     * @param {TicketSettingsDeleteManyArgs} args - Arguments to filter TicketSettings to delete.
     * @example
     * // Delete a few TicketSettings
     * const { count } = await prisma.ticketSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketSettingsDeleteManyArgs>(args?: SelectSubset<T, TicketSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketSettings
     * const ticketSettings = await prisma.ticketSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketSettingsUpdateManyArgs>(args: SelectSubset<T, TicketSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketSettings and returns the data updated in the database.
     * @param {TicketSettingsUpdateManyAndReturnArgs} args - Arguments to update many TicketSettings.
     * @example
     * // Update many TicketSettings
     * const ticketSettings = await prisma.ticketSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketSettings and only return the `id`
     * const ticketSettingsWithIdOnly = await prisma.ticketSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketSettings.
     * @param {TicketSettingsUpsertArgs} args - Arguments to update or create a TicketSettings.
     * @example
     * // Update or create a TicketSettings
     * const ticketSettings = await prisma.ticketSettings.upsert({
     *   create: {
     *     // ... data to create a TicketSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketSettings we want to update
     *   }
     * })
     */
    upsert<T extends TicketSettingsUpsertArgs>(args: SelectSubset<T, TicketSettingsUpsertArgs<ExtArgs>>): Prisma__TicketSettingsClient<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSettingsCountArgs} args - Arguments to filter TicketSettings to count.
     * @example
     * // Count the number of TicketSettings
     * const count = await prisma.ticketSettings.count({
     *   where: {
     *     // ... the filter for the TicketSettings we want to count
     *   }
     * })
    **/
    count<T extends TicketSettingsCountArgs>(
      args?: Subset<T, TicketSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketSettingsAggregateArgs>(args: Subset<T, TicketSettingsAggregateArgs>): Prisma.PrismaPromise<GetTicketSettingsAggregateType<T>>

    /**
     * Group by TicketSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketSettingsGroupByArgs} args - Group by arguments.
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
      T extends TicketSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketSettingsGroupByArgs['orderBy'] }
        : { orderBy?: TicketSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketSettings model
   */
  readonly fields: TicketSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfigDefaultArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends TicketSettings$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, TicketSettings$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends TicketSettings$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, TicketSettings$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TicketSettings model
   */
  interface TicketSettingsFieldRefs {
    readonly id: FieldRef<"TicketSettings", 'String'>
    readonly guildId: FieldRef<"TicketSettings", 'String'>
    readonly ticketPanelMessageId: FieldRef<"TicketSettings", 'String'>
    readonly welcomeMessage: FieldRef<"TicketSettings", 'String'>
    readonly ticketPanelMessage: FieldRef<"TicketSettings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TicketSettings findUnique
   */
  export type TicketSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsInclude<ExtArgs> | null
    /**
     * Filter, which TicketSettings to fetch.
     */
    where: TicketSettingsWhereUniqueInput
  }

  /**
   * TicketSettings findUniqueOrThrow
   */
  export type TicketSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsInclude<ExtArgs> | null
    /**
     * Filter, which TicketSettings to fetch.
     */
    where: TicketSettingsWhereUniqueInput
  }

  /**
   * TicketSettings findFirst
   */
  export type TicketSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsInclude<ExtArgs> | null
    /**
     * Filter, which TicketSettings to fetch.
     */
    where?: TicketSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSettings to fetch.
     */
    orderBy?: TicketSettingsOrderByWithRelationInput | TicketSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketSettings.
     */
    cursor?: TicketSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketSettings.
     */
    distinct?: TicketSettingsScalarFieldEnum | TicketSettingsScalarFieldEnum[]
  }

  /**
   * TicketSettings findFirstOrThrow
   */
  export type TicketSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsInclude<ExtArgs> | null
    /**
     * Filter, which TicketSettings to fetch.
     */
    where?: TicketSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSettings to fetch.
     */
    orderBy?: TicketSettingsOrderByWithRelationInput | TicketSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketSettings.
     */
    cursor?: TicketSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketSettings.
     */
    distinct?: TicketSettingsScalarFieldEnum | TicketSettingsScalarFieldEnum[]
  }

  /**
   * TicketSettings findMany
   */
  export type TicketSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsInclude<ExtArgs> | null
    /**
     * Filter, which TicketSettings to fetch.
     */
    where?: TicketSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketSettings to fetch.
     */
    orderBy?: TicketSettingsOrderByWithRelationInput | TicketSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketSettings.
     */
    cursor?: TicketSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketSettings.
     */
    skip?: number
    distinct?: TicketSettingsScalarFieldEnum | TicketSettingsScalarFieldEnum[]
  }

  /**
   * TicketSettings create
   */
  export type TicketSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketSettings.
     */
    data: XOR<TicketSettingsCreateInput, TicketSettingsUncheckedCreateInput>
  }

  /**
   * TicketSettings createMany
   */
  export type TicketSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketSettings.
     */
    data: TicketSettingsCreateManyInput | TicketSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketSettings createManyAndReturn
   */
  export type TicketSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many TicketSettings.
     */
    data: TicketSettingsCreateManyInput | TicketSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketSettings update
   */
  export type TicketSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketSettings.
     */
    data: XOR<TicketSettingsUpdateInput, TicketSettingsUncheckedUpdateInput>
    /**
     * Choose, which TicketSettings to update.
     */
    where: TicketSettingsWhereUniqueInput
  }

  /**
   * TicketSettings updateMany
   */
  export type TicketSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketSettings.
     */
    data: XOR<TicketSettingsUpdateManyMutationInput, TicketSettingsUncheckedUpdateManyInput>
    /**
     * Filter which TicketSettings to update
     */
    where?: TicketSettingsWhereInput
    /**
     * Limit how many TicketSettings to update.
     */
    limit?: number
  }

  /**
   * TicketSettings updateManyAndReturn
   */
  export type TicketSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * The data used to update TicketSettings.
     */
    data: XOR<TicketSettingsUpdateManyMutationInput, TicketSettingsUncheckedUpdateManyInput>
    /**
     * Filter which TicketSettings to update
     */
    where?: TicketSettingsWhereInput
    /**
     * Limit how many TicketSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketSettings upsert
   */
  export type TicketSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketSettings to update in case it exists.
     */
    where: TicketSettingsWhereUniqueInput
    /**
     * In case the TicketSettings found by the `where` argument doesn't exist, create a new TicketSettings with this data.
     */
    create: XOR<TicketSettingsCreateInput, TicketSettingsUncheckedCreateInput>
    /**
     * In case the TicketSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketSettingsUpdateInput, TicketSettingsUncheckedUpdateInput>
  }

  /**
   * TicketSettings delete
   */
  export type TicketSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsInclude<ExtArgs> | null
    /**
     * Filter which TicketSettings to delete.
     */
    where: TicketSettingsWhereUniqueInput
  }

  /**
   * TicketSettings deleteMany
   */
  export type TicketSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketSettings to delete
     */
    where?: TicketSettingsWhereInput
    /**
     * Limit how many TicketSettings to delete.
     */
    limit?: number
  }

  /**
   * TicketSettings.categories
   */
  export type TicketSettings$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    where?: TicketCategoryWhereInput
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    cursor?: TicketCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketSettings.tickets
   */
  export type TicketSettings$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * TicketSettings without action
   */
  export type TicketSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketSettings
     */
    select?: TicketSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketSettings
     */
    omit?: TicketSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketSettingsInclude<ExtArgs> | null
  }


  /**
   * Model TicketCategory
   */

  export type AggregateTicketCategory = {
    _count: TicketCategoryCountAggregateOutputType | null
    _min: TicketCategoryMinAggregateOutputType | null
    _max: TicketCategoryMaxAggregateOutputType | null
  }

  export type TicketCategoryMinAggregateOutputType = {
    id: string | null
    ticketSettingsId: string | null
    name: string | null
    emoji: string | null
    roleId: string | null
  }

  export type TicketCategoryMaxAggregateOutputType = {
    id: string | null
    ticketSettingsId: string | null
    name: string | null
    emoji: string | null
    roleId: string | null
  }

  export type TicketCategoryCountAggregateOutputType = {
    id: number
    ticketSettingsId: number
    name: number
    emoji: number
    roleId: number
    _all: number
  }


  export type TicketCategoryMinAggregateInputType = {
    id?: true
    ticketSettingsId?: true
    name?: true
    emoji?: true
    roleId?: true
  }

  export type TicketCategoryMaxAggregateInputType = {
    id?: true
    ticketSettingsId?: true
    name?: true
    emoji?: true
    roleId?: true
  }

  export type TicketCategoryCountAggregateInputType = {
    id?: true
    ticketSettingsId?: true
    name?: true
    emoji?: true
    roleId?: true
    _all?: true
  }

  export type TicketCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketCategory to aggregate.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketCategories
    **/
    _count?: true | TicketCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketCategoryMaxAggregateInputType
  }

  export type GetTicketCategoryAggregateType<T extends TicketCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketCategory[P]>
      : GetScalarType<T[P], AggregateTicketCategory[P]>
  }




  export type TicketCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCategoryWhereInput
    orderBy?: TicketCategoryOrderByWithAggregationInput | TicketCategoryOrderByWithAggregationInput[]
    by: TicketCategoryScalarFieldEnum[] | TicketCategoryScalarFieldEnum
    having?: TicketCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCategoryCountAggregateInputType | true
    _min?: TicketCategoryMinAggregateInputType
    _max?: TicketCategoryMaxAggregateInputType
  }

  export type TicketCategoryGroupByOutputType = {
    id: string
    ticketSettingsId: string
    name: string
    emoji: string | null
    roleId: string | null
    _count: TicketCategoryCountAggregateOutputType | null
    _min: TicketCategoryMinAggregateOutputType | null
    _max: TicketCategoryMaxAggregateOutputType | null
  }

  type GetTicketCategoryGroupByPayload<T extends TicketCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TicketCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TicketCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketSettingsId?: boolean
    name?: boolean
    emoji?: boolean
    roleId?: boolean
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketCategory"]>

  export type TicketCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketSettingsId?: boolean
    name?: boolean
    emoji?: boolean
    roleId?: boolean
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketCategory"]>

  export type TicketCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketSettingsId?: boolean
    name?: boolean
    emoji?: boolean
    roleId?: boolean
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketCategory"]>

  export type TicketCategorySelectScalar = {
    id?: boolean
    ticketSettingsId?: boolean
    name?: boolean
    emoji?: boolean
    roleId?: boolean
  }

  export type TicketCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketSettingsId" | "name" | "emoji" | "roleId", ExtArgs["result"]["ticketCategory"]>
  export type TicketCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }
  export type TicketCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }
  export type TicketCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }

  export type $TicketCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketCategory"
    objects: {
      ticketSettings: Prisma.$TicketSettingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketSettingsId: string
      name: string
      emoji: string | null
      roleId: string | null
    }, ExtArgs["result"]["ticketCategory"]>
    composites: {}
  }

  type TicketCategoryGetPayload<S extends boolean | null | undefined | TicketCategoryDefaultArgs> = $Result.GetResult<Prisma.$TicketCategoryPayload, S>

  type TicketCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCategoryCountAggregateInputType | true
    }

  export interface TicketCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketCategory'], meta: { name: 'TicketCategory' } }
    /**
     * Find zero or one TicketCategory that matches the filter.
     * @param {TicketCategoryFindUniqueArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketCategoryFindUniqueArgs>(args: SelectSubset<T, TicketCategoryFindUniqueArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketCategoryFindUniqueOrThrowArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindFirstArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketCategoryFindFirstArgs>(args?: SelectSubset<T, TicketCategoryFindFirstArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindFirstOrThrowArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketCategories
     * const ticketCategories = await prisma.ticketCategory.findMany()
     * 
     * // Get first 10 TicketCategories
     * const ticketCategories = await prisma.ticketCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketCategoryWithIdOnly = await prisma.ticketCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketCategoryFindManyArgs>(args?: SelectSubset<T, TicketCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketCategory.
     * @param {TicketCategoryCreateArgs} args - Arguments to create a TicketCategory.
     * @example
     * // Create one TicketCategory
     * const TicketCategory = await prisma.ticketCategory.create({
     *   data: {
     *     // ... data to create a TicketCategory
     *   }
     * })
     * 
     */
    create<T extends TicketCategoryCreateArgs>(args: SelectSubset<T, TicketCategoryCreateArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketCategories.
     * @param {TicketCategoryCreateManyArgs} args - Arguments to create many TicketCategories.
     * @example
     * // Create many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCategoryCreateManyArgs>(args?: SelectSubset<T, TicketCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketCategories and returns the data saved in the database.
     * @param {TicketCategoryCreateManyAndReturnArgs} args - Arguments to create many TicketCategories.
     * @example
     * // Create many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketCategories and only return the `id`
     * const ticketCategoryWithIdOnly = await prisma.ticketCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketCategory.
     * @param {TicketCategoryDeleteArgs} args - Arguments to delete one TicketCategory.
     * @example
     * // Delete one TicketCategory
     * const TicketCategory = await prisma.ticketCategory.delete({
     *   where: {
     *     // ... filter to delete one TicketCategory
     *   }
     * })
     * 
     */
    delete<T extends TicketCategoryDeleteArgs>(args: SelectSubset<T, TicketCategoryDeleteArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketCategory.
     * @param {TicketCategoryUpdateArgs} args - Arguments to update one TicketCategory.
     * @example
     * // Update one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketCategoryUpdateArgs>(args: SelectSubset<T, TicketCategoryUpdateArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketCategories.
     * @param {TicketCategoryDeleteManyArgs} args - Arguments to filter TicketCategories to delete.
     * @example
     * // Delete a few TicketCategories
     * const { count } = await prisma.ticketCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketCategoryDeleteManyArgs>(args?: SelectSubset<T, TicketCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketCategoryUpdateManyArgs>(args: SelectSubset<T, TicketCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketCategories and returns the data updated in the database.
     * @param {TicketCategoryUpdateManyAndReturnArgs} args - Arguments to update many TicketCategories.
     * @example
     * // Update many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketCategories and only return the `id`
     * const ticketCategoryWithIdOnly = await prisma.ticketCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketCategory.
     * @param {TicketCategoryUpsertArgs} args - Arguments to update or create a TicketCategory.
     * @example
     * // Update or create a TicketCategory
     * const ticketCategory = await prisma.ticketCategory.upsert({
     *   create: {
     *     // ... data to create a TicketCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketCategory we want to update
     *   }
     * })
     */
    upsert<T extends TicketCategoryUpsertArgs>(args: SelectSubset<T, TicketCategoryUpsertArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryCountArgs} args - Arguments to filter TicketCategories to count.
     * @example
     * // Count the number of TicketCategories
     * const count = await prisma.ticketCategory.count({
     *   where: {
     *     // ... the filter for the TicketCategories we want to count
     *   }
     * })
    **/
    count<T extends TicketCategoryCountArgs>(
      args?: Subset<T, TicketCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketCategoryAggregateArgs>(args: Subset<T, TicketCategoryAggregateArgs>): Prisma.PrismaPromise<GetTicketCategoryAggregateType<T>>

    /**
     * Group by TicketCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryGroupByArgs} args - Group by arguments.
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
      T extends TicketCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TicketCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketCategory model
   */
  readonly fields: TicketCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticketSettings<T extends TicketSettingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketSettingsDefaultArgs<ExtArgs>>): Prisma__TicketSettingsClient<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TicketCategory model
   */
  interface TicketCategoryFieldRefs {
    readonly id: FieldRef<"TicketCategory", 'String'>
    readonly ticketSettingsId: FieldRef<"TicketCategory", 'String'>
    readonly name: FieldRef<"TicketCategory", 'String'>
    readonly emoji: FieldRef<"TicketCategory", 'String'>
    readonly roleId: FieldRef<"TicketCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TicketCategory findUnique
   */
  export type TicketCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory findUniqueOrThrow
   */
  export type TicketCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory findFirst
   */
  export type TicketCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketCategories.
     */
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory findFirstOrThrow
   */
  export type TicketCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketCategories.
     */
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory findMany
   */
  export type TicketCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategories to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory create
   */
  export type TicketCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketCategory.
     */
    data: XOR<TicketCategoryCreateInput, TicketCategoryUncheckedCreateInput>
  }

  /**
   * TicketCategory createMany
   */
  export type TicketCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketCategories.
     */
    data: TicketCategoryCreateManyInput | TicketCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketCategory createManyAndReturn
   */
  export type TicketCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many TicketCategories.
     */
    data: TicketCategoryCreateManyInput | TicketCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketCategory update
   */
  export type TicketCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketCategory.
     */
    data: XOR<TicketCategoryUpdateInput, TicketCategoryUncheckedUpdateInput>
    /**
     * Choose, which TicketCategory to update.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory updateMany
   */
  export type TicketCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketCategories.
     */
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketCategories to update
     */
    where?: TicketCategoryWhereInput
    /**
     * Limit how many TicketCategories to update.
     */
    limit?: number
  }

  /**
   * TicketCategory updateManyAndReturn
   */
  export type TicketCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * The data used to update TicketCategories.
     */
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketCategories to update
     */
    where?: TicketCategoryWhereInput
    /**
     * Limit how many TicketCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketCategory upsert
   */
  export type TicketCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketCategory to update in case it exists.
     */
    where: TicketCategoryWhereUniqueInput
    /**
     * In case the TicketCategory found by the `where` argument doesn't exist, create a new TicketCategory with this data.
     */
    create: XOR<TicketCategoryCreateInput, TicketCategoryUncheckedCreateInput>
    /**
     * In case the TicketCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketCategoryUpdateInput, TicketCategoryUncheckedUpdateInput>
  }

  /**
   * TicketCategory delete
   */
  export type TicketCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter which TicketCategory to delete.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory deleteMany
   */
  export type TicketCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketCategories to delete
     */
    where?: TicketCategoryWhereInput
    /**
     * Limit how many TicketCategories to delete.
     */
    limit?: number
  }

  /**
   * TicketCategory without action
   */
  export type TicketCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    ticketSettingsId: string | null
    userId: string | null
    channelId: string | null
    status: $Enums.TicketStatus | null
    createdAt: Date | null
    closedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    ticketSettingsId: string | null
    userId: string | null
    channelId: string | null
    status: $Enums.TicketStatus | null
    createdAt: Date | null
    closedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    ticketSettingsId: number
    userId: number
    channelId: number
    status: number
    createdAt: number
    closedAt: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    ticketSettingsId?: true
    userId?: true
    channelId?: true
    status?: true
    createdAt?: true
    closedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    ticketSettingsId?: true
    userId?: true
    channelId?: true
    status?: true
    createdAt?: true
    closedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    ticketSettingsId?: true
    userId?: true
    channelId?: true
    status?: true
    createdAt?: true
    closedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    ticketSettingsId: string
    userId: string
    channelId: string
    status: $Enums.TicketStatus
    createdAt: Date
    closedAt: Date | null
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketSettingsId?: boolean
    userId?: boolean
    channelId?: boolean
    status?: boolean
    createdAt?: boolean
    closedAt?: boolean
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketSettingsId?: boolean
    userId?: boolean
    channelId?: boolean
    status?: boolean
    createdAt?: boolean
    closedAt?: boolean
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketSettingsId?: boolean
    userId?: boolean
    channelId?: boolean
    status?: boolean
    createdAt?: boolean
    closedAt?: boolean
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    ticketSettingsId?: boolean
    userId?: boolean
    channelId?: boolean
    status?: boolean
    createdAt?: boolean
    closedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketSettingsId" | "userId" | "channelId" | "status" | "createdAt" | "closedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketSettings?: boolean | TicketSettingsDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      ticketSettings: Prisma.$TicketSettingsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketSettingsId: string
      userId: string
      channelId: string
      status: $Enums.TicketStatus
      createdAt: Date
      closedAt: Date | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticketSettings<T extends TicketSettingsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketSettingsDefaultArgs<ExtArgs>>): Prisma__TicketSettingsClient<$Result.GetResult<Prisma.$TicketSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly ticketSettingsId: FieldRef<"Ticket", 'String'>
    readonly userId: FieldRef<"Ticket", 'String'>
    readonly channelId: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly closedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model CustomEmbed
   */

  export type AggregateCustomEmbed = {
    _count: CustomEmbedCountAggregateOutputType | null
    _min: CustomEmbedMinAggregateOutputType | null
    _max: CustomEmbedMaxAggregateOutputType | null
  }

  export type CustomEmbedMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomEmbedMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomEmbedCountAggregateOutputType = {
    id: number
    guildId: number
    name: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomEmbedMinAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomEmbedMaxAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomEmbedCountAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomEmbedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomEmbed to aggregate.
     */
    where?: CustomEmbedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomEmbeds to fetch.
     */
    orderBy?: CustomEmbedOrderByWithRelationInput | CustomEmbedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomEmbedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomEmbeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomEmbeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomEmbeds
    **/
    _count?: true | CustomEmbedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomEmbedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomEmbedMaxAggregateInputType
  }

  export type GetCustomEmbedAggregateType<T extends CustomEmbedAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomEmbed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomEmbed[P]>
      : GetScalarType<T[P], AggregateCustomEmbed[P]>
  }




  export type CustomEmbedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomEmbedWhereInput
    orderBy?: CustomEmbedOrderByWithAggregationInput | CustomEmbedOrderByWithAggregationInput[]
    by: CustomEmbedScalarFieldEnum[] | CustomEmbedScalarFieldEnum
    having?: CustomEmbedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomEmbedCountAggregateInputType | true
    _min?: CustomEmbedMinAggregateInputType
    _max?: CustomEmbedMaxAggregateInputType
  }

  export type CustomEmbedGroupByOutputType = {
    id: string
    guildId: string
    name: string
    data: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: CustomEmbedCountAggregateOutputType | null
    _min: CustomEmbedMinAggregateOutputType | null
    _max: CustomEmbedMaxAggregateOutputType | null
  }

  type GetCustomEmbedGroupByPayload<T extends CustomEmbedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomEmbedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomEmbedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomEmbedGroupByOutputType[P]>
            : GetScalarType<T[P], CustomEmbedGroupByOutputType[P]>
        }
      >
    >


  export type CustomEmbedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
    commands?: boolean | CustomEmbed$commandsArgs<ExtArgs>
    _count?: boolean | CustomEmbedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customEmbed"]>

  export type CustomEmbedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customEmbed"]>

  export type CustomEmbedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customEmbed"]>

  export type CustomEmbedSelectScalar = {
    id?: boolean
    guildId?: boolean
    name?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomEmbedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "name" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["customEmbed"]>
  export type CustomEmbedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
    commands?: boolean | CustomEmbed$commandsArgs<ExtArgs>
    _count?: boolean | CustomEmbedCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomEmbedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }
  export type CustomEmbedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }

  export type $CustomEmbedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomEmbed"
    objects: {
      guild: Prisma.$GuildConfigPayload<ExtArgs>
      commands: Prisma.$CustomCommandPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      name: string
      data: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customEmbed"]>
    composites: {}
  }

  type CustomEmbedGetPayload<S extends boolean | null | undefined | CustomEmbedDefaultArgs> = $Result.GetResult<Prisma.$CustomEmbedPayload, S>

  type CustomEmbedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomEmbedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomEmbedCountAggregateInputType | true
    }

  export interface CustomEmbedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomEmbed'], meta: { name: 'CustomEmbed' } }
    /**
     * Find zero or one CustomEmbed that matches the filter.
     * @param {CustomEmbedFindUniqueArgs} args - Arguments to find a CustomEmbed
     * @example
     * // Get one CustomEmbed
     * const customEmbed = await prisma.customEmbed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomEmbedFindUniqueArgs>(args: SelectSubset<T, CustomEmbedFindUniqueArgs<ExtArgs>>): Prisma__CustomEmbedClient<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomEmbed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomEmbedFindUniqueOrThrowArgs} args - Arguments to find a CustomEmbed
     * @example
     * // Get one CustomEmbed
     * const customEmbed = await prisma.customEmbed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomEmbedFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomEmbedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomEmbedClient<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomEmbed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomEmbedFindFirstArgs} args - Arguments to find a CustomEmbed
     * @example
     * // Get one CustomEmbed
     * const customEmbed = await prisma.customEmbed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomEmbedFindFirstArgs>(args?: SelectSubset<T, CustomEmbedFindFirstArgs<ExtArgs>>): Prisma__CustomEmbedClient<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomEmbed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomEmbedFindFirstOrThrowArgs} args - Arguments to find a CustomEmbed
     * @example
     * // Get one CustomEmbed
     * const customEmbed = await prisma.customEmbed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomEmbedFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomEmbedFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomEmbedClient<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomEmbeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomEmbedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomEmbeds
     * const customEmbeds = await prisma.customEmbed.findMany()
     * 
     * // Get first 10 CustomEmbeds
     * const customEmbeds = await prisma.customEmbed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customEmbedWithIdOnly = await prisma.customEmbed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomEmbedFindManyArgs>(args?: SelectSubset<T, CustomEmbedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomEmbed.
     * @param {CustomEmbedCreateArgs} args - Arguments to create a CustomEmbed.
     * @example
     * // Create one CustomEmbed
     * const CustomEmbed = await prisma.customEmbed.create({
     *   data: {
     *     // ... data to create a CustomEmbed
     *   }
     * })
     * 
     */
    create<T extends CustomEmbedCreateArgs>(args: SelectSubset<T, CustomEmbedCreateArgs<ExtArgs>>): Prisma__CustomEmbedClient<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomEmbeds.
     * @param {CustomEmbedCreateManyArgs} args - Arguments to create many CustomEmbeds.
     * @example
     * // Create many CustomEmbeds
     * const customEmbed = await prisma.customEmbed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomEmbedCreateManyArgs>(args?: SelectSubset<T, CustomEmbedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomEmbeds and returns the data saved in the database.
     * @param {CustomEmbedCreateManyAndReturnArgs} args - Arguments to create many CustomEmbeds.
     * @example
     * // Create many CustomEmbeds
     * const customEmbed = await prisma.customEmbed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomEmbeds and only return the `id`
     * const customEmbedWithIdOnly = await prisma.customEmbed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomEmbedCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomEmbedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomEmbed.
     * @param {CustomEmbedDeleteArgs} args - Arguments to delete one CustomEmbed.
     * @example
     * // Delete one CustomEmbed
     * const CustomEmbed = await prisma.customEmbed.delete({
     *   where: {
     *     // ... filter to delete one CustomEmbed
     *   }
     * })
     * 
     */
    delete<T extends CustomEmbedDeleteArgs>(args: SelectSubset<T, CustomEmbedDeleteArgs<ExtArgs>>): Prisma__CustomEmbedClient<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomEmbed.
     * @param {CustomEmbedUpdateArgs} args - Arguments to update one CustomEmbed.
     * @example
     * // Update one CustomEmbed
     * const customEmbed = await prisma.customEmbed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomEmbedUpdateArgs>(args: SelectSubset<T, CustomEmbedUpdateArgs<ExtArgs>>): Prisma__CustomEmbedClient<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomEmbeds.
     * @param {CustomEmbedDeleteManyArgs} args - Arguments to filter CustomEmbeds to delete.
     * @example
     * // Delete a few CustomEmbeds
     * const { count } = await prisma.customEmbed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomEmbedDeleteManyArgs>(args?: SelectSubset<T, CustomEmbedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomEmbeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomEmbedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomEmbeds
     * const customEmbed = await prisma.customEmbed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomEmbedUpdateManyArgs>(args: SelectSubset<T, CustomEmbedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomEmbeds and returns the data updated in the database.
     * @param {CustomEmbedUpdateManyAndReturnArgs} args - Arguments to update many CustomEmbeds.
     * @example
     * // Update many CustomEmbeds
     * const customEmbed = await prisma.customEmbed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomEmbeds and only return the `id`
     * const customEmbedWithIdOnly = await prisma.customEmbed.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomEmbedUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomEmbedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomEmbed.
     * @param {CustomEmbedUpsertArgs} args - Arguments to update or create a CustomEmbed.
     * @example
     * // Update or create a CustomEmbed
     * const customEmbed = await prisma.customEmbed.upsert({
     *   create: {
     *     // ... data to create a CustomEmbed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomEmbed we want to update
     *   }
     * })
     */
    upsert<T extends CustomEmbedUpsertArgs>(args: SelectSubset<T, CustomEmbedUpsertArgs<ExtArgs>>): Prisma__CustomEmbedClient<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomEmbeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomEmbedCountArgs} args - Arguments to filter CustomEmbeds to count.
     * @example
     * // Count the number of CustomEmbeds
     * const count = await prisma.customEmbed.count({
     *   where: {
     *     // ... the filter for the CustomEmbeds we want to count
     *   }
     * })
    **/
    count<T extends CustomEmbedCountArgs>(
      args?: Subset<T, CustomEmbedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomEmbedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomEmbed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomEmbedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomEmbedAggregateArgs>(args: Subset<T, CustomEmbedAggregateArgs>): Prisma.PrismaPromise<GetCustomEmbedAggregateType<T>>

    /**
     * Group by CustomEmbed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomEmbedGroupByArgs} args - Group by arguments.
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
      T extends CustomEmbedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomEmbedGroupByArgs['orderBy'] }
        : { orderBy?: CustomEmbedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomEmbedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomEmbedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomEmbed model
   */
  readonly fields: CustomEmbedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomEmbed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomEmbedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfigDefaultArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    commands<T extends CustomEmbed$commandsArgs<ExtArgs> = {}>(args?: Subset<T, CustomEmbed$commandsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CustomEmbed model
   */
  interface CustomEmbedFieldRefs {
    readonly id: FieldRef<"CustomEmbed", 'String'>
    readonly guildId: FieldRef<"CustomEmbed", 'String'>
    readonly name: FieldRef<"CustomEmbed", 'String'>
    readonly data: FieldRef<"CustomEmbed", 'Json'>
    readonly createdAt: FieldRef<"CustomEmbed", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomEmbed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomEmbed findUnique
   */
  export type CustomEmbedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedInclude<ExtArgs> | null
    /**
     * Filter, which CustomEmbed to fetch.
     */
    where: CustomEmbedWhereUniqueInput
  }

  /**
   * CustomEmbed findUniqueOrThrow
   */
  export type CustomEmbedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedInclude<ExtArgs> | null
    /**
     * Filter, which CustomEmbed to fetch.
     */
    where: CustomEmbedWhereUniqueInput
  }

  /**
   * CustomEmbed findFirst
   */
  export type CustomEmbedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedInclude<ExtArgs> | null
    /**
     * Filter, which CustomEmbed to fetch.
     */
    where?: CustomEmbedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomEmbeds to fetch.
     */
    orderBy?: CustomEmbedOrderByWithRelationInput | CustomEmbedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomEmbeds.
     */
    cursor?: CustomEmbedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomEmbeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomEmbeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomEmbeds.
     */
    distinct?: CustomEmbedScalarFieldEnum | CustomEmbedScalarFieldEnum[]
  }

  /**
   * CustomEmbed findFirstOrThrow
   */
  export type CustomEmbedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedInclude<ExtArgs> | null
    /**
     * Filter, which CustomEmbed to fetch.
     */
    where?: CustomEmbedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomEmbeds to fetch.
     */
    orderBy?: CustomEmbedOrderByWithRelationInput | CustomEmbedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomEmbeds.
     */
    cursor?: CustomEmbedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomEmbeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomEmbeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomEmbeds.
     */
    distinct?: CustomEmbedScalarFieldEnum | CustomEmbedScalarFieldEnum[]
  }

  /**
   * CustomEmbed findMany
   */
  export type CustomEmbedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedInclude<ExtArgs> | null
    /**
     * Filter, which CustomEmbeds to fetch.
     */
    where?: CustomEmbedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomEmbeds to fetch.
     */
    orderBy?: CustomEmbedOrderByWithRelationInput | CustomEmbedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomEmbeds.
     */
    cursor?: CustomEmbedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomEmbeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomEmbeds.
     */
    skip?: number
    distinct?: CustomEmbedScalarFieldEnum | CustomEmbedScalarFieldEnum[]
  }

  /**
   * CustomEmbed create
   */
  export type CustomEmbedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomEmbed.
     */
    data: XOR<CustomEmbedCreateInput, CustomEmbedUncheckedCreateInput>
  }

  /**
   * CustomEmbed createMany
   */
  export type CustomEmbedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomEmbeds.
     */
    data: CustomEmbedCreateManyInput | CustomEmbedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomEmbed createManyAndReturn
   */
  export type CustomEmbedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * The data used to create many CustomEmbeds.
     */
    data: CustomEmbedCreateManyInput | CustomEmbedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomEmbed update
   */
  export type CustomEmbedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomEmbed.
     */
    data: XOR<CustomEmbedUpdateInput, CustomEmbedUncheckedUpdateInput>
    /**
     * Choose, which CustomEmbed to update.
     */
    where: CustomEmbedWhereUniqueInput
  }

  /**
   * CustomEmbed updateMany
   */
  export type CustomEmbedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomEmbeds.
     */
    data: XOR<CustomEmbedUpdateManyMutationInput, CustomEmbedUncheckedUpdateManyInput>
    /**
     * Filter which CustomEmbeds to update
     */
    where?: CustomEmbedWhereInput
    /**
     * Limit how many CustomEmbeds to update.
     */
    limit?: number
  }

  /**
   * CustomEmbed updateManyAndReturn
   */
  export type CustomEmbedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * The data used to update CustomEmbeds.
     */
    data: XOR<CustomEmbedUpdateManyMutationInput, CustomEmbedUncheckedUpdateManyInput>
    /**
     * Filter which CustomEmbeds to update
     */
    where?: CustomEmbedWhereInput
    /**
     * Limit how many CustomEmbeds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomEmbed upsert
   */
  export type CustomEmbedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomEmbed to update in case it exists.
     */
    where: CustomEmbedWhereUniqueInput
    /**
     * In case the CustomEmbed found by the `where` argument doesn't exist, create a new CustomEmbed with this data.
     */
    create: XOR<CustomEmbedCreateInput, CustomEmbedUncheckedCreateInput>
    /**
     * In case the CustomEmbed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomEmbedUpdateInput, CustomEmbedUncheckedUpdateInput>
  }

  /**
   * CustomEmbed delete
   */
  export type CustomEmbedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedInclude<ExtArgs> | null
    /**
     * Filter which CustomEmbed to delete.
     */
    where: CustomEmbedWhereUniqueInput
  }

  /**
   * CustomEmbed deleteMany
   */
  export type CustomEmbedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomEmbeds to delete
     */
    where?: CustomEmbedWhereInput
    /**
     * Limit how many CustomEmbeds to delete.
     */
    limit?: number
  }

  /**
   * CustomEmbed.commands
   */
  export type CustomEmbed$commandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    where?: CustomCommandWhereInput
    orderBy?: CustomCommandOrderByWithRelationInput | CustomCommandOrderByWithRelationInput[]
    cursor?: CustomCommandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomCommandScalarFieldEnum | CustomCommandScalarFieldEnum[]
  }

  /**
   * CustomEmbed without action
   */
  export type CustomEmbedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomEmbed
     */
    select?: CustomEmbedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomEmbed
     */
    omit?: CustomEmbedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomEmbedInclude<ExtArgs> | null
  }


  /**
   * Model CustomCommand
   */

  export type AggregateCustomCommand = {
    _count: CustomCommandCountAggregateOutputType | null
    _min: CustomCommandMinAggregateOutputType | null
    _max: CustomCommandMaxAggregateOutputType | null
  }

  export type CustomCommandMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    name: string | null
    description: string | null
    embedId: string | null
  }

  export type CustomCommandMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    name: string | null
    description: string | null
    embedId: string | null
  }

  export type CustomCommandCountAggregateOutputType = {
    id: number
    guildId: number
    name: number
    description: number
    embedId: number
    _all: number
  }


  export type CustomCommandMinAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    description?: true
    embedId?: true
  }

  export type CustomCommandMaxAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    description?: true
    embedId?: true
  }

  export type CustomCommandCountAggregateInputType = {
    id?: true
    guildId?: true
    name?: true
    description?: true
    embedId?: true
    _all?: true
  }

  export type CustomCommandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomCommand to aggregate.
     */
    where?: CustomCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCommands to fetch.
     */
    orderBy?: CustomCommandOrderByWithRelationInput | CustomCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCommands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomCommands
    **/
    _count?: true | CustomCommandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomCommandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomCommandMaxAggregateInputType
  }

  export type GetCustomCommandAggregateType<T extends CustomCommandAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomCommand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomCommand[P]>
      : GetScalarType<T[P], AggregateCustomCommand[P]>
  }




  export type CustomCommandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomCommandWhereInput
    orderBy?: CustomCommandOrderByWithAggregationInput | CustomCommandOrderByWithAggregationInput[]
    by: CustomCommandScalarFieldEnum[] | CustomCommandScalarFieldEnum
    having?: CustomCommandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomCommandCountAggregateInputType | true
    _min?: CustomCommandMinAggregateInputType
    _max?: CustomCommandMaxAggregateInputType
  }

  export type CustomCommandGroupByOutputType = {
    id: string
    guildId: string
    name: string
    description: string
    embedId: string
    _count: CustomCommandCountAggregateOutputType | null
    _min: CustomCommandMinAggregateOutputType | null
    _max: CustomCommandMaxAggregateOutputType | null
  }

  type GetCustomCommandGroupByPayload<T extends CustomCommandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomCommandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomCommandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomCommandGroupByOutputType[P]>
            : GetScalarType<T[P], CustomCommandGroupByOutputType[P]>
        }
      >
    >


  export type CustomCommandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    description?: boolean
    embedId?: boolean
    embed?: boolean | CustomEmbedDefaultArgs<ExtArgs>
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customCommand"]>

  export type CustomCommandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    description?: boolean
    embedId?: boolean
    embed?: boolean | CustomEmbedDefaultArgs<ExtArgs>
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customCommand"]>

  export type CustomCommandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    name?: boolean
    description?: boolean
    embedId?: boolean
    embed?: boolean | CustomEmbedDefaultArgs<ExtArgs>
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customCommand"]>

  export type CustomCommandSelectScalar = {
    id?: boolean
    guildId?: boolean
    name?: boolean
    description?: boolean
    embedId?: boolean
  }

  export type CustomCommandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "name" | "description" | "embedId", ExtArgs["result"]["customCommand"]>
  export type CustomCommandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embed?: boolean | CustomEmbedDefaultArgs<ExtArgs>
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }
  export type CustomCommandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embed?: boolean | CustomEmbedDefaultArgs<ExtArgs>
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }
  export type CustomCommandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    embed?: boolean | CustomEmbedDefaultArgs<ExtArgs>
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }

  export type $CustomCommandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomCommand"
    objects: {
      embed: Prisma.$CustomEmbedPayload<ExtArgs>
      guild: Prisma.$GuildConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      name: string
      description: string
      embedId: string
    }, ExtArgs["result"]["customCommand"]>
    composites: {}
  }

  type CustomCommandGetPayload<S extends boolean | null | undefined | CustomCommandDefaultArgs> = $Result.GetResult<Prisma.$CustomCommandPayload, S>

  type CustomCommandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomCommandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomCommandCountAggregateInputType | true
    }

  export interface CustomCommandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomCommand'], meta: { name: 'CustomCommand' } }
    /**
     * Find zero or one CustomCommand that matches the filter.
     * @param {CustomCommandFindUniqueArgs} args - Arguments to find a CustomCommand
     * @example
     * // Get one CustomCommand
     * const customCommand = await prisma.customCommand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomCommandFindUniqueArgs>(args: SelectSubset<T, CustomCommandFindUniqueArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomCommand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomCommandFindUniqueOrThrowArgs} args - Arguments to find a CustomCommand
     * @example
     * // Get one CustomCommand
     * const customCommand = await prisma.customCommand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomCommandFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomCommandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomCommand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandFindFirstArgs} args - Arguments to find a CustomCommand
     * @example
     * // Get one CustomCommand
     * const customCommand = await prisma.customCommand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomCommandFindFirstArgs>(args?: SelectSubset<T, CustomCommandFindFirstArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomCommand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandFindFirstOrThrowArgs} args - Arguments to find a CustomCommand
     * @example
     * // Get one CustomCommand
     * const customCommand = await prisma.customCommand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomCommandFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomCommandFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomCommands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomCommands
     * const customCommands = await prisma.customCommand.findMany()
     * 
     * // Get first 10 CustomCommands
     * const customCommands = await prisma.customCommand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customCommandWithIdOnly = await prisma.customCommand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomCommandFindManyArgs>(args?: SelectSubset<T, CustomCommandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomCommand.
     * @param {CustomCommandCreateArgs} args - Arguments to create a CustomCommand.
     * @example
     * // Create one CustomCommand
     * const CustomCommand = await prisma.customCommand.create({
     *   data: {
     *     // ... data to create a CustomCommand
     *   }
     * })
     * 
     */
    create<T extends CustomCommandCreateArgs>(args: SelectSubset<T, CustomCommandCreateArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomCommands.
     * @param {CustomCommandCreateManyArgs} args - Arguments to create many CustomCommands.
     * @example
     * // Create many CustomCommands
     * const customCommand = await prisma.customCommand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomCommandCreateManyArgs>(args?: SelectSubset<T, CustomCommandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomCommands and returns the data saved in the database.
     * @param {CustomCommandCreateManyAndReturnArgs} args - Arguments to create many CustomCommands.
     * @example
     * // Create many CustomCommands
     * const customCommand = await prisma.customCommand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomCommands and only return the `id`
     * const customCommandWithIdOnly = await prisma.customCommand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomCommandCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomCommandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomCommand.
     * @param {CustomCommandDeleteArgs} args - Arguments to delete one CustomCommand.
     * @example
     * // Delete one CustomCommand
     * const CustomCommand = await prisma.customCommand.delete({
     *   where: {
     *     // ... filter to delete one CustomCommand
     *   }
     * })
     * 
     */
    delete<T extends CustomCommandDeleteArgs>(args: SelectSubset<T, CustomCommandDeleteArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomCommand.
     * @param {CustomCommandUpdateArgs} args - Arguments to update one CustomCommand.
     * @example
     * // Update one CustomCommand
     * const customCommand = await prisma.customCommand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomCommandUpdateArgs>(args: SelectSubset<T, CustomCommandUpdateArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomCommands.
     * @param {CustomCommandDeleteManyArgs} args - Arguments to filter CustomCommands to delete.
     * @example
     * // Delete a few CustomCommands
     * const { count } = await prisma.customCommand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomCommandDeleteManyArgs>(args?: SelectSubset<T, CustomCommandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomCommands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomCommands
     * const customCommand = await prisma.customCommand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomCommandUpdateManyArgs>(args: SelectSubset<T, CustomCommandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomCommands and returns the data updated in the database.
     * @param {CustomCommandUpdateManyAndReturnArgs} args - Arguments to update many CustomCommands.
     * @example
     * // Update many CustomCommands
     * const customCommand = await prisma.customCommand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomCommands and only return the `id`
     * const customCommandWithIdOnly = await prisma.customCommand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomCommandUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomCommandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomCommand.
     * @param {CustomCommandUpsertArgs} args - Arguments to update or create a CustomCommand.
     * @example
     * // Update or create a CustomCommand
     * const customCommand = await prisma.customCommand.upsert({
     *   create: {
     *     // ... data to create a CustomCommand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomCommand we want to update
     *   }
     * })
     */
    upsert<T extends CustomCommandUpsertArgs>(args: SelectSubset<T, CustomCommandUpsertArgs<ExtArgs>>): Prisma__CustomCommandClient<$Result.GetResult<Prisma.$CustomCommandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomCommands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandCountArgs} args - Arguments to filter CustomCommands to count.
     * @example
     * // Count the number of CustomCommands
     * const count = await prisma.customCommand.count({
     *   where: {
     *     // ... the filter for the CustomCommands we want to count
     *   }
     * })
    **/
    count<T extends CustomCommandCountArgs>(
      args?: Subset<T, CustomCommandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomCommandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomCommand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomCommandAggregateArgs>(args: Subset<T, CustomCommandAggregateArgs>): Prisma.PrismaPromise<GetCustomCommandAggregateType<T>>

    /**
     * Group by CustomCommand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomCommandGroupByArgs} args - Group by arguments.
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
      T extends CustomCommandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomCommandGroupByArgs['orderBy'] }
        : { orderBy?: CustomCommandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomCommandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomCommandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomCommand model
   */
  readonly fields: CustomCommandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomCommand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomCommandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    embed<T extends CustomEmbedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomEmbedDefaultArgs<ExtArgs>>): Prisma__CustomEmbedClient<$Result.GetResult<Prisma.$CustomEmbedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guild<T extends GuildConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfigDefaultArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustomCommand model
   */
  interface CustomCommandFieldRefs {
    readonly id: FieldRef<"CustomCommand", 'String'>
    readonly guildId: FieldRef<"CustomCommand", 'String'>
    readonly name: FieldRef<"CustomCommand", 'String'>
    readonly description: FieldRef<"CustomCommand", 'String'>
    readonly embedId: FieldRef<"CustomCommand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomCommand findUnique
   */
  export type CustomCommandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter, which CustomCommand to fetch.
     */
    where: CustomCommandWhereUniqueInput
  }

  /**
   * CustomCommand findUniqueOrThrow
   */
  export type CustomCommandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter, which CustomCommand to fetch.
     */
    where: CustomCommandWhereUniqueInput
  }

  /**
   * CustomCommand findFirst
   */
  export type CustomCommandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter, which CustomCommand to fetch.
     */
    where?: CustomCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCommands to fetch.
     */
    orderBy?: CustomCommandOrderByWithRelationInput | CustomCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomCommands.
     */
    cursor?: CustomCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCommands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomCommands.
     */
    distinct?: CustomCommandScalarFieldEnum | CustomCommandScalarFieldEnum[]
  }

  /**
   * CustomCommand findFirstOrThrow
   */
  export type CustomCommandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter, which CustomCommand to fetch.
     */
    where?: CustomCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCommands to fetch.
     */
    orderBy?: CustomCommandOrderByWithRelationInput | CustomCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomCommands.
     */
    cursor?: CustomCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCommands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomCommands.
     */
    distinct?: CustomCommandScalarFieldEnum | CustomCommandScalarFieldEnum[]
  }

  /**
   * CustomCommand findMany
   */
  export type CustomCommandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter, which CustomCommands to fetch.
     */
    where?: CustomCommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomCommands to fetch.
     */
    orderBy?: CustomCommandOrderByWithRelationInput | CustomCommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomCommands.
     */
    cursor?: CustomCommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomCommands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomCommands.
     */
    skip?: number
    distinct?: CustomCommandScalarFieldEnum | CustomCommandScalarFieldEnum[]
  }

  /**
   * CustomCommand create
   */
  export type CustomCommandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomCommand.
     */
    data: XOR<CustomCommandCreateInput, CustomCommandUncheckedCreateInput>
  }

  /**
   * CustomCommand createMany
   */
  export type CustomCommandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomCommands.
     */
    data: CustomCommandCreateManyInput | CustomCommandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomCommand createManyAndReturn
   */
  export type CustomCommandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * The data used to create many CustomCommands.
     */
    data: CustomCommandCreateManyInput | CustomCommandCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomCommand update
   */
  export type CustomCommandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomCommand.
     */
    data: XOR<CustomCommandUpdateInput, CustomCommandUncheckedUpdateInput>
    /**
     * Choose, which CustomCommand to update.
     */
    where: CustomCommandWhereUniqueInput
  }

  /**
   * CustomCommand updateMany
   */
  export type CustomCommandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomCommands.
     */
    data: XOR<CustomCommandUpdateManyMutationInput, CustomCommandUncheckedUpdateManyInput>
    /**
     * Filter which CustomCommands to update
     */
    where?: CustomCommandWhereInput
    /**
     * Limit how many CustomCommands to update.
     */
    limit?: number
  }

  /**
   * CustomCommand updateManyAndReturn
   */
  export type CustomCommandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * The data used to update CustomCommands.
     */
    data: XOR<CustomCommandUpdateManyMutationInput, CustomCommandUncheckedUpdateManyInput>
    /**
     * Filter which CustomCommands to update
     */
    where?: CustomCommandWhereInput
    /**
     * Limit how many CustomCommands to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomCommand upsert
   */
  export type CustomCommandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomCommand to update in case it exists.
     */
    where: CustomCommandWhereUniqueInput
    /**
     * In case the CustomCommand found by the `where` argument doesn't exist, create a new CustomCommand with this data.
     */
    create: XOR<CustomCommandCreateInput, CustomCommandUncheckedCreateInput>
    /**
     * In case the CustomCommand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomCommandUpdateInput, CustomCommandUncheckedUpdateInput>
  }

  /**
   * CustomCommand delete
   */
  export type CustomCommandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
    /**
     * Filter which CustomCommand to delete.
     */
    where: CustomCommandWhereUniqueInput
  }

  /**
   * CustomCommand deleteMany
   */
  export type CustomCommandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomCommands to delete
     */
    where?: CustomCommandWhereInput
    /**
     * Limit how many CustomCommands to delete.
     */
    limit?: number
  }

  /**
   * CustomCommand without action
   */
  export type CustomCommandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomCommand
     */
    select?: CustomCommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomCommand
     */
    omit?: CustomCommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomCommandInclude<ExtArgs> | null
  }


  /**
   * Model KnowledgeSnippet
   */

  export type AggregateKnowledgeSnippet = {
    _count: KnowledgeSnippetCountAggregateOutputType | null
    _min: KnowledgeSnippetMinAggregateOutputType | null
    _max: KnowledgeSnippetMaxAggregateOutputType | null
  }

  export type KnowledgeSnippetMinAggregateOutputType = {
    id: string | null
    guildId: string | null
    question: string | null
    answer: string | null
    source: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeSnippetMaxAggregateOutputType = {
    id: string | null
    guildId: string | null
    question: string | null
    answer: string | null
    source: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgeSnippetCountAggregateOutputType = {
    id: number
    guildId: number
    question: number
    answer: number
    source: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KnowledgeSnippetMinAggregateInputType = {
    id?: true
    guildId?: true
    question?: true
    answer?: true
    source?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeSnippetMaxAggregateInputType = {
    id?: true
    guildId?: true
    question?: true
    answer?: true
    source?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgeSnippetCountAggregateInputType = {
    id?: true
    guildId?: true
    question?: true
    answer?: true
    source?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KnowledgeSnippetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeSnippet to aggregate.
     */
    where?: KnowledgeSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeSnippets to fetch.
     */
    orderBy?: KnowledgeSnippetOrderByWithRelationInput | KnowledgeSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgeSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeSnippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KnowledgeSnippets
    **/
    _count?: true | KnowledgeSnippetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgeSnippetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgeSnippetMaxAggregateInputType
  }

  export type GetKnowledgeSnippetAggregateType<T extends KnowledgeSnippetAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledgeSnippet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledgeSnippet[P]>
      : GetScalarType<T[P], AggregateKnowledgeSnippet[P]>
  }




  export type KnowledgeSnippetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KnowledgeSnippetWhereInput
    orderBy?: KnowledgeSnippetOrderByWithAggregationInput | KnowledgeSnippetOrderByWithAggregationInput[]
    by: KnowledgeSnippetScalarFieldEnum[] | KnowledgeSnippetScalarFieldEnum
    having?: KnowledgeSnippetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgeSnippetCountAggregateInputType | true
    _min?: KnowledgeSnippetMinAggregateInputType
    _max?: KnowledgeSnippetMaxAggregateInputType
  }

  export type KnowledgeSnippetGroupByOutputType = {
    id: string
    guildId: string
    question: string
    answer: string
    source: string | null
    verified: boolean
    createdAt: Date
    updatedAt: Date
    _count: KnowledgeSnippetCountAggregateOutputType | null
    _min: KnowledgeSnippetMinAggregateOutputType | null
    _max: KnowledgeSnippetMaxAggregateOutputType | null
  }

  type GetKnowledgeSnippetGroupByPayload<T extends KnowledgeSnippetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgeSnippetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgeSnippetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgeSnippetGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgeSnippetGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgeSnippetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    question?: boolean
    answer?: boolean
    source?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeSnippet"]>

  export type KnowledgeSnippetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    question?: boolean
    answer?: boolean
    source?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeSnippet"]>

  export type KnowledgeSnippetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    guildId?: boolean
    question?: boolean
    answer?: boolean
    source?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgeSnippet"]>

  export type KnowledgeSnippetSelectScalar = {
    id?: boolean
    guildId?: boolean
    question?: boolean
    answer?: boolean
    source?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KnowledgeSnippetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "guildId" | "question" | "answer" | "source" | "verified" | "createdAt" | "updatedAt", ExtArgs["result"]["knowledgeSnippet"]>
  export type KnowledgeSnippetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }
  export type KnowledgeSnippetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }
  export type KnowledgeSnippetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guild?: boolean | GuildConfigDefaultArgs<ExtArgs>
  }

  export type $KnowledgeSnippetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KnowledgeSnippet"
    objects: {
      guild: Prisma.$GuildConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      guildId: string
      question: string
      answer: string
      source: string | null
      verified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["knowledgeSnippet"]>
    composites: {}
  }

  type KnowledgeSnippetGetPayload<S extends boolean | null | undefined | KnowledgeSnippetDefaultArgs> = $Result.GetResult<Prisma.$KnowledgeSnippetPayload, S>

  type KnowledgeSnippetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KnowledgeSnippetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KnowledgeSnippetCountAggregateInputType | true
    }

  export interface KnowledgeSnippetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KnowledgeSnippet'], meta: { name: 'KnowledgeSnippet' } }
    /**
     * Find zero or one KnowledgeSnippet that matches the filter.
     * @param {KnowledgeSnippetFindUniqueArgs} args - Arguments to find a KnowledgeSnippet
     * @example
     * // Get one KnowledgeSnippet
     * const knowledgeSnippet = await prisma.knowledgeSnippet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KnowledgeSnippetFindUniqueArgs>(args: SelectSubset<T, KnowledgeSnippetFindUniqueArgs<ExtArgs>>): Prisma__KnowledgeSnippetClient<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KnowledgeSnippet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KnowledgeSnippetFindUniqueOrThrowArgs} args - Arguments to find a KnowledgeSnippet
     * @example
     * // Get one KnowledgeSnippet
     * const knowledgeSnippet = await prisma.knowledgeSnippet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KnowledgeSnippetFindUniqueOrThrowArgs>(args: SelectSubset<T, KnowledgeSnippetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KnowledgeSnippetClient<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeSnippet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeSnippetFindFirstArgs} args - Arguments to find a KnowledgeSnippet
     * @example
     * // Get one KnowledgeSnippet
     * const knowledgeSnippet = await prisma.knowledgeSnippet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KnowledgeSnippetFindFirstArgs>(args?: SelectSubset<T, KnowledgeSnippetFindFirstArgs<ExtArgs>>): Prisma__KnowledgeSnippetClient<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KnowledgeSnippet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeSnippetFindFirstOrThrowArgs} args - Arguments to find a KnowledgeSnippet
     * @example
     * // Get one KnowledgeSnippet
     * const knowledgeSnippet = await prisma.knowledgeSnippet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KnowledgeSnippetFindFirstOrThrowArgs>(args?: SelectSubset<T, KnowledgeSnippetFindFirstOrThrowArgs<ExtArgs>>): Prisma__KnowledgeSnippetClient<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KnowledgeSnippets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeSnippetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KnowledgeSnippets
     * const knowledgeSnippets = await prisma.knowledgeSnippet.findMany()
     * 
     * // Get first 10 KnowledgeSnippets
     * const knowledgeSnippets = await prisma.knowledgeSnippet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgeSnippetWithIdOnly = await prisma.knowledgeSnippet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KnowledgeSnippetFindManyArgs>(args?: SelectSubset<T, KnowledgeSnippetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KnowledgeSnippet.
     * @param {KnowledgeSnippetCreateArgs} args - Arguments to create a KnowledgeSnippet.
     * @example
     * // Create one KnowledgeSnippet
     * const KnowledgeSnippet = await prisma.knowledgeSnippet.create({
     *   data: {
     *     // ... data to create a KnowledgeSnippet
     *   }
     * })
     * 
     */
    create<T extends KnowledgeSnippetCreateArgs>(args: SelectSubset<T, KnowledgeSnippetCreateArgs<ExtArgs>>): Prisma__KnowledgeSnippetClient<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KnowledgeSnippets.
     * @param {KnowledgeSnippetCreateManyArgs} args - Arguments to create many KnowledgeSnippets.
     * @example
     * // Create many KnowledgeSnippets
     * const knowledgeSnippet = await prisma.knowledgeSnippet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KnowledgeSnippetCreateManyArgs>(args?: SelectSubset<T, KnowledgeSnippetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KnowledgeSnippets and returns the data saved in the database.
     * @param {KnowledgeSnippetCreateManyAndReturnArgs} args - Arguments to create many KnowledgeSnippets.
     * @example
     * // Create many KnowledgeSnippets
     * const knowledgeSnippet = await prisma.knowledgeSnippet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KnowledgeSnippets and only return the `id`
     * const knowledgeSnippetWithIdOnly = await prisma.knowledgeSnippet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KnowledgeSnippetCreateManyAndReturnArgs>(args?: SelectSubset<T, KnowledgeSnippetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KnowledgeSnippet.
     * @param {KnowledgeSnippetDeleteArgs} args - Arguments to delete one KnowledgeSnippet.
     * @example
     * // Delete one KnowledgeSnippet
     * const KnowledgeSnippet = await prisma.knowledgeSnippet.delete({
     *   where: {
     *     // ... filter to delete one KnowledgeSnippet
     *   }
     * })
     * 
     */
    delete<T extends KnowledgeSnippetDeleteArgs>(args: SelectSubset<T, KnowledgeSnippetDeleteArgs<ExtArgs>>): Prisma__KnowledgeSnippetClient<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KnowledgeSnippet.
     * @param {KnowledgeSnippetUpdateArgs} args - Arguments to update one KnowledgeSnippet.
     * @example
     * // Update one KnowledgeSnippet
     * const knowledgeSnippet = await prisma.knowledgeSnippet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KnowledgeSnippetUpdateArgs>(args: SelectSubset<T, KnowledgeSnippetUpdateArgs<ExtArgs>>): Prisma__KnowledgeSnippetClient<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KnowledgeSnippets.
     * @param {KnowledgeSnippetDeleteManyArgs} args - Arguments to filter KnowledgeSnippets to delete.
     * @example
     * // Delete a few KnowledgeSnippets
     * const { count } = await prisma.knowledgeSnippet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KnowledgeSnippetDeleteManyArgs>(args?: SelectSubset<T, KnowledgeSnippetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeSnippets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeSnippetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KnowledgeSnippets
     * const knowledgeSnippet = await prisma.knowledgeSnippet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KnowledgeSnippetUpdateManyArgs>(args: SelectSubset<T, KnowledgeSnippetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KnowledgeSnippets and returns the data updated in the database.
     * @param {KnowledgeSnippetUpdateManyAndReturnArgs} args - Arguments to update many KnowledgeSnippets.
     * @example
     * // Update many KnowledgeSnippets
     * const knowledgeSnippet = await prisma.knowledgeSnippet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KnowledgeSnippets and only return the `id`
     * const knowledgeSnippetWithIdOnly = await prisma.knowledgeSnippet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KnowledgeSnippetUpdateManyAndReturnArgs>(args: SelectSubset<T, KnowledgeSnippetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KnowledgeSnippet.
     * @param {KnowledgeSnippetUpsertArgs} args - Arguments to update or create a KnowledgeSnippet.
     * @example
     * // Update or create a KnowledgeSnippet
     * const knowledgeSnippet = await prisma.knowledgeSnippet.upsert({
     *   create: {
     *     // ... data to create a KnowledgeSnippet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KnowledgeSnippet we want to update
     *   }
     * })
     */
    upsert<T extends KnowledgeSnippetUpsertArgs>(args: SelectSubset<T, KnowledgeSnippetUpsertArgs<ExtArgs>>): Prisma__KnowledgeSnippetClient<$Result.GetResult<Prisma.$KnowledgeSnippetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KnowledgeSnippets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeSnippetCountArgs} args - Arguments to filter KnowledgeSnippets to count.
     * @example
     * // Count the number of KnowledgeSnippets
     * const count = await prisma.knowledgeSnippet.count({
     *   where: {
     *     // ... the filter for the KnowledgeSnippets we want to count
     *   }
     * })
    **/
    count<T extends KnowledgeSnippetCountArgs>(
      args?: Subset<T, KnowledgeSnippetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgeSnippetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KnowledgeSnippet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeSnippetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KnowledgeSnippetAggregateArgs>(args: Subset<T, KnowledgeSnippetAggregateArgs>): Prisma.PrismaPromise<GetKnowledgeSnippetAggregateType<T>>

    /**
     * Group by KnowledgeSnippet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgeSnippetGroupByArgs} args - Group by arguments.
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
      T extends KnowledgeSnippetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgeSnippetGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgeSnippetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KnowledgeSnippetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgeSnippetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KnowledgeSnippet model
   */
  readonly fields: KnowledgeSnippetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KnowledgeSnippet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgeSnippetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guild<T extends GuildConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuildConfigDefaultArgs<ExtArgs>>): Prisma__GuildConfigClient<$Result.GetResult<Prisma.$GuildConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the KnowledgeSnippet model
   */
  interface KnowledgeSnippetFieldRefs {
    readonly id: FieldRef<"KnowledgeSnippet", 'String'>
    readonly guildId: FieldRef<"KnowledgeSnippet", 'String'>
    readonly question: FieldRef<"KnowledgeSnippet", 'String'>
    readonly answer: FieldRef<"KnowledgeSnippet", 'String'>
    readonly source: FieldRef<"KnowledgeSnippet", 'String'>
    readonly verified: FieldRef<"KnowledgeSnippet", 'Boolean'>
    readonly createdAt: FieldRef<"KnowledgeSnippet", 'DateTime'>
    readonly updatedAt: FieldRef<"KnowledgeSnippet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KnowledgeSnippet findUnique
   */
  export type KnowledgeSnippetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeSnippet to fetch.
     */
    where: KnowledgeSnippetWhereUniqueInput
  }

  /**
   * KnowledgeSnippet findUniqueOrThrow
   */
  export type KnowledgeSnippetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeSnippet to fetch.
     */
    where: KnowledgeSnippetWhereUniqueInput
  }

  /**
   * KnowledgeSnippet findFirst
   */
  export type KnowledgeSnippetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeSnippet to fetch.
     */
    where?: KnowledgeSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeSnippets to fetch.
     */
    orderBy?: KnowledgeSnippetOrderByWithRelationInput | KnowledgeSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeSnippets.
     */
    cursor?: KnowledgeSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeSnippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeSnippets.
     */
    distinct?: KnowledgeSnippetScalarFieldEnum | KnowledgeSnippetScalarFieldEnum[]
  }

  /**
   * KnowledgeSnippet findFirstOrThrow
   */
  export type KnowledgeSnippetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeSnippet to fetch.
     */
    where?: KnowledgeSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeSnippets to fetch.
     */
    orderBy?: KnowledgeSnippetOrderByWithRelationInput | KnowledgeSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KnowledgeSnippets.
     */
    cursor?: KnowledgeSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeSnippets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KnowledgeSnippets.
     */
    distinct?: KnowledgeSnippetScalarFieldEnum | KnowledgeSnippetScalarFieldEnum[]
  }

  /**
   * KnowledgeSnippet findMany
   */
  export type KnowledgeSnippetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetInclude<ExtArgs> | null
    /**
     * Filter, which KnowledgeSnippets to fetch.
     */
    where?: KnowledgeSnippetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KnowledgeSnippets to fetch.
     */
    orderBy?: KnowledgeSnippetOrderByWithRelationInput | KnowledgeSnippetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KnowledgeSnippets.
     */
    cursor?: KnowledgeSnippetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KnowledgeSnippets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KnowledgeSnippets.
     */
    skip?: number
    distinct?: KnowledgeSnippetScalarFieldEnum | KnowledgeSnippetScalarFieldEnum[]
  }

  /**
   * KnowledgeSnippet create
   */
  export type KnowledgeSnippetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetInclude<ExtArgs> | null
    /**
     * The data needed to create a KnowledgeSnippet.
     */
    data: XOR<KnowledgeSnippetCreateInput, KnowledgeSnippetUncheckedCreateInput>
  }

  /**
   * KnowledgeSnippet createMany
   */
  export type KnowledgeSnippetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KnowledgeSnippets.
     */
    data: KnowledgeSnippetCreateManyInput | KnowledgeSnippetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KnowledgeSnippet createManyAndReturn
   */
  export type KnowledgeSnippetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * The data used to create many KnowledgeSnippets.
     */
    data: KnowledgeSnippetCreateManyInput | KnowledgeSnippetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KnowledgeSnippet update
   */
  export type KnowledgeSnippetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetInclude<ExtArgs> | null
    /**
     * The data needed to update a KnowledgeSnippet.
     */
    data: XOR<KnowledgeSnippetUpdateInput, KnowledgeSnippetUncheckedUpdateInput>
    /**
     * Choose, which KnowledgeSnippet to update.
     */
    where: KnowledgeSnippetWhereUniqueInput
  }

  /**
   * KnowledgeSnippet updateMany
   */
  export type KnowledgeSnippetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KnowledgeSnippets.
     */
    data: XOR<KnowledgeSnippetUpdateManyMutationInput, KnowledgeSnippetUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeSnippets to update
     */
    where?: KnowledgeSnippetWhereInput
    /**
     * Limit how many KnowledgeSnippets to update.
     */
    limit?: number
  }

  /**
   * KnowledgeSnippet updateManyAndReturn
   */
  export type KnowledgeSnippetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * The data used to update KnowledgeSnippets.
     */
    data: XOR<KnowledgeSnippetUpdateManyMutationInput, KnowledgeSnippetUncheckedUpdateManyInput>
    /**
     * Filter which KnowledgeSnippets to update
     */
    where?: KnowledgeSnippetWhereInput
    /**
     * Limit how many KnowledgeSnippets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KnowledgeSnippet upsert
   */
  export type KnowledgeSnippetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetInclude<ExtArgs> | null
    /**
     * The filter to search for the KnowledgeSnippet to update in case it exists.
     */
    where: KnowledgeSnippetWhereUniqueInput
    /**
     * In case the KnowledgeSnippet found by the `where` argument doesn't exist, create a new KnowledgeSnippet with this data.
     */
    create: XOR<KnowledgeSnippetCreateInput, KnowledgeSnippetUncheckedCreateInput>
    /**
     * In case the KnowledgeSnippet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgeSnippetUpdateInput, KnowledgeSnippetUncheckedUpdateInput>
  }

  /**
   * KnowledgeSnippet delete
   */
  export type KnowledgeSnippetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetInclude<ExtArgs> | null
    /**
     * Filter which KnowledgeSnippet to delete.
     */
    where: KnowledgeSnippetWhereUniqueInput
  }

  /**
   * KnowledgeSnippet deleteMany
   */
  export type KnowledgeSnippetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KnowledgeSnippets to delete
     */
    where?: KnowledgeSnippetWhereInput
    /**
     * Limit how many KnowledgeSnippets to delete.
     */
    limit?: number
  }

  /**
   * KnowledgeSnippet without action
   */
  export type KnowledgeSnippetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgeSnippet
     */
    select?: KnowledgeSnippetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KnowledgeSnippet
     */
    omit?: KnowledgeSnippetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KnowledgeSnippetInclude<ExtArgs> | null
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


  export const GuildConfigScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    statusChannelId: 'statusChannelId',
    updateChannelId: 'updateChannelId',
    logChannelId: 'logChannelId',
    statusInterval: 'statusInterval',
    onlineMessage: 'onlineMessage',
    offlineMessage: 'offlineMessage',
    serverIp: 'serverIp',
    serverPort: 'serverPort',
    adminRoleIds: 'adminRoleIds',
    updateMentionIds: 'updateMentionIds'
  };

  export type GuildConfigScalarFieldEnum = (typeof GuildConfigScalarFieldEnum)[keyof typeof GuildConfigScalarFieldEnum]


  export const ModWatchlistScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    workshopId: 'workshopId',
    title: 'title',
    lastUpdated: 'lastUpdated'
  };

  export type ModWatchlistScalarFieldEnum = (typeof ModWatchlistScalarFieldEnum)[keyof typeof ModWatchlistScalarFieldEnum]


  export const TicketSettingsScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    ticketPanelMessageId: 'ticketPanelMessageId',
    welcomeMessage: 'welcomeMessage',
    ticketPanelMessage: 'ticketPanelMessage'
  };

  export type TicketSettingsScalarFieldEnum = (typeof TicketSettingsScalarFieldEnum)[keyof typeof TicketSettingsScalarFieldEnum]


  export const TicketCategoryScalarFieldEnum: {
    id: 'id',
    ticketSettingsId: 'ticketSettingsId',
    name: 'name',
    emoji: 'emoji',
    roleId: 'roleId'
  };

  export type TicketCategoryScalarFieldEnum = (typeof TicketCategoryScalarFieldEnum)[keyof typeof TicketCategoryScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    ticketSettingsId: 'ticketSettingsId',
    userId: 'userId',
    channelId: 'channelId',
    status: 'status',
    createdAt: 'createdAt',
    closedAt: 'closedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const CustomEmbedScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    name: 'name',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomEmbedScalarFieldEnum = (typeof CustomEmbedScalarFieldEnum)[keyof typeof CustomEmbedScalarFieldEnum]


  export const CustomCommandScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    name: 'name',
    description: 'description',
    embedId: 'embedId'
  };

  export type CustomCommandScalarFieldEnum = (typeof CustomCommandScalarFieldEnum)[keyof typeof CustomCommandScalarFieldEnum]


  export const KnowledgeSnippetScalarFieldEnum: {
    id: 'id',
    guildId: 'guildId',
    question: 'question',
    answer: 'answer',
    source: 'source',
    verified: 'verified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KnowledgeSnippetScalarFieldEnum = (typeof KnowledgeSnippetScalarFieldEnum)[keyof typeof KnowledgeSnippetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type GuildConfigWhereInput = {
    AND?: GuildConfigWhereInput | GuildConfigWhereInput[]
    OR?: GuildConfigWhereInput[]
    NOT?: GuildConfigWhereInput | GuildConfigWhereInput[]
    id?: StringFilter<"GuildConfig"> | string
    guildId?: StringFilter<"GuildConfig"> | string
    statusChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    updateChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    logChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    statusInterval?: IntFilter<"GuildConfig"> | number
    onlineMessage?: StringFilter<"GuildConfig"> | string
    offlineMessage?: StringFilter<"GuildConfig"> | string
    serverIp?: StringNullableFilter<"GuildConfig"> | string | null
    serverPort?: IntNullableFilter<"GuildConfig"> | number | null
    adminRoleIds?: StringNullableListFilter<"GuildConfig">
    updateMentionIds?: StringNullableListFilter<"GuildConfig">
    ModWatchlist?: ModWatchlistListRelationFilter
    TicketSettings?: XOR<TicketSettingsNullableScalarRelationFilter, TicketSettingsWhereInput> | null
    CustomEmbed?: CustomEmbedListRelationFilter
    CustomCommand?: CustomCommandListRelationFilter
    KnowledgeSnippet?: KnowledgeSnippetListRelationFilter
  }

  export type GuildConfigOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    statusChannelId?: SortOrderInput | SortOrder
    updateChannelId?: SortOrderInput | SortOrder
    logChannelId?: SortOrderInput | SortOrder
    statusInterval?: SortOrder
    onlineMessage?: SortOrder
    offlineMessage?: SortOrder
    serverIp?: SortOrderInput | SortOrder
    serverPort?: SortOrderInput | SortOrder
    adminRoleIds?: SortOrder
    updateMentionIds?: SortOrder
    ModWatchlist?: ModWatchlistOrderByRelationAggregateInput
    TicketSettings?: TicketSettingsOrderByWithRelationInput
    CustomEmbed?: CustomEmbedOrderByRelationAggregateInput
    CustomCommand?: CustomCommandOrderByRelationAggregateInput
    KnowledgeSnippet?: KnowledgeSnippetOrderByRelationAggregateInput
  }

  export type GuildConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId?: string
    AND?: GuildConfigWhereInput | GuildConfigWhereInput[]
    OR?: GuildConfigWhereInput[]
    NOT?: GuildConfigWhereInput | GuildConfigWhereInput[]
    statusChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    updateChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    logChannelId?: StringNullableFilter<"GuildConfig"> | string | null
    statusInterval?: IntFilter<"GuildConfig"> | number
    onlineMessage?: StringFilter<"GuildConfig"> | string
    offlineMessage?: StringFilter<"GuildConfig"> | string
    serverIp?: StringNullableFilter<"GuildConfig"> | string | null
    serverPort?: IntNullableFilter<"GuildConfig"> | number | null
    adminRoleIds?: StringNullableListFilter<"GuildConfig">
    updateMentionIds?: StringNullableListFilter<"GuildConfig">
    ModWatchlist?: ModWatchlistListRelationFilter
    TicketSettings?: XOR<TicketSettingsNullableScalarRelationFilter, TicketSettingsWhereInput> | null
    CustomEmbed?: CustomEmbedListRelationFilter
    CustomCommand?: CustomCommandListRelationFilter
    KnowledgeSnippet?: KnowledgeSnippetListRelationFilter
  }, "id" | "guildId">

  export type GuildConfigOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    statusChannelId?: SortOrderInput | SortOrder
    updateChannelId?: SortOrderInput | SortOrder
    logChannelId?: SortOrderInput | SortOrder
    statusInterval?: SortOrder
    onlineMessage?: SortOrder
    offlineMessage?: SortOrder
    serverIp?: SortOrderInput | SortOrder
    serverPort?: SortOrderInput | SortOrder
    adminRoleIds?: SortOrder
    updateMentionIds?: SortOrder
    _count?: GuildConfigCountOrderByAggregateInput
    _avg?: GuildConfigAvgOrderByAggregateInput
    _max?: GuildConfigMaxOrderByAggregateInput
    _min?: GuildConfigMinOrderByAggregateInput
    _sum?: GuildConfigSumOrderByAggregateInput
  }

  export type GuildConfigScalarWhereWithAggregatesInput = {
    AND?: GuildConfigScalarWhereWithAggregatesInput | GuildConfigScalarWhereWithAggregatesInput[]
    OR?: GuildConfigScalarWhereWithAggregatesInput[]
    NOT?: GuildConfigScalarWhereWithAggregatesInput | GuildConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GuildConfig"> | string
    guildId?: StringWithAggregatesFilter<"GuildConfig"> | string
    statusChannelId?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    updateChannelId?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    logChannelId?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    statusInterval?: IntWithAggregatesFilter<"GuildConfig"> | number
    onlineMessage?: StringWithAggregatesFilter<"GuildConfig"> | string
    offlineMessage?: StringWithAggregatesFilter<"GuildConfig"> | string
    serverIp?: StringNullableWithAggregatesFilter<"GuildConfig"> | string | null
    serverPort?: IntNullableWithAggregatesFilter<"GuildConfig"> | number | null
    adminRoleIds?: StringNullableListFilter<"GuildConfig">
    updateMentionIds?: StringNullableListFilter<"GuildConfig">
  }

  export type ModWatchlistWhereInput = {
    AND?: ModWatchlistWhereInput | ModWatchlistWhereInput[]
    OR?: ModWatchlistWhereInput[]
    NOT?: ModWatchlistWhereInput | ModWatchlistWhereInput[]
    id?: StringFilter<"ModWatchlist"> | string
    guildId?: StringFilter<"ModWatchlist"> | string
    workshopId?: StringFilter<"ModWatchlist"> | string
    title?: StringNullableFilter<"ModWatchlist"> | string | null
    lastUpdated?: DateTimeFilter<"ModWatchlist"> | Date | string
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
  }

  export type ModWatchlistOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    workshopId?: SortOrder
    title?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    guild?: GuildConfigOrderByWithRelationInput
  }

  export type ModWatchlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId_workshopId?: ModWatchlistGuildIdWorkshopIdCompoundUniqueInput
    AND?: ModWatchlistWhereInput | ModWatchlistWhereInput[]
    OR?: ModWatchlistWhereInput[]
    NOT?: ModWatchlistWhereInput | ModWatchlistWhereInput[]
    guildId?: StringFilter<"ModWatchlist"> | string
    workshopId?: StringFilter<"ModWatchlist"> | string
    title?: StringNullableFilter<"ModWatchlist"> | string | null
    lastUpdated?: DateTimeFilter<"ModWatchlist"> | Date | string
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
  }, "id" | "guildId_workshopId">

  export type ModWatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    workshopId?: SortOrder
    title?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    _count?: ModWatchlistCountOrderByAggregateInput
    _max?: ModWatchlistMaxOrderByAggregateInput
    _min?: ModWatchlistMinOrderByAggregateInput
  }

  export type ModWatchlistScalarWhereWithAggregatesInput = {
    AND?: ModWatchlistScalarWhereWithAggregatesInput | ModWatchlistScalarWhereWithAggregatesInput[]
    OR?: ModWatchlistScalarWhereWithAggregatesInput[]
    NOT?: ModWatchlistScalarWhereWithAggregatesInput | ModWatchlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModWatchlist"> | string
    guildId?: StringWithAggregatesFilter<"ModWatchlist"> | string
    workshopId?: StringWithAggregatesFilter<"ModWatchlist"> | string
    title?: StringNullableWithAggregatesFilter<"ModWatchlist"> | string | null
    lastUpdated?: DateTimeWithAggregatesFilter<"ModWatchlist"> | Date | string
  }

  export type TicketSettingsWhereInput = {
    AND?: TicketSettingsWhereInput | TicketSettingsWhereInput[]
    OR?: TicketSettingsWhereInput[]
    NOT?: TicketSettingsWhereInput | TicketSettingsWhereInput[]
    id?: StringFilter<"TicketSettings"> | string
    guildId?: StringFilter<"TicketSettings"> | string
    ticketPanelMessageId?: StringNullableFilter<"TicketSettings"> | string | null
    welcomeMessage?: StringFilter<"TicketSettings"> | string
    ticketPanelMessage?: StringFilter<"TicketSettings"> | string
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
    categories?: TicketCategoryListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type TicketSettingsOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    ticketPanelMessageId?: SortOrderInput | SortOrder
    welcomeMessage?: SortOrder
    ticketPanelMessage?: SortOrder
    guild?: GuildConfigOrderByWithRelationInput
    categories?: TicketCategoryOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type TicketSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId?: string
    AND?: TicketSettingsWhereInput | TicketSettingsWhereInput[]
    OR?: TicketSettingsWhereInput[]
    NOT?: TicketSettingsWhereInput | TicketSettingsWhereInput[]
    ticketPanelMessageId?: StringNullableFilter<"TicketSettings"> | string | null
    welcomeMessage?: StringFilter<"TicketSettings"> | string
    ticketPanelMessage?: StringFilter<"TicketSettings"> | string
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
    categories?: TicketCategoryListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "guildId">

  export type TicketSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    ticketPanelMessageId?: SortOrderInput | SortOrder
    welcomeMessage?: SortOrder
    ticketPanelMessage?: SortOrder
    _count?: TicketSettingsCountOrderByAggregateInput
    _max?: TicketSettingsMaxOrderByAggregateInput
    _min?: TicketSettingsMinOrderByAggregateInput
  }

  export type TicketSettingsScalarWhereWithAggregatesInput = {
    AND?: TicketSettingsScalarWhereWithAggregatesInput | TicketSettingsScalarWhereWithAggregatesInput[]
    OR?: TicketSettingsScalarWhereWithAggregatesInput[]
    NOT?: TicketSettingsScalarWhereWithAggregatesInput | TicketSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketSettings"> | string
    guildId?: StringWithAggregatesFilter<"TicketSettings"> | string
    ticketPanelMessageId?: StringNullableWithAggregatesFilter<"TicketSettings"> | string | null
    welcomeMessage?: StringWithAggregatesFilter<"TicketSettings"> | string
    ticketPanelMessage?: StringWithAggregatesFilter<"TicketSettings"> | string
  }

  export type TicketCategoryWhereInput = {
    AND?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    OR?: TicketCategoryWhereInput[]
    NOT?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    id?: StringFilter<"TicketCategory"> | string
    ticketSettingsId?: StringFilter<"TicketCategory"> | string
    name?: StringFilter<"TicketCategory"> | string
    emoji?: StringNullableFilter<"TicketCategory"> | string | null
    roleId?: StringNullableFilter<"TicketCategory"> | string | null
    ticketSettings?: XOR<TicketSettingsScalarRelationFilter, TicketSettingsWhereInput>
  }

  export type TicketCategoryOrderByWithRelationInput = {
    id?: SortOrder
    ticketSettingsId?: SortOrder
    name?: SortOrder
    emoji?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    ticketSettings?: TicketSettingsOrderByWithRelationInput
  }

  export type TicketCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    OR?: TicketCategoryWhereInput[]
    NOT?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    ticketSettingsId?: StringFilter<"TicketCategory"> | string
    name?: StringFilter<"TicketCategory"> | string
    emoji?: StringNullableFilter<"TicketCategory"> | string | null
    roleId?: StringNullableFilter<"TicketCategory"> | string | null
    ticketSettings?: XOR<TicketSettingsScalarRelationFilter, TicketSettingsWhereInput>
  }, "id">

  export type TicketCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    ticketSettingsId?: SortOrder
    name?: SortOrder
    emoji?: SortOrderInput | SortOrder
    roleId?: SortOrderInput | SortOrder
    _count?: TicketCategoryCountOrderByAggregateInput
    _max?: TicketCategoryMaxOrderByAggregateInput
    _min?: TicketCategoryMinOrderByAggregateInput
  }

  export type TicketCategoryScalarWhereWithAggregatesInput = {
    AND?: TicketCategoryScalarWhereWithAggregatesInput | TicketCategoryScalarWhereWithAggregatesInput[]
    OR?: TicketCategoryScalarWhereWithAggregatesInput[]
    NOT?: TicketCategoryScalarWhereWithAggregatesInput | TicketCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketCategory"> | string
    ticketSettingsId?: StringWithAggregatesFilter<"TicketCategory"> | string
    name?: StringWithAggregatesFilter<"TicketCategory"> | string
    emoji?: StringNullableWithAggregatesFilter<"TicketCategory"> | string | null
    roleId?: StringNullableWithAggregatesFilter<"TicketCategory"> | string | null
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticketSettingsId?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    channelId?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    closedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    ticketSettings?: XOR<TicketSettingsScalarRelationFilter, TicketSettingsWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    ticketSettingsId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    ticketSettings?: TicketSettingsOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    channelId?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    ticketSettingsId?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    closedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    ticketSettings?: XOR<TicketSettingsScalarRelationFilter, TicketSettingsWhereInput>
  }, "id" | "channelId">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    ticketSettingsId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    ticketSettingsId?: StringWithAggregatesFilter<"Ticket"> | string
    userId?: StringWithAggregatesFilter<"Ticket"> | string
    channelId?: StringWithAggregatesFilter<"Ticket"> | string
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
  }

  export type CustomEmbedWhereInput = {
    AND?: CustomEmbedWhereInput | CustomEmbedWhereInput[]
    OR?: CustomEmbedWhereInput[]
    NOT?: CustomEmbedWhereInput | CustomEmbedWhereInput[]
    id?: StringFilter<"CustomEmbed"> | string
    guildId?: StringFilter<"CustomEmbed"> | string
    name?: StringFilter<"CustomEmbed"> | string
    data?: JsonFilter<"CustomEmbed">
    createdAt?: DateTimeFilter<"CustomEmbed"> | Date | string
    updatedAt?: DateTimeFilter<"CustomEmbed"> | Date | string
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
    commands?: CustomCommandListRelationFilter
  }

  export type CustomEmbedOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guild?: GuildConfigOrderByWithRelationInput
    commands?: CustomCommandOrderByRelationAggregateInput
  }

  export type CustomEmbedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CustomEmbedWhereInput | CustomEmbedWhereInput[]
    OR?: CustomEmbedWhereInput[]
    NOT?: CustomEmbedWhereInput | CustomEmbedWhereInput[]
    guildId?: StringFilter<"CustomEmbed"> | string
    data?: JsonFilter<"CustomEmbed">
    createdAt?: DateTimeFilter<"CustomEmbed"> | Date | string
    updatedAt?: DateTimeFilter<"CustomEmbed"> | Date | string
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
    commands?: CustomCommandListRelationFilter
  }, "id" | "name">

  export type CustomEmbedOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomEmbedCountOrderByAggregateInput
    _max?: CustomEmbedMaxOrderByAggregateInput
    _min?: CustomEmbedMinOrderByAggregateInput
  }

  export type CustomEmbedScalarWhereWithAggregatesInput = {
    AND?: CustomEmbedScalarWhereWithAggregatesInput | CustomEmbedScalarWhereWithAggregatesInput[]
    OR?: CustomEmbedScalarWhereWithAggregatesInput[]
    NOT?: CustomEmbedScalarWhereWithAggregatesInput | CustomEmbedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomEmbed"> | string
    guildId?: StringWithAggregatesFilter<"CustomEmbed"> | string
    name?: StringWithAggregatesFilter<"CustomEmbed"> | string
    data?: JsonWithAggregatesFilter<"CustomEmbed">
    createdAt?: DateTimeWithAggregatesFilter<"CustomEmbed"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomEmbed"> | Date | string
  }

  export type CustomCommandWhereInput = {
    AND?: CustomCommandWhereInput | CustomCommandWhereInput[]
    OR?: CustomCommandWhereInput[]
    NOT?: CustomCommandWhereInput | CustomCommandWhereInput[]
    id?: StringFilter<"CustomCommand"> | string
    guildId?: StringFilter<"CustomCommand"> | string
    name?: StringFilter<"CustomCommand"> | string
    description?: StringFilter<"CustomCommand"> | string
    embedId?: StringFilter<"CustomCommand"> | string
    embed?: XOR<CustomEmbedScalarRelationFilter, CustomEmbedWhereInput>
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
  }

  export type CustomCommandOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    embedId?: SortOrder
    embed?: CustomEmbedOrderByWithRelationInput
    guild?: GuildConfigOrderByWithRelationInput
  }

  export type CustomCommandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guildId_name?: CustomCommandGuildIdNameCompoundUniqueInput
    AND?: CustomCommandWhereInput | CustomCommandWhereInput[]
    OR?: CustomCommandWhereInput[]
    NOT?: CustomCommandWhereInput | CustomCommandWhereInput[]
    guildId?: StringFilter<"CustomCommand"> | string
    name?: StringFilter<"CustomCommand"> | string
    description?: StringFilter<"CustomCommand"> | string
    embedId?: StringFilter<"CustomCommand"> | string
    embed?: XOR<CustomEmbedScalarRelationFilter, CustomEmbedWhereInput>
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
  }, "id" | "guildId_name">

  export type CustomCommandOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    embedId?: SortOrder
    _count?: CustomCommandCountOrderByAggregateInput
    _max?: CustomCommandMaxOrderByAggregateInput
    _min?: CustomCommandMinOrderByAggregateInput
  }

  export type CustomCommandScalarWhereWithAggregatesInput = {
    AND?: CustomCommandScalarWhereWithAggregatesInput | CustomCommandScalarWhereWithAggregatesInput[]
    OR?: CustomCommandScalarWhereWithAggregatesInput[]
    NOT?: CustomCommandScalarWhereWithAggregatesInput | CustomCommandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomCommand"> | string
    guildId?: StringWithAggregatesFilter<"CustomCommand"> | string
    name?: StringWithAggregatesFilter<"CustomCommand"> | string
    description?: StringWithAggregatesFilter<"CustomCommand"> | string
    embedId?: StringWithAggregatesFilter<"CustomCommand"> | string
  }

  export type KnowledgeSnippetWhereInput = {
    AND?: KnowledgeSnippetWhereInput | KnowledgeSnippetWhereInput[]
    OR?: KnowledgeSnippetWhereInput[]
    NOT?: KnowledgeSnippetWhereInput | KnowledgeSnippetWhereInput[]
    id?: StringFilter<"KnowledgeSnippet"> | string
    guildId?: StringFilter<"KnowledgeSnippet"> | string
    question?: StringFilter<"KnowledgeSnippet"> | string
    answer?: StringFilter<"KnowledgeSnippet"> | string
    source?: StringNullableFilter<"KnowledgeSnippet"> | string | null
    verified?: BoolFilter<"KnowledgeSnippet"> | boolean
    createdAt?: DateTimeFilter<"KnowledgeSnippet"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeSnippet"> | Date | string
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
  }

  export type KnowledgeSnippetOrderByWithRelationInput = {
    id?: SortOrder
    guildId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    source?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guild?: GuildConfigOrderByWithRelationInput
  }

  export type KnowledgeSnippetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KnowledgeSnippetWhereInput | KnowledgeSnippetWhereInput[]
    OR?: KnowledgeSnippetWhereInput[]
    NOT?: KnowledgeSnippetWhereInput | KnowledgeSnippetWhereInput[]
    guildId?: StringFilter<"KnowledgeSnippet"> | string
    question?: StringFilter<"KnowledgeSnippet"> | string
    answer?: StringFilter<"KnowledgeSnippet"> | string
    source?: StringNullableFilter<"KnowledgeSnippet"> | string | null
    verified?: BoolFilter<"KnowledgeSnippet"> | boolean
    createdAt?: DateTimeFilter<"KnowledgeSnippet"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeSnippet"> | Date | string
    guild?: XOR<GuildConfigScalarRelationFilter, GuildConfigWhereInput>
  }, "id">

  export type KnowledgeSnippetOrderByWithAggregationInput = {
    id?: SortOrder
    guildId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    source?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KnowledgeSnippetCountOrderByAggregateInput
    _max?: KnowledgeSnippetMaxOrderByAggregateInput
    _min?: KnowledgeSnippetMinOrderByAggregateInput
  }

  export type KnowledgeSnippetScalarWhereWithAggregatesInput = {
    AND?: KnowledgeSnippetScalarWhereWithAggregatesInput | KnowledgeSnippetScalarWhereWithAggregatesInput[]
    OR?: KnowledgeSnippetScalarWhereWithAggregatesInput[]
    NOT?: KnowledgeSnippetScalarWhereWithAggregatesInput | KnowledgeSnippetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KnowledgeSnippet"> | string
    guildId?: StringWithAggregatesFilter<"KnowledgeSnippet"> | string
    question?: StringWithAggregatesFilter<"KnowledgeSnippet"> | string
    answer?: StringWithAggregatesFilter<"KnowledgeSnippet"> | string
    source?: StringNullableWithAggregatesFilter<"KnowledgeSnippet"> | string | null
    verified?: BoolWithAggregatesFilter<"KnowledgeSnippet"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"KnowledgeSnippet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KnowledgeSnippet"> | Date | string
  }

  export type GuildConfigCreateInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistCreateNestedManyWithoutGuildInput
    TicketSettings?: TicketSettingsCreateNestedOneWithoutGuildInput
    CustomEmbed?: CustomEmbedCreateNestedManyWithoutGuildInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutGuildInput
    KnowledgeSnippet?: KnowledgeSnippetCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigUncheckedCreateInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUncheckedCreateNestedManyWithoutGuildInput
    TicketSettings?: TicketSettingsUncheckedCreateNestedOneWithoutGuildInput
    CustomEmbed?: CustomEmbedUncheckedCreateNestedManyWithoutGuildInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutGuildInput
    KnowledgeSnippet?: KnowledgeSnippetUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUpdateManyWithoutGuildNestedInput
    TicketSettings?: TicketSettingsUpdateOneWithoutGuildNestedInput
    CustomEmbed?: CustomEmbedUpdateManyWithoutGuildNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutGuildNestedInput
    KnowledgeSnippet?: KnowledgeSnippetUpdateManyWithoutGuildNestedInput
  }

  export type GuildConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUncheckedUpdateManyWithoutGuildNestedInput
    TicketSettings?: TicketSettingsUncheckedUpdateOneWithoutGuildNestedInput
    CustomEmbed?: CustomEmbedUncheckedUpdateManyWithoutGuildNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutGuildNestedInput
    KnowledgeSnippet?: KnowledgeSnippetUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildConfigCreateManyInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
  }

  export type GuildConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
  }

  export type GuildConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
  }

  export type ModWatchlistCreateInput = {
    id?: string
    workshopId: string
    title?: string | null
    lastUpdated?: Date | string
    guild: GuildConfigCreateNestedOneWithoutModWatchlistInput
  }

  export type ModWatchlistUncheckedCreateInput = {
    id?: string
    guildId: string
    workshopId: string
    title?: string | null
    lastUpdated?: Date | string
  }

  export type ModWatchlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workshopId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildConfigUpdateOneRequiredWithoutModWatchlistNestedInput
  }

  export type ModWatchlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    workshopId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModWatchlistCreateManyInput = {
    id?: string
    guildId: string
    workshopId: string
    title?: string | null
    lastUpdated?: Date | string
  }

  export type ModWatchlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    workshopId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModWatchlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    workshopId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketSettingsCreateInput = {
    id?: string
    ticketPanelMessageId?: string | null
    welcomeMessage?: string
    ticketPanelMessage?: string
    guild: GuildConfigCreateNestedOneWithoutTicketSettingsInput
    categories?: TicketCategoryCreateNestedManyWithoutTicketSettingsInput
    tickets?: TicketCreateNestedManyWithoutTicketSettingsInput
  }

  export type TicketSettingsUncheckedCreateInput = {
    id?: string
    guildId: string
    ticketPanelMessageId?: string | null
    welcomeMessage?: string
    ticketPanelMessage?: string
    categories?: TicketCategoryUncheckedCreateNestedManyWithoutTicketSettingsInput
    tickets?: TicketUncheckedCreateNestedManyWithoutTicketSettingsInput
  }

  export type TicketSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketPanelMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    ticketPanelMessage?: StringFieldUpdateOperationsInput | string
    guild?: GuildConfigUpdateOneRequiredWithoutTicketSettingsNestedInput
    categories?: TicketCategoryUpdateManyWithoutTicketSettingsNestedInput
    tickets?: TicketUpdateManyWithoutTicketSettingsNestedInput
  }

  export type TicketSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    ticketPanelMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    ticketPanelMessage?: StringFieldUpdateOperationsInput | string
    categories?: TicketCategoryUncheckedUpdateManyWithoutTicketSettingsNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutTicketSettingsNestedInput
  }

  export type TicketSettingsCreateManyInput = {
    id?: string
    guildId: string
    ticketPanelMessageId?: string | null
    welcomeMessage?: string
    ticketPanelMessage?: string
  }

  export type TicketSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketPanelMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    ticketPanelMessage?: StringFieldUpdateOperationsInput | string
  }

  export type TicketSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    ticketPanelMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    ticketPanelMessage?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCategoryCreateInput = {
    id?: string
    name: string
    emoji?: string | null
    roleId?: string | null
    ticketSettings: TicketSettingsCreateNestedOneWithoutCategoriesInput
  }

  export type TicketCategoryUncheckedCreateInput = {
    id?: string
    ticketSettingsId: string
    name: string
    emoji?: string | null
    roleId?: string | null
  }

  export type TicketCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
    ticketSettings?: TicketSettingsUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type TicketCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketSettingsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCategoryCreateManyInput = {
    id?: string
    ticketSettingsId: string
    name: string
    emoji?: string | null
    roleId?: string | null
  }

  export type TicketCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketSettingsId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCreateInput = {
    id?: string
    userId: string
    channelId: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    closedAt?: Date | string | null
    ticketSettings: TicketSettingsCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    ticketSettingsId: string
    userId: string
    channelId: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    closedAt?: Date | string | null
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketSettings?: TicketSettingsUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketSettingsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketCreateManyInput = {
    id?: string
    ticketSettingsId: string
    userId: string
    channelId: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    closedAt?: Date | string | null
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketSettingsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomEmbedCreateInput = {
    id?: string
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    guild: GuildConfigCreateNestedOneWithoutCustomEmbedInput
    commands?: CustomCommandCreateNestedManyWithoutEmbedInput
  }

  export type CustomEmbedUncheckedCreateInput = {
    id?: string
    guildId: string
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    commands?: CustomCommandUncheckedCreateNestedManyWithoutEmbedInput
  }

  export type CustomEmbedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildConfigUpdateOneRequiredWithoutCustomEmbedNestedInput
    commands?: CustomCommandUpdateManyWithoutEmbedNestedInput
  }

  export type CustomEmbedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commands?: CustomCommandUncheckedUpdateManyWithoutEmbedNestedInput
  }

  export type CustomEmbedCreateManyInput = {
    id?: string
    guildId: string
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomEmbedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomEmbedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomCommandCreateInput = {
    id?: string
    name: string
    description?: string
    embed: CustomEmbedCreateNestedOneWithoutCommandsInput
    guild: GuildConfigCreateNestedOneWithoutCustomCommandInput
  }

  export type CustomCommandUncheckedCreateInput = {
    id?: string
    guildId: string
    name: string
    description?: string
    embedId: string
  }

  export type CustomCommandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embed?: CustomEmbedUpdateOneRequiredWithoutCommandsNestedInput
    guild?: GuildConfigUpdateOneRequiredWithoutCustomCommandNestedInput
  }

  export type CustomCommandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomCommandCreateManyInput = {
    id?: string
    guildId: string
    name: string
    description?: string
    embedId: string
  }

  export type CustomCommandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CustomCommandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedId?: StringFieldUpdateOperationsInput | string
  }

  export type KnowledgeSnippetCreateInput = {
    id?: string
    question: string
    answer: string
    source?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guild: GuildConfigCreateNestedOneWithoutKnowledgeSnippetInput
  }

  export type KnowledgeSnippetUncheckedCreateInput = {
    id?: string
    guildId: string
    question: string
    answer: string
    source?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeSnippetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildConfigUpdateOneRequiredWithoutKnowledgeSnippetNestedInput
  }

  export type KnowledgeSnippetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeSnippetCreateManyInput = {
    id?: string
    guildId: string
    question: string
    answer: string
    source?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeSnippetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeSnippetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ModWatchlistListRelationFilter = {
    every?: ModWatchlistWhereInput
    some?: ModWatchlistWhereInput
    none?: ModWatchlistWhereInput
  }

  export type TicketSettingsNullableScalarRelationFilter = {
    is?: TicketSettingsWhereInput | null
    isNot?: TicketSettingsWhereInput | null
  }

  export type CustomEmbedListRelationFilter = {
    every?: CustomEmbedWhereInput
    some?: CustomEmbedWhereInput
    none?: CustomEmbedWhereInput
  }

  export type CustomCommandListRelationFilter = {
    every?: CustomCommandWhereInput
    some?: CustomCommandWhereInput
    none?: CustomCommandWhereInput
  }

  export type KnowledgeSnippetListRelationFilter = {
    every?: KnowledgeSnippetWhereInput
    some?: KnowledgeSnippetWhereInput
    none?: KnowledgeSnippetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ModWatchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomEmbedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomCommandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KnowledgeSnippetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuildConfigCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    statusChannelId?: SortOrder
    updateChannelId?: SortOrder
    logChannelId?: SortOrder
    statusInterval?: SortOrder
    onlineMessage?: SortOrder
    offlineMessage?: SortOrder
    serverIp?: SortOrder
    serverPort?: SortOrder
    adminRoleIds?: SortOrder
    updateMentionIds?: SortOrder
  }

  export type GuildConfigAvgOrderByAggregateInput = {
    statusInterval?: SortOrder
    serverPort?: SortOrder
  }

  export type GuildConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    statusChannelId?: SortOrder
    updateChannelId?: SortOrder
    logChannelId?: SortOrder
    statusInterval?: SortOrder
    onlineMessage?: SortOrder
    offlineMessage?: SortOrder
    serverIp?: SortOrder
    serverPort?: SortOrder
  }

  export type GuildConfigMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    statusChannelId?: SortOrder
    updateChannelId?: SortOrder
    logChannelId?: SortOrder
    statusInterval?: SortOrder
    onlineMessage?: SortOrder
    offlineMessage?: SortOrder
    serverIp?: SortOrder
    serverPort?: SortOrder
  }

  export type GuildConfigSumOrderByAggregateInput = {
    statusInterval?: SortOrder
    serverPort?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type GuildConfigScalarRelationFilter = {
    is?: GuildConfigWhereInput
    isNot?: GuildConfigWhereInput
  }

  export type ModWatchlistGuildIdWorkshopIdCompoundUniqueInput = {
    guildId: string
    workshopId: string
  }

  export type ModWatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    workshopId?: SortOrder
    title?: SortOrder
    lastUpdated?: SortOrder
  }

  export type ModWatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    workshopId?: SortOrder
    title?: SortOrder
    lastUpdated?: SortOrder
  }

  export type ModWatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    workshopId?: SortOrder
    title?: SortOrder
    lastUpdated?: SortOrder
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

  export type TicketCategoryListRelationFilter = {
    every?: TicketCategoryWhereInput
    some?: TicketCategoryWhereInput
    none?: TicketCategoryWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    ticketPanelMessageId?: SortOrder
    welcomeMessage?: SortOrder
    ticketPanelMessage?: SortOrder
  }

  export type TicketSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    ticketPanelMessageId?: SortOrder
    welcomeMessage?: SortOrder
    ticketPanelMessage?: SortOrder
  }

  export type TicketSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    ticketPanelMessageId?: SortOrder
    welcomeMessage?: SortOrder
    ticketPanelMessage?: SortOrder
  }

  export type TicketSettingsScalarRelationFilter = {
    is?: TicketSettingsWhereInput
    isNot?: TicketSettingsWhereInput
  }

  export type TicketCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    ticketSettingsId?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
  }

  export type TicketCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketSettingsId?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
  }

  export type TicketCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    ticketSettingsId?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    roleId?: SortOrder
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    ticketSettingsId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    closedAt?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketSettingsId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    closedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    ticketSettingsId?: SortOrder
    userId?: SortOrder
    channelId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    closedAt?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CustomEmbedCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomEmbedMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomEmbedMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CustomEmbedScalarRelationFilter = {
    is?: CustomEmbedWhereInput
    isNot?: CustomEmbedWhereInput
  }

  export type CustomCommandGuildIdNameCompoundUniqueInput = {
    guildId: string
    name: string
  }

  export type CustomCommandCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    embedId?: SortOrder
  }

  export type CustomCommandMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    embedId?: SortOrder
  }

  export type CustomCommandMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    embedId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type KnowledgeSnippetCountOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    source?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeSnippetMaxOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    source?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgeSnippetMinOrderByAggregateInput = {
    id?: SortOrder
    guildId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    source?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GuildConfigCreateadminRoleIdsInput = {
    set: string[]
  }

  export type GuildConfigCreateupdateMentionIdsInput = {
    set: string[]
  }

  export type ModWatchlistCreateNestedManyWithoutGuildInput = {
    create?: XOR<ModWatchlistCreateWithoutGuildInput, ModWatchlistUncheckedCreateWithoutGuildInput> | ModWatchlistCreateWithoutGuildInput[] | ModWatchlistUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModWatchlistCreateOrConnectWithoutGuildInput | ModWatchlistCreateOrConnectWithoutGuildInput[]
    createMany?: ModWatchlistCreateManyGuildInputEnvelope
    connect?: ModWatchlistWhereUniqueInput | ModWatchlistWhereUniqueInput[]
  }

  export type TicketSettingsCreateNestedOneWithoutGuildInput = {
    create?: XOR<TicketSettingsCreateWithoutGuildInput, TicketSettingsUncheckedCreateWithoutGuildInput>
    connectOrCreate?: TicketSettingsCreateOrConnectWithoutGuildInput
    connect?: TicketSettingsWhereUniqueInput
  }

  export type CustomEmbedCreateNestedManyWithoutGuildInput = {
    create?: XOR<CustomEmbedCreateWithoutGuildInput, CustomEmbedUncheckedCreateWithoutGuildInput> | CustomEmbedCreateWithoutGuildInput[] | CustomEmbedUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: CustomEmbedCreateOrConnectWithoutGuildInput | CustomEmbedCreateOrConnectWithoutGuildInput[]
    createMany?: CustomEmbedCreateManyGuildInputEnvelope
    connect?: CustomEmbedWhereUniqueInput | CustomEmbedWhereUniqueInput[]
  }

  export type CustomCommandCreateNestedManyWithoutGuildInput = {
    create?: XOR<CustomCommandCreateWithoutGuildInput, CustomCommandUncheckedCreateWithoutGuildInput> | CustomCommandCreateWithoutGuildInput[] | CustomCommandUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutGuildInput | CustomCommandCreateOrConnectWithoutGuildInput[]
    createMany?: CustomCommandCreateManyGuildInputEnvelope
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
  }

  export type KnowledgeSnippetCreateNestedManyWithoutGuildInput = {
    create?: XOR<KnowledgeSnippetCreateWithoutGuildInput, KnowledgeSnippetUncheckedCreateWithoutGuildInput> | KnowledgeSnippetCreateWithoutGuildInput[] | KnowledgeSnippetUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: KnowledgeSnippetCreateOrConnectWithoutGuildInput | KnowledgeSnippetCreateOrConnectWithoutGuildInput[]
    createMany?: KnowledgeSnippetCreateManyGuildInputEnvelope
    connect?: KnowledgeSnippetWhereUniqueInput | KnowledgeSnippetWhereUniqueInput[]
  }

  export type ModWatchlistUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<ModWatchlistCreateWithoutGuildInput, ModWatchlistUncheckedCreateWithoutGuildInput> | ModWatchlistCreateWithoutGuildInput[] | ModWatchlistUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModWatchlistCreateOrConnectWithoutGuildInput | ModWatchlistCreateOrConnectWithoutGuildInput[]
    createMany?: ModWatchlistCreateManyGuildInputEnvelope
    connect?: ModWatchlistWhereUniqueInput | ModWatchlistWhereUniqueInput[]
  }

  export type TicketSettingsUncheckedCreateNestedOneWithoutGuildInput = {
    create?: XOR<TicketSettingsCreateWithoutGuildInput, TicketSettingsUncheckedCreateWithoutGuildInput>
    connectOrCreate?: TicketSettingsCreateOrConnectWithoutGuildInput
    connect?: TicketSettingsWhereUniqueInput
  }

  export type CustomEmbedUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<CustomEmbedCreateWithoutGuildInput, CustomEmbedUncheckedCreateWithoutGuildInput> | CustomEmbedCreateWithoutGuildInput[] | CustomEmbedUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: CustomEmbedCreateOrConnectWithoutGuildInput | CustomEmbedCreateOrConnectWithoutGuildInput[]
    createMany?: CustomEmbedCreateManyGuildInputEnvelope
    connect?: CustomEmbedWhereUniqueInput | CustomEmbedWhereUniqueInput[]
  }

  export type CustomCommandUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<CustomCommandCreateWithoutGuildInput, CustomCommandUncheckedCreateWithoutGuildInput> | CustomCommandCreateWithoutGuildInput[] | CustomCommandUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutGuildInput | CustomCommandCreateOrConnectWithoutGuildInput[]
    createMany?: CustomCommandCreateManyGuildInputEnvelope
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
  }

  export type KnowledgeSnippetUncheckedCreateNestedManyWithoutGuildInput = {
    create?: XOR<KnowledgeSnippetCreateWithoutGuildInput, KnowledgeSnippetUncheckedCreateWithoutGuildInput> | KnowledgeSnippetCreateWithoutGuildInput[] | KnowledgeSnippetUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: KnowledgeSnippetCreateOrConnectWithoutGuildInput | KnowledgeSnippetCreateOrConnectWithoutGuildInput[]
    createMany?: KnowledgeSnippetCreateManyGuildInputEnvelope
    connect?: KnowledgeSnippetWhereUniqueInput | KnowledgeSnippetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GuildConfigUpdateadminRoleIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GuildConfigUpdateupdateMentionIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ModWatchlistUpdateManyWithoutGuildNestedInput = {
    create?: XOR<ModWatchlistCreateWithoutGuildInput, ModWatchlistUncheckedCreateWithoutGuildInput> | ModWatchlistCreateWithoutGuildInput[] | ModWatchlistUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModWatchlistCreateOrConnectWithoutGuildInput | ModWatchlistCreateOrConnectWithoutGuildInput[]
    upsert?: ModWatchlistUpsertWithWhereUniqueWithoutGuildInput | ModWatchlistUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: ModWatchlistCreateManyGuildInputEnvelope
    set?: ModWatchlistWhereUniqueInput | ModWatchlistWhereUniqueInput[]
    disconnect?: ModWatchlistWhereUniqueInput | ModWatchlistWhereUniqueInput[]
    delete?: ModWatchlistWhereUniqueInput | ModWatchlistWhereUniqueInput[]
    connect?: ModWatchlistWhereUniqueInput | ModWatchlistWhereUniqueInput[]
    update?: ModWatchlistUpdateWithWhereUniqueWithoutGuildInput | ModWatchlistUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: ModWatchlistUpdateManyWithWhereWithoutGuildInput | ModWatchlistUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: ModWatchlistScalarWhereInput | ModWatchlistScalarWhereInput[]
  }

  export type TicketSettingsUpdateOneWithoutGuildNestedInput = {
    create?: XOR<TicketSettingsCreateWithoutGuildInput, TicketSettingsUncheckedCreateWithoutGuildInput>
    connectOrCreate?: TicketSettingsCreateOrConnectWithoutGuildInput
    upsert?: TicketSettingsUpsertWithoutGuildInput
    disconnect?: TicketSettingsWhereInput | boolean
    delete?: TicketSettingsWhereInput | boolean
    connect?: TicketSettingsWhereUniqueInput
    update?: XOR<XOR<TicketSettingsUpdateToOneWithWhereWithoutGuildInput, TicketSettingsUpdateWithoutGuildInput>, TicketSettingsUncheckedUpdateWithoutGuildInput>
  }

  export type CustomEmbedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<CustomEmbedCreateWithoutGuildInput, CustomEmbedUncheckedCreateWithoutGuildInput> | CustomEmbedCreateWithoutGuildInput[] | CustomEmbedUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: CustomEmbedCreateOrConnectWithoutGuildInput | CustomEmbedCreateOrConnectWithoutGuildInput[]
    upsert?: CustomEmbedUpsertWithWhereUniqueWithoutGuildInput | CustomEmbedUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: CustomEmbedCreateManyGuildInputEnvelope
    set?: CustomEmbedWhereUniqueInput | CustomEmbedWhereUniqueInput[]
    disconnect?: CustomEmbedWhereUniqueInput | CustomEmbedWhereUniqueInput[]
    delete?: CustomEmbedWhereUniqueInput | CustomEmbedWhereUniqueInput[]
    connect?: CustomEmbedWhereUniqueInput | CustomEmbedWhereUniqueInput[]
    update?: CustomEmbedUpdateWithWhereUniqueWithoutGuildInput | CustomEmbedUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: CustomEmbedUpdateManyWithWhereWithoutGuildInput | CustomEmbedUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: CustomEmbedScalarWhereInput | CustomEmbedScalarWhereInput[]
  }

  export type CustomCommandUpdateManyWithoutGuildNestedInput = {
    create?: XOR<CustomCommandCreateWithoutGuildInput, CustomCommandUncheckedCreateWithoutGuildInput> | CustomCommandCreateWithoutGuildInput[] | CustomCommandUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutGuildInput | CustomCommandCreateOrConnectWithoutGuildInput[]
    upsert?: CustomCommandUpsertWithWhereUniqueWithoutGuildInput | CustomCommandUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: CustomCommandCreateManyGuildInputEnvelope
    set?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    disconnect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    delete?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    update?: CustomCommandUpdateWithWhereUniqueWithoutGuildInput | CustomCommandUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: CustomCommandUpdateManyWithWhereWithoutGuildInput | CustomCommandUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: CustomCommandScalarWhereInput | CustomCommandScalarWhereInput[]
  }

  export type KnowledgeSnippetUpdateManyWithoutGuildNestedInput = {
    create?: XOR<KnowledgeSnippetCreateWithoutGuildInput, KnowledgeSnippetUncheckedCreateWithoutGuildInput> | KnowledgeSnippetCreateWithoutGuildInput[] | KnowledgeSnippetUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: KnowledgeSnippetCreateOrConnectWithoutGuildInput | KnowledgeSnippetCreateOrConnectWithoutGuildInput[]
    upsert?: KnowledgeSnippetUpsertWithWhereUniqueWithoutGuildInput | KnowledgeSnippetUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: KnowledgeSnippetCreateManyGuildInputEnvelope
    set?: KnowledgeSnippetWhereUniqueInput | KnowledgeSnippetWhereUniqueInput[]
    disconnect?: KnowledgeSnippetWhereUniqueInput | KnowledgeSnippetWhereUniqueInput[]
    delete?: KnowledgeSnippetWhereUniqueInput | KnowledgeSnippetWhereUniqueInput[]
    connect?: KnowledgeSnippetWhereUniqueInput | KnowledgeSnippetWhereUniqueInput[]
    update?: KnowledgeSnippetUpdateWithWhereUniqueWithoutGuildInput | KnowledgeSnippetUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: KnowledgeSnippetUpdateManyWithWhereWithoutGuildInput | KnowledgeSnippetUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: KnowledgeSnippetScalarWhereInput | KnowledgeSnippetScalarWhereInput[]
  }

  export type ModWatchlistUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<ModWatchlistCreateWithoutGuildInput, ModWatchlistUncheckedCreateWithoutGuildInput> | ModWatchlistCreateWithoutGuildInput[] | ModWatchlistUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: ModWatchlistCreateOrConnectWithoutGuildInput | ModWatchlistCreateOrConnectWithoutGuildInput[]
    upsert?: ModWatchlistUpsertWithWhereUniqueWithoutGuildInput | ModWatchlistUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: ModWatchlistCreateManyGuildInputEnvelope
    set?: ModWatchlistWhereUniqueInput | ModWatchlistWhereUniqueInput[]
    disconnect?: ModWatchlistWhereUniqueInput | ModWatchlistWhereUniqueInput[]
    delete?: ModWatchlistWhereUniqueInput | ModWatchlistWhereUniqueInput[]
    connect?: ModWatchlistWhereUniqueInput | ModWatchlistWhereUniqueInput[]
    update?: ModWatchlistUpdateWithWhereUniqueWithoutGuildInput | ModWatchlistUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: ModWatchlistUpdateManyWithWhereWithoutGuildInput | ModWatchlistUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: ModWatchlistScalarWhereInput | ModWatchlistScalarWhereInput[]
  }

  export type TicketSettingsUncheckedUpdateOneWithoutGuildNestedInput = {
    create?: XOR<TicketSettingsCreateWithoutGuildInput, TicketSettingsUncheckedCreateWithoutGuildInput>
    connectOrCreate?: TicketSettingsCreateOrConnectWithoutGuildInput
    upsert?: TicketSettingsUpsertWithoutGuildInput
    disconnect?: TicketSettingsWhereInput | boolean
    delete?: TicketSettingsWhereInput | boolean
    connect?: TicketSettingsWhereUniqueInput
    update?: XOR<XOR<TicketSettingsUpdateToOneWithWhereWithoutGuildInput, TicketSettingsUpdateWithoutGuildInput>, TicketSettingsUncheckedUpdateWithoutGuildInput>
  }

  export type CustomEmbedUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<CustomEmbedCreateWithoutGuildInput, CustomEmbedUncheckedCreateWithoutGuildInput> | CustomEmbedCreateWithoutGuildInput[] | CustomEmbedUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: CustomEmbedCreateOrConnectWithoutGuildInput | CustomEmbedCreateOrConnectWithoutGuildInput[]
    upsert?: CustomEmbedUpsertWithWhereUniqueWithoutGuildInput | CustomEmbedUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: CustomEmbedCreateManyGuildInputEnvelope
    set?: CustomEmbedWhereUniqueInput | CustomEmbedWhereUniqueInput[]
    disconnect?: CustomEmbedWhereUniqueInput | CustomEmbedWhereUniqueInput[]
    delete?: CustomEmbedWhereUniqueInput | CustomEmbedWhereUniqueInput[]
    connect?: CustomEmbedWhereUniqueInput | CustomEmbedWhereUniqueInput[]
    update?: CustomEmbedUpdateWithWhereUniqueWithoutGuildInput | CustomEmbedUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: CustomEmbedUpdateManyWithWhereWithoutGuildInput | CustomEmbedUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: CustomEmbedScalarWhereInput | CustomEmbedScalarWhereInput[]
  }

  export type CustomCommandUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<CustomCommandCreateWithoutGuildInput, CustomCommandUncheckedCreateWithoutGuildInput> | CustomCommandCreateWithoutGuildInput[] | CustomCommandUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutGuildInput | CustomCommandCreateOrConnectWithoutGuildInput[]
    upsert?: CustomCommandUpsertWithWhereUniqueWithoutGuildInput | CustomCommandUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: CustomCommandCreateManyGuildInputEnvelope
    set?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    disconnect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    delete?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    update?: CustomCommandUpdateWithWhereUniqueWithoutGuildInput | CustomCommandUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: CustomCommandUpdateManyWithWhereWithoutGuildInput | CustomCommandUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: CustomCommandScalarWhereInput | CustomCommandScalarWhereInput[]
  }

  export type KnowledgeSnippetUncheckedUpdateManyWithoutGuildNestedInput = {
    create?: XOR<KnowledgeSnippetCreateWithoutGuildInput, KnowledgeSnippetUncheckedCreateWithoutGuildInput> | KnowledgeSnippetCreateWithoutGuildInput[] | KnowledgeSnippetUncheckedCreateWithoutGuildInput[]
    connectOrCreate?: KnowledgeSnippetCreateOrConnectWithoutGuildInput | KnowledgeSnippetCreateOrConnectWithoutGuildInput[]
    upsert?: KnowledgeSnippetUpsertWithWhereUniqueWithoutGuildInput | KnowledgeSnippetUpsertWithWhereUniqueWithoutGuildInput[]
    createMany?: KnowledgeSnippetCreateManyGuildInputEnvelope
    set?: KnowledgeSnippetWhereUniqueInput | KnowledgeSnippetWhereUniqueInput[]
    disconnect?: KnowledgeSnippetWhereUniqueInput | KnowledgeSnippetWhereUniqueInput[]
    delete?: KnowledgeSnippetWhereUniqueInput | KnowledgeSnippetWhereUniqueInput[]
    connect?: KnowledgeSnippetWhereUniqueInput | KnowledgeSnippetWhereUniqueInput[]
    update?: KnowledgeSnippetUpdateWithWhereUniqueWithoutGuildInput | KnowledgeSnippetUpdateWithWhereUniqueWithoutGuildInput[]
    updateMany?: KnowledgeSnippetUpdateManyWithWhereWithoutGuildInput | KnowledgeSnippetUpdateManyWithWhereWithoutGuildInput[]
    deleteMany?: KnowledgeSnippetScalarWhereInput | KnowledgeSnippetScalarWhereInput[]
  }

  export type GuildConfigCreateNestedOneWithoutModWatchlistInput = {
    create?: XOR<GuildConfigCreateWithoutModWatchlistInput, GuildConfigUncheckedCreateWithoutModWatchlistInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutModWatchlistInput
    connect?: GuildConfigWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GuildConfigUpdateOneRequiredWithoutModWatchlistNestedInput = {
    create?: XOR<GuildConfigCreateWithoutModWatchlistInput, GuildConfigUncheckedCreateWithoutModWatchlistInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutModWatchlistInput
    upsert?: GuildConfigUpsertWithoutModWatchlistInput
    connect?: GuildConfigWhereUniqueInput
    update?: XOR<XOR<GuildConfigUpdateToOneWithWhereWithoutModWatchlistInput, GuildConfigUpdateWithoutModWatchlistInput>, GuildConfigUncheckedUpdateWithoutModWatchlistInput>
  }

  export type GuildConfigCreateNestedOneWithoutTicketSettingsInput = {
    create?: XOR<GuildConfigCreateWithoutTicketSettingsInput, GuildConfigUncheckedCreateWithoutTicketSettingsInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutTicketSettingsInput
    connect?: GuildConfigWhereUniqueInput
  }

  export type TicketCategoryCreateNestedManyWithoutTicketSettingsInput = {
    create?: XOR<TicketCategoryCreateWithoutTicketSettingsInput, TicketCategoryUncheckedCreateWithoutTicketSettingsInput> | TicketCategoryCreateWithoutTicketSettingsInput[] | TicketCategoryUncheckedCreateWithoutTicketSettingsInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTicketSettingsInput | TicketCategoryCreateOrConnectWithoutTicketSettingsInput[]
    createMany?: TicketCategoryCreateManyTicketSettingsInputEnvelope
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutTicketSettingsInput = {
    create?: XOR<TicketCreateWithoutTicketSettingsInput, TicketUncheckedCreateWithoutTicketSettingsInput> | TicketCreateWithoutTicketSettingsInput[] | TicketUncheckedCreateWithoutTicketSettingsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketSettingsInput | TicketCreateOrConnectWithoutTicketSettingsInput[]
    createMany?: TicketCreateManyTicketSettingsInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketCategoryUncheckedCreateNestedManyWithoutTicketSettingsInput = {
    create?: XOR<TicketCategoryCreateWithoutTicketSettingsInput, TicketCategoryUncheckedCreateWithoutTicketSettingsInput> | TicketCategoryCreateWithoutTicketSettingsInput[] | TicketCategoryUncheckedCreateWithoutTicketSettingsInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTicketSettingsInput | TicketCategoryCreateOrConnectWithoutTicketSettingsInput[]
    createMany?: TicketCategoryCreateManyTicketSettingsInputEnvelope
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutTicketSettingsInput = {
    create?: XOR<TicketCreateWithoutTicketSettingsInput, TicketUncheckedCreateWithoutTicketSettingsInput> | TicketCreateWithoutTicketSettingsInput[] | TicketUncheckedCreateWithoutTicketSettingsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketSettingsInput | TicketCreateOrConnectWithoutTicketSettingsInput[]
    createMany?: TicketCreateManyTicketSettingsInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type GuildConfigUpdateOneRequiredWithoutTicketSettingsNestedInput = {
    create?: XOR<GuildConfigCreateWithoutTicketSettingsInput, GuildConfigUncheckedCreateWithoutTicketSettingsInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutTicketSettingsInput
    upsert?: GuildConfigUpsertWithoutTicketSettingsInput
    connect?: GuildConfigWhereUniqueInput
    update?: XOR<XOR<GuildConfigUpdateToOneWithWhereWithoutTicketSettingsInput, GuildConfigUpdateWithoutTicketSettingsInput>, GuildConfigUncheckedUpdateWithoutTicketSettingsInput>
  }

  export type TicketCategoryUpdateManyWithoutTicketSettingsNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutTicketSettingsInput, TicketCategoryUncheckedCreateWithoutTicketSettingsInput> | TicketCategoryCreateWithoutTicketSettingsInput[] | TicketCategoryUncheckedCreateWithoutTicketSettingsInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTicketSettingsInput | TicketCategoryCreateOrConnectWithoutTicketSettingsInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutTicketSettingsInput | TicketCategoryUpsertWithWhereUniqueWithoutTicketSettingsInput[]
    createMany?: TicketCategoryCreateManyTicketSettingsInputEnvelope
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutTicketSettingsInput | TicketCategoryUpdateWithWhereUniqueWithoutTicketSettingsInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutTicketSettingsInput | TicketCategoryUpdateManyWithWhereWithoutTicketSettingsInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutTicketSettingsNestedInput = {
    create?: XOR<TicketCreateWithoutTicketSettingsInput, TicketUncheckedCreateWithoutTicketSettingsInput> | TicketCreateWithoutTicketSettingsInput[] | TicketUncheckedCreateWithoutTicketSettingsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketSettingsInput | TicketCreateOrConnectWithoutTicketSettingsInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTicketSettingsInput | TicketUpsertWithWhereUniqueWithoutTicketSettingsInput[]
    createMany?: TicketCreateManyTicketSettingsInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTicketSettingsInput | TicketUpdateWithWhereUniqueWithoutTicketSettingsInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTicketSettingsInput | TicketUpdateManyWithWhereWithoutTicketSettingsInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCategoryUncheckedUpdateManyWithoutTicketSettingsNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutTicketSettingsInput, TicketCategoryUncheckedCreateWithoutTicketSettingsInput> | TicketCategoryCreateWithoutTicketSettingsInput[] | TicketCategoryUncheckedCreateWithoutTicketSettingsInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTicketSettingsInput | TicketCategoryCreateOrConnectWithoutTicketSettingsInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutTicketSettingsInput | TicketCategoryUpsertWithWhereUniqueWithoutTicketSettingsInput[]
    createMany?: TicketCategoryCreateManyTicketSettingsInputEnvelope
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutTicketSettingsInput | TicketCategoryUpdateWithWhereUniqueWithoutTicketSettingsInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutTicketSettingsInput | TicketCategoryUpdateManyWithWhereWithoutTicketSettingsInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutTicketSettingsNestedInput = {
    create?: XOR<TicketCreateWithoutTicketSettingsInput, TicketUncheckedCreateWithoutTicketSettingsInput> | TicketCreateWithoutTicketSettingsInput[] | TicketUncheckedCreateWithoutTicketSettingsInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketSettingsInput | TicketCreateOrConnectWithoutTicketSettingsInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTicketSettingsInput | TicketUpsertWithWhereUniqueWithoutTicketSettingsInput[]
    createMany?: TicketCreateManyTicketSettingsInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTicketSettingsInput | TicketUpdateWithWhereUniqueWithoutTicketSettingsInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTicketSettingsInput | TicketUpdateManyWithWhereWithoutTicketSettingsInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketSettingsCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<TicketSettingsCreateWithoutCategoriesInput, TicketSettingsUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TicketSettingsCreateOrConnectWithoutCategoriesInput
    connect?: TicketSettingsWhereUniqueInput
  }

  export type TicketSettingsUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<TicketSettingsCreateWithoutCategoriesInput, TicketSettingsUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: TicketSettingsCreateOrConnectWithoutCategoriesInput
    upsert?: TicketSettingsUpsertWithoutCategoriesInput
    connect?: TicketSettingsWhereUniqueInput
    update?: XOR<XOR<TicketSettingsUpdateToOneWithWhereWithoutCategoriesInput, TicketSettingsUpdateWithoutCategoriesInput>, TicketSettingsUncheckedUpdateWithoutCategoriesInput>
  }

  export type TicketSettingsCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TicketSettingsCreateWithoutTicketsInput, TicketSettingsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketSettingsCreateOrConnectWithoutTicketsInput
    connect?: TicketSettingsWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TicketSettingsUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<TicketSettingsCreateWithoutTicketsInput, TicketSettingsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketSettingsCreateOrConnectWithoutTicketsInput
    upsert?: TicketSettingsUpsertWithoutTicketsInput
    connect?: TicketSettingsWhereUniqueInput
    update?: XOR<XOR<TicketSettingsUpdateToOneWithWhereWithoutTicketsInput, TicketSettingsUpdateWithoutTicketsInput>, TicketSettingsUncheckedUpdateWithoutTicketsInput>
  }

  export type GuildConfigCreateNestedOneWithoutCustomEmbedInput = {
    create?: XOR<GuildConfigCreateWithoutCustomEmbedInput, GuildConfigUncheckedCreateWithoutCustomEmbedInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutCustomEmbedInput
    connect?: GuildConfigWhereUniqueInput
  }

  export type CustomCommandCreateNestedManyWithoutEmbedInput = {
    create?: XOR<CustomCommandCreateWithoutEmbedInput, CustomCommandUncheckedCreateWithoutEmbedInput> | CustomCommandCreateWithoutEmbedInput[] | CustomCommandUncheckedCreateWithoutEmbedInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutEmbedInput | CustomCommandCreateOrConnectWithoutEmbedInput[]
    createMany?: CustomCommandCreateManyEmbedInputEnvelope
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
  }

  export type CustomCommandUncheckedCreateNestedManyWithoutEmbedInput = {
    create?: XOR<CustomCommandCreateWithoutEmbedInput, CustomCommandUncheckedCreateWithoutEmbedInput> | CustomCommandCreateWithoutEmbedInput[] | CustomCommandUncheckedCreateWithoutEmbedInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutEmbedInput | CustomCommandCreateOrConnectWithoutEmbedInput[]
    createMany?: CustomCommandCreateManyEmbedInputEnvelope
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
  }

  export type GuildConfigUpdateOneRequiredWithoutCustomEmbedNestedInput = {
    create?: XOR<GuildConfigCreateWithoutCustomEmbedInput, GuildConfigUncheckedCreateWithoutCustomEmbedInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutCustomEmbedInput
    upsert?: GuildConfigUpsertWithoutCustomEmbedInput
    connect?: GuildConfigWhereUniqueInput
    update?: XOR<XOR<GuildConfigUpdateToOneWithWhereWithoutCustomEmbedInput, GuildConfigUpdateWithoutCustomEmbedInput>, GuildConfigUncheckedUpdateWithoutCustomEmbedInput>
  }

  export type CustomCommandUpdateManyWithoutEmbedNestedInput = {
    create?: XOR<CustomCommandCreateWithoutEmbedInput, CustomCommandUncheckedCreateWithoutEmbedInput> | CustomCommandCreateWithoutEmbedInput[] | CustomCommandUncheckedCreateWithoutEmbedInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutEmbedInput | CustomCommandCreateOrConnectWithoutEmbedInput[]
    upsert?: CustomCommandUpsertWithWhereUniqueWithoutEmbedInput | CustomCommandUpsertWithWhereUniqueWithoutEmbedInput[]
    createMany?: CustomCommandCreateManyEmbedInputEnvelope
    set?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    disconnect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    delete?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    update?: CustomCommandUpdateWithWhereUniqueWithoutEmbedInput | CustomCommandUpdateWithWhereUniqueWithoutEmbedInput[]
    updateMany?: CustomCommandUpdateManyWithWhereWithoutEmbedInput | CustomCommandUpdateManyWithWhereWithoutEmbedInput[]
    deleteMany?: CustomCommandScalarWhereInput | CustomCommandScalarWhereInput[]
  }

  export type CustomCommandUncheckedUpdateManyWithoutEmbedNestedInput = {
    create?: XOR<CustomCommandCreateWithoutEmbedInput, CustomCommandUncheckedCreateWithoutEmbedInput> | CustomCommandCreateWithoutEmbedInput[] | CustomCommandUncheckedCreateWithoutEmbedInput[]
    connectOrCreate?: CustomCommandCreateOrConnectWithoutEmbedInput | CustomCommandCreateOrConnectWithoutEmbedInput[]
    upsert?: CustomCommandUpsertWithWhereUniqueWithoutEmbedInput | CustomCommandUpsertWithWhereUniqueWithoutEmbedInput[]
    createMany?: CustomCommandCreateManyEmbedInputEnvelope
    set?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    disconnect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    delete?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    connect?: CustomCommandWhereUniqueInput | CustomCommandWhereUniqueInput[]
    update?: CustomCommandUpdateWithWhereUniqueWithoutEmbedInput | CustomCommandUpdateWithWhereUniqueWithoutEmbedInput[]
    updateMany?: CustomCommandUpdateManyWithWhereWithoutEmbedInput | CustomCommandUpdateManyWithWhereWithoutEmbedInput[]
    deleteMany?: CustomCommandScalarWhereInput | CustomCommandScalarWhereInput[]
  }

  export type CustomEmbedCreateNestedOneWithoutCommandsInput = {
    create?: XOR<CustomEmbedCreateWithoutCommandsInput, CustomEmbedUncheckedCreateWithoutCommandsInput>
    connectOrCreate?: CustomEmbedCreateOrConnectWithoutCommandsInput
    connect?: CustomEmbedWhereUniqueInput
  }

  export type GuildConfigCreateNestedOneWithoutCustomCommandInput = {
    create?: XOR<GuildConfigCreateWithoutCustomCommandInput, GuildConfigUncheckedCreateWithoutCustomCommandInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutCustomCommandInput
    connect?: GuildConfigWhereUniqueInput
  }

  export type CustomEmbedUpdateOneRequiredWithoutCommandsNestedInput = {
    create?: XOR<CustomEmbedCreateWithoutCommandsInput, CustomEmbedUncheckedCreateWithoutCommandsInput>
    connectOrCreate?: CustomEmbedCreateOrConnectWithoutCommandsInput
    upsert?: CustomEmbedUpsertWithoutCommandsInput
    connect?: CustomEmbedWhereUniqueInput
    update?: XOR<XOR<CustomEmbedUpdateToOneWithWhereWithoutCommandsInput, CustomEmbedUpdateWithoutCommandsInput>, CustomEmbedUncheckedUpdateWithoutCommandsInput>
  }

  export type GuildConfigUpdateOneRequiredWithoutCustomCommandNestedInput = {
    create?: XOR<GuildConfigCreateWithoutCustomCommandInput, GuildConfigUncheckedCreateWithoutCustomCommandInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutCustomCommandInput
    upsert?: GuildConfigUpsertWithoutCustomCommandInput
    connect?: GuildConfigWhereUniqueInput
    update?: XOR<XOR<GuildConfigUpdateToOneWithWhereWithoutCustomCommandInput, GuildConfigUpdateWithoutCustomCommandInput>, GuildConfigUncheckedUpdateWithoutCustomCommandInput>
  }

  export type GuildConfigCreateNestedOneWithoutKnowledgeSnippetInput = {
    create?: XOR<GuildConfigCreateWithoutKnowledgeSnippetInput, GuildConfigUncheckedCreateWithoutKnowledgeSnippetInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutKnowledgeSnippetInput
    connect?: GuildConfigWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GuildConfigUpdateOneRequiredWithoutKnowledgeSnippetNestedInput = {
    create?: XOR<GuildConfigCreateWithoutKnowledgeSnippetInput, GuildConfigUncheckedCreateWithoutKnowledgeSnippetInput>
    connectOrCreate?: GuildConfigCreateOrConnectWithoutKnowledgeSnippetInput
    upsert?: GuildConfigUpsertWithoutKnowledgeSnippetInput
    connect?: GuildConfigWhereUniqueInput
    update?: XOR<XOR<GuildConfigUpdateToOneWithWhereWithoutKnowledgeSnippetInput, GuildConfigUpdateWithoutKnowledgeSnippetInput>, GuildConfigUncheckedUpdateWithoutKnowledgeSnippetInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type ModWatchlistCreateWithoutGuildInput = {
    id?: string
    workshopId: string
    title?: string | null
    lastUpdated?: Date | string
  }

  export type ModWatchlistUncheckedCreateWithoutGuildInput = {
    id?: string
    workshopId: string
    title?: string | null
    lastUpdated?: Date | string
  }

  export type ModWatchlistCreateOrConnectWithoutGuildInput = {
    where: ModWatchlistWhereUniqueInput
    create: XOR<ModWatchlistCreateWithoutGuildInput, ModWatchlistUncheckedCreateWithoutGuildInput>
  }

  export type ModWatchlistCreateManyGuildInputEnvelope = {
    data: ModWatchlistCreateManyGuildInput | ModWatchlistCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type TicketSettingsCreateWithoutGuildInput = {
    id?: string
    ticketPanelMessageId?: string | null
    welcomeMessage?: string
    ticketPanelMessage?: string
    categories?: TicketCategoryCreateNestedManyWithoutTicketSettingsInput
    tickets?: TicketCreateNestedManyWithoutTicketSettingsInput
  }

  export type TicketSettingsUncheckedCreateWithoutGuildInput = {
    id?: string
    ticketPanelMessageId?: string | null
    welcomeMessage?: string
    ticketPanelMessage?: string
    categories?: TicketCategoryUncheckedCreateNestedManyWithoutTicketSettingsInput
    tickets?: TicketUncheckedCreateNestedManyWithoutTicketSettingsInput
  }

  export type TicketSettingsCreateOrConnectWithoutGuildInput = {
    where: TicketSettingsWhereUniqueInput
    create: XOR<TicketSettingsCreateWithoutGuildInput, TicketSettingsUncheckedCreateWithoutGuildInput>
  }

  export type CustomEmbedCreateWithoutGuildInput = {
    id?: string
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    commands?: CustomCommandCreateNestedManyWithoutEmbedInput
  }

  export type CustomEmbedUncheckedCreateWithoutGuildInput = {
    id?: string
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    commands?: CustomCommandUncheckedCreateNestedManyWithoutEmbedInput
  }

  export type CustomEmbedCreateOrConnectWithoutGuildInput = {
    where: CustomEmbedWhereUniqueInput
    create: XOR<CustomEmbedCreateWithoutGuildInput, CustomEmbedUncheckedCreateWithoutGuildInput>
  }

  export type CustomEmbedCreateManyGuildInputEnvelope = {
    data: CustomEmbedCreateManyGuildInput | CustomEmbedCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type CustomCommandCreateWithoutGuildInput = {
    id?: string
    name: string
    description?: string
    embed: CustomEmbedCreateNestedOneWithoutCommandsInput
  }

  export type CustomCommandUncheckedCreateWithoutGuildInput = {
    id?: string
    name: string
    description?: string
    embedId: string
  }

  export type CustomCommandCreateOrConnectWithoutGuildInput = {
    where: CustomCommandWhereUniqueInput
    create: XOR<CustomCommandCreateWithoutGuildInput, CustomCommandUncheckedCreateWithoutGuildInput>
  }

  export type CustomCommandCreateManyGuildInputEnvelope = {
    data: CustomCommandCreateManyGuildInput | CustomCommandCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type KnowledgeSnippetCreateWithoutGuildInput = {
    id?: string
    question: string
    answer: string
    source?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeSnippetUncheckedCreateWithoutGuildInput = {
    id?: string
    question: string
    answer: string
    source?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KnowledgeSnippetCreateOrConnectWithoutGuildInput = {
    where: KnowledgeSnippetWhereUniqueInput
    create: XOR<KnowledgeSnippetCreateWithoutGuildInput, KnowledgeSnippetUncheckedCreateWithoutGuildInput>
  }

  export type KnowledgeSnippetCreateManyGuildInputEnvelope = {
    data: KnowledgeSnippetCreateManyGuildInput | KnowledgeSnippetCreateManyGuildInput[]
    skipDuplicates?: boolean
  }

  export type ModWatchlistUpsertWithWhereUniqueWithoutGuildInput = {
    where: ModWatchlistWhereUniqueInput
    update: XOR<ModWatchlistUpdateWithoutGuildInput, ModWatchlistUncheckedUpdateWithoutGuildInput>
    create: XOR<ModWatchlistCreateWithoutGuildInput, ModWatchlistUncheckedCreateWithoutGuildInput>
  }

  export type ModWatchlistUpdateWithWhereUniqueWithoutGuildInput = {
    where: ModWatchlistWhereUniqueInput
    data: XOR<ModWatchlistUpdateWithoutGuildInput, ModWatchlistUncheckedUpdateWithoutGuildInput>
  }

  export type ModWatchlistUpdateManyWithWhereWithoutGuildInput = {
    where: ModWatchlistScalarWhereInput
    data: XOR<ModWatchlistUpdateManyMutationInput, ModWatchlistUncheckedUpdateManyWithoutGuildInput>
  }

  export type ModWatchlistScalarWhereInput = {
    AND?: ModWatchlistScalarWhereInput | ModWatchlistScalarWhereInput[]
    OR?: ModWatchlistScalarWhereInput[]
    NOT?: ModWatchlistScalarWhereInput | ModWatchlistScalarWhereInput[]
    id?: StringFilter<"ModWatchlist"> | string
    guildId?: StringFilter<"ModWatchlist"> | string
    workshopId?: StringFilter<"ModWatchlist"> | string
    title?: StringNullableFilter<"ModWatchlist"> | string | null
    lastUpdated?: DateTimeFilter<"ModWatchlist"> | Date | string
  }

  export type TicketSettingsUpsertWithoutGuildInput = {
    update: XOR<TicketSettingsUpdateWithoutGuildInput, TicketSettingsUncheckedUpdateWithoutGuildInput>
    create: XOR<TicketSettingsCreateWithoutGuildInput, TicketSettingsUncheckedCreateWithoutGuildInput>
    where?: TicketSettingsWhereInput
  }

  export type TicketSettingsUpdateToOneWithWhereWithoutGuildInput = {
    where?: TicketSettingsWhereInput
    data: XOR<TicketSettingsUpdateWithoutGuildInput, TicketSettingsUncheckedUpdateWithoutGuildInput>
  }

  export type TicketSettingsUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketPanelMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    ticketPanelMessage?: StringFieldUpdateOperationsInput | string
    categories?: TicketCategoryUpdateManyWithoutTicketSettingsNestedInput
    tickets?: TicketUpdateManyWithoutTicketSettingsNestedInput
  }

  export type TicketSettingsUncheckedUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketPanelMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    ticketPanelMessage?: StringFieldUpdateOperationsInput | string
    categories?: TicketCategoryUncheckedUpdateManyWithoutTicketSettingsNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutTicketSettingsNestedInput
  }

  export type CustomEmbedUpsertWithWhereUniqueWithoutGuildInput = {
    where: CustomEmbedWhereUniqueInput
    update: XOR<CustomEmbedUpdateWithoutGuildInput, CustomEmbedUncheckedUpdateWithoutGuildInput>
    create: XOR<CustomEmbedCreateWithoutGuildInput, CustomEmbedUncheckedCreateWithoutGuildInput>
  }

  export type CustomEmbedUpdateWithWhereUniqueWithoutGuildInput = {
    where: CustomEmbedWhereUniqueInput
    data: XOR<CustomEmbedUpdateWithoutGuildInput, CustomEmbedUncheckedUpdateWithoutGuildInput>
  }

  export type CustomEmbedUpdateManyWithWhereWithoutGuildInput = {
    where: CustomEmbedScalarWhereInput
    data: XOR<CustomEmbedUpdateManyMutationInput, CustomEmbedUncheckedUpdateManyWithoutGuildInput>
  }

  export type CustomEmbedScalarWhereInput = {
    AND?: CustomEmbedScalarWhereInput | CustomEmbedScalarWhereInput[]
    OR?: CustomEmbedScalarWhereInput[]
    NOT?: CustomEmbedScalarWhereInput | CustomEmbedScalarWhereInput[]
    id?: StringFilter<"CustomEmbed"> | string
    guildId?: StringFilter<"CustomEmbed"> | string
    name?: StringFilter<"CustomEmbed"> | string
    data?: JsonFilter<"CustomEmbed">
    createdAt?: DateTimeFilter<"CustomEmbed"> | Date | string
    updatedAt?: DateTimeFilter<"CustomEmbed"> | Date | string
  }

  export type CustomCommandUpsertWithWhereUniqueWithoutGuildInput = {
    where: CustomCommandWhereUniqueInput
    update: XOR<CustomCommandUpdateWithoutGuildInput, CustomCommandUncheckedUpdateWithoutGuildInput>
    create: XOR<CustomCommandCreateWithoutGuildInput, CustomCommandUncheckedCreateWithoutGuildInput>
  }

  export type CustomCommandUpdateWithWhereUniqueWithoutGuildInput = {
    where: CustomCommandWhereUniqueInput
    data: XOR<CustomCommandUpdateWithoutGuildInput, CustomCommandUncheckedUpdateWithoutGuildInput>
  }

  export type CustomCommandUpdateManyWithWhereWithoutGuildInput = {
    where: CustomCommandScalarWhereInput
    data: XOR<CustomCommandUpdateManyMutationInput, CustomCommandUncheckedUpdateManyWithoutGuildInput>
  }

  export type CustomCommandScalarWhereInput = {
    AND?: CustomCommandScalarWhereInput | CustomCommandScalarWhereInput[]
    OR?: CustomCommandScalarWhereInput[]
    NOT?: CustomCommandScalarWhereInput | CustomCommandScalarWhereInput[]
    id?: StringFilter<"CustomCommand"> | string
    guildId?: StringFilter<"CustomCommand"> | string
    name?: StringFilter<"CustomCommand"> | string
    description?: StringFilter<"CustomCommand"> | string
    embedId?: StringFilter<"CustomCommand"> | string
  }

  export type KnowledgeSnippetUpsertWithWhereUniqueWithoutGuildInput = {
    where: KnowledgeSnippetWhereUniqueInput
    update: XOR<KnowledgeSnippetUpdateWithoutGuildInput, KnowledgeSnippetUncheckedUpdateWithoutGuildInput>
    create: XOR<KnowledgeSnippetCreateWithoutGuildInput, KnowledgeSnippetUncheckedCreateWithoutGuildInput>
  }

  export type KnowledgeSnippetUpdateWithWhereUniqueWithoutGuildInput = {
    where: KnowledgeSnippetWhereUniqueInput
    data: XOR<KnowledgeSnippetUpdateWithoutGuildInput, KnowledgeSnippetUncheckedUpdateWithoutGuildInput>
  }

  export type KnowledgeSnippetUpdateManyWithWhereWithoutGuildInput = {
    where: KnowledgeSnippetScalarWhereInput
    data: XOR<KnowledgeSnippetUpdateManyMutationInput, KnowledgeSnippetUncheckedUpdateManyWithoutGuildInput>
  }

  export type KnowledgeSnippetScalarWhereInput = {
    AND?: KnowledgeSnippetScalarWhereInput | KnowledgeSnippetScalarWhereInput[]
    OR?: KnowledgeSnippetScalarWhereInput[]
    NOT?: KnowledgeSnippetScalarWhereInput | KnowledgeSnippetScalarWhereInput[]
    id?: StringFilter<"KnowledgeSnippet"> | string
    guildId?: StringFilter<"KnowledgeSnippet"> | string
    question?: StringFilter<"KnowledgeSnippet"> | string
    answer?: StringFilter<"KnowledgeSnippet"> | string
    source?: StringNullableFilter<"KnowledgeSnippet"> | string | null
    verified?: BoolFilter<"KnowledgeSnippet"> | boolean
    createdAt?: DateTimeFilter<"KnowledgeSnippet"> | Date | string
    updatedAt?: DateTimeFilter<"KnowledgeSnippet"> | Date | string
  }

  export type GuildConfigCreateWithoutModWatchlistInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    TicketSettings?: TicketSettingsCreateNestedOneWithoutGuildInput
    CustomEmbed?: CustomEmbedCreateNestedManyWithoutGuildInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutGuildInput
    KnowledgeSnippet?: KnowledgeSnippetCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigUncheckedCreateWithoutModWatchlistInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    TicketSettings?: TicketSettingsUncheckedCreateNestedOneWithoutGuildInput
    CustomEmbed?: CustomEmbedUncheckedCreateNestedManyWithoutGuildInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutGuildInput
    KnowledgeSnippet?: KnowledgeSnippetUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigCreateOrConnectWithoutModWatchlistInput = {
    where: GuildConfigWhereUniqueInput
    create: XOR<GuildConfigCreateWithoutModWatchlistInput, GuildConfigUncheckedCreateWithoutModWatchlistInput>
  }

  export type GuildConfigUpsertWithoutModWatchlistInput = {
    update: XOR<GuildConfigUpdateWithoutModWatchlistInput, GuildConfigUncheckedUpdateWithoutModWatchlistInput>
    create: XOR<GuildConfigCreateWithoutModWatchlistInput, GuildConfigUncheckedCreateWithoutModWatchlistInput>
    where?: GuildConfigWhereInput
  }

  export type GuildConfigUpdateToOneWithWhereWithoutModWatchlistInput = {
    where?: GuildConfigWhereInput
    data: XOR<GuildConfigUpdateWithoutModWatchlistInput, GuildConfigUncheckedUpdateWithoutModWatchlistInput>
  }

  export type GuildConfigUpdateWithoutModWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    TicketSettings?: TicketSettingsUpdateOneWithoutGuildNestedInput
    CustomEmbed?: CustomEmbedUpdateManyWithoutGuildNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutGuildNestedInput
    KnowledgeSnippet?: KnowledgeSnippetUpdateManyWithoutGuildNestedInput
  }

  export type GuildConfigUncheckedUpdateWithoutModWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    TicketSettings?: TicketSettingsUncheckedUpdateOneWithoutGuildNestedInput
    CustomEmbed?: CustomEmbedUncheckedUpdateManyWithoutGuildNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutGuildNestedInput
    KnowledgeSnippet?: KnowledgeSnippetUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildConfigCreateWithoutTicketSettingsInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistCreateNestedManyWithoutGuildInput
    CustomEmbed?: CustomEmbedCreateNestedManyWithoutGuildInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutGuildInput
    KnowledgeSnippet?: KnowledgeSnippetCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigUncheckedCreateWithoutTicketSettingsInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUncheckedCreateNestedManyWithoutGuildInput
    CustomEmbed?: CustomEmbedUncheckedCreateNestedManyWithoutGuildInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutGuildInput
    KnowledgeSnippet?: KnowledgeSnippetUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigCreateOrConnectWithoutTicketSettingsInput = {
    where: GuildConfigWhereUniqueInput
    create: XOR<GuildConfigCreateWithoutTicketSettingsInput, GuildConfigUncheckedCreateWithoutTicketSettingsInput>
  }

  export type TicketCategoryCreateWithoutTicketSettingsInput = {
    id?: string
    name: string
    emoji?: string | null
    roleId?: string | null
  }

  export type TicketCategoryUncheckedCreateWithoutTicketSettingsInput = {
    id?: string
    name: string
    emoji?: string | null
    roleId?: string | null
  }

  export type TicketCategoryCreateOrConnectWithoutTicketSettingsInput = {
    where: TicketCategoryWhereUniqueInput
    create: XOR<TicketCategoryCreateWithoutTicketSettingsInput, TicketCategoryUncheckedCreateWithoutTicketSettingsInput>
  }

  export type TicketCategoryCreateManyTicketSettingsInputEnvelope = {
    data: TicketCategoryCreateManyTicketSettingsInput | TicketCategoryCreateManyTicketSettingsInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutTicketSettingsInput = {
    id?: string
    userId: string
    channelId: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    closedAt?: Date | string | null
  }

  export type TicketUncheckedCreateWithoutTicketSettingsInput = {
    id?: string
    userId: string
    channelId: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    closedAt?: Date | string | null
  }

  export type TicketCreateOrConnectWithoutTicketSettingsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTicketSettingsInput, TicketUncheckedCreateWithoutTicketSettingsInput>
  }

  export type TicketCreateManyTicketSettingsInputEnvelope = {
    data: TicketCreateManyTicketSettingsInput | TicketCreateManyTicketSettingsInput[]
    skipDuplicates?: boolean
  }

  export type GuildConfigUpsertWithoutTicketSettingsInput = {
    update: XOR<GuildConfigUpdateWithoutTicketSettingsInput, GuildConfigUncheckedUpdateWithoutTicketSettingsInput>
    create: XOR<GuildConfigCreateWithoutTicketSettingsInput, GuildConfigUncheckedCreateWithoutTicketSettingsInput>
    where?: GuildConfigWhereInput
  }

  export type GuildConfigUpdateToOneWithWhereWithoutTicketSettingsInput = {
    where?: GuildConfigWhereInput
    data: XOR<GuildConfigUpdateWithoutTicketSettingsInput, GuildConfigUncheckedUpdateWithoutTicketSettingsInput>
  }

  export type GuildConfigUpdateWithoutTicketSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUpdateManyWithoutGuildNestedInput
    CustomEmbed?: CustomEmbedUpdateManyWithoutGuildNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutGuildNestedInput
    KnowledgeSnippet?: KnowledgeSnippetUpdateManyWithoutGuildNestedInput
  }

  export type GuildConfigUncheckedUpdateWithoutTicketSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUncheckedUpdateManyWithoutGuildNestedInput
    CustomEmbed?: CustomEmbedUncheckedUpdateManyWithoutGuildNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutGuildNestedInput
    KnowledgeSnippet?: KnowledgeSnippetUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type TicketCategoryUpsertWithWhereUniqueWithoutTicketSettingsInput = {
    where: TicketCategoryWhereUniqueInput
    update: XOR<TicketCategoryUpdateWithoutTicketSettingsInput, TicketCategoryUncheckedUpdateWithoutTicketSettingsInput>
    create: XOR<TicketCategoryCreateWithoutTicketSettingsInput, TicketCategoryUncheckedCreateWithoutTicketSettingsInput>
  }

  export type TicketCategoryUpdateWithWhereUniqueWithoutTicketSettingsInput = {
    where: TicketCategoryWhereUniqueInput
    data: XOR<TicketCategoryUpdateWithoutTicketSettingsInput, TicketCategoryUncheckedUpdateWithoutTicketSettingsInput>
  }

  export type TicketCategoryUpdateManyWithWhereWithoutTicketSettingsInput = {
    where: TicketCategoryScalarWhereInput
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyWithoutTicketSettingsInput>
  }

  export type TicketCategoryScalarWhereInput = {
    AND?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
    OR?: TicketCategoryScalarWhereInput[]
    NOT?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
    id?: StringFilter<"TicketCategory"> | string
    ticketSettingsId?: StringFilter<"TicketCategory"> | string
    name?: StringFilter<"TicketCategory"> | string
    emoji?: StringNullableFilter<"TicketCategory"> | string | null
    roleId?: StringNullableFilter<"TicketCategory"> | string | null
  }

  export type TicketUpsertWithWhereUniqueWithoutTicketSettingsInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutTicketSettingsInput, TicketUncheckedUpdateWithoutTicketSettingsInput>
    create: XOR<TicketCreateWithoutTicketSettingsInput, TicketUncheckedCreateWithoutTicketSettingsInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutTicketSettingsInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutTicketSettingsInput, TicketUncheckedUpdateWithoutTicketSettingsInput>
  }

  export type TicketUpdateManyWithWhereWithoutTicketSettingsInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTicketSettingsInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    ticketSettingsId?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    channelId?: StringFilter<"Ticket"> | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    closedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
  }

  export type TicketSettingsCreateWithoutCategoriesInput = {
    id?: string
    ticketPanelMessageId?: string | null
    welcomeMessage?: string
    ticketPanelMessage?: string
    guild: GuildConfigCreateNestedOneWithoutTicketSettingsInput
    tickets?: TicketCreateNestedManyWithoutTicketSettingsInput
  }

  export type TicketSettingsUncheckedCreateWithoutCategoriesInput = {
    id?: string
    guildId: string
    ticketPanelMessageId?: string | null
    welcomeMessage?: string
    ticketPanelMessage?: string
    tickets?: TicketUncheckedCreateNestedManyWithoutTicketSettingsInput
  }

  export type TicketSettingsCreateOrConnectWithoutCategoriesInput = {
    where: TicketSettingsWhereUniqueInput
    create: XOR<TicketSettingsCreateWithoutCategoriesInput, TicketSettingsUncheckedCreateWithoutCategoriesInput>
  }

  export type TicketSettingsUpsertWithoutCategoriesInput = {
    update: XOR<TicketSettingsUpdateWithoutCategoriesInput, TicketSettingsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<TicketSettingsCreateWithoutCategoriesInput, TicketSettingsUncheckedCreateWithoutCategoriesInput>
    where?: TicketSettingsWhereInput
  }

  export type TicketSettingsUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: TicketSettingsWhereInput
    data: XOR<TicketSettingsUpdateWithoutCategoriesInput, TicketSettingsUncheckedUpdateWithoutCategoriesInput>
  }

  export type TicketSettingsUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketPanelMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    ticketPanelMessage?: StringFieldUpdateOperationsInput | string
    guild?: GuildConfigUpdateOneRequiredWithoutTicketSettingsNestedInput
    tickets?: TicketUpdateManyWithoutTicketSettingsNestedInput
  }

  export type TicketSettingsUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    ticketPanelMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    ticketPanelMessage?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutTicketSettingsNestedInput
  }

  export type TicketSettingsCreateWithoutTicketsInput = {
    id?: string
    ticketPanelMessageId?: string | null
    welcomeMessage?: string
    ticketPanelMessage?: string
    guild: GuildConfigCreateNestedOneWithoutTicketSettingsInput
    categories?: TicketCategoryCreateNestedManyWithoutTicketSettingsInput
  }

  export type TicketSettingsUncheckedCreateWithoutTicketsInput = {
    id?: string
    guildId: string
    ticketPanelMessageId?: string | null
    welcomeMessage?: string
    ticketPanelMessage?: string
    categories?: TicketCategoryUncheckedCreateNestedManyWithoutTicketSettingsInput
  }

  export type TicketSettingsCreateOrConnectWithoutTicketsInput = {
    where: TicketSettingsWhereUniqueInput
    create: XOR<TicketSettingsCreateWithoutTicketsInput, TicketSettingsUncheckedCreateWithoutTicketsInput>
  }

  export type TicketSettingsUpsertWithoutTicketsInput = {
    update: XOR<TicketSettingsUpdateWithoutTicketsInput, TicketSettingsUncheckedUpdateWithoutTicketsInput>
    create: XOR<TicketSettingsCreateWithoutTicketsInput, TicketSettingsUncheckedCreateWithoutTicketsInput>
    where?: TicketSettingsWhereInput
  }

  export type TicketSettingsUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TicketSettingsWhereInput
    data: XOR<TicketSettingsUpdateWithoutTicketsInput, TicketSettingsUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketSettingsUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketPanelMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    ticketPanelMessage?: StringFieldUpdateOperationsInput | string
    guild?: GuildConfigUpdateOneRequiredWithoutTicketSettingsNestedInput
    categories?: TicketCategoryUpdateManyWithoutTicketSettingsNestedInput
  }

  export type TicketSettingsUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    ticketPanelMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: StringFieldUpdateOperationsInput | string
    ticketPanelMessage?: StringFieldUpdateOperationsInput | string
    categories?: TicketCategoryUncheckedUpdateManyWithoutTicketSettingsNestedInput
  }

  export type GuildConfigCreateWithoutCustomEmbedInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistCreateNestedManyWithoutGuildInput
    TicketSettings?: TicketSettingsCreateNestedOneWithoutGuildInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutGuildInput
    KnowledgeSnippet?: KnowledgeSnippetCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigUncheckedCreateWithoutCustomEmbedInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUncheckedCreateNestedManyWithoutGuildInput
    TicketSettings?: TicketSettingsUncheckedCreateNestedOneWithoutGuildInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutGuildInput
    KnowledgeSnippet?: KnowledgeSnippetUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigCreateOrConnectWithoutCustomEmbedInput = {
    where: GuildConfigWhereUniqueInput
    create: XOR<GuildConfigCreateWithoutCustomEmbedInput, GuildConfigUncheckedCreateWithoutCustomEmbedInput>
  }

  export type CustomCommandCreateWithoutEmbedInput = {
    id?: string
    name: string
    description?: string
    guild: GuildConfigCreateNestedOneWithoutCustomCommandInput
  }

  export type CustomCommandUncheckedCreateWithoutEmbedInput = {
    id?: string
    guildId: string
    name: string
    description?: string
  }

  export type CustomCommandCreateOrConnectWithoutEmbedInput = {
    where: CustomCommandWhereUniqueInput
    create: XOR<CustomCommandCreateWithoutEmbedInput, CustomCommandUncheckedCreateWithoutEmbedInput>
  }

  export type CustomCommandCreateManyEmbedInputEnvelope = {
    data: CustomCommandCreateManyEmbedInput | CustomCommandCreateManyEmbedInput[]
    skipDuplicates?: boolean
  }

  export type GuildConfigUpsertWithoutCustomEmbedInput = {
    update: XOR<GuildConfigUpdateWithoutCustomEmbedInput, GuildConfigUncheckedUpdateWithoutCustomEmbedInput>
    create: XOR<GuildConfigCreateWithoutCustomEmbedInput, GuildConfigUncheckedCreateWithoutCustomEmbedInput>
    where?: GuildConfigWhereInput
  }

  export type GuildConfigUpdateToOneWithWhereWithoutCustomEmbedInput = {
    where?: GuildConfigWhereInput
    data: XOR<GuildConfigUpdateWithoutCustomEmbedInput, GuildConfigUncheckedUpdateWithoutCustomEmbedInput>
  }

  export type GuildConfigUpdateWithoutCustomEmbedInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUpdateManyWithoutGuildNestedInput
    TicketSettings?: TicketSettingsUpdateOneWithoutGuildNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutGuildNestedInput
    KnowledgeSnippet?: KnowledgeSnippetUpdateManyWithoutGuildNestedInput
  }

  export type GuildConfigUncheckedUpdateWithoutCustomEmbedInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUncheckedUpdateManyWithoutGuildNestedInput
    TicketSettings?: TicketSettingsUncheckedUpdateOneWithoutGuildNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutGuildNestedInput
    KnowledgeSnippet?: KnowledgeSnippetUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type CustomCommandUpsertWithWhereUniqueWithoutEmbedInput = {
    where: CustomCommandWhereUniqueInput
    update: XOR<CustomCommandUpdateWithoutEmbedInput, CustomCommandUncheckedUpdateWithoutEmbedInput>
    create: XOR<CustomCommandCreateWithoutEmbedInput, CustomCommandUncheckedCreateWithoutEmbedInput>
  }

  export type CustomCommandUpdateWithWhereUniqueWithoutEmbedInput = {
    where: CustomCommandWhereUniqueInput
    data: XOR<CustomCommandUpdateWithoutEmbedInput, CustomCommandUncheckedUpdateWithoutEmbedInput>
  }

  export type CustomCommandUpdateManyWithWhereWithoutEmbedInput = {
    where: CustomCommandScalarWhereInput
    data: XOR<CustomCommandUpdateManyMutationInput, CustomCommandUncheckedUpdateManyWithoutEmbedInput>
  }

  export type CustomEmbedCreateWithoutCommandsInput = {
    id?: string
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    guild: GuildConfigCreateNestedOneWithoutCustomEmbedInput
  }

  export type CustomEmbedUncheckedCreateWithoutCommandsInput = {
    id?: string
    guildId: string
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomEmbedCreateOrConnectWithoutCommandsInput = {
    where: CustomEmbedWhereUniqueInput
    create: XOR<CustomEmbedCreateWithoutCommandsInput, CustomEmbedUncheckedCreateWithoutCommandsInput>
  }

  export type GuildConfigCreateWithoutCustomCommandInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistCreateNestedManyWithoutGuildInput
    TicketSettings?: TicketSettingsCreateNestedOneWithoutGuildInput
    CustomEmbed?: CustomEmbedCreateNestedManyWithoutGuildInput
    KnowledgeSnippet?: KnowledgeSnippetCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigUncheckedCreateWithoutCustomCommandInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUncheckedCreateNestedManyWithoutGuildInput
    TicketSettings?: TicketSettingsUncheckedCreateNestedOneWithoutGuildInput
    CustomEmbed?: CustomEmbedUncheckedCreateNestedManyWithoutGuildInput
    KnowledgeSnippet?: KnowledgeSnippetUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigCreateOrConnectWithoutCustomCommandInput = {
    where: GuildConfigWhereUniqueInput
    create: XOR<GuildConfigCreateWithoutCustomCommandInput, GuildConfigUncheckedCreateWithoutCustomCommandInput>
  }

  export type CustomEmbedUpsertWithoutCommandsInput = {
    update: XOR<CustomEmbedUpdateWithoutCommandsInput, CustomEmbedUncheckedUpdateWithoutCommandsInput>
    create: XOR<CustomEmbedCreateWithoutCommandsInput, CustomEmbedUncheckedCreateWithoutCommandsInput>
    where?: CustomEmbedWhereInput
  }

  export type CustomEmbedUpdateToOneWithWhereWithoutCommandsInput = {
    where?: CustomEmbedWhereInput
    data: XOR<CustomEmbedUpdateWithoutCommandsInput, CustomEmbedUncheckedUpdateWithoutCommandsInput>
  }

  export type CustomEmbedUpdateWithoutCommandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guild?: GuildConfigUpdateOneRequiredWithoutCustomEmbedNestedInput
  }

  export type CustomEmbedUncheckedUpdateWithoutCommandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuildConfigUpsertWithoutCustomCommandInput = {
    update: XOR<GuildConfigUpdateWithoutCustomCommandInput, GuildConfigUncheckedUpdateWithoutCustomCommandInput>
    create: XOR<GuildConfigCreateWithoutCustomCommandInput, GuildConfigUncheckedCreateWithoutCustomCommandInput>
    where?: GuildConfigWhereInput
  }

  export type GuildConfigUpdateToOneWithWhereWithoutCustomCommandInput = {
    where?: GuildConfigWhereInput
    data: XOR<GuildConfigUpdateWithoutCustomCommandInput, GuildConfigUncheckedUpdateWithoutCustomCommandInput>
  }

  export type GuildConfigUpdateWithoutCustomCommandInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUpdateManyWithoutGuildNestedInput
    TicketSettings?: TicketSettingsUpdateOneWithoutGuildNestedInput
    CustomEmbed?: CustomEmbedUpdateManyWithoutGuildNestedInput
    KnowledgeSnippet?: KnowledgeSnippetUpdateManyWithoutGuildNestedInput
  }

  export type GuildConfigUncheckedUpdateWithoutCustomCommandInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUncheckedUpdateManyWithoutGuildNestedInput
    TicketSettings?: TicketSettingsUncheckedUpdateOneWithoutGuildNestedInput
    CustomEmbed?: CustomEmbedUncheckedUpdateManyWithoutGuildNestedInput
    KnowledgeSnippet?: KnowledgeSnippetUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type GuildConfigCreateWithoutKnowledgeSnippetInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistCreateNestedManyWithoutGuildInput
    TicketSettings?: TicketSettingsCreateNestedOneWithoutGuildInput
    CustomEmbed?: CustomEmbedCreateNestedManyWithoutGuildInput
    CustomCommand?: CustomCommandCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigUncheckedCreateWithoutKnowledgeSnippetInput = {
    id?: string
    guildId: string
    statusChannelId?: string | null
    updateChannelId?: string | null
    logChannelId?: string | null
    statusInterval?: number
    onlineMessage?: string
    offlineMessage?: string
    serverIp?: string | null
    serverPort?: number | null
    adminRoleIds?: GuildConfigCreateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigCreateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUncheckedCreateNestedManyWithoutGuildInput
    TicketSettings?: TicketSettingsUncheckedCreateNestedOneWithoutGuildInput
    CustomEmbed?: CustomEmbedUncheckedCreateNestedManyWithoutGuildInput
    CustomCommand?: CustomCommandUncheckedCreateNestedManyWithoutGuildInput
  }

  export type GuildConfigCreateOrConnectWithoutKnowledgeSnippetInput = {
    where: GuildConfigWhereUniqueInput
    create: XOR<GuildConfigCreateWithoutKnowledgeSnippetInput, GuildConfigUncheckedCreateWithoutKnowledgeSnippetInput>
  }

  export type GuildConfigUpsertWithoutKnowledgeSnippetInput = {
    update: XOR<GuildConfigUpdateWithoutKnowledgeSnippetInput, GuildConfigUncheckedUpdateWithoutKnowledgeSnippetInput>
    create: XOR<GuildConfigCreateWithoutKnowledgeSnippetInput, GuildConfigUncheckedCreateWithoutKnowledgeSnippetInput>
    where?: GuildConfigWhereInput
  }

  export type GuildConfigUpdateToOneWithWhereWithoutKnowledgeSnippetInput = {
    where?: GuildConfigWhereInput
    data: XOR<GuildConfigUpdateWithoutKnowledgeSnippetInput, GuildConfigUncheckedUpdateWithoutKnowledgeSnippetInput>
  }

  export type GuildConfigUpdateWithoutKnowledgeSnippetInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUpdateManyWithoutGuildNestedInput
    TicketSettings?: TicketSettingsUpdateOneWithoutGuildNestedInput
    CustomEmbed?: CustomEmbedUpdateManyWithoutGuildNestedInput
    CustomCommand?: CustomCommandUpdateManyWithoutGuildNestedInput
  }

  export type GuildConfigUncheckedUpdateWithoutKnowledgeSnippetInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    statusChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    updateChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    logChannelId?: NullableStringFieldUpdateOperationsInput | string | null
    statusInterval?: IntFieldUpdateOperationsInput | number
    onlineMessage?: StringFieldUpdateOperationsInput | string
    offlineMessage?: StringFieldUpdateOperationsInput | string
    serverIp?: NullableStringFieldUpdateOperationsInput | string | null
    serverPort?: NullableIntFieldUpdateOperationsInput | number | null
    adminRoleIds?: GuildConfigUpdateadminRoleIdsInput | string[]
    updateMentionIds?: GuildConfigUpdateupdateMentionIdsInput | string[]
    ModWatchlist?: ModWatchlistUncheckedUpdateManyWithoutGuildNestedInput
    TicketSettings?: TicketSettingsUncheckedUpdateOneWithoutGuildNestedInput
    CustomEmbed?: CustomEmbedUncheckedUpdateManyWithoutGuildNestedInput
    CustomCommand?: CustomCommandUncheckedUpdateManyWithoutGuildNestedInput
  }

  export type ModWatchlistCreateManyGuildInput = {
    id?: string
    workshopId: string
    title?: string | null
    lastUpdated?: Date | string
  }

  export type CustomEmbedCreateManyGuildInput = {
    id?: string
    name: string
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomCommandCreateManyGuildInput = {
    id?: string
    name: string
    description?: string
    embedId: string
  }

  export type KnowledgeSnippetCreateManyGuildInput = {
    id?: string
    question: string
    answer: string
    source?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModWatchlistUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    workshopId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModWatchlistUncheckedUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    workshopId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModWatchlistUncheckedUpdateManyWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    workshopId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomEmbedUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commands?: CustomCommandUpdateManyWithoutEmbedNestedInput
  }

  export type CustomEmbedUncheckedUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commands?: CustomCommandUncheckedUpdateManyWithoutEmbedNestedInput
  }

  export type CustomEmbedUncheckedUpdateManyWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomCommandUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embed?: CustomEmbedUpdateOneRequiredWithoutCommandsNestedInput
  }

  export type CustomCommandUncheckedUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomCommandUncheckedUpdateManyWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    embedId?: StringFieldUpdateOperationsInput | string
  }

  export type KnowledgeSnippetUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeSnippetUncheckedUpdateWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KnowledgeSnippetUncheckedUpdateManyWithoutGuildInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCategoryCreateManyTicketSettingsInput = {
    id?: string
    name: string
    emoji?: string | null
    roleId?: string | null
  }

  export type TicketCreateManyTicketSettingsInput = {
    id?: string
    userId: string
    channelId: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    closedAt?: Date | string | null
  }

  export type TicketCategoryUpdateWithoutTicketSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCategoryUncheckedUpdateWithoutTicketSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCategoryUncheckedUpdateManyWithoutTicketSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketUpdateWithoutTicketSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateWithoutTicketSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyWithoutTicketSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channelId?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomCommandCreateManyEmbedInput = {
    id?: string
    guildId: string
    name: string
    description?: string
  }

  export type CustomCommandUpdateWithoutEmbedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    guild?: GuildConfigUpdateOneRequiredWithoutCustomCommandNestedInput
  }

  export type CustomCommandUncheckedUpdateWithoutEmbedInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type CustomCommandUncheckedUpdateManyWithoutEmbedInput = {
    id?: StringFieldUpdateOperationsInput | string
    guildId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
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