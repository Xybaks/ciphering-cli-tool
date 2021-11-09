const configChangeFn = require('./configChangeFn.js');

module.exports = (consoleArguments) => {

    if ((consoleArguments.length <= 1) || (consoleArguments.length % 2 === 1)) {
        throw new Error('not valid number of  arguments of app, S')
    }
    let configCounter = 0
    let configData = ''
    let configIndex = -1

    let inputPathCounter = 0
    let inputPath = ''
    let inputIndex = -1

    let outputPathCounter = 0
    let outputPath = ''
    let outputIndex = -1

    let orderError = 0

    consoleArguments.forEach((element, index) => {
        switch (element) {
            case '-c': {
                if (index % 2 === 0) {
                    ++configCounter
                    ++configIndex
                } else ++orderError
                break
            }
            case '--config': {
                if (index % 2 === 0) {
                    ++configCounter
                    ++configIndex
                } else ++orderError
                break
            }
            case '-i': {
                if (index % 2 === 0) {
                    ++inputPathCounter
                    inputIndex = index
                } else ++orderError
                break
            }
            case '--input': {
                if (index % 2 === 0) {
                    ++inputPathCounter
                    inputIndex = index
                } else ++orderError
                break
            }
            case '-o': {
                if (index % 2 === 0) {
                    ++outputPathCounter
                    outputIndex = index
                } else ++orderError
                break
            }
            case '--output': {
                if (index % 2 === 0) {
                    ++outputPathCounter
                    outputIndex = index
                } else ++orderError
                break
            }
        }
    });

    if ((configCounter !== 1)
        || (inputPathCounter !== (1 || 0))
        || (outputPathCounter !== (1 || 0))
        || orderError > 0) {
        throw new Error('wrong arguments input :(')
    }
    configData = configChangeFn(consoleArguments[configIndex + 1])
    if (configData.hasOwnProperty("err")) {
        throw new Error(configData.err)
    }
    if (inputIndex > -1) inputPath = consoleArguments[inputIndex]
    if (outputIndex > -1) outputPath = consoleArguments[outputIndex]
    return { configData, inputPath, outputPath }
}