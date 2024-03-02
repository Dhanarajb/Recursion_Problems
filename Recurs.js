const { Factorial } = require("./Factorial");
const { Fib } = require("./Fibonacci");
const { Palindrome } = require("./Palidrome");
const { PrintName } = require("./PrintName");
const { PrintNum } = require("./PrintNum");
const { ReverseAnArray } = require("./Reverse");
const { SumOfFirstNNum } = require("./SumOfFirstNNum");

console.log(PrintName(5));
console.log(PrintNum(5));
console.log(SumOfFirstNNum(5));
console.log(Factorial(5));
console.log(ReverseAnArray([1, 2, 3, 4], 0, [1, 2, 3, 4].length - 1));
console.log(Fib(5));
console.log(Palindrome("nayan"), Palindrome("No"), Palindrome("k"));
