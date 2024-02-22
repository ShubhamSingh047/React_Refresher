const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

//only using Current elment parameter
staffsDetails.forEach((objRef)=>console.log(objRef.name));

//using all three parameter
staffsDetails.forEach((objRef,index,array)=>{
    console.log(`${objRef.name} is at ${index+1} in the array`);
});


//Using condition 
staffsDetails.forEach(({name,salary})=>salary>=4000?console.log(name +" have salary more then 4000 !"):null)


//sum of all the number in array
let score=[10,20,30];
let test=0;
score.forEach((score)=>{
    test+=score;
})
console.log(test);

//continue and break does not work with forEach method
//Async/Await does not work with the forEach() array method but works with the for loop method.

