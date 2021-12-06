'use strict'

// Write a function which remove elements with length <= 3

// filterByLength(["kia", "tesla", "bmw", "mercedes"]); // ['tesla', 'mercedes']

function filterByLength(values_group){
    return values_group.filter(val => val.length > 3);
}

console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));