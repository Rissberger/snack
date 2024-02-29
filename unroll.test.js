const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("unrolls a 4x4 square correctly", function () {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(input)).toEqual(expected);
  });

  it("unrolls a 3x3 square correctly", function () {
    const input = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const expected = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
    expect(unroll(input)).toEqual(expected);
  });

  it("unrolls a 2x2 square correctly", function () {
    const input = [
      [1, 2],
      [3, 4]
    ];
    const expected = [1, 2, 4, 3];
    expect(unroll(input)).toEqual(expected);
  });

  it("handles a 1x1 square correctly", function () {
    const input = [[1]];
    const expected = [1];
    expect(unroll(input)).toEqual(expected);
  });

  it("unrolls a rectangle (3x4) correctly", function () {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12]
    ];
    const expected = [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8];
    expect(unroll(input)).toEqual(expected);
  });
});
