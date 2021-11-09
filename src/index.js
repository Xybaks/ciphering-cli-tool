const argumentsCheckFunction = require('./argumentsCheckFn.js');

const argsArray = process.argv.slice(2)
const argumentsData = argumentsCheckFunction(argsArray)
const inputData = argumentsData.inputPath.length > 0
    ? {
        //use ReadStream
    }
    : process.stdin;

const outputData = argumentsData.outputPath.length > 0
    ? {
        //use WriteStream
    }
    : process.stdin;


//node ./src/index.js -c "C1-R1-C0-C0-A-R0-R1-A-C1" -i "./input.txt" -o "./output.txt"