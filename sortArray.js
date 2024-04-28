// a) Sort an array of numbers in ascending order without using any library or built-in methods.
// b) Sample Input and Output
// Input: [12, 5, 7, 9, 1]
// Output: [1, 5, 7, 9, 12]

const sortArray = (array) => { 
   

    for (let i = 0; i < array.length; i++){
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[minIndex]) {    
                minIndex = j 
            }
        }

        if (minIndex !== i) {
            const temp = array[i] 
            array[i] = array[minIndex]
            array[minIndex] = temp
        }
        

    }  
    return array
    
    
} 




const array = [12, 5, 7, 9, 1];  
const sortedArray = sortArray(array) 

console.log(sortedArray) 




// a) Sort an array of numbers in descending order without using any library or built-in methods.


const sortArrayDesc = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  return array;
}; 




const array2 = [12, 5, 7, 9, 1];  
const sortedArray2 = sortArrayDesc(array) 

console.log(sortedArray2)













