// symbol initialization

const mySym = Symbol("key1");


//object literals

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Chodhury",
    [mySym]: "mykey1",
    age: 19,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "hitesh@chodhury.com";
// Object.freeze(JsUser);              // Now we can't make any changes in JsUser object
// JsUser.email = "hitesh@microsoft.com";

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this["full name"]}`);
}

console.log(JsUser.greetingTwo());