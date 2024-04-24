
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    return number1 + number2;
}


// addTwoNumbers(2,9);

const result = addTwoNumbers(2,9);
// console.log("Result:",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("PLease enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Hitesh"));