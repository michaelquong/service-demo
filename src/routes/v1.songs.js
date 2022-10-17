const express = require("express")
const router = express.Router({ mergeParams: true })

const csvSongController = require("../controllers/csv.songs")

router.get("/played/songs", csvSongController.getAllPlayedSongs)
router.get("/played/songs/:uid", csvSongController.getPlayedSong)

module.exports = router