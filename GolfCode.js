// var Fname = "Hamza";
// var Lname= Fname[Fname.length-5];
// console.log(Lname);

// var array=[4,5,6];
// var findArray=array[0];
// console.log(findArray);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if(strokes==1){
  return "Hole-in-one!";
}
else if(strokes<=par-2){
  return "Eagle";
}
else if (strokes==par-1){
  return "Birdie";
}
else if (strokes==par){
  return "Par";
}
else if(strokes==par+1){
  return "Bogey";
}
else if(strokes==par+2){
  return "Double Bogey";
}
else{
  return "Go Home!";
}

  // Only change code above this line
 
}
console.log(golfScore(6,6));
