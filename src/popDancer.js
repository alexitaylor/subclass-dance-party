var PopDancer = function(top, left, timeBetweenSteps, className, icon, animation){
  Dancer.call(this, top, left, timeBetweenSteps, className, icon, animation);
}

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
}

PopDancer.prototype.lineup = function(left,top) {
	this.left = left;
	this.top = top;
	this.$node.removeAttr('style');
	var center = {
		top: top,
		left: left + '%'
	};
	this.$node.css(center);
}

PopDancer.prototype.reset = function(left, top) {
	this.left = left;
	this.top = top;
	this.$node.removeAttr('style');
	var center = {
		top: top + '%',
		left: left + '%'
	};
	this.$node.css(center);
}

PopDancer.prototype.pytha = function(top, left) {
	var result = Math.floor(Math.sqrt(Math.pow(top, 2) + Math.pow(top, 2)));
  	this.side = result;
}

PopDancer.prototype.couple = function(top, left){
	this.left = left + 5;
	this.top = top;
	this.$node.removeAttr('style');
	var couple = {
		top: top + '%',
		left: left +  '%'
	};
	this.$node.css(couple);
}