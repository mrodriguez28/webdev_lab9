function init(){
  //add your javascrip between these two lines of code

  var entryButton = document.getElementById('entrybutton');
  var entryInput = document.getElementById('entryinput');
  var textOutput = document.getElementById('textoutput');

  entryButton.addEventListener('click', function() {
    alert('Madison Rodriguez: ' + entryInput.value);
    textOutput.innerHTML = entryInput.value;
  });

}

window.addEventListener('load', init);