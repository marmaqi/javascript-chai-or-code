// const oneToten = [1,2,3,4,5,6,7,8,9,10]
// const modifiedNum =[]

// let newNums = oneToten.map( (num)=>{return num + 10} )

// console.log(newNums);

// console.log(`Before: ${oneToten} `);
// console.log(typeof newNums);
// console.log(`After: ${newNums}`);

// oneToten.forEach((num)=> {
//     return modifiedNum.push(num +10)
// })
// console.log(modifiedNum);
// console.log(oneToten);


// CHAINING

const myNum = [1,2,3,4,5,6,7,8,9,10]

const myNewNum = myNum
                .map( (num) => num * 10)
                .map( (num) => num+1)
                .filter( (num) => num >= 40)

console.log(myNewNum);