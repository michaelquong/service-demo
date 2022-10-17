const db = require("../services/db")


async function getAllPlayedSongs(request, response, next) {
  const filters = request.query
  try {
    const results = await db.getPlayedSongs()
    response.json(results.rows)
  } catch (error) {
    return next()
  }
}

async function getPlayedSong(request, response, next) {
  const id = request.params.id
  try {
    const result = await db.getPlayedSong(id)
    console.log(result)
    if(result.rowCount === 0) {
      response.status(404)
    }
    response.json(result.rows[0])
  } catch (error) {
    response.status(500)
    return next()
  }
}

module.exports = {
  getAllPlayedSongs,
  getPlayedSong
}