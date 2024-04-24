
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

// console.log(loginUserMessage("Hitesh"));

function calculateCartPrice(val1,val2,...num1) // this ... is called rest operator and spread operator also.
{
    return num1;
}

// console.log(calculateCartPrice(300,400,500,1000,4000));

const user ={
    username: "hitesh",
    price: 100
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);      // these both are same
// handleObject({           
//     username: "SAM",
//     price: 300
// });

const myNewArray = [2, 4, 5, 1];
function returnSecondArray(getArray){
    return getArray[2];
}

// console.log(returnSecondArray(myNewArray));
// console.log(returnSecondArray([2, 4, 5, 6, 7])); // these both are same