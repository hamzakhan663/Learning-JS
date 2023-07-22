function truncateString(str, num) {
    let truncatedString="";
    if(str.length>num){
    return truncatedString=str.slice(0,num)+'...';
    }
    else{
      return str;
    }
  }
  
  console.log(truncateString("Ore no nawa Eren Yeager da", 18));