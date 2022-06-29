/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').del()
  await knex('resources').insert([
    {resource_id: 1, resource_name: 'rowValue1',
     resource_description: 'whatevah'},
    {resource_id: 2, resource_name: 'rowValue2',
     resource_description: 'whatevah'},
    {resource_id: 3, resource_name: 'rowValue3',
     resource_description: 'whatevah'}
  ]);
};
