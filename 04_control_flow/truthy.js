// const userEmail = "h@gmail.co"; 
const userEmail = []; 

// if (userEmail) {    // this is truthy value where we don't use true or false in condition
//     console.log("User Exist");
// }
// else{
//     console.log("Don't have user");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", undefined, null, NaN

// truthy values
// "0", 'false', " ", true, {}, [], function(){}

// if(userEmail.length === 0)  // this if condition checks the array is empty or not
// {
//     console.log("Array is Empty");
// }

const emptyObject = {};
if(Object.keys(emptyObject).length === 0)  // this if condition checks the array is empty or not
{
    console.log("OBJECT is Empty");
}