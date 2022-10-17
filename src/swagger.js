
const docs = require("swagger-jsdoc")

const definition = {
  openapi: '3.0.0',
  info: {
    title: 'Demo service Api',
    version: '1.0.0',
  }
}

const options = {
  definition,
  apis: ["./routes/*.js"]
}

const swaggerSpec = docs(options);

module.exports = swaggerSpec