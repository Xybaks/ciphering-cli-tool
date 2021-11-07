module.exports = (conf) => {
    let configArray = conf.split('-')
    let err = ''
    console.log(configArray)
    if (configArray.find(cipher => cipher !== "C1"
        && cipher !== "C0"
        && cipher !== "R0"
        && cipher !== "R1"
        && cipher !== "A")
    ) {
        err = 'wrong config input'
    }
    console.log(err ? { err: err } : ("argumentsCheckFn - перед выводом", configArray))
    return err ? { err: err } : { configArray }
}