const button = document.querySelector('button');
button.addEventListener('click', function () {
  // Refers to the button element
  console.log(this);
});
