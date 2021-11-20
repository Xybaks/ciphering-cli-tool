module.exports = (inString) => {
    let outString = '';
    for (let i = 0; i < inString.length; i++) {
        let codeNumber = inString.charCodeAt(i);
        if (96 < codeNumber && codeNumber < 123) outString = outString + String.fromCharCode(97 + (122 - codeNumber))
        else if (64 < codeNumber && codeNumber < 91) outString = outString + String.fromCharCode(65 + (90 - codeNumber))
        else outString = outString + String.fromCharCode(codeNumber)
    }
    return outString
}