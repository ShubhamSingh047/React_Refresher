//  -----------example 1-----------
const addDemo=[3,7,10,9,6];

// 10 unicode coding is less so that is why it is coming in front if we dont use Comparable function
// so that is why we have to use compartble function for this.

addDemo.sort();
console.log(addDemo);

const coorected=addDemo.slice().sort(Comparable);
console.log(coorected)

// ------------ Example 2 -------------
const strArr=['a','c','e','d'];
const sortedStr=strArr.sort();

function Comparable(a,b) {
    return a-b;
}
console.log(sortedStr);

const stringArr=["Banana", "Orange", "Apple", "Mango"];
stringArr.sort();
console.log(stringArr);

//---------Example 3------------
// comparing to differnt case latter

const charLetter=['a','A','b'];
charLetter.sort();
console.log(charLetter);
// A will always come in from as captial letter has 
// unicode value of A is less than small letter

//converting in decending order
let deResult=charLetter.slice().sort((a,b)=>a.toUpperCase()>b.toUpperCase()?-1:1);
console.log(deResult)

let result=charLetter.slice().sort((a,b)=>a.toLowerCase()<b.toLowerCase()?-1:1);
console.log(result);

//by doing .toUpperCase() or .toLowerCase() we are setting the prefernce of charcters.
