// * Basic data types (Known as Primitive data types)
var caden = 'Caden' // String
var age = 26 // Number 
var pi = 3.14 // Number (only numbers in JS no float data type)
var isHuman = false // Boolean (true or false)

// * More complex data types (Known as Data Structures)
// * Arrays 
var names = ['Bob', 'Macy', 'Fred', 'Allison']
// * Arrays are used to store more than one value they can store any data type inlcuding more arrays or objects 
// * Arrays are index based meaning that they are ordered by an index starting at 0. Each value in the array has an index associated with it. Ex.
//  Indexes    0,1,2,3,4
var numbers = [2,4,6,8,10]
// * To access an element you must use the index. The syntax is, the name of the array (in our case the name is 'numbers') followed by [] (square brackets) and inside the [] the index number, which, for the first element is 0. Put it all together you have this...
numbers[0]
// ! dont forget to console log it though to see it in the terminal/console 
console.log(numbers[0])

// * Objects
// * Like arrays objects are used to store more than one value and can store any other data type including more objects and/or arrays. Typically you will group a bunch of related information together in an object take the primitive data types from above as an example instead of having these variables scattered about lets group them all into an object 
var instructor = {
    // key:value
    name:'Caden',
    age:26,
    isHuman:false,
    favHobbies:['Music', 'Coding', 'Basketball', 'Gaming']
}
// * Objects are NOT ordered and therefore do NOT have indexes instead we use 'keys' to access, remove and add information. The Keys are on the left in the object it goes key:value again its first the name of the object ('instructor' in this case) then a .keyName put it all together and lets grab the age from the instructor object 
console.log(instructor.age);

// * You can add information by writing the nameOfObject.keyThatDoesntExist = 'New Value' lets try it 
instructor.startDate = 'Nov 21 2021'
// * Now there is a new key value pair in our object 
console.log(instructor);

// * Functions: A “chunk” of code that you can use over and over again, rather than writing it out multiple times. Functions enable programmers to break down or decompose a problem into smaller chunks, each of which performs a particular task
// * if we want a program that can add 2 numbers together we wouldnt wanna do this 
var x = 3+6
// * What if we want to add different numbers together later in the program we would then rewrite and change the numbers 
var y = 4+8 
// * This is not efficient at all! Instead lets write a function that takes 2 parameters 
var add = function(num1,num2){
    return num1+num2
}
function add2(num1,num2){
    return num1+num2
}
// * Now whenever we wanna add 2 numbers together we can just call the function add and pass in whatever 2 numbers we want 
console.log(add(6, 5));

// * Conditionals: to instruct the computer on the decision to make when given some conditions. These decisions are made if and only if the pre-stated conditions are either true or false , depending on the functions the programmer has in mind.

// * Lets bring back in the 'isHuman' variable for this example
if(isHuman){
    console.log('You are human');
}else{
    console.log('You might be an alien 👾');
}
