const db = require("diskdb")

class DatabaseContext {
    constructor() {
        this.context = db
    }

    Initialize() {
        this.context.connect("./data", ["users"])
    }
}

module.exports = new DatabaseContext()