/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', tbl => {
      tbl.increments('task_id').notNullable();
      tbl.text('task_description').notNullable();
      tbl.text('task_notes');
      tbl.boolean('task_completed').defaultTo(false);
      tbl.integer('project_id')
            .unsigned()
            .references('project_id')
            .inTable('projects')
            .onDelete('CASCADE');
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')
  };
  