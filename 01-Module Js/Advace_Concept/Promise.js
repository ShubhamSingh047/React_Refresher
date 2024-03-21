//Given function we have to make it run is syatmatic Way

function stepOne(value) {
  setTimeout(() => {
    console.log(value);
  }, 3000);
}

function stepTwo(value) {
  setTimeout(() => {
    console.log(value);
  }, 2000);
}

function stepThree(value) {
  setTimeout(() => {
    console.log(value);
  }, 1000);
}

//Adding Call Back to run Function:-

function stepOne(value, callback) {
  setTimeout(() => {
    console.log(value);
    callback();
  }, 3000);
}

function stepTwo(value, callback) {
  setTimeout(() => {
    console.log(value);
    callback();
  }, 2000);
}

function stepThree(value, callback) {
  setTimeout(() => {
    console.log(value);
    callback();
  }, 1000);
}

/* ---------------Adding promises in function in Order to execute it formally--------------- */

function stepOne(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    }, 3000);
  });
}

function stepTwo(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    }, 2000);
  });
}

function stepThree(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    }, 1000);
  });
}

//In Order to Exicute below code Please remove call back function from time out function;
// stepOne(1);
// stepTwo(2);
// stepThree(3);

// Now making this code run in systamtic manner using callback

/*------------- Call Back---------------- */
// stepOne(1, () => {
//   stepTwo(2, () => {
//     stepThree(3, () => {
//       console.log("all steps completed");
//     });
//   });
// });

/*------Running the code using Promises----------*/

// stepOne(1)
//   .then(() => stepTwo(2))
//   .then(() => stepThree(3))
//   .then(() => {
//     console.log("all steps completed !");
//   });

// const p1 = Promise.resolve('Success');
// const p2 = Promise.resolve(200);
// const p3 = Promise.resolve('Finished');

/* below code is doing the task but this is looking like call back hell which is what we don't sign up in the first place */

// p1.then(message1=>
//   p2.then(message2=>
//     p3.then(message3=>[message1,message2,message3])
//   )
// ).then(message=>console.log(message));
  
/* 
Here come Promise.all() which help in resolving this
  1) this will only run when all promises are success !
  2) else this will throw first error encountered and stop any further process !
  3) this method is used when all promised need to be resolved !
  4) after even first error encountered it show promised as fulfiled
*/

const p1 = Promise.reject('Error From Promise One');
const p2 = Promise.resolve(200);
const p3 = Promise.resolve('Finished');

// Promise.all([p1,p2,p3])
// .then((resolve)=>console.log(resolve))
// .catch((reject)=>console.log(reject));

/*
Here come Promise.AllSettled() it will give us an object of all rejected and resolved promised
*/
// Promise.allSettled([p1,p2,p3])
// .then((resolved)=>console.log(resolved))
// .catch((error)=>console.log(error));

/* 
--------- Promise.any()----------- 
1). Return first resolve return;
2). They are all rejected, in which case it's rejected with an AggregateError.

*/

// Promise.any([p1,p2,p3])
// .then((resolve)=>console.log(resolve))
// .catch((error)=>console.log(error));

/* 
----------Promise.race()-------
1). Promise gets resolved based of first outcome.
2). What ever promise gets complet first irrespective of (resolve/reject) it will give that promise.
*/
Promise.race([p1,p2,p3])
.then((resolve)=>console.log(resolve))
.catch((error)=>console.log(error));