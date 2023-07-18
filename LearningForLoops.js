// Initialize empty array 
const myArray = [];

// Print out numbers 1-5
for(let i=1; i<=5; i++){
  myArray.push(i);
}
console.log(myArray);

//Print out the odd numbers from 1-9
const ourArray = [];
for (let i = 1; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);

//Print out the even numbers from 0-10
const thirdArray = [];
for (let i = 0; i < 10; i += 2) {
  thirdArray.push(i);
}
console.log(thirdArray);

//Print out odd numbers from 1-9 backwards
const fourthArray = [];
for (let i = 9; i > 0; i -= 2) {
    fourthArray.push(i);
  }
console.log(fourthArray);

//Loop through the array and add them together
const myArr = [2, 3, 4, 5, 6, 7, 8, 9];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total=total+myArr[i];
}
console.log(total);

//Print out all elements in the sub array one at a time
const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

  //Multiplies all elements in the sub array of "arr"
  function multiplyAll(arr) {
    let product = 1;

  for (let i=0;i<arr.length;i++){
    for (let j=0;j<arr[i].length;j++){
      product*=arr[i][j];
    }
  }
    console.log(product);
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7],[8, 9, 10, 11]]);