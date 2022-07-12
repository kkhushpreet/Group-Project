/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('groups', (table)=> {
        table.increments('id')
        table.string('groupLogo')
        table.string('name')
        table.text('members')
        table.timestamp('created_at').defaultTo(knex.fn.now())
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('groups')
};
