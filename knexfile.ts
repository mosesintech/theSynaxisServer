import { Knex } from 'knex';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const development: Knex.Config = {
  client: 'pg',
  connection: {
    database: `${process.env.DATABASE_NAME}`,
    // hostname: 'localhost',
  },
  migrations: {
    extension: 'ts',
    directory: `${__dirname}/server/data/migrations`,
    tableName: 'knex_migrations',
  },
  seeds: {
    extension: 'ts',
    directory: `${__dirname}/server/data/seeds`,
  },
};

const test: Knex.Config = {
  client: 'pg',
  connection: {
    database: `${process.env.DATABASE_NAME}`,
    // hostname: 'localhost',
  },
  migrations: {
    directory: `${__dirname}/server/data/migrations`,
  },
  seeds: {
    directory: `${__dirname}/server/data/seeds`,
  },
};

const staging: Knex.Config = {
  client: 'pg',
  connection: {
    database: `${process.env.DATABASE_NAME}`,
    user: `${process.env.DATABASE_USER}`,
    password: `${process.env.DATABASE_PASSWORD}`,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: any = { development, test, staging };

export default config;
