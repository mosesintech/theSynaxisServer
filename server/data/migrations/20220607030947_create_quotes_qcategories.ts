/* eslint-disable @typescript-eslint/no-explicit-any */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable(
    'quotes_qcategories',
    (table: Knex.TableBuilder) => {
      table
        .integer('quote_id')
        .unsigned()
        .references('quotes.id')
        .notNullable();
      table
        .integer('qcategory_id')
        .unsigned()
        .references('qcategories.id')
        .notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
      table.boolean('is_deleted').notNullable().defaultTo(false);
    }
  );
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('quotes_qcategories');
}
