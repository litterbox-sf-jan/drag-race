(function() {
  // get a reference to the pre stage lights html element
  var $christmasTreePreStageLights = document.getElementById('pre-stage');
  // grab the car element
  var $dragsterEl = document.getElementById('dragster');
  
  // set the starting position of the dragster
  $dragsterEl.style.left = "0px";

  // append the css on class to the pre stage lights
  // so that they show up as yellow
  $christmasTreePreStageLights.className += " on";
  
  // listen for user input, specifically
  // for the user pressing the right arrow key
  window.addEventListener('keyup', function(event) {
    if (event.keyCode === 39) {
      // this should move the car across the screen 1px at a time
      $dragsterEl.style.left = parseInt($dragsterEl.style.left, 10) + 1 + "px";
    }
  });
})();
