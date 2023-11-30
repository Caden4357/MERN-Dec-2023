// * You will be given an array and a value. you need to write a function to check whether the provided array contains the value.
// * Array can contain numbers or strings. value can be either.
// * Return true if the array contains the value, false if not 
let arr = [2,4,6,8,10]
let val = 8
const checkVal = (array, value) => {
    for (let i = 0; i < array.length; i++){
        if(array[i] === value){
            return true 
        }
    }
    return false 
}
// console.log(checkVal(arr, val));

// * refactor function above
// const checkValRefactored = (array, value) => {
//     return array.includes(value)
// }
const checkValRefactored = (array, value) => array.includes(value)

console.log(checkValRefactored(arr, val));

// * Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

let scores = [12,24,10,24] // return [1,1]

const breakingTheRecords = (scoresArr) => {
    let minVal = scoresArr[0]
    let maxVal = scoresArr[0]
    let minCount = 0
    let maxCount = 0 
    for (let i = 1; i < scoresArr.length; i++){
        if(scoresArr[i] > maxVal){
            maxCount++
            maxVal = scoresArr[i]
        }
        else if(scoresArr[i] < minVal){
            minCount++
            minVal = scoresArr[i]
        }
    }
    return [maxCount, minCount]
}
console.log(breakingTheRecords(scores));