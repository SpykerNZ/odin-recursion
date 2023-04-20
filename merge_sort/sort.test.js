const sort = require("./sort");

describe("sort array", () => {
  const testCases = [
    { args: [[0]], expected: [0] },
    { args: [[1, 0]], expected: [0, 1] },
    { args: [[2, 1, 6, 3, 5, 4]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[7, 6, 5, 4, 3, 2, 1]], expected: [1, 2, 3, 4, 5, 6, 7] },
    {
      args: [[8, 2, 4, 6, 7, 5, 3, 1, 9]],
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
  ];
  testCases.forEach(({ args, expected }) => {
    test(`sort ${args}`, () => {
      expect(sort(...args)).toEqual(expected);
    });
  });
});
