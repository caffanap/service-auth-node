const UserController = require("../controllers/UserController")
const AuthMiddleware = require("../middlewares/auth")

const UserRoutes = require("express").Router()

UserRoutes.post("/signup", UserController.userSignUp)
UserRoutes.post("/signin", UserController.userSignIn)
UserRoutes.get("/profile", AuthMiddleware, UserController.userProfile)

module.exports = UserRoutes
