const fs = require('fs');

//Count total number of words
function countWords(text) {
    const words = text.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i].trim();
        if (word.length > 0) {
            count++;
        }
    }
    return count;
}

//Find longest word
function findLongestWord(text) {
    const words = text.split(" ");
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i].trim();

        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

//Count how many lines file has
function countLines(text) {
    const lines = text.split("\n");
    return lines.length;
}

//Test Text Analyzer Functions
const quotesText = fs.readFileSync("./data/quotes.txt", "utf8");
const sampleText = fs.readFileSync("./data/sample-text.txt", "utf8");

console.log("quotes.txt word count:", countWords(quotesText));
console.log("quotes.txt longest word:", findLongestWord(quotesText));
console.log("quotes.txt line count:", countLines(quotesText));

console.log("sample-text.txt word count:", countWords(sampleText));
console.log("sample-text.txt longest word:", findLongestWord(sampleText));
console.log("sample-text.txt line count:", countLines(sampleText));

module.exports = {
    countWords,
    findLongestWord,
    countLines,
}