const express = require('express')
const http = require('http')
const cors = require('cors')
const config = require("./config")
const api = require("./routes/main")

const app = express()

app.use(cors())
app.use(api)

// Setup to listen on http
const httpServer = http.createServer(app)
httpServer.listen(config.port)
console.log(`App running on port ${config.port}...`)