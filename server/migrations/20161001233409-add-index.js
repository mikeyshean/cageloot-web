'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addIndex(
      'UfcFighters',
      ['ufcId'],
      {
        indicesType: 'UNIQUE'
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.addIndex(
      'UfcFighter',
      ['ufcId']
    );
  }
};
