
const path = require('path');
// const fs = require('fs');
const { stdout, argv } = require("process")
const argumentsCheckFunction = require('./src/functions/argumentsCheckFn');
const MyReadStream = require('./src/streams/myReadStream')
const MyStdinStream = require('./src/streams/MyStdinStream')
const MyTransformStream = require('./src/streams/myTransformStream')
const MyWriteStream = require('./src/streams/myWriteStream')

//try to get valid data from args
const argumentsData = argumentsCheckFunction(argv.slice(2)) // validation of function's arguments is inside
const configData = argv[argumentsData.configIndex + 3]
const inputPath = argumentsData.inputPath.length > 0 ? path.join(__dirname, './', argumentsData.inputPath) : ""
const outputPath = !!argumentsData.outputPath ? path.join(__dirname, './', argumentsData.outputPath) : ""

// final streams 
const finalReadStream = !!argumentsData.inputPath ?
    // fs.createReadStream(inputPath, 'utf-8')  //usual input stream
    new MyReadStream(inputPath)
    : MyStdinStream()
const finalTransformStream = new MyTransformStream({ configData })

const finalWriteStream = !!argumentsData.outputPath ?
    // fs.createWriteStream(outputPath)  //usual uotput stream  with rewriting
    new MyWriteStream(outputPath)
    : stdout

finalReadStream.pipe(finalTransformStream).pipe(finalWriteStream)

//node ./src/index.js -c "C1-R1-C0-C0-A-R0-R1-A-C1" -i "./input.txt" -o "./output.txt"