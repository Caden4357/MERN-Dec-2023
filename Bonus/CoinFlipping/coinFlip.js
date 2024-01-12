function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsPromise() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        let maxAttempts = 100;
        while (headsCount < 5 && attempts <= maxAttempts) {
            attempts++;
            let result = tossCoin(); // either gonna be heads or tails
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if(attempts <= maxAttempts){
            resolve(`It took ${attempts} tries to flip five "heads"`)
        }
        else{
            reject(`Attempts have exceeded ${maxAttempts} flips`)
        }
    })
}
// console.log(fiveHeadsSync());// stop here until the function is complete
fiveHeadsPromise()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
console.log("This is run while the promise is pending");
