// let greet: Function = () => {
//   console.log('hello, world');
// }

// greet = 'hello';

// greet = () => {
//   console.log('hello, again');
// }

const add = (a: number, b: number, c/*?*/: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 10, 'ninja');

const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(10,7);
console.log(result);

let array: string[] = [];
array = ["hello", "bye", "hi"];

let greet = () => {
  console.log("Hello, World");
}

let actor: Function;

actor = () =>{
  console.log('My name is John Staurt');
}

const addition = (a: number, b: number, c?: number | string): void => {
  console.log(a+b);
}

addition(8,0,"o");

type StringOrNum = string | number;
type ObjWithTypes = {name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greeting = (user: ObjWithTypes) => {
 console.log(`${user.name} says hello`);
}

/*Function Sgnatures*/

// example 1
let sayHello: (a: string, b: string) => void;
sayHello = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b:number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if(action === "add"){
    return numOne + numTwo;
  }else{
    return numOne - numTwo
  }
}

// example 3
let log: (obj: {name: string, age: number}) => void;

type ObjWithType = {name: string, age: number};
log = (ninja: ObjWithType) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}

const act = (a: string, b:number): void => {
  console.log(`${a} and ${b}`);
}



