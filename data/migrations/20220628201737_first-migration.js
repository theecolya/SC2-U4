/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments('project_id').notNullable();
    tbl.text('project_name').notNullable();
    tbl.text('project_description');
    tbl.boolean('project_completed').notNullable().defaultTo('false');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
