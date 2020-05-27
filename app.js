'use strict';

console.log(this); // Window Object in the Browser

greet();

function greet() {
  console.log(this); // Yields undefined in strict mode
}
