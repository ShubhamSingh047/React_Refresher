
let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]

//task is to give the list of user whose age is more then 50;
let resultantArray=users.filter(({age})=>age>50);
console.log(resultantArray);

//now we want only name of user in sorted order of age;
let sortedRes=users.filter(({age})=>age>50).sort((a,b)=>a.age-b.age).map(({name})=>name);
console.log(sortedRes);

// ------------------------------- filter with object ----------------------------

const userDetails = {
    firstName: "Jane",
    lastName: "Daniels",
    userName: "jane.daniels",
    email: "jane.daniels@example.com",
    comapny: "Example Inc.",
    address: "1234 Example Street",
    age : 25,
    hobby: "Singing"
};

let userKey=Object.keys(userDetails).filter((key)=>key.includes("Name")); 

let test=userKey.map((Element)=>{
    return {[Element]:userDetails[Element]}
});
console.log(test);


 // 

