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

FightingDancer.prototype.reset = function(left, top, animation) {
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

FightingDancer.prototype.couple = function(top, left, animation){
	this.left = left + 5;
	this.top = top; 
	//$(this.$node[0].childNodes[0]).removeClass();
	var classes = this.$node[0].childNodes[0].className;
	var everythingButLastWord = classes.substring(0, classes.lastIndexOf(" "));
	everythingButLastWord = everythingButLastWord + ' ' + animation
	console.log(everythingButLastWord)

	var couple = {
		top: top + '%',
		left: left +  '%'
	};
	$(this.$node[0].childNodes[0]).addClass(everythingButLastWord);
	this.$node.css(couple);
}
