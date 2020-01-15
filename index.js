// wait for the page to load
document.addEventListener('DOMContentLoaded', function() {

  var redButton = document.querySelector('.button.red');

  redButton.addEventListener('click', function() {

    var box = document.createElement('div');
    var boxContainer = document.querySelector('.box-container');

    box.className = 'box red';
    boxContainer.appendChild(box);

  });
});
