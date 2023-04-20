const fibs = require("./fibonacci");

describe("fibonacci sequence", () => {
  const testCases = [
    { args: [0], expected: [] },
    { args: [1], expected: [0] },
    { args: [2], expected: [0, 1] },
    { args: [3], expected: [0, 1, 1] },
    { args: [4], expected: [0, 1, 1, 2] },
    { args: [5], expected: [0, 1, 1, 2, 3] },
    { args: [6], expected: [0, 1, 1, 2, 3, 5] },
  ];
  testCases.forEach(({ args, expected }) => {
    test(`check length ${args}`, () => {
      expect(fibs.fibs_arr(...args)).toEqual(expected);
      expect(fibs.fibs_rec(...args)).toEqual(expected);
    });
  });
});
