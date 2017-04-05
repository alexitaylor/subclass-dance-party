var Dancer = function(top, left, timeBetweenSteps, className, icon, animation) {

  this.$node = $('<span class="' + className + '"><i class="fa ' + icon + ' fa-3x animated infinite ' + animation + '" aria-hidden="true"></i></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
  this.top = top;
  this.left = left;
  this.side = null;
  this.animation = animation;

};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
      top: top + '%',
      left: left + '%'
    };
    this.$node.css(styleSettings);
};

Dancer.prototype.addAnimation = function(node, animation) {
  var classes = node[0].childNodes[0].className;
  var everythingButLastWord = classes.substring(0, classes.lastIndexOf(" "));
  everythingButLastWord = everythingButLastWord + ' ' + animation;
  $(node[0].childNodes[0]).removeClass();
  $(node[0].childNodes[0]).addClass(everythingButLastWord);
}
