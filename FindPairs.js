// find pairs of numbers in an array that sum up to a given value 
const array = [0, 1, 2, 3, 4, 5] 
const sumValue = 5 

const pairs = [] 

for (let i = 0; i < array.length; i++) {
    let first = array[i]
    
    for (let j = i + 1; j < array.length; j++) {
        let second = array[j]
        if (first + second === sumValue) {
            pairs.push(`${first},${second}`);
            
        } 
    }
} 

console.log(pairs)