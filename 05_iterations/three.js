// for of

// ["", "", ""]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(greet);
// }

// Maps     map is object in JS

const map = new Map()
map.set('IN', "India")
map.set('PK', "PAKISTAN")
map.set('IR', "IRAN")
map.set('IR', "IRAN")

// console.log(map);

// for (const key of map) {
//     console.log(key)
// }
for (const [key, value] of map) {
    // console.log(key,":",value)
}

const myObject = {
    'game1': "NFS",
    'game2': "SpiderMan"
}

// for (const [key, value] of myObject) {
//     console.log(key,":",value);
// }