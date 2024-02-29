/* 
flat opertator convertert multiple levele nested array into a sigle array
 >it does not make changes to origninal array instead return a new updated array
*/

const test = [1, 2, [3, 2, 4], [5, 6, 7, [8]], 9];
const updated_test = test.flat(Infinity);
console.log(updated_test);


/*
FlatMap is combination of flat and map
>it take a call back as an argument to work as per individual elment
>rest is same as flat() method;
*/

const arr4 = [1, 2, [3, [4, 5, [6, 7]]]] ;

console.log(arr4.flatMap((element) => element).flat(2)) ;
