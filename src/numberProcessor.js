const fs = require('fs');

//First we have to convert the text file into an array of numbers
function parseNumbers(text) {
  const lines = text.split("\n");
  const nums = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.length > 0) {
      nums.push(parseFloat(line));
    }
  }
  return nums;
}

//Calculate sum of all numbers
function sumNumbers(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum = sum + arr[i]
    }
	return sum;
}

//Find highest and lowest numbers
function findHighest(arr) {
    if (arr.length === 0) return undefined;
	let highest = arr[0];
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > highest) {
        	highest = arr[i];
        }
    }
    return highest
}

function findLowest(arr) {
    if (arr.length === 0) return undefined;
    let lowest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
    }
  }
  return lowest;
}

//Calculate average
function averageNumbers(numbers) {
    if (numbers.length === 0) return 0;

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

//Test Number Processor Functions
const numsText = fs.readFileSync("./data/sample-numbers.txt", "utf8");
const nums = parseNumbers(numsText);

console.log("Numbers:", nums);
console.log("Sum:", sumNumbers(nums));
console.log("Highest:", findHighest(nums));
console.log("Lowest:", findLowest(nums));
console.log("Average:", averageNumbers(nums));

module.exports = {
    parseNumbers,
    sumNumbers,
    findHighest,
    findLowest,
    averageNumbers,
}