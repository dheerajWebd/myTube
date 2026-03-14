class user {
    constructor(gmail,possword,name){
        this.gmail=gmail;
        this.possword=possword;
        this.name=name;
    }
    //  get or set ka use tab karate jab hame return kuchh or karana ho or data base me ya or kahi kuch or set karana ho 
    // get me ham jo value kisi ko dikhana ho rahati hai set jo ham database me save karana chahate hai o rahati hai 

    get gmail(){
        return this._gmail="dheeraj dfgfhgjkhl"
    }
    set gmail(value){
        this._gmail=value // same name nahi de sakate hai jo constrator me hai gimal ki jagaha _gmail diya hai taki js samajh sake ki alag alag hai agar ham same kar dege to error dega 
    }
}
const newuser=new user("dheeraj.@gimal.com","2347634","dheerta")
console.log(newuser.gmail);
 