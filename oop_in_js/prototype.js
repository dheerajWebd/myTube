// jese muje koi property kis function or object string array ya or kisi me apani propety add karani ho to
// agar kisi object me koi property add karate hai to rare me militiu hai

Object.prototype.dheeraj = function () {
  console.log("my added property ");
};
myobj = {
  name: "dheeraj",
};
myobj.dheeraj();

Array.dheeraj();
// esi tarah sabhi me add hoti hai

// agar hame kisi object ko kisi dusare obj ki sari property ko accass karana chahate he to
//  inheritance
obj1 = {
  name: "dheeraj",
  work: "coding",
  age: 18,
  class: 12,
  learning: "js",
}; //agar obj1 ki sari proptey obj2 me chahiya to

obj2 = {
  do: "learning",
  __proto__: obj1, // yeha pe prototype ke rupa me add hota hai
};
obj3 = {
  classname: 1243,
};
// obj1.__proto__=obj2;
// obj1.__proto__=obj3

// morder syntex of inheritance
Object.setPrototypeOf(obj3,obj2,obj1)
// yahi prototypel inheritains hai 
// add a ture property touppercaser  or length ko ek sath me captailLangth
console.log(obj3.work)
String.prototype.captialLenght= function(string){
    console.log(this);
    console.log(`true string ${this.match(this.string).length}`);
}

"hbgddkasuyfg".captialLenght()