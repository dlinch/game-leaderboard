
exports.seed = function(knex, Promise) {
  return knex('player').del().then(function(){
    return Promise.all([
      knex('player').insert({
        first_name: 'Derik',
        last_name: 'Linch'
      }),
      knex('player').insert({
        first_name: 'Brendon',
        last_name: 'Adams'
      }),
      knex('player').insert({
        first_name: 'Austin',
        last_name: 'Reed'
      }),
      knex('player').insert({
        first_name: 'Martial',
        last_name: 'Frindethie'
      }),
      knex('player').insert({
        first_name: 'Ashley',
        last_name: 'Runyan'
      }),
      knex('player').insert({
        first_name: 'Adrian',
        last_name: 'Garibay'
      }),
      knex('player').insert({
        first_name: 'Eddie',
        last_name: 'Rodriguez'
      }),
      knex('player').insert({
        first_name: 'Max',
        last_name: 'Fruhwirth'
      }),
    ])
  });
};
