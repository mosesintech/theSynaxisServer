/* eslint-disable @typescript-eslint/no-explicit-any */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('users', (users: Knex.TableBuilder) => {
    users.increments();
    users.string('username').notNullable().unique();
    users.string('email').notNullable().unique();
    users.string('password').notNullable();
    users.string('first_name');
    users.string('last_name');
    users.string('patron');
    users.text('bio');
    users.string('birthday');
    users.string('nameday');
    users.string('location');
    users.string('jurisdiction');
    users.string('denomination').notNullable();
    users.boolean('is_bishop').notNullable().defaultTo(false);
    users.boolean('is_priest').notNullable().defaultTo(false);
    users.boolean('is_deacon').notNullable().defaultTo(false);
    users.boolean('is_male').notNullable().defaultTo(false);
    users.timestamp('joined_date').notNullable().defaultTo(knex.fn.now());
    users.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
    users.boolean('is_deleted').notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('users');
}
