(function() {
  var ChristmasTree = function() {
    // this class manages the xmas tree
    // get a reference to the pre stage lights html element
    this.$preStageLights = document.getElementById('pre-stage');
    // reset the christmas tree every time it's initialized
    this.reset();
  },
  RaceTrack         = function() {
    // this class manages the race track
  },
  Dragster          = function() {
    // grab the car element
    this.$el = document.getElementById('dragster');
    // set the starting position of the dragster
    this.$el.style.left = "0px";
    // this keeps track of whether it's running
    this.isRunning = false;
  },
  Game              = function() {
    // this class manages game state
    // initialize a christmas tree
    this.tree = new ChristmasTree();
    // initialize the race track
    this.track = new RaceTrack();
    // initialize the player dragster
    this.dragster = new Dragster();

    this.attachListeners();
  };

  ChristmasTree.prototype.reset = function() {
    // append the css on class to the pre stage lights
    // so that they show up as yellow
    this.$preStageLights.className += " on";
  };

  Game.prototype.attachListeners = function() {
    var self = this;
    // listen for user to press keys
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 39) {
        // if the user presses the right arrow key
        // advance the dragster
        self.dragster.advance();
      } else if (event.keyCode === 13) {
        // if the user presses the enter key
        // start the dragster
        self.dragster.start();
      }
    });
  };

  Dragster.prototype.start = function() {
    this.isRunning = true;
  };

  Dragster.prototype.advance = function() {
    // if the engine is running
    if (this.isRunning) { 
      // this should move the car across the screen 1px at a time
      this.$el.style.left = parseInt(this.$el.style.left, 10) + 1 + "px";
    }
  };

  var g = new Game();
})();
