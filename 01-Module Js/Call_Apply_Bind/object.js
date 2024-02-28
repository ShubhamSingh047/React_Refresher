//lets expolore functionality of prototype

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increament = function () {
  score++;
  console.log(`score is ${this.score}`);
};

createUser.prototype.showUser = function () {
  console.log(`Hello ${this.username}`);
};

//we are using new keyword to create instance of test & finalTest;
const test = new createUser("shubham", 80);
const finalTest = new createUser("Shubham", 85);

test.increament();
test.showUser();
