const user ={
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "SAK"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     const username = "hitesh";
//     console.log(this.username);
// }

// chai();


// const chai = function(){
//     const username = "hitesh";
//     console.log(this.username);
// }


const chai = () => {
    const username = "hitesh";
    console.log(this);
}
// chai();

// basic arrow function

// const addTwo = (num1, num2) =>{
//     return num1 + num2;          // its called explicit return where return word is written
// }

// const addTwo = (num1, num2) => num1 + num2  //its called implicit return where one line statement does not need return

// console.log(addTwo(2,5));

// !!!!!!!!!!!!!!!!!!!!!! NOTE !!!!!!!!!!!!!!!!!!!!!!
// IN REACT WHERE {} PARANTHESIS IS USED THERE IS NEED OF RETURN WORD WHILE WHERE () BRACES USED WHERE IS NOT
// NEED OF RETURN WORD JUST LIKE THIS BELOW FUNCTION.

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(2,5));

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(2,5));

