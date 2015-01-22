(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function ChristmasTree() {
  // this class manages the xmas tree
  // get a reference to the pre stage lights html element
  this.$preStageLights = document.getElementById('pre-stage');
  // reset the christmas tree every time it's initialized
  this.reset();
}

ChristmasTree.prototype.reset = function() {
  // append the css on class to the pre stage lights
  // so that they show up as yellow
  this.$preStageLights.className += " on";
};


module.exports = ChristmasTree;

},{}],2:[function(require,module,exports){
function Dragster() {
  // grab the car element
  this.$el = document.getElementById('dragster');
  // set the starting position of the dragster
  this.$el.style.left = "0px";
}

Dragster.prototype.advance = function() {
  // this should move the car across the screen 1px at a time
  this.$el.style.left = parseInt(this.$el.style.left, 10) + 1 + "px";
};

module.exports = Dragster;

},{}],3:[function(require,module,exports){
var ChristmasTree = require('./christmas_tree'),
    RaceTrack     = require('./racetrack'),
    Dragster      = require('./dragster');

function Game() {
  // this class manages game state
  // initialize a christmas tree
  this.tree = new ChristmasTree();
  // initialize the race track
  this.track = new RaceTrack();
  // initialize the player dragster
  this.dragster = new Dragster();

  this.attachListeners();
}

Game.prototype.attachListeners = function() {
  var self = this;
  // listen for user input, specifically
  // for the user pressing the right arrow key
  window.addEventListener('keyup', function(event) {
    if (event.keyCode === 39) {
      self.dragster.advance();
    }
  });
};

module.exports = Game; 

},{"./christmas_tree":1,"./dragster":2,"./racetrack":5}],4:[function(require,module,exports){
(function() {
  var Game          = require('./game'); 

  var g = new Game();
})();

},{"./game":3}],5:[function(require,module,exports){
module.exports = function() {
  // this class manages the race track
};

},{}]},{},[4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImNocmlzdG1hc190cmVlLmpzIiwiZHJhZ3N0ZXIuanMiLCJnYW1lLmpzIiwibWFpbi5qcyIsInJhY2V0cmFjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIENocmlzdG1hc1RyZWUoKSB7XG4gIC8vIHRoaXMgY2xhc3MgbWFuYWdlcyB0aGUgeG1hcyB0cmVlXG4gIC8vIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgcHJlIHN0YWdlIGxpZ2h0cyBodG1sIGVsZW1lbnRcbiAgdGhpcy4kcHJlU3RhZ2VMaWdodHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlLXN0YWdlJyk7XG4gIC8vIHJlc2V0IHRoZSBjaHJpc3RtYXMgdHJlZSBldmVyeSB0aW1lIGl0J3MgaW5pdGlhbGl6ZWRcbiAgdGhpcy5yZXNldCgpO1xufVxuXG5DaHJpc3RtYXNUcmVlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAvLyBhcHBlbmQgdGhlIGNzcyBvbiBjbGFzcyB0byB0aGUgcHJlIHN0YWdlIGxpZ2h0c1xuICAvLyBzbyB0aGF0IHRoZXkgc2hvdyB1cCBhcyB5ZWxsb3dcbiAgdGhpcy4kcHJlU3RhZ2VMaWdodHMuY2xhc3NOYW1lICs9IFwiIG9uXCI7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQ2hyaXN0bWFzVHJlZTtcbiIsImZ1bmN0aW9uIERyYWdzdGVyKCkge1xuICAvLyBncmFiIHRoZSBjYXIgZWxlbWVudFxuICB0aGlzLiRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmFnc3RlcicpO1xuICAvLyBzZXQgdGhlIHN0YXJ0aW5nIHBvc2l0aW9uIG9mIHRoZSBkcmFnc3RlclxuICB0aGlzLiRlbC5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcbn1cblxuRHJhZ3N0ZXIucHJvdG90eXBlLmFkdmFuY2UgPSBmdW5jdGlvbigpIHtcbiAgLy8gdGhpcyBzaG91bGQgbW92ZSB0aGUgY2FyIGFjcm9zcyB0aGUgc2NyZWVuIDFweCBhdCBhIHRpbWVcbiAgdGhpcy4kZWwuc3R5bGUubGVmdCA9IHBhcnNlSW50KHRoaXMuJGVsLnN0eWxlLmxlZnQsIDEwKSArIDEgKyBcInB4XCI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERyYWdzdGVyO1xuIiwidmFyIENocmlzdG1hc1RyZWUgPSByZXF1aXJlKCcuL2NocmlzdG1hc190cmVlJyksXG4gICAgUmFjZVRyYWNrICAgICA9IHJlcXVpcmUoJy4vcmFjZXRyYWNrJyksXG4gICAgRHJhZ3N0ZXIgICAgICA9IHJlcXVpcmUoJy4vZHJhZ3N0ZXInKTtcblxuZnVuY3Rpb24gR2FtZSgpIHtcbiAgLy8gdGhpcyBjbGFzcyBtYW5hZ2VzIGdhbWUgc3RhdGVcbiAgLy8gaW5pdGlhbGl6ZSBhIGNocmlzdG1hcyB0cmVlXG4gIHRoaXMudHJlZSA9IG5ldyBDaHJpc3RtYXNUcmVlKCk7XG4gIC8vIGluaXRpYWxpemUgdGhlIHJhY2UgdHJhY2tcbiAgdGhpcy50cmFjayA9IG5ldyBSYWNlVHJhY2soKTtcbiAgLy8gaW5pdGlhbGl6ZSB0aGUgcGxheWVyIGRyYWdzdGVyXG4gIHRoaXMuZHJhZ3N0ZXIgPSBuZXcgRHJhZ3N0ZXIoKTtcblxuICB0aGlzLmF0dGFjaExpc3RlbmVycygpO1xufVxuXG5HYW1lLnByb3RvdHlwZS5hdHRhY2hMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICAvLyBsaXN0ZW4gZm9yIHVzZXIgaW5wdXQsIHNwZWNpZmljYWxseVxuICAvLyBmb3IgdGhlIHVzZXIgcHJlc3NpbmcgdGhlIHJpZ2h0IGFycm93IGtleVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgc2VsZi5kcmFnc3Rlci5hZHZhbmNlKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTsgXG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBHYW1lICAgICAgICAgID0gcmVxdWlyZSgnLi9nYW1lJyk7IFxuXG4gIHZhciBnID0gbmV3IEdhbWUoKTtcbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAvLyB0aGlzIGNsYXNzIG1hbmFnZXMgdGhlIHJhY2UgdHJhY2tcbn07XG4iXX0=
