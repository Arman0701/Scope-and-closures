'use strict'

// Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

function sumOf(numbers){
    return numbers.filter(x => x%2===0).reduce((a,b) => Math.pow(a, 2) + Math.pow(b, 2));
}

console.log(sumOf([1, 2, 3, 4]));
console.log(sumOf([15, 73, 36, 12]));
console.log(sumOf([0, -5, 21, 44]));