/* eslint-disable @typescript-eslint/no-explicit-any */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('quotes', (quotes: Knex.TableBuilder) => {
    quotes.increments();
    quotes.text('quote_text', 'longtext').notNullable();
    quotes.integer('saint_id').unsigned().references('saints.id').notNullable();
    quotes.integer('work_id').unsigned().references('works.id').notNullable();
    quotes
      .integer('citation_id')
      .unsigned()
      .references('citations.id')
      .notNullable();
    quotes.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    quotes.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
    quotes.boolean('is_deleted').notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('quotes');
}
