
const { Readable } = require('stream');

const MyReadStream = require('./myReadStream')
const MyCustomError = require('../customError/myCustomError')

const mockRStream = jest.fn().mockImplementation(() => {
  const myReads = new Readable();
  myReads.push("This is secret. Message about _ symbol!");
  myReads.push("\n");
  myReads.push(null);
  return myReads;
});

describe("test of myReadStream", () => {
  test("myReadStream works ok", () => {
    expect(new MyReadStream("/.input.txt")._readableState.buffer.data).toBe(
      mockRStream()._readableState.buffer.data
    );
  });

  test("myReadStream can\'t find a file ", () => {
    const tryMakeStream = () => {
      try {
        newMyReadStream('/gav-gav.txt')
      } catch (err) {
        throw new MyCustomError("App can't open the input file")
      }
    }
    expect(() => tryMakeStream()).toThrow(MyCustomError)
  });

});