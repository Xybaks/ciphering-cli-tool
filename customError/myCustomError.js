class MyCustomError extends Error {
    name
    error_code
    message
    constructor(message, error_code = 1) {
        super(message, error_code)
        this.name = 'Custom Error '
        this.error_code = error_code
        this.message = message
    }
}

module.exports = MyCustomError