/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('project_resources').del()
  await knex('projects').del()
  await knex('projects').insert([
    {
      project_name: 'firstProj',
      project_description: 'it is what it is'
    },
    {
      project_name: 'rowValue2',
      project_description: 'it is what it is'
    },
    {
      project_name: 'rowValue3',
      project_description: 'it is what it is'
    }
  ])
};
