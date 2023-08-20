"use strict";
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
const add = (a, b, c /*?*/ = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'ninja');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
console.log(result);
let array = [];
array = ["hello", "bye", "hi"];
let greet = () => {
    console.log("Hello, World");
};
let actor;
actor = () => {
    console.log('My name is John Staurt');
};
const addition = (a, b, c) => {
    console.log(a + b);
};
addition(8, 0, "o");
const logDetails = (uid, item) => {
    console.log("${item} has a uid of ${uid}");
};
const greeting = (user) => {
    console.log("${user.name} says hello");
};
/*Function Sgnatures*/
// example 1
let sayHello;
sayHello = (name, greeting) => {
    console.log("${name} says ${greeting}");
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let log;
log = (ninja) => {
    console.log("${ninja.name} is ${ninja.age} years old");
};
