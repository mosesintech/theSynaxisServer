/* eslint-disable import/prefer-default-export */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('works').del();
  await knex('works').insert([
    {
      title: 'Monastic Wisdom',
      published_date: 'October 1999',
      saint_id: 2,
    },
  ]);
}
