// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
var add = function (a, b, c /*?*/) {
    if (c === void 0) { c /*?*/ = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'ninja');
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
var array = [];
array = ["hello", "bye", "hi"];
var greet = function () {
    console.log("Hello, World");
};
var actor;
actor = function () {
    console.log('My name is John Staurt');
};
var addition = function (a, b, c) {
    console.log(a + b);
};
addition(8, 0, "o");
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greeting = function (user) {
    console.log("".concat(user.name, " says hello"));
};
/*Function Sgnatures*/
// example 1
var sayHello;
sayHello = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var log;
log = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
var act = function (a, b) {
    console.log("".concat(a, " and ").concat(b));
};
