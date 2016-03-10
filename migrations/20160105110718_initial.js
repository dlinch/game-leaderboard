
exports.up = function(knex, Promise) {
  return Promise.all([knex.schema.createTable('player', function(table){
    table.increments();
    table.string('first_name');
    table.string('last_name');
  }),
  knex.schema.createTable('game', function(table){
    table.increments();
    table.string('name')
  })
  ]).then(function(){
      return knex.schema.createTable('gameinstance', function(table){
        table.increments();
        table.integer('player_id').unsigned().references('id').inTable('player');
        table.integer('game_id').unsigned().references('id').inTable('game');
        table.boolean('win');
      })
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gameinstance').then(function(){
    return Promise.all([
      knex.schema.dropTable('player'),
      knex.schema.dropTable('game')
  ])
  });
};
