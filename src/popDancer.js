var PopDancer = function(top, left, timeBetweenSteps, className, icon, animation){
  Dancer.call(this, top, left, timeBetweenSteps, className, icon, animation);
}

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
}