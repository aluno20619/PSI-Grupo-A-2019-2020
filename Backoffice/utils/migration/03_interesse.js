exports.up = (knex, Promise) => {
  return knex.schema.createTable('Interesse', (table) => {
    table.string('id').primary()
	table.string('titulo')
    table.string('descricao')
    table.string('coordenadas')

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Interesse')
}