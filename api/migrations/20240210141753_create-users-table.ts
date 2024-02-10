import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('users', (table) => {
        table.uuid('userId').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

