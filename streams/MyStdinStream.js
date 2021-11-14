
const MyCustomError = require('../customError/myCustomError')

const MyStdinStream = () => {
    try {
        process.stdout.write('Enter text.  To cancel press control+c.\n')
        process.stdin.resume()
        return process.stdin
    }
    catch { throw new MyCustomError(`App can't use terminal`) }
}

module.exports = MyStdinStream