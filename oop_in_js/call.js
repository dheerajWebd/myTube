function setUserName(userName,arr,...ra) {
  this.userName = userName;
  this.arr=arr;
  this.ra=ra
  console.log("called");
}

function creatUser(gimal, userName, password) {
  setUserName(userName); // ye call hoga lekin delete ho jayege esake sare varibal exucte hone bad
  this.gimal = gimal;
  this.password = password;
}

const user = new creatUser("dheeraj:1@gamil", "asgeeraj: 1", 123);
console.log(user);

function creatUser2(gimal, userName, password) {
setUserName.call(this ,userName,['dheeraj','adarsh','etc'],3,3,4,5,6,7);  
// setUserName.call(this, userName); // ham jab istarah se kisi function ke ander kisi or function ko call karate hai to oo call to hota hai lekin o
// call ho jata or usaka sara kam khtam hojata hai to use callstak se hata diya jata hai or usake sare varibal hatjate hai
// tab ham ysa na hone ke liya call() ka use karate hai or esake sath this. ko bhi bhe jate jis function se call hua hai
  this.gimal = gimal;
  this.password = password;
  
}




// bind ka use 
function creatUser3(gimal, userName, password) {
  let namer=setUserName.bind(this ,userName,['dheeraj','adarsh','etc'],3,3,4,5,6,7);  
  // bind ka ye kam karata hai ek function me rap karake ek aribal me hohd kardeta hai jab chaho tab use karalo jaha pe use ho oha pe 
   namer()
    this.gimal = gimal;
    this.password = password;
  }
  console.log("second: ",2);
  const user2 = new creatUser3("dheeraj@gamil", "dheeraj", 123321);
  console.log(user2);
  
// dusara use or call bind or apply bhi 
let object1 ={
name :"dheeraj",
  learning:"react",
  time :15 +" days",
  printName: function() {
    console.log(this.name);
  }
}
// jab hame koi or object me same print name ka function banaho or same kam karata ho to cass ka use karate jese 
let object2 ={
  name :"adarsh ",
    learning:"react",
    time :15 +" days",
    // printName: function() {
    //   console.log(this.name);
    // } aba hame esaka bhi name ko print karana ho to ham bar bar function nahi banaye ge 
  
  }
object1.printName()//  yha pr pahale vale object ke this ko  point kare ga 
object1.printName.call(object2)//  yha pr dusare vale object ke this ko  point kare ga 

// dusara tarika jab hamara functiom bahar ho tab kisi object ka method naho tab 
function printlearning(dh) {
  console.log(this.learning,dh);
} 
// ham ab sabhi object ke this ko point kar sakate hai 
printlearning.call(object1,[1,2,3,4,5,6,7,7])//ye ek gelat tarika hai call me argument separeted hote hai yeha pe pure array ko ek hi argument manata hai
printlearning.apply(object1,[1,2])// ye array ke har ek element ye index ke value ko argument manata hi
//  bind kam karata hai ki kisi varival me store karta hai or jab caho tab use karalo 
printlearning.bind(object1,[1,2,3,4,5,6,7,7])

