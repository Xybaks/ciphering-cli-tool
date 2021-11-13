
const { Writable } = require('stream')
const fs = require('fs')

class MyWriteStream extends Writable {
    constructor(filename) {
        super()
        this.filename = filename
        this.fd = null
    }
    // these 3 methods run one-by-one 
    //'a+' - flag to add to existing text
    _construct(callback) {
        fs.open(this.filename, 'a+', (err, fd) => {
            if (err) {
                throw new Error(`application can't open ${this.filename} `)
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
            throw new Error(`application can't write to ${this.filename} `)
        }
    }
}

module.exports = MyWriteStream