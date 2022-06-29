/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('project_resources', tbl => {
        tbl.integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE');
        tbl.integer('resource_id')
        .unsigned()
        .references('resource_id')
        .inTable('resources')
        .onDelete('CASCADE');
    })
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources')
};
