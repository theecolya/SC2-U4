/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('resources', tbl => {
      tbl.increments('resource_id').notNullable();
      tbl.text('resource_name').notNullable().unique();
      tbl.text('resource_description');
    })
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources')
};
