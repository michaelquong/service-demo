const express = require("express")
const v1songs = require("./v1.songs")
const v2songs = require("./v2.songs")

const router = express.Router()

// health endpoint
router.get("/healthz", (request, response) => {
    const health = {
        uptime: process.uptime(),
		message: "OK",
		timestamp: Date.now()
    }
    response.json(health)
  })

// homepage
router.get("/", (request, response) => {
    const info = {
        info: "hello"
    }
    response.json(info)
  })

// Api
router.use("/api/v1", v1songs)
router.use("/api/v2", v2songs)

module.exports = router