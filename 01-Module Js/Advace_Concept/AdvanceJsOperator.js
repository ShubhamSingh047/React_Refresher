//--------nullish Opertor v/s or Operator--------

/*<*---- nullish (??)----*>*/
let name=null;
let resuName=name??"shubham";
console.log(resuName);

/*<*---- OR (||)----*>*/
/* so in or opertor see 0 and ""(emoty string as falsy value and thus update the 
    variable but nullish value only update the value in case of null or undefined */

let guest="";
let resGuest=guest??"shubham";
console.log(resGuest);
resGuest=guest||"shubham;"
console.log(resGuest);

/*------------Destructuring Arrays-------------*/
const sampleArray = ['Jane', 'John', 'Jack', 'Aston', 'shubham'];

const [one, two,...rest] = sampleArray;
console.log(...rest);




/*----------- Ddestructuring Object-----------*/
const user = {
    firstName: 'Jack',
    lastName: 'Smith',
  };
  
const { firstName, lastName } = user;


/* Destructuring using function */
function myFunction() {
    return { firstName: 'Jack', lastName: 'Austin' };
  }
  
  const { fnames, lName } = myFunction();
