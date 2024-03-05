const api = fetch("https://randomuser.me/api/");
console.log(api);
api
  .then((resolve) => {
    return resolve.json();
  }).then(result=>{
    console.log(result);
  })
  .catch((reject) => {
    console.log(reject);
  });
