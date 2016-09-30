'use strict';
module.exports = function(sequelize, DataTypes) {
  var UfcFighter = sequelize.define('UfcFighter', {
    name_first: DataTypes.STRING,
    nickname: DataTypes.STRING,
    name_last: DataTypes.STRING,
    weight_class_id: DataTypes.INTEGER,
    title_holder: DataTypes.BOOLEAN,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    draws: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    pound_for_pound_rank: DataTypes.STRING,
    ufc_id: DataTypes.INTEGER,
    ufc_thumbnail: DataTypes.STRING,
    ufc_belthumbnail: DataTypes.STRING,
    ufc_left_full_body_image: DataTypes.STRING,
    ufc_right_full_body_image: DataTypes.STRING,
    ufc_profile_image: DataTypes.STRING,
    ufc_link: DataTypes.STRING,
    meta: DataTypes.JSONB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        UfcFighter.belongsTo(models.WeightClass);
      }
    }
  });
  return UfcFighter;
};
