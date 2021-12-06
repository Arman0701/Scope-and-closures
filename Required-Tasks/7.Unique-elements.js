'use strict'

// Given an array. Determine whether it consists only from uniques or not.

Array.prototype.isUnique = function(){
    let group = [];
    let elem;
    this.forEach(elem => {group.push(elem)});
    for (let i=0; i<group.length; i++){
        elem = group[i];
        group = group.slice(i+1);
        if (group.includes(elem)) return false;
    }
    return true;
}

let values = [1,23,3,4,5];
console.log(values.isUnique())
console.log([1, 1, 1, 222, 22, 2, 3].isUnique());
console.log([-1, 1, 2,3, -3].isUnique());