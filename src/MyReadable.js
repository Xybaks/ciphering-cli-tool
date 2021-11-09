const {
    // incoming request, file read stream
    Readable,
    // server response to client, outgoing request, file write stream
    Writable,
    // implements both Readable and Writable, net.Socket
    Duplex,
    // same as Duplex, but allows to modify data in stream
    Transform,
} = require('stream');

class MyWritable extends Writable { }
class MyReadable extends Readable { }
const myWritable = new MyWritable('222')
const myReadable = new MyReadable('23423')
console.log(myWritable)
console.log(myReadable)
console.log("myReadable")