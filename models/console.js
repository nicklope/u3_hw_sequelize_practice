'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Console extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Console.init(
    {
      consoleName: DataTypes.STRING,
      releaseYear: DataTypes.INTEGER,
      owned: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Console',
      tableName: 'consoles'
    }
  )
  return Console
}
