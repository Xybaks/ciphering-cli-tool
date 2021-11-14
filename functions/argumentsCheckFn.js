const fs = require('fs');
const MyCustomError = require('../customError/myCustomError')

module.exports = (consoleArguments) => {

    if ((consoleArguments.length <= 1) || (consoleArguments.length % 2 === 1)) {
        throw new MyCustomError('not valid number of  arguments of app or some argument is empty string ')
    }
    let configCounter = 0
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
        || (inputPathCounter > 1 || inputPathCounter < 0)
        || (outputPathCounter > 1 || outputPathCounter < 0)
        || orderError > 0
        || orderError > 0) {
        throw new MyCustomError('wrong arguments input :(')
    }

    if (inputIndex > -1) inputPath = consoleArguments[inputIndex + 1]
    if (outputIndex > -1) outputPath = consoleArguments[outputIndex + 1]
    if (consoleArguments[configIndex + 1].length < 1) {
        throw new MyCustomError('empty config input :(')
    }
    //check of wrong path to file
    const hasInputFile = fs.existsSync(inputPath)
    const hasOutputFile = fs.existsSync(outputPath)
    if (!hasInputFile && inputIndex > -1) {
        throw new MyCustomError(`!!! App can't open the input file`)
    }
    if (!hasOutputFile && outputIndex > -1) {
        throw new MyCustomError(`!!! App can't open the output file`)
    }

    return { configIndex, inputPath, outputPath, }
}