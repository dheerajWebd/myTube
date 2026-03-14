const data = {
  usreName: "dheeraj dwivedi",
  logined: "19",
  sinedIn: true,
  getdetail: function () {
    console.log(`username is ${this.usreName}`);
  },
};
console.log(data.getdetail());

function getdetail(username,password, islogedin, work,func){
    this.username=username;
    this.password=password;
    this.islogedin=islogedin;
    this.work=work;
    this.func=func;
    this.greeting=function(){
    console.log(`wellcom ${this.username}`)
    }
    return this;//  karo cahe nakaro default hota hai ye sab globle contesect me juda jate hai 
}

// const user =  getdetail('dheeraj',1234,true,'coding')
// const user2 =  getdetail('adarsh',2341,false,'coding')// ye value rewrite ho jati hai user me bhi 
// console.log(user)
let user3 = new getdetail('akash',1342,true,'noWork')
let user4 = new  getdetail('adarsh',2341,false,'coding')// ye vaalue rewrite nahi hoti hai naya object banata hai
console.log('user3: \n',user3,'\n user4: \n',user4)
// how to work new key word

/* 
step 1 = ek naya object creat hota hai 
step 2 = constructor function call hota hai new key word ke karada or sare argumant ko object me deta hai 
step 3 = this keyword se sare varibal enject ho jate hai or hame mil jate hai 
*/
// console.log(user4.constructor); //constructor khuda hi ke bare me batata hai 
// instance chake karane ke liya dono same hai ki nahi users or getdetail Both
console.log( user3 instanceof Object )
console.log(user4 instanceof getdetail)
console.log(user4 instanceof user3)