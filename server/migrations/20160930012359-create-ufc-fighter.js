'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('UfcFighters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_first: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      name_last: {
        type: Sequelize.STRING
      },
      weight_class_id: {
        type: Sequelize.INTEGER
      },
      title_holder: {
        type: Sequelize.BOOLEAN
      },
      wins: {
        type: Sequelize.INTEGER
      },
      losses: {
        type: Sequelize.INTEGER
      },
      draws: {
        type: Sequelize.INTEGER
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      pound_for_pound_rank: {
        type: Sequelize.STRING
      },
      ufc_id: {
        type: Sequelize.INTEGER
      },
      ufc_thumbnail: {
        type: Sequelize.STRING
      },
      ufc_belthumbnail: {
        type: Sequelize.STRING
      },
      ufc_left_full_body_image: {
        type: Sequelize.STRING
      },
      ufc_right_full_body_image: {
        type: Sequelize.STRING
      },
      ufc_profile_image: {
        type: Sequelize.STRING
      },
      ufc_link: {
        type: Sequelize.STRING
      },
      meta: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('UfcFighters');
  }
};