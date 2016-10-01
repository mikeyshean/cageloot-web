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
      nameFirst: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      nickname: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      nameLast: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      weightClassId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'WeightClasses',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'set null',
      },
      titleHolder: {
        type: Sequelize.BOOLEAN,
        defaultValue: null
      },
      wins: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      losses: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      draws: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      poundForPoundRank: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      ufcId: {
        type: Sequelize.INTEGER,

      },
      ufcThumbnail: {
        type: Sequelize.STRING,
        isUrl: true,
        allowNull: true,
        defaultValue: null
      },
      ufcLeftFullBodyImage: {
        type: Sequelize.STRING,
        isUrl: true,
        allowNull: true,
        defaultValue: null
      },
      ufcProfileImage: {
        type: Sequelize.STRING,
        isUrl: true,
        allowNull: true,
        defaultValue: null
      },
      ufcLink: {
        type: Sequelize.STRING,
        isUrl: true,
        allowNull: true,
        defaultValue: null
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
