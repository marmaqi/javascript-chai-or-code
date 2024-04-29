const coding = ["js","py","ruby","java","c++","C#"]

// const values = coding.forEach( (items)=> {
//     // console.log(items);
//     return items
// })

// console.log(values);

// filter 

const numbers = [1,2,3,4,5,6,7,8,9]

// const newNumbers = numbers.filter( (num) => num > 4 )   
// // here you can write anything in place of num after that should write condition

// console.log(newNumbers);

// in the below, we use {} that'why we should write return keyword otherwise it gives empty array
// const newNumbers = numbers.filter( (num) => {
//     return num > 4 
// })   


// const newNumbers = []

// numbers.forEach( (num)=> {
//     if(num > 4){
//         newNumbers.push(num);
//     }
// })

// console.log(newNumbers);


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, eidition: 2004},
    {title: 'Book Two', genre: 'Non Fiction', publish: 1999, eidition: 2011},
    {title: 'Book Three', genre: 'Comedy', publish: 1922, eidition: 2012},
    {title: 'Book Four', genre: 'Sad', publish: 1900, eidition: 2000},
];

const userBooks = books.filter( (bk)=> bk.genre === 'Fiction')

console.log(userBooks);