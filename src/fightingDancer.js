var FightingDancer = function(top, left, timeBetweenSteps, className){
  Dancer.call(this, top, left, timeBetweenSteps, className);
}

FightingDancer.prototype = Object.create(Dancer.prototype);
FightingDancer.prototype.constructor = FightingDancer;

FightingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle(); 
}