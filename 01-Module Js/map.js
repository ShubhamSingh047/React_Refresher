let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];

  //destructuing in map call back function
  users.map(({firstName,lastName})=>console.log(`Hi, I am ${firstName} and my lastname is ${lastName}`));


  //All the parmeter of Map method. 1 is posting to this so last parameter is this !
  //Please rember we cannot pass this parmeter with arraow function !(arraow function does not have there own this)
  users.map(function({firstName},index,users){
    console.log(index+this,"). ",firstName)
  },1);