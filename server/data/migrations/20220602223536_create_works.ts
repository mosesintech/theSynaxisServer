/* eslint-disable @typescript-eslint/no-explicit-any */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('works', (works: Knex.TableBuilder) => {
    works.increments();
    works.string('title').notNullable();
    works.string('published_date');
    works.integer('saint_id').unsigned().references('saints.id').notNullable();
    works.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    works.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
    works.boolean('is_deleted').notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('works');
}
