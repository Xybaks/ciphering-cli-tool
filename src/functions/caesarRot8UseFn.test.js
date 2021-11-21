const caesarRot8UseFn = require('./caesarRot8UseFn');

test('caesar works correct', () => {
    const inString = "ABCDabcd+-Щ=&XYZxyz"

    expect(caesarRot8UseFn(inString, +1)).toBe("BCDEbcde+-Щ=&YZAyza")
    expect(caesarRot8UseFn(inString, -1)).toBe("ZABCzabc+-Щ=&WXYwxy")
    expect(caesarRot8UseFn(inString, +8)).toBe("IJKLijkl+-Щ=&FGHfgh")
    expect(caesarRot8UseFn(inString, -8)).toBe("STUVstuv+-Щ=&PQRpqr")
})