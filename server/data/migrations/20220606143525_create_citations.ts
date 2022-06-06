/* eslint-disable @typescript-eslint/no-explicit-any */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('citations', (citations: Knex.TableBuilder) => {
    citations.increments();
    citations.string('publication_city').notNullable();
    citations.string('publication_year').notNullable();
    citations.string('page_start').notNullable();
    citations.string('page_end');
    citations
      .integer('work_id')
      .unsigned()
      .references('works.id')
      .notNullable();
    citations.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    citations.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
    citations.boolean('is_deleted').notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('citations');
}
