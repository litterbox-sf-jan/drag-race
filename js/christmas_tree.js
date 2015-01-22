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
