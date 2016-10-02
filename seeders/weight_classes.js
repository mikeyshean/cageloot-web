var models = require('../server/models/index');
var async = require('async');

var weightClass = models.WeightClass;

var weightClasses = [
  {
    type: 'Flyweight'
  },
  {
    type: 'Bantamweight'
  },
  {
    type: 'Women_Bantamweight'
  },
  {
    type: 'Women_Strawweight'
  },
  {
    type: 'Featherweight'
  },
  {
    type: 'Lightweight'
  },
  {
    type: 'Welterweight'
  },
  {
    type: 'Middleweight'
  },
  {
    type: 'Light_Heavyweight'
  },
  {
    type: 'Heavyweight'
  },
];

weightClass.bulkCreate(weightClasses, {returning: true})
  .then(function(response) {
    console.log(response);
  });
