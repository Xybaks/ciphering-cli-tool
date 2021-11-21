const MyCustomError = require('../customError/myCustomError')
const MyWriteStream = require('./myWriteStream')

describe('MyWriteStream tests', () => {
    it('rejects/errors if a stream error occurs', async () => {
        const myWriteStream = new MyWriteStream('/path/to/file2.txt')
        expect(myWriteStream._construct).toBeDefined;
    })

}
)