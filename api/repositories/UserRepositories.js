const database = require("../../config/database")
const db = database.context

class UserRepositories {
    getUserByPhonePassword(phone, password) {
        return db.users.findOne({ phone: phone, password: password })
    }

    addUser(user) {
        return db.users.save(user)
    }

    cekUsername(username) {
        const result = db.users.find({ username: username })
        if (result.length > 0) return false
        return true
    }
}

module.exports = new UserRepositories()