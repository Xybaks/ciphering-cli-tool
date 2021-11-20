const argumentsCheckFunction = require('./argumentsCheckFn');
const MyCustomError = require('../customError/myCustomError');

test('should take valid args:  \'-c\', \'A\', \'-i\', \'./input.txt\', \'-o\', \'./output.txt\'', () => {
    const args = ['-c', 'A', '-i', './input.txt', '-o', './output.txt']
    const args2 = ['-o', './input.txt', '-i', './output.txt', '--config', 'A',]
    const argConfigErr = ['-o', './input.txt', '-i', './output.txt', '--config', 'A', '-c', 'C0']
    const argumentsData = argumentsCheckFunction(args)
    const argumentsData2 = argumentsCheckFunction(args2)

    expect(argumentsData.configIndex).toBe(0);
    expect(argumentsData2.configIndex).toBe(4)
    expect(argumentsData.inputPath).toBe('./input.txt')
    expect(argumentsData2.outputPath).toBe('./input.txt')
    expect(() => argumentsCheckFunction(argConfigErr)).toThrow(MyCustomError)
})

test('should make error of incorrect arguments', () => {
    const argConfigErr = ['-o', './input.txt', '-i', './output.txt', '--config', 'A', '-c', 'C0']
    const argConfigErr2 = ['--output', './input.txt', '-i', './output.txt', '--config', 'A', '-o', 'C0']
    const argConfigErr3 = ['-o', './input.txt', '--input', './output.txt', '--config', 'A', '-i', 'C0']
    // without -c or --config
    const argConfigErr4 = ['-o', './input.txt', '-i', './output.txt', '-i', 'C0']
    // with wrong number of args
    const argConfigErr5 = ['-o', './input.txt', './input2.txt', '-i', './output.txt', '-i', 'C0']

    // with wrong input path
    const argConfigErr6 = ['-i', './iasdfnput.txt', '-o', './output.txt', '-c', 'C0']
    // with wrong output path
    const argConfigErr7 = ['-i', './input.txt', '-o', './ofasdfutput.txt', '-c', 'C0']


    expect(() => argumentsCheckFunction(argConfigErr)).toThrowError(new MyCustomError("You provided -c argument more than once"))
    expect(() => argumentsCheckFunction(argConfigErr2)).toThrowError(new MyCustomError("You provided -o argument more than once"))
    expect(() => argumentsCheckFunction(argConfigErr3)).toThrowError(new MyCustomError("You provided -i argument more than once"))
    // without -c or --config
    expect(() => argumentsCheckFunction(argConfigErr4)).toThrowError(new MyCustomError('You don\'t provided -c argument'))
    // with wrong number of args
    expect(() => argumentsCheckFunction(argConfigErr5)).toThrowError(new MyCustomError('not valid number of  arguments of app or some argument is empty string '))
    // with wrong input path
    expect(() => argumentsCheckFunction(argConfigErr6)).toThrowError(new MyCustomError('App can\'t open the input file'))
    // with wrong output path
    expect(() => argumentsCheckFunction(argConfigErr7)).toThrowError(new MyCustomError('App can\'t open the output file'))


})
test('test input/output paths', () => {
    const argConfig = ['--config', 'C0', '-o', './output.txt']
    const argConfig2 = ['--config', 'C0', '-i', './output.txt',]
    const inputPath = argumentsCheckFunction(argConfig).inputPath
    const outputPath = argumentsCheckFunction(argConfig2).outputPath
    expect(inputPath).toBe("")
    expect(outputPath).toBe("")

})

