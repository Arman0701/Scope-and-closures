# Tasks

---

## Required Tasks

* Create a function that implements partial sum

```
sum(1)(2); // 3
const addOne = sum(1);
addOne(2); // 3
const addTen = sum(10);
addTen(2); // 12
addOne(4); // 5
addTen(10); // 20
```

[Solution](https://github.com/Arman0701/Scope-and-closures/blob/master/Required-Tasks/1.Partial-sum.js)

---

* Write a function redundant that takes in a string str and returns a function that returns str.

```
const f1 = redundant("apple");
//f1() ➞ "apple"
const f2 = redundant("pear");
//f2() ➞ "pear"
const f3 = redundant("");
//f3() ➞ ""
```

[Solution](https://github.com/Arman0701/Scope-and-closures/blob/master/Required-Tasks/2.Redundant-function.js)

---

* Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

```
add_ly = add_suffix("ly");
add_ly("hopeless"); // "hopelessly"
add_ly("total"); // "totally"
add_less = add_suffix("less");
add_less("fear"); // "fearless"
add_less("ruth"); // "ruthless"
```

[Solution](https://github.com/Arman0701/Scope-and-closures/blob/master/Required-Tasks/3.Add-suffix.js)

---

* Create a function printAfter that calls its argument after printing hello world.

```
const print = () => console.log("Elon Musk");

printAfter(print);
// 'hello, world'
// 'Elon Musk'
```

[Solution](https://github.com/Arman0701/Scope-and-closures/blob/master/Required-Tasks/4.Print-after.js)

---

* Write a function that implements filtering in array

```
const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
filterFalsyValues(values); // [true, {}, { name: "Elon" }];
filterFalsyValues(["hello", 1233, []]); // ['hello', 1233, []]
```

[Solution](https://github.com/Arman0701/Scope-and-closures/blob/master/Required-Tasks/5.Check-falsy-values.js)

---

* Write a function which remove elements with length <= 3.
```
filterByLength(["kia", "tesla", "bmw", "mercedes"]); // ['tesla','mercedes']
```

[Solution](https://github.com/Arman0701/Scope-and-closures/blob/master/Required-Tasks/6%E2%80%A4Remove-unnecessary-elements.js)

---

* Given an array. Determine whether it consists only from uniques or not.

[Solution](https://github.com/Arman0701/Scope-and-closures/blob/master/Required-Tasks/7.Unique-elements.js)

---

* Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word or phrase without a repeating letter.

[Solution](https://github.com/Arman0701/Scope-and-closures/blob/master/Required-Tasks/8.Is-isogram.js)

---

* Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

[Solution](https://github.com/Arman0701/Scope-and-closures/blob/master/Required-Tasks/9.Evens-quateric-sum.js)

---

* Check whether string is palindrome, or not.

[Solution](https://github.com/Arman0701/Scope-and-closures/blob/master/Required-Tasks/10.Checking-polindrome.js)

---

* Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

[Solution](https://github.com/Arman0701/Scope-and-closures/blob/master/Required-Tasks/11.Largest-prod-of-pair.js)

---

## Literature
#### Available in russian

* [Variable scope, closure]()
* [PythonTutor]()