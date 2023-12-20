const HelloController = require("../controllers/HelloController")

const HelloRoutes = require("express").Router()

HelloRoutes.get("/check-app", HelloController.checkApp)

module.exports = HelloRoutes
