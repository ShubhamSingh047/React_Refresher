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

const apiFun=async()=>{
    const api=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json=await api.json();
    console.log(json);
}
apiFun();