'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class GamingSnack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GamingSnack.init(
    {
      snackName: DataTypes.STRING,
      sweet: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'GamingSnack',
      tableName: 'gaming_snacks'
    }
  )
  return GamingSnack
}
