/* eslint-disable import/prefer-default-export */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('quotes').del();
  await knex('quotes').insert([
    {
      quote_text:
        "Then you are filled with divine love and your soul burns as did Cleopas's. And in times of temptation you no longer leave the linen cloth and flee naked, but persevere in afflictions with the thought that just as one temptation passed after another, so, too, will this one pass.",
      saint_id: 2,
      work_id: 1,
      citation_id: 1,
    },
  ]);
}
