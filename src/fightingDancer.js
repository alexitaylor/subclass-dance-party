var FightingDancer = function(top, left, timeBetweenSteps, className, icon, animation){
  Dancer.call(this, top, left, timeBetweenSteps, className, icon, animation);
}

FightingDancer.prototype = Object.create(Dancer.prototype);
FightingDancer.prototype.constructor = FightingDancer;

FightingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
}
FightingDancer.prototype.lineup = function(left, top) {
	this.left = left;
	this.top = top;
	this.$node.removeAttr('style');
	var center = {
		top: top,
		left: left + '%'
	};
	this.$node.css(center);
}

FightingDancer.prototype.reset = function(left, top) {
	this.left = left;
	this.top = top;
	this.$node.removeAttr('style');
	var center = {
		top: top + '%',
		left: left + '%'
	};
	this.$node.css(center);
}

FightingDancer.prototype.pytha = function(top, left) {
	var result = Math.floor(Math.sqrt(Math.pow(top, 2) + Math.pow(top, 2)));
  	this.side = result;
}

FightingDancer.prototype.couple = function(top, left){
	console.log(left);
	console.log(this.left);
	this.left = left + 5;
	this.top = top;
	this.$node.removeAttr('style');
	var couple = {
		top: top + '%',
		left: left + 5 +  '%'
	};
	this.$node.css(couple);
}
