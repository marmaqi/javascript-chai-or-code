// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Stack (Primitive Datatypes) ,   Heap (Non-Primitive Datatypes)

let username = "Marmaqi"
let secondUsername = username;
secondUsername = "Ali"
// console.log(username);
// console.log(secondUsername);


//  Heap

let user = {
    name: "Muhammad",
    email: "muhammad@google.com"
}

let secondUser = user;
secondUser.email = "ali@google.com"

console.log(user.email);
console.log(secondUser.email);
