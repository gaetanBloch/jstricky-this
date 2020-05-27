this.age = 31;

function greet() {
  console.log(`I am ${this.age} years old`);
}
greet(); // I am 31 years old

// "this" refers to the object on which a function (method) i called.
// Hence this is defined by the execution context.
const person = { age: 50, greet };
person.greet(); // I am 50 years old

// 'use strict';
//
// console.log(this); // Window Object in the Browser
//
// greet();
//
// function greet() {
//   console.log(this); // Yields undefined in strict mode
// }
