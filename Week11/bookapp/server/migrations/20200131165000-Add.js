'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Books',
        'author',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Books',
        'genre',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Books',
        'year',
        {
          type: Sequelize.INTEGER
        }
      ),
      queryInterface.addColumn(
        'Books',
        'imageURL',
        {
          type: Sequelize.STRING
        }
      ),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Books', 'author'), 
      queryInterface.removeColumn('Books', 'genre'), 
      queryInterface.removeColumn('Books', 'year'),
      queryInterface.removeColumn('Books', 'imageURL'),
    ])
  }
};
