// arrays

const myArr = [0, 1, 2, 3, 4, 5]

// myArr.push(6,7);
// myArr.pop();
// myArr.shift();
// console.log(myArr.includes(2));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();

// console.log(newArr);
// console.log(myArr);

//  slice,  splice
console.log("A ",myArr);

const myn1 = myArr.slice(1,4);
console.log(myn1);

console.log("B ",myArr);

const myn2 = myArr.splice(1,4);
console.log("C",myArr);
console.log(myn2);