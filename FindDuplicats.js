// Find the duplicate number from an array using JavaScript's built-in methods.
// Input: [10, 5, 25, 3, 12];
// Output: 3;

const array = [10, 5, 25, 3, 12,10]

// 1St Method = using FilterMethod() :


const findDuplicates = array.filter((item, index) => {
    return array.indexOf(item) !== index

})

console.log(findDuplicates)


// 2nd Method using for Loop 👍

const Duplicates = [] 
for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++){
        if (array[i] === array[j]) {
            Duplicates.push(array[i])
        }
    }
} 

console.log(Duplicates)


