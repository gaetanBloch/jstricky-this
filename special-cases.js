const button = document.querySelector('button');
button.addEventListener('click', function () {
  // Refers to the button element
  console.log(this);
});

setTimeout(function () {
  // Refers to the Window Object
  console.log(this);
}, 1000)
