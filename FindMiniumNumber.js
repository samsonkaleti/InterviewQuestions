// Input: [10, 5, 25, 3, 12]

const array = [10, 5, 25, 3, 12]; 

let minNumber = array[0] 

for (let i = 0; i < array.length; i++){
    if (array[i] < minNumber) {
        minNumber = array[i]
    }
} 

console.log(minNumber) 


// using Reduce method :

const min = array.reduce((acc, curr) => {
    if (curr < acc) {
        acc  = curr 
    } 
    return acc
}) 
console.log(min)



