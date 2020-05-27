class Person {
  constructor() {
    this.age = 31
  }

  greet() {
    console.log(this);
    console.log('My age: ' + this.age);
  }

  greetWithDelay() {
    // the "this" in the greet method passed doesn't have the same context
    // as the class but the Window Object
    // setTimeout(this.greet, 1500);

    // Store the "this" keyword in a "that" constant
    // const that = this;
    // setTimeout(function() {
    //   console.log(that);
    //   console.log('My age: ' + that.age);
    // }, 1500);

    // Use bind to bind the "this" keyword to the same context
    setTimeout(this.greet.bind(this), 1500);
  }
}

const gaetan = new Person();
gaetan.greet();
gaetan.greetWithDelay();

const button = document.querySelector('button');
button.addEventListener('click', function () {
  // Refers to the button element
  console.log(this);
});

// setTimeout(function () {
//   // Refers to the Window Object
//   console.log(this);
// }, 1000);
