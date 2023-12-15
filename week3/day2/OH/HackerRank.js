// ? Comparing triplets 
// recieve 2 arrays (a,b) both these arrays with be the same length
// create a result var (array)
// Compare each item with the corresponding item in the other array 
// either award a point to alice (result[0]), bob (result[1]) or no one if the two numbers are equal 
const comparingTriplets = (a, b) => {
    if(a.length !== b.length){
        return 'Arrays arent the same length'
    }
    let result = [0,0]
    for (let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            result[0]++
        }
        else if(b[i] > a[i]){
            result[1]++
        }
    }
    return result
}
console.log(comparingTriplets([1,2,3], [3,2,1]));

// ? Staircase 
// input (integer) 
// output -> staircase made of # and spaces 
// ex. n=4 would print
//    #
//   ##
//  ###
// ####
const staircase = (n) => {
    for (let i = 1; i <= n; i++){
        // number of spaces is always n-i the number of # is i
        console.log(' '.repeat(n-i) + '#'.repeat(i));
    }
}
staircase(4)