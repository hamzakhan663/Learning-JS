function Random(num,num2){
    num2 = Math.ceil(num2);
    num = Math.floor(num);
    return Math.floor(Math.random() * (num-num2) + num2);
}
console.log("Your New PIN is " + Random(1500,10000) + ". Do not Share⚠️");