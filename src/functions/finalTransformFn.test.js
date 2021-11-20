const finalTransformFn = require('./finalTransformFn')
const MyCustomError = require('../customError/myCustomError');

test('ciphering works correct', () => {
    let str = 'This is secret. Message about "_" symbol!'

    expect(finalTransformFn('C1-C1-R0-A', str)).toBe('Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!')
    expect(finalTransformFn('C1-C0-A-R1-R0-A-R0-R0-C1-A', str)).toBe('Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!')
    expect(finalTransformFn('A-A-A-R1-R0-R0-R0-C1-C1-A', str)).toBe('Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!')
    expect(finalTransformFn('C1-R1-C0-C0-A-R0-R1-R1-A-C1', str)).toBe('This is secret. Message about "_" symbol!')

})

test('ciphering return error if config is incorrect', () => {
    let str = 'This is secret. Message about "_" symbol!'
    expect(() => { finalTransformFn('C1-C1-R0-A1', str) }).toThrowError(new MyCustomError('Wrong config was used'))

})