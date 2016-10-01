'use strict';
module.exports = function(sequelize, DataTypes) {
  var UfcFighter = sequelize.define('UfcFighter', {
    nameFirst: DataTypes.STRING,
    nickname: DataTypes.STRING,
    nameLast: DataTypes.STRING,
    // weightClassId: DataTypes.INTEGER,
    titleHolder: DataTypes.BOOLEAN,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    draws: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN,
    poundForPoundRank: DataTypes.STRING,
    ufcId: DataTypes.INTEGER,
    ufcThumbnail: DataTypes.STRING,
    ufcLeftFullBodyImage: DataTypes.STRING,
    ufcProfileImage: DataTypes.STRING,
    ufcLink: DataTypes.STRING,
    meta: DataTypes.JSONB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        UfcFighter.belongsTo(models.WeightClass, { foreignKey: 'weightClassId' });
      }
    }
  });
  return UfcFighter;
};
