'use strict'

// Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a
// word or phrase without a repeating letter.

function isIsogram(str){
    let splitted = str.split('');
    let pseudoObj = [];
    let result = '';

    for (let i=0; i<splitted.length; i++){
        pseudoObj.push( [] );
        pseudoObj[i].push(splitted[i], 0);
    }
    let obj = Object.fromEntries(pseudoObj);

    for (let key in obj){
        result += key;
    }
    return result === str ? true : false;
}

console.log(isIsogram("hello"));
console.log(isIsogram("armen"));
