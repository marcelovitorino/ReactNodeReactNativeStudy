
exports.up = function(knex) {
  return knex.schema.createTable('estabelecimentos', function (table) {
      table.string('id').primary();
      table.string('title').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('categoria').notNullable();
      table.string('atendimento').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('estabelecimentos');
};
