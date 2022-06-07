/* eslint-disable import/prefer-default-export */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('qcategories').del();
  await knex('qcategories').insert([
    {
      name: 'temptation',
    },
  ]);
}
