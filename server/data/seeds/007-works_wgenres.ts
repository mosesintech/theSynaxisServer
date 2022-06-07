/* eslint-disable import/prefer-default-export */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('works_wgenres').del();
  await knex('works_wgenres').insert([
    {
      work_id: 1,
      wgenre_id: 1,
    },
  ]);
}
