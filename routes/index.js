var express = require('express');
var router = express.Router();
var models = require('../server/models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CageLoot' });
});

router.route('/api/ufcfighters')

    // Create a fighter (accessed at POST http://localhost:3000/api/ufcfighters)
    .post(function(req, res) {
        var body = req.body;

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

    // Get a list of all fighters
    .get(function(req, res, next) {
      models.UfcFighter.findAll({
        include: [{model: models.WeightClass, attributes: ['type']}],
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'meta', 'WeightClassId']
      }})
      .then(function(ufcFighters) {
        res.json(ufcFighters);
      }).catch(function(err) {
        res.send(err);
      });
    });

module.exports = router;
