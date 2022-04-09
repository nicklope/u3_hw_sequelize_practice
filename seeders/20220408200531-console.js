'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'consoles',
      [
        {
          consoleName: 'Nintendo Switch',
          releaseYear: '2017',
          owned: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          consoleName: 'PS5',
          releaseYear: '2020',
          owned: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          consoleName: 'SNES',
          releaseYear: '1990',
          owned: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          consoleName: 'Xbox',
          releaseYear: '2001',
          owned: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('consoles', null, {})
  }
}
