/* eslint-disable import/prefer-default-export */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('quotes_qcategories').del();
  await knex('quotes_qcategories').insert([
    {
      quote_id: 1,
      qcategory_id: 1,
    },
  ]);
}
