const pg = require("pg")
const config = require("../config")

const db = new pg.Pool(config.dbConnectionUri)

async function query(q) {
    const client = await db.connect()
    try {
        console.log(q)
        const result = await client.query(q)
        console.log(result)
        return result
    } catch (error) {
        console.log(`some error: ${error}`)
        throw error
    } finally {
        client.release()
    }
}

async function getPlayedSongs() {
    const rows = await query("SELECT * FROM public.station_songs")
    return rows
}

async function getPlayedSong(id) {
    const row = await query(`SELECT * FROM public.station_songs WHERE id = '${id}'`)
    return row
}

module.exports = {
    getPlayedSongs,
    getPlayedSong
}