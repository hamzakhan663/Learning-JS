//Initialize an empty array
const ourArray = [];
//Initial value of variable "i"
let i = 0;
// Execute 20 times and append numbers 0 through 20 to "ourArray"
while(i <= 20){
    ourArray.push(i);
    i++;
}
// Display the array
console.log(ourArray);

// Initialize variable "value" to delete first element of "ourArray"
const value = ourArray.shift();
// Display deleted element
console.log(value);
// Initialize variable "result" to delete last element of "ourArray"
const result = ourArray.pop();
// Display deleted element
console.log(result);


