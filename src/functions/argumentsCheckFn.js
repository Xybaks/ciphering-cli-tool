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

    consoleArguments.forEach((element, index) => {
        switch (element) {
            case '-c': {
                if (index % 2 === 0) {
                    ++configCounter
                    configIndex = index
                }
                break
            }
            case '--config': {
                if (index % 2 === 0) {
                    ++configCounter
                    configIndex = index
                }
                break
            }
            case '-i': {
                if (index % 2 === 0) {
                    ++inputPathCounter
                    inputIndex = index
                }
                break
            }
            case '--input': {
                if (index % 2 === 0) {
                    ++inputPathCounter
                    inputIndex = index
                }
                break
            }
            case '-o': {
                if (index % 2 === 0) {
                    ++outputPathCounter
                    outputIndex = index
                }
                break
            }
            case '--output': {
                if (index % 2 === 0) {
                    ++outputPathCounter
                    outputIndex = index
                }
                break
            }
        }
    });
    if (configCounter > 1) {
        throw new MyCustomError('You provided -c argument more than once')
    } else if (configCounter < 1) {
        throw new MyCustomError('You don\'t provided -c argument')
    }

    if (inputPathCounter > 1) {
        throw new MyCustomError('You provided -i argument more than once')
    }
    if (outputPathCounter > 1) {
        throw new MyCustomError('You provided -o argument more than once')
    }

    if (inputIndex > -1) inputPath = consoleArguments[inputIndex + 1]
    if (outputIndex > -1) outputPath = consoleArguments[outputIndex + 1]
    //check of wrong path to file
    const hasInputFile = fs.existsSync(inputPath)
    const hasOutputFile = fs.existsSync(outputPath)
    if (!hasInputFile && inputIndex > -1) {
        throw new MyCustomError(`App can't open the input file`)
    }
    if (!hasOutputFile && outputIndex > -1) {
        throw new MyCustomError(`App can't open the output file`)
    }

    return { configIndex, inputPath, outputPath }
}