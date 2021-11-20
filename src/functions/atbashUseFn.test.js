const atbashUseFn = require('./atbashUseFn');
const MyCustomError = require('../customError/myCustomError');

test('atdbash work correct', () => {
    const inString = "ABCDabcd+-Щ=&XYZxyz"

    expect(atbashUseFn(inString)).toBe("ZYXWzyxw+-Щ=&CBAcba")
})