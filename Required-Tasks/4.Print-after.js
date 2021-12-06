'use strict'

// Create a function printAfter that calls its argument after printing hello world

// const print = () => console.log("Elon Musk");
// printAfter(print);
// // 'hello, world'
// // 'Elon Musk'

const print = () => console.log("Elon Musk");

function printAfter(called_f){
    console.log('Hello, world!');
    called_f();
}

console.log(printAfter(print));