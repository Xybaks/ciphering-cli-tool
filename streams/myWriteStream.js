
const { Writable } = require('stream')
const fs = require('fs')

const MyCustomError = require('../customError/myCustomError')

module.exports = class MyWriteStream extends Writable {
    constructor(filename) {
        super()
        this.filename = filename
        this.fd = null
    }
    // these 3 methods run one-by-one 
    //'r+' - flag to add to existing text 'a+' - flag to add new file   https://habr.com/ru/company/ruvds/blog/424969/
    _construct(callback) {
        fs.open(this.filename, 'a+', (err, fd) => {
            if (err) {
                throw new MyCustomError(`application can't use output file `)
            } else {
                this.fd = fd
                callback()
            }
        })
    }

    _write(chunk, _encoding, callback) {
        fs.write(this.fd, chunk, callback)
    }

    _destroy(err, callback) {
        if (this.fd) {
            fs.write(this.fd, '', callback)
            fs.close(this.fd, (er) => callback(er || err))
        } else {
            throw new MyCustomError(`application can't write to output file`)
        }
    }
}