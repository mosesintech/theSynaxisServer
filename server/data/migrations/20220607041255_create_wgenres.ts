/* eslint-disable @typescript-eslint/no-explicit-any */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('wgenres', (wgenres: Knex.TableBuilder) => {
    wgenres.increments();
    wgenres.string('name').notNullable().unique();
    wgenres.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    wgenres.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
    wgenres.boolean('is_deleted').notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('wgenres');
}
