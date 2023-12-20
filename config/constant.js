const dotenv = require("dotenv")

dotenv.config()

module.exports = {
    PORT: process.env.PORT,
    DATABASE_PATH: process.env.DATABASE_PATH,
    JWT_SECRET: process.env.JWT_SECRET
}