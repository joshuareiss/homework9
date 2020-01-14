// wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
  // select thee button
  var button = document.querySelector('.button');
  // add click event listener to the button
  button.addEventListener('click', function() {
    console.log('the button clicked')
    // here is where you would add anything you would
    // like to happen when the button is clicked
    // ADD CODE HERE 👇🏻

    var box = document.getElementById("box");

    if (red.clicked == true) {
        box.style.backgroundColor = "red";
    } else if (orange.clicked == true) {
        box.style.backgroundColor = "orange";
      } else if (orange.clicked == true) {
          box.style.backgroundColor = "yellow";

    var div = document.createElement('div');

    // how do I add an element to the page in JavaScript?
    var boxContainer = document.querySelector('.box-container');

    // add the div tag to the userContainer
    boxContainer.appendChild(div);

  });
});


// var boxRed =
//
// var boxOrange =
//
// var boxYellow =
//
// var box = document.getElementById("box");
//
// if (red.clicked == true) {
//     box.style.backgroundColor = "red";
// } else if (orange.clicked == true) {
//     box.style.backgroundColor = "orange";
//   } else if (orange.clicked == true) {
//       box.style.backgroundColor = "yellow";

// $('red.').append('<div>').addClass('box red');
// $('orange.').append('<div>').addClass('box orange');
// $('yellow.').append('<div>').addClass('box yellow');
