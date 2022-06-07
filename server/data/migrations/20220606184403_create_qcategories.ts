/* eslint-disable @typescript-eslint/no-explicit-any */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable(
    'qcategories',
    (qcategories: Knex.TableBuilder) => {
      qcategories.increments();
      qcategories.string('name').notNullable().unique();
      qcategories
        .timestamp('created_at')
        .notNullable()
        .defaultTo(knex.fn.now());
      qcategories
        .timestamp('modified_at')
        .notNullable()
        .defaultTo(knex.fn.now());
      qcategories.boolean('is_deleted').notNullable().defaultTo(false);
    }
  );
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('qcategories');
}
