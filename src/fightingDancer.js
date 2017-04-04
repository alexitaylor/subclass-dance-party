var FightingDancer = function(top, left, timeBetweenSteps, className, icon, animation){
  Dancer.call(this, top, left, timeBetweenSteps, className, icon, animation);
}

FightingDancer.prototype = Object.create(Dancer.prototype);
FightingDancer.prototype.constructor = FightingDancer;

FightingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.toggle();
}
FightingDancer.prototype.lineup = function(left) {
	this.$node.removeAttr('style');
	var center = {
		top: '50%',
		left: left + '%'
	};
	this.$node.css(center);
}