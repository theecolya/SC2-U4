/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    { 
      task_description: '1stTask',
      task_notes: 'whatevah',
      project_id: 1
    },
    {
      task_description: '2ndtask',
      task_notes: 'whatevah',
      project_id: 1
    },
    {
      task_description: '3rdtask',
      task_notes: 'whatevah',
      project_id: 1
    }
  ]);
};
