// kisi js ke preDifine constent like PI, E, ect que change nahi kar sakate hai

// hamare pass  object ki bahut sari property hoti hai unehe desable hoti hai cnsetent ke liya or ham unhe true nahi kar sakate
// agar une dekhani ho ki o kon si property hai to 

// const discripted = Object.getOwnPropertyDescriptor(Math,"E")
// console.log(discripted.writable=true);
// console.log(discripted.enumerable=true);
// console.log(discripted.configurable=true);
// console.log(discripted.value=567);
// console.log(Math.E=837246)
// console.log(Math.E) //ese ham kbhi bhi nahi change nahi kar sakate hai  

let myObj ={
name:"dheeraj",
class:"html",
work:"not any work"
}

Object.defineProperty(myObj,"name",{ // khud ke object me property set karane ke liya hota hai 
    configurable:false,
    writable:false,// yah overwrite hone nahi deti ahi 
    enumerable:false,// yeha lopp nahi lagane deti hai 
    
});
console.log(myObj.name="adarsh")
// console.log(myObj.name) 
console.log( Object.entries(myObj));// ya object ko array me return karata hai or array ke andar har ek key or value ka ek array
for (const [key, value] of Object.entries(myObj)) { // pahle object ko array me convart kiya gaya hai 
    console.log(key,"::",value)
}
