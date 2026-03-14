function multplay5(num){
    this.num=num;
return 5*num;
}
multplay5.power=2
// js function bhi ek object hai js me sab object hota hai 
// console.log(multplay5(5));
// console.log(multplay5.power);
// console.log(multplay5.prototype);//object ka prtotype bhi milata hai yaha pe jo function ka contex hota hai to usaka bhi this hota hai to o {} milata  hai 

function creatuser(username, prise){
    this.username=username
    this.prise=prise
}

// jese muje koi kuda ki property ya method  add karana ho kisi me to usaka syntex hai 

creatuser.prototype.increament=function() {
    this.prise++
}
creatuser.prototype.printf=function() {
    console.log(`the prise is = ${this.prise}`);
}

const chai =new creatuser('dheeraj',25) //new keyword in sab ka acsses deta hai  jo property add kari hai 
creatuser(chai.printf())
