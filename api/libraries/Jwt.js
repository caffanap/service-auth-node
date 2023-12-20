const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/constant");

class JWTLibrary {
    constructor() {
        this.secret = JWT_SECRET
    }

    generateToken(user) {
        const payload = {
            name: user.name,
            username: user.username,
            phone: user.phone,
            role: user.role,
            timestamp: new Date().getTime()
        }

        return jwt.sign(payload, this.secret, {
            expiresIn: "1h"
        })
    }

    verifyToken(token) {
        return jwt.verify(token, this.secret)
    }

}

module.exports = new JWTLibrary()