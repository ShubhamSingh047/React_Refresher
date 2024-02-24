let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2);
days;
let remMonths = months.splice(0, 1);
remMonths;
months;

/*
1). Splice Method Update the original Array !
2). Splice Method take can take three differnt argument !
 Splice(starting Index, number of elment, new element to added,new element to added )
3). Splice method return new array ! 
*/

let arr = ["January", "February", "Monday", "Tuesday"];
let res = arr.splice();
console.log(res); //empty array is returned as we have not placed any arguments splice method

/*
1). Slice method is used to create a shallow copy of JS.
2). It used to copy a part of string and array.
3)it does not make changes to original array.
*/

let arr2 = ["January", "February", "Monday", "Tuesday"];
let shallocopyArr = arr2.slice();
console.log(shallocopyArr); //shallow copy of orginal array is created

let partArr2 = arr2.slice(1);
console.log(partArr2);
