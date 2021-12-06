'use strict'

// Write a function that returns an anonymous function, which transforms its input by adding a
// particular suffix at the end.

// add_ly = add_suffix("ly");
// add_ly("hopeless"); // "hopelessly"
// add_ly("total"); // "totally"
// add_less = add_suffix("less");
// add_less("fear"); // "fearless"
// add_less("ruth"); // "ruthless"

function add_suffix(suff){
    return function(word){
        return word+suff;
    }
}

let add_ly = add_suffix('ly');
console.log(add_ly('hopeless'));
console.log(add_ly('total'));
// let add_ly = add_suffix('less'); // uncomment to see the result
// console.log(add_ly('fear'));
// console.log(add_ly('ruth'));