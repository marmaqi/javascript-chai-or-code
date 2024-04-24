//singleton or intilization using constructor

// const tinderUser = new Object();             // singleton object
const tinderUser = {}                        // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = true;



// console.log(tinderUser);

const regularUser = {
    email: "user@google.com",
    fullname: {
        userfullname:{
        firstName: "Hitesh",
        lastName: "Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const allobjects = Object.assign(obj1,obj2)
// const allobjects = Object.assign({},obj1,obj2,obj3); // {} this empty is target where all other sources are merged

const allobjects = {...obj1,...obj2,...obj3};

// console.log(allobjects);

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "i@gmail.com"
    },
    {
        id:3,
        email: "jk@gmail.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //it check that property is exist or not in the array

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor
//this is true but If we want to get two or more object values then we can also do below method
const {courseInstructor:instructor} = course //we destructure name from courseInstructor to instructor
// console.log(courseInstructor);
console.log(instructor);

//JSON format
// {
//     "name": "hitesh",
//     "coursenme": "JS in hindi",
//     "price": "free"
// }

