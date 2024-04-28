// a) Implement binary search algorithm on an array.
// b) Sample Input and Output
// Input: ([1, 2, 3, 4, 5], 4)
// Output: 3


const findValue = (array, target) => {
    for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
        return i      
    } 
    } 
    return -1;  
}

const array = [1, 2, 3, 4, 5]; 
const target = 4  

const res = findValue(array, target) 

console.log(res)






