function reverseString(str) {
   
   // Turns string into an array of characters
   str=str.split("")
   // Reverses the array
   str=str.reverse()
   // Turns the array back into a string
   str=str.join("");
   
   return str;
  }
  
  console.log(reverseString("Watashi no reiatsu de jikai-shiro"));