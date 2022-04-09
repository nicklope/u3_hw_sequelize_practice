'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'gaming_snacks',
      [
        {
          snackName: 'Cheetos',
          sweet: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          snackName: 'Doritos',
          sweet: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          snackName: 'Chips A-hoy',
          sweet: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('gaming_snacks', null, {})
  }
}
