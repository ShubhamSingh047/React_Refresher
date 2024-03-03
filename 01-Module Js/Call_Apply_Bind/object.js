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
let obj={
    name:"shubham",
    class:"graduated",
}

console.log(`getting only keys of an Object`);

const keys=Object.keys(obj);
console.log(keys);

const values=Object.values(obj);
console.log(values);

const array_of_both=Object.entries(obj);
console.log(array_of_both);