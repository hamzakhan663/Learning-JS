// var Fname = "Hamza";
// var Lname= Fname[Fname.length-5];
// console.log(Lname);

// var array=[4,5,6];
// var findArray=array[0];
// console.log(findArray);

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

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
console.log(golfScore(6,10));
