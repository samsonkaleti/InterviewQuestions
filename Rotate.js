// a) Rotate an array to the right by a given number of steps.
// b) Sample Input and Output
// Input: ([1, 2, 3, 4, 5], 2)
// Output: [4, 5, 1, 2, 3]

const rotate2 = (arr, num) => {
    for (let i = 0; i < num; i++){
        const first = arr.shift() 
        arr.push(first)
    }
    return arr
    
}

const rotate = (arr, num) => {
    
    for (let i = 0; i < num; i++) {
        const lastElement = arr.pop() 
        arr.unshift(lastElement)    
    }
    return arr
    
}

const arr = [1, 2, 3, 4, 5]

const result = rotate(arr.slice(), 2) 
const result2 = rotate2(arr.slice(), 2); 
console.log(result)
console.log(result2);