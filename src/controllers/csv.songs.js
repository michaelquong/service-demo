const csvQuery = require("../services/csv")

async function getAllPlayedSongs(request, response, next) {
  const filters = request.query
  try {
    response.json(await csvQuery.getPlayedSongs({filters: filters}))
  } catch (error) {
    return next()
  }
}

async function getPlayedSong(request, response, next) {
  const uid = request.params.uid
  try {
    const result = await csvQuery.getPlayedSong(uid)
    if(Object.keys(result).length === 0) {
      response.status(404)
    }
    response.json(result)
  } catch (error) {
    response.status(500)
    return next()
  }
}

module.exports = {
  getAllPlayedSongs,
  getPlayedSong
}