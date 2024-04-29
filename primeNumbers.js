
const range = 10  
let sum = 0 
let count = 0

for (let i = 2; i < range; i++){
    let factors = 0 
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            factors += 1
        }
        
    } 

    if (factors === 0) {
        sum += i 
        count += 1
    }
    
}

console.log(sum)
console.log(count)