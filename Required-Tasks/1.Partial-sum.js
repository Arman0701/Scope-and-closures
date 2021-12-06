'use strict'

// Create a function that implements partial sum
/*
sum(1)(2); // 3
const addOne = sum(1);
addOne(2); // 3
const addTen = sum(10);
addTen(2); // 12
addOne(4); // 5
addTen(10); // 20
*/

function add(x) {
    return function(y) {
        return x + y;
    };
}

console.log(add(1)(2));
const addOne = add(1);
console.log(addOne(2));
const addTen = add(10);
console.log(addTen(2));
console.log(addOne(4));
console.log(addTen(10));