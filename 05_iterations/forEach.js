// forEach loop

const coding = ["js", "python", "java", "ruby", "C++", "C#"]

// coding.forEach( function (item) {       // in the place of item we can write anything
//     console.log(item);
// } )

// coding.forEach( (item,index,array)=> {
//     console.log(item,index,array);
// })


// coding.forEach( (value) => {
//     console.log(value);
// } )


// function printMe(item) {
//     console.log(`Programming languges: ${item}`);
// }

// coding.forEach(printMe)


const myCoding = [
    {
        language: "javascript",
        languageFile: "js"
    },
    {
        language: "java",
        languageFile: "java"
    },
    {
        language: "python",
        languageFile: "py"
    }
]


myCoding.forEach( (item)=> {
    console.log(item.languageFile,item.language);
} )