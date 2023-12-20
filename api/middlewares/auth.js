const Jwt = require("../libraries/Jwt");

function AuthMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = Jwt.verifyToken(token)
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).send({
            message: "Unathenticate"
        })
    }
}

module.exports = AuthMiddleware