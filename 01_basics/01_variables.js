const accountId = 122334;
var accountEmail = "ali@google.com";
let accountName = "ali";
accountCity = "Skardu";

// accountId = 3; //this variable type is constant that's why we can't change the value of it
accountEmail = "ab@ab.com";
accountName = "hitesh";
accountCity = "Gilgit";

/*
    don't use var never because of block scoped
*/


// console.log(accountEmail);
// console.log(accountName);
// console.log(accountCity);
// console.log(accountId);

console.table([accountId,accountEmail,accountName,accountCity])