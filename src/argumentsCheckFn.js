const configChangeFn = require('./configChangeFn.js');

module.exports = (consoleArguments) => {

    if ((consoleArguments.length <= 1) || (consoleArguments.length % 2 === 1)) {
        throw new Error('not valid number of  arguments of app, S')
    }
    let configCounter = 0
    let configIndex = -1
    let inputPathCounter = 0
    let outputPathCounter = 0
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
                index % 2 === 0 ? ++inputPathCounter : ++orderError
                break
            }
            case '--input': {
                index % 2 === 0 ? ++inputPathCounter : ++orderError
                break
            }
            case '-o': {
                index % 2 === 0 ? ++outputPathCounter : ++orderError
                break
            }
            case '--output': {
                ++outputPathCounter
                break
            }
        }
    });
    console.log("configCounter", configCounter);
    console.log("inputPathCounter", inputPathCounter);
    console.log("outputPathCounter", outputPathCounter);
    if ((configCounter !== 1)
        || (inputPathCounter !== (1 || 0))
        || (outputPathCounter !== (1 || 0))
        || orderError > 0) {
        throw new Error('wrong arguments input :(')
    }
    const checkResult = configChangeFn(consoleArguments[configIndex + 1])
    if (checkResult.hasOwnProperty("err")) {
        throw new Error(checkResult.err)
    }
    return checkResult
}

