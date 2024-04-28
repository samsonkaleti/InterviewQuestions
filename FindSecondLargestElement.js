// a) Find the second-largest element in an array.
// b) Sample Input and Output
// Input: [10, 5, 25, 30, 12]
// Output: 25


const array = [10, 5, 25,30, 30, 12]; 
const sortedArray = array.sort((a, b) => a - b)
// const unq = [...new Set(sortedArray)]
// const len = unq.length
// console.log(sortedArray[len-2])

const lastElement = sortedArray[array.length - 1] 

for (let i = sortedArray.length - 2; i >= 0; i--){
    if (lastElement !== array[i]) {
        console.log(array[i])
        break
    }
}


