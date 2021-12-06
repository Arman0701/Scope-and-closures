'use strict'

// Given an array of integers, find the pair of adjacent elements that has the largest product and return
// that product.

function prodOfPair(ints){
    let result = [];
    for (let i=0; i<ints.length-1; i++){
        result.push(ints[i] * ints[i+1]);
    }
    return Math.max(...result);
}

console.log(prodOfPair([1,2,3,4,5,6,7,8,9]));
console.log(prodOfPair([1,2,3,0]));
console.log(prodOfPair([-1,0,1,5,7,3]));