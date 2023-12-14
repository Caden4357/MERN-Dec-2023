const nums = [23,56,19,20,9,20,78,55,32,42,8,20,80,9]

// ? Given the array above use the map method to return a new array of all the numbers multiplied by 2
// const newNums = nums.map((number) => number*2)
// console.log(newNums);
// ? Given the array above use the filter method to return a new array of only numbers larger than 50
// ? Given the array above use the filter method to return a new array of only numbers divisible by 3



// ? Given the array above write a function that takes in a number to remove from the array and returns the new array with all the numbers besides that number. Use the filter method for this
const removeNum = (number) => {
    const newNums = nums.filter((num) => num != number)
    return newNums
}
console.log(removeNum(9));



const nbaAthletes = [
    {id: 1, name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
    {id: 2, name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
    {id: 3, name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
    {id: 4, name:'Shaq', league:'NBA',  position: 'Center', active:false },
    {id: 5, name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
    {id: 6, name:'Mike James', league:'Euro',  position: 'Shooting Guard', active:true },
]

// ? Given the array above use the map method to return a new array of objects with only the name and position of each player


// ? Given the array above use the filter method to return a new array of objects where the player is currently active in the nba


// ? Given the array above use the filter method to return a new array of objects where the player is a point guard


// ? Given the array above write a function that takes in an id for a player to be 'deleted' Use the filter method to return a new array of athlete objects minus the player with the id that matches what was passed in
const removePlayer = (uuid) => {
    const newPlayersList = nbaAthletes.filter((athlete) => athlete.id !== uuid)
    return newPlayersList
}
console.log(removePlayer(5));