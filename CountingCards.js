/* Blackjack Card Counting */

// Initial Value of the variable 'count'
let count = 0;

// Create a function that receives a card parameter which can be a number or a string.
function CountingCards(card) {
switch (card) {
 case 2:
 case 3:
 case 4:
 case 5:
 case 6:
    count ++;
break;

 case 10:
 case "J":
 case "Q":
 case "K":
 case "A":
    count --;
break;

}

// The function returns a string with the current count and "Bet" if the count is positive, or "Hold" if the count is zero or negative.
if(count > 0){
return count + " Bet";
}
else{
  return count + " Hold";
}

  

}
// Call Function
CountingCards(9); CountingCards(2); CountingCards(8); CountingCards(5); CountingCards(6);
// Display the string and the current count after running demo value 7 through the switch statement
console.log(CountingCards(5));