const { Game, Console, GamingSnack, sequelize } = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllGames = async () => {
  const result = await Game.findAll()
  stringify(result)
}
const createGame = async () => {
  const result = await Game.create({
    gameName: 'Zelda BOTW',
    releaseYear: 2017,
    owned: true
  })
  stringify(result)
}

const updateGame = async () => {
  const result = await Game.update(
    { gameName: 'The Legend of Zelda: Breath of the Wild' },
    {
      where: {
        gameName: 'Zelda BOTW'
      }
    }
  )
  stringify(result)
}

const findAllGamesPre2020 = async () => {
  const result = await Game.findAll({
    where: {
      releaseYear: { [Op.lt]: 2020 }
    }
  })
  stringify(result)
}
const deleteSnacks = async () => {
  const result = await GamingSnack.destroy({
    where: {
      sweet: false
    }
  })
  stringify(result)
}
async function main() {
  try {
    // await findAllGames()
    // await findAllGamesPre2020()
    // await createGame()
    // await updateGame()
    await deleteSnacks()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
