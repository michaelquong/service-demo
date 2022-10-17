const env = process.env

// App General
const port = env.DEMO_APP_PORT || 3000

// Connections
const csvFileUri = "https://raw.githubusercontent.com/fivethirtyeight/data/master/classic-rock/classic-rock-raw-data.csv"
const dbConnectionUri = {
    host: env.POSTGRES_HOST || "postgres",
    user: env.POSTGRES_USER || "postgres",
    password: env.POSTGRES_PASSWORD || "postgres",
    database: env.POSTGRES_DB || "demo",
    port: env.POSTGRES_PORT || 5432
}

module.exports = {
    csvFileUri,
    dbConnectionUri,
    port
}