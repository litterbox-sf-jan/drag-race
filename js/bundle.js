(function() {
  var ChristmasTree = function() {
    // this class manages the xmas tree
    // get a reference to the pre stage lights html element
    this.$preStageLights = document.getElementById('pre-stage');

    this.$stageLights = document.getElementById('stage');

    this.$falseStartLights = document.getElementById('false-start-lights');

    this.currentStartingLights = 0;
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

    setInterval(this.loop.bind(this), 1);

    this.attachListeners();
  };

  ChristmasTree.prototype.turnOn = function($which) {
    $which.className += " on";
  },

  ChristmasTree.prototype.reset = function() {
    // append the css on class to the pre stage lights
    // so that they show up as yellow
    this.turnOn(this.$preStageLights);
  };

  ChristmasTree.prototype.stage = function() {
    this.turnOn(this.$stageLights);
    this.lightSwitchTimer = setInterval(this.cycleStartingLights.bind(this), 500);
  };

  ChristmasTree.prototype.cycleStartingLights = function() {
    document.querySelectorAll('.start.lights')[this.currentStartingLights].className += ' on';
    if (this.currentStartingLights === 3) {
      clearInterval(this.lightSwitchTimer);
    }
    this.currentStartingLights++;
  };

  ChristmasTree.prototype.falseStart = function() {
    this.turnOn(this.$falseStartLights);
    clearInterval(this.lightSwitchTimer);
  };

  Game.prototype.loop = function() {
    // check the game states and react accordingly
    // this is basically a state machine
    // 1. pre-staged
    // 2. staged
    if (this.dragster.isStaged() && !this.staged) {
      this.stage();
    }

    //  a. dragster false start
    if (this.staged && !this.started && this.dragster.crossedStage() && !this.falseStarted) {
      this.falseStart();
    }
    // 3. started
    //  a. dragster crossed finish line
    // 4. finished 
  };

  Game.prototype.stage = function() {
    this.staged  = true;
    this.tree.stage();
  };

  Game.prototype.falseStart = function() {
    this.falseStarted = true;
    this.tree.falseStart();
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
      this.$el.style.left = parseInt(this.$el.style.left, 10) + 10 + "px";
    }
  };

  Dragster.prototype.isStaged = function() {
    return parseInt(this.$el.style.left,10) >= this.$el.offsetWidth + 10;
  };

  Dragster.prototype.crossedStage = function() {
    return parseInt(this.$el.style.left,10) > this.$el.offsetWidth + 20;
  };

  var g = new Game();
})();
