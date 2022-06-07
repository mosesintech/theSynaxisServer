/* eslint-disable import/prefer-default-export */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('users').del();
  await knex('users').insert([
    {
      username: 'Jeb',
      email: 'jeb@bush.com',
      password: 'pleaseClap2016',
      first_name: 'Jeb',
      last_name: 'Bush',
      denomination: 'Roman Catholic',
      is_male: true,
    },
  ]);
}
