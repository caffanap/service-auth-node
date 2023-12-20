const db = require("diskdb")
const { DATABASE_PATH } = require("./constant")

class DatabaseContext {
    constructor() {
        this.context = db
    }

    Initialize() {
        this.context.connect(DATABASE_PATH, ["users"])
    }
}

module.exports = new DatabaseContext()