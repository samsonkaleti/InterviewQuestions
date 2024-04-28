const array = [1, 6, 4, 8, 1, 4, 9] 

// we have 3 ways to solve this question :

//1st Way ....>(using Filter method)

const RemoveDuplicates = array.filter((item, index) => {
    return array.indexOf(item) === index
})

console.log(RemoveDuplicates)


//2nd Way using set() Method :

const UnqElements = [...new Set(array)] 
console.log(UnqElements)



// 3rd Way using for loop method :

const UnqNumbers = [] 

for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
        if (array[i] !== array[j] && array.indexOf(array[i]) === -1) {
            UnqElements.push(array[i])
            
        }
    }
} 

console.log(UnqElements)
