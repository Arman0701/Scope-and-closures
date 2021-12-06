'use strict'

// Check whether string is palindrome, or not.

function palindrome(str) {
    let regex = /[\W]/g;
    let lowRegStr = str.toLowerCase().replace(regex, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}

let values = ['edivider', 'deified', 'civic', 
              'radar', 'level', 'rotor', 'kayak',
              'reviver', 'racecar', 'madam',
            ];
for(let val in values){
    console.log(palindrome(val));
}

console.log(palindrome('Eva, can I see bees in a cave?'));
console.log(palindrome('Was it a cat I saw?'));