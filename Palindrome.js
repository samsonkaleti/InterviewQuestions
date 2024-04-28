// a) Check if a given string is a palindrome.
// b) Sample Input and Output
// Input: "racecar"
// Output: true

const str = "racecar"; 

let palindrome = ''

for (let char of str) {
    palindrome = char + palindrome
    
} 

palindrome?console.log(true) : console.log(false) 