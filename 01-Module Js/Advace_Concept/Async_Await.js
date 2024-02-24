/* Feching Api call in Promises then Async /Await */

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((resolve)=>{
//     console.log(resolve)
//     console.log("resolved in promise.. !")
// })
// .catch((error)=>{
//     console.log(error)
//     console.log("error in Promise ")
// });

/* Fetching same using Async/Await */

// const apiFun=async()=>{
//     const api=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const json=await api.json();
//     console.log(json);
// }
// apiFun();

/* Doing if else using Promises */
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => {
    console.log("json is getting processedd throug promises");
    if (json.userId == 1) {
      json.completed == false;
    } else {
      json.completed == true;
    }
    console.log(json);
  })
  .catch((error) => console.log(error));

/* doing if elese in async await */
const asyFun = async () => {
  try {
    const apiCall = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await apiCall.json();
    console.log("test is getting processed via async call");
    if (json.userId == 1) {
      json.completed == true;
    } else {
      json.completed == false;
    }
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

asyFun();
