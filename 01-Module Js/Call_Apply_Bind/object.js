//lets expolore functionality of prototype

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increament = function () {
  score++;
  console.log(`score is ${this.score}`);
};

createUser.prototype.showUser = function () {
  console.log(`Hello ${this.username}`);
};

/* 
         ------------>>>>>>>> New Keyword <<<<<<<<<-------------

 We are using new keyword to create instance of test & finalTest ;
 > Now once we use the new keyword is used the creation of object take place and allocation of this Object 
 in heap memory is done!
 > Now once object creation and allocation part is done then we incert the object woth a prototype (which is again a object)
 with functioality and method for incremneting an name deisplaying function !
*/

const test = new createUser("shubham", 80);
const finalTest = new createUser("Shubham", 85);

test.increament();
test.showUser();

/* >>>>>>>>>------------------Object Methods----------------<<<<<<<<<<<<< */
let obj = {
  name: "shubham",
  class: "graduated",
};

console.log(`getting only keys of an Object`);

const keys = Object.keys(obj);
console.log(keys);

const values = Object.values(obj);
console.log(values);

const array_of_both = Object.entries(obj);
console.log(array_of_both);

// Oops and new key word

const user = {
  userName: "shubham",
  loginCount: 9,
  signIn: true,
};

/*

## Function Invocation: When a function is called as a standalone function (not as a method of an object),
         this typically refers to the global object in non-strict mode and undefined in strict mode.

## Method Invocation: When a function is called as a method of an object, this refers to the object that owns the method.

## Constructor Invocation: When a function is called with the new keyword, this refers to a newly created object.

*/

function User(userName) {
  this.userName = userName; //here due to this in GEC of function scope a property name userName is created !
  console.log(`Hi ${userName} !`);
}

const objUser = new User("Shivam");
const objUser2 = new User("Shubham");

console.log(objUser);
