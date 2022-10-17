const express = require("express")
const router = express.Router({ mergeParams: true })

const dbSongController = require("../controllers/db.songs")

router.get("/played/songs", dbSongController.getAllPlayedSongs)
router.get("/played/songs/:id", dbSongController.getPlayedSong)

module.exports = router
