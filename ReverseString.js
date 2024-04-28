// Reverse a string without using built-in methods.

// Input: "hello";
// Output: "olleh";

const str = "hello"; 
let rev = ''

for (char of str) {
    rev = char + rev
    
} 

console.log(rev)



