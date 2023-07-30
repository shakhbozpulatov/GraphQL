/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("rooms", (table) => {
    table.increments("id").primary();
    table.string("room_name").unique();
    table.integer("floor").notNullable();
    table.boolean("for_stuff").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("rooms");
};
