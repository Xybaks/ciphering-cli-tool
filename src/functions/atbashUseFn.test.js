const atbashUseFn = require('./atbashUseFn');

test('atdbash work correct', () => {
    const inString = "ABCDabcd+-Щ=&XYZxyz"

    expect(atbashUseFn(inString)).toBe("ZYXWzyxw+-Щ=&CBAcba")
})