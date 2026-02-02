const { parseNumbers, sumNumbers, findHighest, findLowest, averageNumbers } = require("../src/numberProcessor");
  
const numbers = [2, 4, 6, 8, 10];

test("parses numbers from text", () => {
    const text = "2\n4\n6\n8\n10";
    expect(parseNumbers(text)).toEqual(numbers);
});

test("calculates sum", () => {
    expect(sumNumbers(numbers)).toBe(30);
});

test("finds highest number", () => {
    expect(findHighest(numbers)).toBe(10);
});

test("finds lowest number", () => {
    expect(findLowest(numbers)).toBe(2);
});

test("calculates average", () => {
    expect(averageNumbers(numbers)).toBe(6);
});


test("works with empty array", () => {
    expect(sumNumbers([])).toBe(0);
    expect(findHighest([])).toBe(undefined);
    expect(findLowest([])).toBe(undefined);
    expect(averageNumbers([])).toBe(0);
});
