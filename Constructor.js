function Future(status){
    this.name="Savitar";
    this.age=25;
    this.gender="Male";
    this.color="Blue";
    this.speedcolor="White";
    this.nemesis="Barry";
    this.status=status;
}
let Present=new Future("Dead");
console.log(Present);
var check=Present instanceof Future;
console.log(check);