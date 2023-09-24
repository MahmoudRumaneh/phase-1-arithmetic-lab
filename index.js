// Challenge 1: Multiply
let num1 = 31;
let num2 = 2;
let multiply = num1 * num2;

// Challenge 2: Random
let random = Math.floor(Math.random() * 1000) + 1;

// Challenge 3: Modulo
let num3 = 40;
let num4 = 6;
let mod = num3 % num4;

// Challenge 4: Max
let max = Math.max(1, 2, 3, 4, 20);

// Testing the code (you can remove this in your actual file)
console.log("Multiply:", multiply);
console.log("Random:", random);
console.log("Modulo:", mod);
console.log("Max:", max);

// Exporting the variables (for testing purposes)
module.exports = {
    multiply,
    random,
    mod,
    max,
};
