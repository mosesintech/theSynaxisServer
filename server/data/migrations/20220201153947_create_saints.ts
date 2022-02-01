/* eslint-disable @typescript-eslint/no-explicit-any */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('saints', (saints: Knex.TableBuilder) => {
    saints.increments();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('saints');
}
