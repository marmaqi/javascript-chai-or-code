// var c = 30;
let a =100;

if(true){
    let a =10;
    const b = 20;
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);

    two();
}

one();

//++++++++++++++++++++ interesting +++++++++++++++++


console.log(addone(3));

function addone(num){
    return num +1;
}


const addtwo = function(num){
    return num + 2;
}

console.log(addtwo(7));
