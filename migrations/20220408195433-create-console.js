'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('consoles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      consoleName: {
        type: Sequelize.STRING
      },
      releaseYear: {
        type: Sequelize.INTEGER
      },
      owned: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('consoles')
  }
}
