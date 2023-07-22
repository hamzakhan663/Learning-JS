function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";
 
   for (let i = 0; i < num; i++) {
     accumulatedStr += ' ' + str;
   }
 
   return accumulatedStr;
 }
 
 console.log(repeatStringNumTimes("IloveErenYeager", 3));