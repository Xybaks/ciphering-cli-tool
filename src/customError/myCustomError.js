const { stderr, exit } = require("process")
class MyCustomError extends Error {
    constructor(message, error_code = 1) {
        super(message)
        this.name = 'Error '
        this.error_code = error_code
        this.message = message
    }
}

module.exports = MyCustomError