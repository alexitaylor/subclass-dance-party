//var _ = require('lodash');

$(document).ready(function() {
  window.dancers = [];
  var classIcons = {BlinkyDancer: 'fa-snapchat-ghost', PopDancer: 'fa-github-alt', FightingDancer: 'fa-linux' };
  var classIconsArray = ['fa-snapchat-ghost', 'fa-bug', 'fa-github-alt', 'fa-linux', 'fa-android', 'fa-reddit-alien', 'fa-optin-monster', 'fa-slack', 'fa-gitlab', 'fa-pied-piper-alt', 'fa-drupal'];
  var animations = ['pulse', 'bounce', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello', 'lightSpeedOut', 'slideOutUp', 'zoomInDown', 'zoomOutUp', 'bounceOutDown'];
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
    //console.log(window.Dancer);
    var rand = _.random(classIconsArray.length - 1);
    var randAnimation = _.random(animations.length - 1);
    // make a dancer with a random position
 
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 5000,
      dancerMakerFunctionName,
      classIconsArray[rand],
      animations[randAnimation]
    );
    subClassesNodes.push(dancer);
    console.log(subClassesNodes);
    $('body').append(dancer.$node);
  });

  $('.lineup').on('click', function() {
    var length = subClassesNodes.length;
    var fractionPercentage = 100 / length;
    for (var i = 0; i < subClassesNodes.length; i++) {
      var uniquePercentage = fractionPercentage * i;
      subClassesNodes[i].lineup(uniquePercentage);
    }

    
    //subClassesNodes[0]
  });
});

