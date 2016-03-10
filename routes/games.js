var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

function Games(){
  return knex('game');
}

router.get('/', function(req, res){
  Games().select().then(function(games){
    res.render('games', {
      title: 'Games',
      games: games,
      // user: req.user
    });
  });
});

router.get('/:id', function(req, res){
  Games().select().where('id', req.params.id).first().then(function(game){
    res.render('game', {
      title: game.name,
      game: game,
      // user: req.user
    });
  });
});

module.exports = router;
