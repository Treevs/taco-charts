function Taco() {
  var numOfIngredients = arguments.length-1;
  var ingredients = "";
  var ingArr = ['shell', 'meat', 'cheese', 'lettuce', 'hot-sauce', 'guac'];
  if(numOfIngredients <= 1) {
    ingredients = "<div id='shell' class='ing'></div>";
  }
  var rotations = argumentsToRotations(arguments);
  for (var i = 0; i < rotations.length; i++) {

    arguments[0].append("<div id='"+ingArr[i]+"' class='ing'></div>");
    if(i!=0) {
      $("#"+ingArr[i]).transit({ rotate: rotations[i-1]+'deg'});
    }


  }
  arguments[0].append(ingredients);

}

function argumentsToRotations(arguments) {
  var multiplier = 1.8;
  var rotations = [];
  var prev = 0;
  for (var i = 1; i< arguments.length && i < 6; i++) {
    prev = (arguments[i]*multiplier)+prev;
    rotations.push(prev);
  }
  console.log(rotations);
  return rotations;
}


