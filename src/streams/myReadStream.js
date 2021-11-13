//copy-pasted from https://nodejs.org/api/stream.html

const { Readable } = require('stream');
const fs = require('fs');

class MyReadStream extends Readable {
    constructor(filename) {
        super();
        this.filename = filename;
        this.fd = null;
    }
    // these 3 methods run one-by-one 
    //
    _construct(callback) {
        fs.open(this.filename, (err, fd) => {
            if (err) {
                throw new Error(`App can't open the file: ${filename}`)
            } else {
                this.fd = fd;
                callback();
            }
        });
    }

    _read(n) {
        const buf = Buffer.alloc(n);
        fs.read(this.fd, buf, 0, n, null, (err, bytesRead) => {
            if (err) {
                throw new Error(`App can't read the file: ${filename}`)
            } else {
                this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
            }
        });
    }

    _destroy(err, callback) {
        if (this.fd) {
            fs.close(this.fd, (er) => callback(er || err));
        } else {
            throw new Error(`Error of _destroy method  during reading the file: ${filename}`)
        }
    }
}
module.exports = MyReadStream