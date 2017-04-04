var PopDancer = function(top, left, timeBetweenSteps, className){
  Dancer.call(this, top, left, timeBetweenSteps, className);
}

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle(); 
}