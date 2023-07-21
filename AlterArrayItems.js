//Delete beginning and end element from the array and print
function Array(val) {
let shifted=val.shift();
let popped=val.pop();
return [shifted,popped];
}
console.log(Array([1,2,3,4]));

// Add a new element to the beginning and end of the array
function String(Arr){
    Arr.unshift(3);
    Arr.push(7);
    return Arr;
}
console.log(String(['IV', 5, 'six']));
