/* eslint-disable @typescript-eslint/no-explicit-any */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('saints', (saints: Knex.TableBuilder) => {
    saints.increments();
    saints.string('name').notNullable();
    saints.string('life').notNullable();
    saints.string('born').notNullable();
    saints.string('died').notNullable();
    saints.boolean('is_bc').notNullable().defaultTo(false);
    saints.integer('feast_month').notNullable();
    saints.integer('feast_date').notNullable();
    saints.boolean('is_martyr').notNullable().defaultTo(false);
    saints.boolean('is_patriarch').notNullable().defaultTo(false);
    saints.boolean('is_bishop').notNullable().defaultTo(false);
    saints.boolean('is_priest').notNullable().defaultTo(false);
    saints.boolean('is_deacon').notNullable().defaultTo(false);
    saints.boolean('is_monk').notNullable().defaultTo(false);
    saints.boolean('is_married').notNullable().defaultTo(false);
    saints.boolean('is_male').notNullable().defaultTo(false);
    saints.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    saints.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
    saints.boolean('is_deleted').notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('saints');
}
