const data = require("../data")
const config = require("../config")
const utils = require("../utils")

const csvdb = new data.CsvDB(config.csvFileUri)

/* Supported csv file table columns for filtering when querying list of songs
 * <query parameter key>: <csv file column header>
 */
const queryToColumnName = {
    "artist": "ARTIST CLEAN",
    "station": "CALLSIGN"
}

async function getPlayedSongs({filters = {}, page = 1} = {}) {
  const normalizedFilters = utils.normalizeToCsvMapping(filters, queryToColumnName)
  return csvdb.querySongs(normalizedFilters)
}

async function getPlayedSong(uid) {
  return csvdb.querySongBy("UNIQUE_ID", uid)
}

module.exports = {
    getPlayedSongs,
    getPlayedSong
}