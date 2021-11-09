const {
    // incoming request, file read stream
    Readable,
    // server response to client, outgoing request, file write stream
    // Writable,
    // implements both Readable and Writable, net.Socket
    // Duplex,
    // same as Duplex, but allows to modify data in stream
    // Transform,
} = require('stream');

class MyReadable extends Readable {
    filePath = ""
    hasPath = false
    constructor(filePath, options = {}) {
        super
            this.filePath = filePath

    }
}
const myWritable = new MyWritable('222')
const myReadable = new MyReadable('23423')
