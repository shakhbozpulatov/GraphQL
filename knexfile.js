import "dotenv/config";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: 5432,
      database: "exam4-1",
      user: "postgres",
      password: "sh1207200",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "db/migrations",
    },
    seeds: {
      directory: "db/seeds",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: 5432,
      database: "exam4-1",
      user: "postgres",
      password: "sh1207200",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "db/migrations",
    },
    seeds: {
      directory: "db/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: 5432,
      database: "exam4-1",
      user: "postgres",
      password: "sh1207200",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "db/migrations",
    },
    seeds: {
      directory: "db/seeds",
    },
  },
};
