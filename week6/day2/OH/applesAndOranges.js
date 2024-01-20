// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree. 12
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree. [3,2,1]
// oranges: integer array, distances at which each orange falls from the tree.

// returns number of apples and number of oranges within the range of s&t (sams house)
const applesAndOranges = (s,t,a,b, apples, oranges) => {
    let applesOnSamsHouse = 0
    let orangesOnSamsHouse = 0
    for(let i = 0; i < apples.length; i++){
        // we need to add a to each item in the array 
        if((apples[i] + a) >= s && (apples[i] + a) <= t){
            applesOnSamsHouse++
        }
    }
    for(let i = 0; i < oranges.length; i++){
        // we need to add a to each item in the array 
        if((oranges[i] + b) >= s && (oranges[i] + b) <= t){
            orangesOnSamsHouse++
        }
    }
    console.log(applesOnSamsHouse);
    console.log(orangesOnSamsHouse);
}
applesAndOranges(7,10,4,12,[2,3,-4], [3,-2,-4])