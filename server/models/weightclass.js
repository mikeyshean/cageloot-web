'use strict';
module.exports = function(sequelize, DataTypes) {
  var WeightClass = sequelize.define('WeightClass', {
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        WeightClass.hasMany(models.UfcFighters);
      }
    }
  });
  return WeightClass;
};
