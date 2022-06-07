/* eslint-disable import/prefer-default-export */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('wgenres').del();
  await knex('wgenres').insert([
    {
      name: 'monastic',
    },
  ]);
}
