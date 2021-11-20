const atbashUseFn = require('./atbashUseFn');
const caesarRot8UseFn = require('./caesarRot8UseFn');

const MyCustomError = require('../customError/myCustomError')

module.exports = (configData, changStr) => {
    let arrayData = configData.split('-')
    let changStr2 = changStr.toString()
    arrayData.forEach(element => {
        if (element !== "A" && element !== "C0" && element !== "C1" && element !== "R0" && element !== "R1") {
            throw new MyCustomError('Wrong config was used')
        }
        switch (element) {
            case "A":  // for Atbash
                changStr2 = atbashUseFn(changStr2.toString())
                break

            case 'C0':  // if (x === 'value2')
                changStr2 = caesarRot8UseFn(changStr2.toString(), -1)
                break

            case 'C1':  // if (x === 'value2')
                changStr2 = caesarRot8UseFn(changStr2.toString(), +1)
                break
            case 'R0':  // if (x === 'value2')
                changStr2 = caesarRot8UseFn(changStr2.toString(), -8)
                break

            case 'R1':  // if (x === 'value2')
                changStr2 = caesarRot8UseFn(changStr2.toString(), +8)
                break
            default: throw new MyCustomError('Wrong config was used')
        }
    })
    return changStr2
}