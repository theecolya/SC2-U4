/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {project_id: 1, project_name: 'rowValue1',
     project_description: 'it is what it is',
     project_completed: 'false'},
    {project_id: 2, project_name: 'rowValue2',
     project_description: 'it is what it is',
     project_completed: 'false'},
    {project_id: 3, project_name: 'rowValue3',
     project_description: 'it is what it is',
     project_completed: 'false'}
  ]);
};
