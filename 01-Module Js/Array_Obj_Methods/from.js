/*     >>------- From --------<<
 > from method convert any given argument in array if possible 
 > In case of arguments cannot be converted to array it returned an empty array !
 > it does not change the actual value infect return the new array !
*/

const str="Shubham";
const result=Array.from(str);
console.log(result);


// > In case of arguments cannot be converted to array it returned an empty array !(Example)

console.log(Array.from({name:"Shubham"}));


// Array of method take multiple araguments and covert them into an array
let score1=12;
let score2=23;
let score3=43;

let test=Array.of(score1,score2,score3);
console.log(test);