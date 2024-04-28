// ) Find the sum of all even numbers in an array.
// b) Sample Input and Output
// Input: [1, 2, 3, 4]
// Output: 6

const array = [1, 2, 3, 4];

let sum = 0 

for (const each of array) {
    if (each % 2 === 0) {
        sum += each
    }
    
} 

console.log(sum)