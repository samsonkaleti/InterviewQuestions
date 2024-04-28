// Count the number of occurrences of each character in a string.
// b) Sample Input and Output
// Input: "aabbcc"
// Output: { a: 2, b: 2, c: 2 }
const str = "aabbcc"  
const count = {}
for (const char of str) {
    count[char] = (count[char] || 0)+1
} 

console.log(count)  




const string = "aabbkdd" 
const count2 = {}  
let arr = []

for (const iterator of string) {
    count2[iterator] = (count2[iterator] || 0 ) + 1 
    
} 

for (const key in count2) {
    if (count2[key] === 1) {
        arr.push(key)  
    }
} 

console.log(arr)





