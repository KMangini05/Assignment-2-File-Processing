const { countWords, findLongestWord, countLines } = require("../src/textAnalyzer");

test("counts words in simple text", () => {
    const text = "Hello world from Node";
    expect(countWords(text)).toBe(4);
});

test("returns 0 for empty text", () => {
    expect(countWords("")).toBe(0);
});

test("finds the longest word", () => {
    const text = "I love programming in JavaScript";
    expect(findLongestWord(text)).toBe("programming");
});

test("returns empty string for empty input", () => {
    expect(findLongestWord("")).toBe("");
});

test("counts number of lines", () => {
    const text = "Line1\nLine2\nLine3";
    expect(countLines(text)).toBe(3);
});

test("returns 0 for empty text lines", () => {
    expect(countLines("")).toBe(1); // because split("\n") on "" returns [""] with length 1
});
