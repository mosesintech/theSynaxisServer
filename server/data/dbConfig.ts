import knex from 'knex';
import knexfile from '../../knexfile';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const environment = process.env.NODE_ENV!;

export default knex(knexfile[environment]);
