const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("./api/middlewares/cors")
const database = require("./config/database")
const HelloRoutes = require("./api/routers/HelloRoutes")
const UserRoutes = require("./api/routers/UserRoutes")
const notfound = require("./api/middlewares/notfound")
const errorhandle = require("./api/middlewares/errorhandle")

database.Initialize()

app.use(morgan("dev"))
app.use("/uploads", express.static("uploads"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors)

app.use("/api/v1", HelloRoutes)
app.use("/api/v1/user", UserRoutes)

app.use(notfound)
app.use(errorhandle)

module.exports = app