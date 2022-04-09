'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'games',
      [
        {
          gameName: 'Mario Odyssey',
          releaseYear: '2017',
          owned: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gameName: 'Elden Ring',
          releaseYear: '2022',
          owned: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          gameName: 'Returnal',
          releaseYear: '2021',
          owned: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          gameName: 'Kirby Forgotten Land',
          releaseYear: '2022',
          owned: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games', null, {})
  }
}
