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
