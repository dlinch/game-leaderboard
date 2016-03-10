
exports.seed = function(knex, Promise) {
  return knex('game').del().then(function(){
    return Promise.all([
      knex('game').insert({
        name: 'King of Tokyo'
      }),
      knex('game').insert({
        name: 'Smash Up'
      }),
      knex('game').insert({
        name: 'Settlers of Catan'
      }),
      knex('game').insert({
        name: 'Alien Frontiers'
      }),
      knex('game').insert({
        name: 'Ticket to Ride'
      }),
      knex('game').insert({
        name: 'Nika'
      }),
      knex('game').insert({
        name: 'Munchkin Adventure Time'
      }),
      knex('game').insert({
        name: 'Ricochet Robots'
      }),
      knex('game').insert({
        name: 'Tsuro'
      }),
      knex('game').insert({
        name: 'Tokaido'
      }),
      knex('game').insert({
        name: 'Space Alert'
      }),
      knex('game').insert({
        name: 'Zombicide'
      }),
      knex('game').insert({
        name: 'Power Grid'
      }),
      knex('game').insert({
        name: 'Sorry'
      }),
      knex('game').insert({
        name: 'Risk'
      }),
      knex('game').insert({
        name: 'Monopoly'
      }),
      knex('game').insert({
        name: 'Fluxx'
      }),
      knex('game').insert({
        name: 'Deer Lord'
      }),
      knex('game').insert({
        name: 'Slap 45'
      }),
      knex('game').insert({
        name: 'Exploding Kittens'
      }),
      knex('game').insert({
        name: 'Dominion'
      }),
    ])
  })
};
