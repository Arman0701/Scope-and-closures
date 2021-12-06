'use strict'

// Write a function that implements filtering in array

// const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
// filterFalsyValues(values); // [true, {}, { name: "Elon" }];
// filterFalsyValues(["hello", 1233, []]); // ['hello', 1233, []]

function isFalsy(values_group){
    return values_group.filter(x => x);
}

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

console.log(isFalsy(values));
console.log(isFalsy(["hello", 1233, []]));