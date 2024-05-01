

const number = '143' 
const len = number.length 
let sum = 0 
for (const iterator of number) {
    sum += parseInt(iterator) ** len   
} 

if (sum === parseInt(number)) { 
    console.log(number, "its a armstrong number")
    
} else {
     console.log(number, "its not a armstrong number");
    
}