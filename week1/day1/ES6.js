// * Scope
// * Scope is the context in which a variable exists.
// * 3 main scopes in JS: Global, Function, Block
// * Global scope is anything outside of a function or block
// * Function scope is anything inside of a function
// * Block scope is anything inside of a block (if statement, for loop, while loop, etc.) blocks are denoted by {}
// var x = 5
// let add = function(num1,num2){
//     var y = 10
//     console.log(y);
//     return num1+num2
// }
// add(3,4)

if(true){
    let z = 15
    console.log(z);
}
// console.log(z);
// let is essentially a replacement for var 
// const is new entirely and is used for variables that will not change
let pi = 3.14
pi = 4
console.log(pi);
const instructor = {
    // key:value
    name:'Caden',
    age:26,
    isHuman:false,
    favHobbies:['Music', 'Coding', 'Basketball', 'Gaming']
}
console.log(instructor);
// instructor.name = 23
console.log(instructor);

// * Arrow Functions: A shorter syntax for writing function expressions.
let add = function(num1,num2){
    return num1+num2
}
let add2 = (num1,num2) => {
    return num1+num2
}

// * Destructuring: A way to unpack values from arrays, or properties from objects, into distinct variables.
var numbers = [2,4,6,8,10]

const {name} = instructor
const [,,x,z] = numbers
console.log(name, x, z);



// * Rest and Spread: Rest and Spread are both represented by the same operator, the ellipsis (…). The difference between them is that the Rest parameter is used in a function declaration while the Spread operator is used in a function call.
let addRest = function(...nums){
    console.log(nums);
    console.log(...nums);
    // return num1+num2
}
console.log(addRest(3,4,5,6,7,8,9,10));

let newInstructor = {
    ...instructor,
    favFood:'Pizza'
}
console.log(newInstructor);
console.log(instructor);
let newNumbers = [...numbers, 12, 14, 16]
console.log(newNumbers);
console.log(numbers);