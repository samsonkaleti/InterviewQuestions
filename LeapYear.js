
const Year = 2005

if (((Year % 4 === 0) && (Year % 100 !== 0)) || (Year % 400 === 0)) {
  
  console.log(Year , "is a leap Year")
  
} else { 
  console.log(Year, "is not a leap Year");
  
}

