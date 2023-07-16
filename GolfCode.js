// Initialize the Array
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// Create a function that takes two parameters and runs them through certain values that each returns a specific phrase.
function golfScore(par, strokes) {
if(strokes==1){
  return names[0];
}
else if(strokes<=par-2){
  return names[1];
}
else if (strokes==par-1){
  return names[2];
}
else if (strokes==par){
  return names[3];
}
else if(strokes==par+1){
  return names[4];  
}
else if(strokes==par+2){
  return names[5];
}
else{
  return names[6];
}


 
}
// Display the result of the function upon assigning values to the parameters
console.log(golfScore(6,10));
