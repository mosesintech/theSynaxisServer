/* eslint-disable @typescript-eslint/no-explicit-any */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('works_wgenres', (table: Knex.TableBuilder) => {
    table.integer('work_id').unsigned().references('works.id').notNullable();
    table
      .integer('wgenre_id')
      .unsigned()
      .references('wgenres.id')
      .notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
    table.boolean('is_deleted').notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('works_wgenres');
}
