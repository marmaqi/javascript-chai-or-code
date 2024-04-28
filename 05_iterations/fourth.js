// loop on objects

const myObjects ={
    js: "javascript",
    py: "python",
    rb: "Ruby"
}

for (const key in myObjects) {
    // console.log(`${key} shortcut: ${myObjects[key]}`);
}

// check for in loop on array 

const programmingLanguages = ["js", "py", "rb", "cpp", "java"]

for (const key in programmingLanguages) {
    // console.log(programmingLanguages[key]);
    // console.log(key);
}

const map = new Map()
map.set('IN', "India")
map.set('PK', "PAKISTAN")
map.set('IR', "IRAN")
map.set('IR', "IRAN")

for (const key in map) {
    console.log(key);
}