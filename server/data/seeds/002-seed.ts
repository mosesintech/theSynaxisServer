/* eslint-disable import/prefer-default-export */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('citations').del();
  await knex('citations').insert([
    {
      publication_city: 'Florence, Arizona',
      publication_year: '1999',
      page_start: '',
      page_end: '',
      work_id: 1,
    },
  ]);
}
