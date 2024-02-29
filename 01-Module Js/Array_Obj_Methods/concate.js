/*
We will lern about concate v/s push;
*/

const arr1=[1,2,3,4];
const arr2=[5,6,7,8];

/*                       >>------Push-------<<
    push will push the complet array into arr1 and will change the arr1
*/

// arr1.push(arr2);
// console.log(arr1);

/*                      >>------Concatinate-------<<
    concate will add every element from arr1 and arr2 and return a new arr
    ---Very imp it will not update any existing arr but will return a new array
*/
const test=arr1.concat(arr2);
console.log(arr1)
console.log(test);