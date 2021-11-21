
const MyCustomError = require('../customError/myCustomError')
const MyStdinStream = require('./MyStdinStream');


const mockStdinStream = jest.fn().mockImplementation(() => {
  const myReads = MyStdinStream();
  myReads.push("This is secret. Message about \"_\" symbol!");
  myReads.push("\n");
  myReads.push(null);
  return myReads;
});

describe("test of MyStdinStream", () => {
  test("MyStdinStream works ok", () => {
    expect(MyStdinStream()._readableState.buffer.data).toBe(mockStdinStream()._readableState.buffer.data);
  });

});