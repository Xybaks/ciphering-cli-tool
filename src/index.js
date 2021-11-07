const argumentsCheckFunction = require('./argumentsCheckFn.js');
let argsArray = process.argv.slice(2)
argumentsCheckFunction(argsArray)
//node ./src/index.js -c "C1-R1-C0-C0-A-R0-R1-A-C1" -i "./input.txt" -o "./output.txt"