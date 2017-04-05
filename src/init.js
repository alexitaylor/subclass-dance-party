//var _ = require('lodash');

$(document).ready(function() {
  window.dancers = [];
  var classIcons = {BlinkyDancer: 'fa-snapchat-ghost', PopDancer: 'fa-github-alt', FightingDancer: 'fa-linux' };
  var classAnimations = {BlinkyDancer: 'jello', PopDancer: 'wobble', FightingDancer: 'rubberBand'};  
  var subClassesNodes = [];

  $('.addDancerButton').on('click', function(event) {
    
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');


    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      100 * Math.random(),
      100 * Math.random(),
      Math.random() * 5000,
      dancerMakerFunctionName,
      classIcons[dancerMakerFunctionName],
      classAnimations[dancerMakerFunctionName]
    );
    subClassesNodes.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineup').on('click', function() {
      var length = subClassesNodes.length;
      var fractionPercentage = 100 / length;
      for (var i = 0; i < subClassesNodes.length; i++) {
        var uniquePercentage = fractionPercentage * i;
        subClassesNodes[i].lineup(uniquePercentage, '50%');
      }
  });

    $('.reset').on('click', function() {
      for (var i = 0; i < subClassesNodes.length; i++) {
        subClassesNodes[i].reset(90 * Math.random(), 90 * Math.random());
      }
    });

    $('.couple').on('click', function() {
      for (var i = 0; i < subClassesNodes.length; i++) {
        subClassesNodes[i].pytha(subClassesNodes[i].top, subClassesNodes[i].left);
      }
      subClassesNodes = _.sortBy(subClassesNodes,function(item){
        return item.side;
      });
      if (subClassesNodes.length > 1) {
        for(var j = 0; j < subClassesNodes.length; j=j+2){
          var topTemp = subClassesNodes[j + 1].top;
          var leftTemp = subClassesNodes[j + 1].left + 5;
          subClassesNodes[j].couple(topTemp, leftTemp, 'lightSpeedIn');
          subClassesNodes[j + 1].couple(subClassesNodes[j + 1].top, subClassesNodes[j + 1].left, 'lightSpeedOut');
        }
      }      
  });

    $('').hover(function(){
      $(this).toggleClass('hover');
    })

});

