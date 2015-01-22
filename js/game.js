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
