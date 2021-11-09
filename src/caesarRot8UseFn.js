let inString = "abcdxyzABCDXYZ"
let outString = '';
const jumpNumber = -1
for (let i = 0; i < inString.length; i++) {
    let codeNumber = inString.charCodeAt(i);
    if (96 < codeNumber && codeNumber < 123) {
        codeNumber += jumpNumber
        if (codeNumber > 122) {
            codeNumber = codeNumber - 26
        } else if (codeNumber < 97) {
            codeNumber = codeNumber + 26
        }
        outString += String.fromCharCode(codeNumber)
    }
    else if (64 < codeNumber && codeNumber < 91) {
        codeNumber += jumpNumber
        if (codeNumber > 90) {
            codeNumber = codeNumber - 26
        } else if (codeNumber < 65) {
            codeNumber = codeNumber + 26
        }
        outString += String.fromCharCode(codeNumber)
    }
    else outString = outString + String.fromCharCode(codeNumber)
}
console.log(outString)