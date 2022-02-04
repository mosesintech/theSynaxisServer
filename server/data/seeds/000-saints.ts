/* eslint-disable import/prefer-default-export */
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('saints').del();
  await knex('saints').insert([
    {
      name: 'Nicholas of Myra',
      born: '270',
      died: '343',
      is_bc: false,
      feast_month: 12,
      feast_date: 6,
      is_martyr: false,
      is_patriarch: false,
      is_bishop: true,
      is_priest: false,
      is_deacon: false,
      is_monk: false,
      is_married: false,
      is_male: true,
      life: 'life',
    },
  ]);
}
