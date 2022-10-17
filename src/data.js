const csv = require("csvtojson")
const config = require("./config")
const request = require("request")

async function csvFileData(url) {
  csvData = request.get(url)
  const data = await csv()
    .fromStream(csvData)
  return data
}


class CsvDB {
  constructor(uri) {
    this.csvFile = uri
  }

  async querySongs(filters = {}) {
    const songData = await csvFileData(this.csvFile)
    if (Object.keys(filters).length === 0) {
      return songData
    }
    const filteredSongData = songData.filter((song) => {
      for(const [key, value] of Object.entries(filters)) {
        if(song[key] == value) {
          return true
        }
      }
      return false
    })
    return filteredSongData
  }

  async querySongBy(columnKey, value) {
    const songs = await this.querySongs()
    for(const song of songs) {
      if(song[columnKey].toLowerCase() == value.toLowerCase()) {
        return song
      }
    }
    return {}
    // return songs.find(song => {
    //   return song[columnKey].toLowerCase() == value.toLowerCase()
    // })
  }
}

module.exports = {
  CsvDB
}