class creatuser {
  constructor(userName, gmail, password) {
    this.userName = userName;
    this.gmail = gmail;
    this.password = password;
  }
  chancgPassword() {
    return `!@d#dsfda%d^d&d*()${this.password}@d#fsddg$d%^&sddf*()`;
  }
  changeuser() {
    return `${this.userName.toUpperCase()}`;
  }
}
const user = new creatuser("dheeraj", "@gimal.com", 243544455);
console.log(user.chancgPassword());
console.log(user.changeuser());

// behind the sceen

function classbehind(userName, gmail, password) {
  this.userName = userName;
  this.gmail = gmail;
  this.password = password;
}

classbehind.prototype.changepassword = function () {
  return `!@d#dsfda%d^d&d*()${this.password}@d#fsddg$d%^&sddf*()`;
};
classbehind.prototype.changeuser = function () {
  return `${this.userName.toUpperCase()}`;
};

const behind = new creatuser("behind", "behind@gimal.com", "behind");
console.log(behind.chancgPassword());
console.log(behind.changeuser());

// classes inheritance clsses ko ek dusare se lik karana hai to

class inheritains {
  constructor(userName, id, password) {
    this.userName = userName;
    this.id = id;
    this.password = password;
  }
  user() {
    return this.userName;
  }
}

class inheritains2 extends inheritains {
  constructor(userName, id, password) {
    super(userName); // same call ki tarah kam karata hai
    this.id = id;
    this.password = password; // varibal ka siquance bhi mater karata hai
  }
  LOGpassword() {
    return this.password;
  }
}
user3 = new inheritains2("dheeraj", "2433", 48423);
console.log(user3.user());
console.log(user3.LOGpassword());
console.log(user3 instanceof inheritains2); //ye yah chake krata hai ki usase bana hua hai ki nahi true ya false return karata hai

// jese muje koi property ki ko nahi deni hai kisi class ki to usko static me set kar dete hai

class myclass {
  constructor(username, gmail, id) {
    this.username = username;
    this.gmail = gmail;
    this.id = id;
  }
  static creatid() {
    //ye kisi dusare ko lene nahi hone deti hai
    console.log(`123`);
  }
}

const user4 = new myclass("dheeraj", "jkdhc.com", 789);
console.log(user4.creatid());
/* 

मैं इसे line-by-line, easy Hindi, + inheritance के सारे types के साथ समझा रहा हूँ।

1️⃣ Inheritance क्या होता है? (Simple Words)

Inheritance = एक class की properties और methods को दूसरी class में use करना

👉 Code repeat नहीं करना पड़ता
👉 Parent–Child relationship बनता है

2️⃣ तुम्हारा Code – Line by Line Explanation
🔹 Parent Class
class inheritains {
  constructor(userName, id, password) {
    this.userName = userName;
    this.id = id;
    this.password = password;
  }

  user() {
    return this.userName;
  }
}

🔍 क्या हो रहा है?

inheritains → Parent class

constructor → object create होते ही run

this → current object

user() → method जो username return करता है

🔹 Child Class
class inheritains2 extends inheritains {

🔍 Meaning

inheritains2 → Child class

extends inheritains → parent से connect

👉 अब child class:

userName

id

password

user()

सब use कर सकती है

🔹 Child Constructor
constructor(userName, id, password) {
  super(userName); 
  this.id = id;
  this.password = password;
}

⚠️ IMPORTANT RULE

Child constructor में this use करने से पहले super() call करना ज़रूरी है

super() क्या करता है?
super(userName);


Parent constructor को call करता है

this.userName = userName; set करता है

⚠️ Best practice:

super(userName, id, password);

🔹 Child Method
LOGpassword() {
  return this.password;
}


Child की खुद की method

🔹 Object Creation
user3 = new inheritains2("dheeraj", "2433", 48423);


Flow:

Child constructor call

super() → parent constructor

child properties set

🔹 Method Calls
console.log(user3.user());         // parent method
console.log(user3.LOGpassword()); // child method


👉 Child object parent + child दोनों methods access कर सकता है

🔹 instanceof
console.log(user3 instanceof inheritains2);

Meaning:

Check करता है object किस class से बना है

Results:

user3 instanceof inheritains2  // true
user3 instanceof inheritains   // true

3️⃣ तुम्हारे Code में सुधार (Correct Version)
class Inheritance {
  constructor(userName, id, password) {
    this.userName = userName;
    this.id = id;
    this.password = password;
  }

  user() {
    return this.userName;
  }
}

class Inheritance2 extends Inheritance {
  constructor(userName, id, password) {
    super(userName, id, password);
  }

  logPassword() {
    return this.password;
  }
}

4️⃣ JavaScript में Inheritance के Types

⚠️ JS prototype-based language है, लेकिन class syntax देता है

1️⃣ Single Inheritance ✅
class A {}
class B extends A {}


👉 One parent → one child
(तुम्हारा example यही है)

2️⃣ Multilevel Inheritance ✅
class A {}
class B extends A {}
class C extends B {}


Flow:

A → B → C

3️⃣ Hierarchical Inheritance ✅
class A {}
class B extends A {}
class C extends A {}

    A
   / \
  B   C

4️⃣ Multiple Inheritance ❌ (Directly not allowed)
class C extends A, B {} // ❌ error


❌ JS में directly possible नहीं

5️⃣ Multiple Inheritance using Mixins ✅
const canRun = {
  run() {
    console.log("Running");
  }
};

class Person {}
Object.assign(Person.prototype, canRun);

const p = new Person();
p.run();

6️⃣ Prototype-based Inheritance (Old way)
function A() {}
function B() {}

B.prototype = Object.create(A.prototype);

5️⃣ Interview Important Points ⭐

extends → inheritance

super() → parent constructor

Child object → parent methods access

JS supports single inheritance

Multiple inheritance → mixins

6️⃣ One-Line Interview Answer

Inheritance JavaScript में code reusability के लिए parent class की properties और methods को child class में inherit करने का तरीका है।
*/
