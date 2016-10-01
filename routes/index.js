var express = require('express');
var router = express.Router();
var models = require('../server/models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/api/ufcfighters')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        var body = req;

        models.UfcFighter.create({
          nameFirst: body.nameFirst,
          nameLast: body.nameLast,
          nickname: body.nickname,
          wins: body.wins
        }).then(function(ufcFighter) {
          res.json(ufcFighter);
        }).catch(function(err) {
          res.status(400).send(err);
        });

    })

    .get(function(req, res, next) {
      models.UfcFighter.findAll({}).then(function(ufcFighters) {
        res.json(ufcFighters);
      }).catch(function(err) {
        res.send(err);
      });
    });

module.exports = router;
