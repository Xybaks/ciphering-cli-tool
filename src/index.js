const argumentsCheckFunction = require('./functions/argumentsCheckFn');
const MyReadStream = require('./streams/myReadStream')
const MyTransformStream = require('./streams/myTransformStream')
const MyWriteStream = require('./streams/myWriteStream')
const { pipeline } = require('stream');

//try to get valid data from args
try {
    const argumentsData = argumentsCheckFunction(process.argv.slice(2)) // validation of function's arguments is inside
    const finalReadStream = argumentsData.inputPath.length > 0 ? new MyReadStream(argumentsData.inputPath) : process.stdin
    const finalTransformStream = new MyTransformStream(argumentsData.configData,)
    const finalWriteStream = argumentsData.outputPath > 0 ? new MyWriteStream(argumentsData.outputPath) : process.stdout
}
catch { new Error(error) }

pipeline
    (finalReadStream,
        MyTransformStream,
        finalWriteStream
    )

//node ./src/index.js -c "C1-R1-C0-C0-A-R0-R1-A-C1" -i "./input.txt" -o "./output.txt"