# InterviewQuestions


#JS Coding Exercise 1

### Question 1

    **a) Find the minimum number from an array without using any library.**

    **b) Sample Input and Output**

    ```jsx
    Input: [10, 5, 25, 3, 12]
    Output: 3

    ```

    **c) Explanation**
    The minimum number in the array `[10, 5, 25, 3, 12]` is `3`. 



### Question 2

    **a) Find the duplicate number from an array using JavaScript's built-in methods.**

    **b) Sample Input and Output**

    ```jsx
    Input: [1, 2, 3, 4, 2]
    Output: 2

    ```

    **c) Explanation**
    The number `2` appears more than once in the array `[1, 2, 3, 4, 2]`. 



### Question 3

    **a) Sort an array of numbers in ascending order without using any library or built-in methods.**

    **b) Sample Input and Output**

    ```jsx
    Input: [12, 5, 7, 9, 1]
    Output: [1, 5, 7, 9, 12]

    ```

    **c) Explanation**
    The array `[12, 5, 7, 9, 1]` sorted in ascending order is `[1, 5, 7, 9, 12]`. 


### Question 4

**a) Reverse a string without using built-in methods.**

**b) Sample Input and Output**

```jsx
Input: "hello"
Output: "olleh"

```

**c) Explanation**
The reverse of the string "hello" is "olleh".

### Question 5

**a) Check if a given string is a palindrome.**

**b) Sample Input and Output**

```jsx
Input: "racecar"
Output: true

```

**c) Explanation**
The string "racecar" reads the same forwards and backwards.

### Question 6

**a) Implement binary search algorithm on an array.**

**b) Sample Input and Output**

```jsx
Input: ([1, 2, 3, 4, 5], 4)
Output: 3

```

**c) Explanation**
The number 4 is found at index 3 in the sorted array `[1, 2, 3, 4, 5]`.

### Question 7

**a) Find the sum of all even numbers in an array.**

**b) Sample Input and Output**

```jsx
Input: [1, 2, 3, 4]
Output: 6

```

**c) Explanation**
The sum of even numbers in `[1, 2, 3, 4]` is `2 + 4 = 6`.


### Question 8

**a) Count the number of occurrences of each character in a string.**

**b) Sample Input and Output**

```jsx
Input: "aabbcc"
Output: { a: 2, b: 2, c: 2 }

```

**c) Explanation**
The character 'a' appears 2 times, 'b' appears 2 times, and 'c' appears 2 times in the string "aabbcc".



### Question 9

**a) Implement a function that takes an array and returns the array with duplicates removed.**

**b) Sample Input and Output**

```jsx
Input: [1, 2, 2, 3]
Output: [1, 2, 3]

```

**c) Explanation**
The array `[1, 2, 2, 3]` with duplicates removed becomes `[1, 2, 3]`.



### Question 10

**a) Find the second-largest element in an array.**

**b) Sample Input and Output**

```jsx
Input: [10, 5, 25, 30, 12]
Output: 25

```

**c) Explanation**
The second largest element in `[10, 5, 25, 30, 12]` is `25`.


### Question 11

**a) Rotate an array to the right by a given number of steps.**

**b) Sample Input and Output**

```jsx
Input: ([1, 2, 3, 4, 5], 2)
Output: [4, 5, 1, 2, 3]

```

**c) Explanation**
The array `[1, 2, 3, 4, 5]` rotated 2 steps to the right becomes `[4, 5, 1, 2, 3]`.



### Question 12

**a) Convert a string to Title Case.**

**b) Sample Input and Output**

```jsx
Input: "hello world"
Output: "Hello World"

```

**c) Explanation**
Each word in the string "hello world" is capitalized to become "Hello World".


### Question 13

**a) Check if two strings are anagrams of each other.**

**b) Sample Input and Output**

```jsx
Input: ("listen", "silent")
Output: true

```

**c) Explanation**
The string "listen" can be rearranged to form "silent", making them anagrams.


### Question 14

**a) Flatten a nested array.**

**b) Sample Input and Output**

```jsx
Input: [1, [2, [3, [4]]]]
Output: [1, 2, 3, 4]

```

**c) Explanation**
The nested array `[1, [2, [3, [4]]]]` is flattened to `[1, 2, 3, 4]`.


### Question 15

**a) Find the longest word in a given string.**

**b) Sample Input and Output**

```jsx
Input: "I love JavaScript"
Output: "JavaScript"

```

**c) Explanation**
The longest word in the string "I love JavaScript" is "JavaScript".


### Question 16

**a) Find the intersection of two arrays.**

**b) Sample Input and Output**

```jsx
Input: ([1, 2, 3], [3, 4, 5])
Output: [3]

```

**c) Explanation**
The intersection of the arrays `[1, 2, 3]` and `[3, 4, 5]` is `[3]`.


### Question 16

**a) Find the intersection of two arrays.**

**b) Sample Input and Output**

```jsx
Input: ([1, 2, 3], [3, 4, 5])
Output: [3]

```

**c) Explanation**
The intersection of the arrays `[1, 2, 3]` and `[3, 4, 5]` is `[3]`.



### Question 18

**a) Create a function to capitalize the first letter of each word in a string, but not if the word is 'and', 'or', 'but', 'of', or 'the'.**

**b) Sample Input and Output**

```jsx
Input: "the quick and brown fox"
Output: "The Quick and Brown Fox"

```

**c) Explanation**
The words "the", "and" are not capitalized while all other words in the string "the quick and brown fox" are capitalized.


### Question 19

**a) Implement a function that takes a number `n` and returns a function that adds  to its argument.**

**b) Sample Input and Output**

```jsx
Input: addN(5)(3)
Output: 8

```

**c) Explanation**
The function `addN(5)` returns a function that, when passed an argument of `3`, adds `5 + 3` to give `8`. 





.....................................................................................


#JS Coding Exercise 2 : 

### 1. Custom Sorting Program in JS via Bubble Sort

    **a) Coding Question Statement:**

    Implement a bubble sort algorithm to sort an array of integers.

    **b) Sample Input/Output:**

    Input: `[4, -1, 34, 9, -9, 103]`

    Output: `[-9, -1, 4, 9, 34, 103]`

    **c) Explanation:**

    The function `sortArr` takes an unsorted array as an argument and sorts it using the bubble sort algorithm. The algorithm compares adjacent elements and swaps them if necessary.


### 2. Check if a String, Word, or Number is a Palindrome

    **a) Coding Question Statement:**

    Write a program to check if a string, word, or number is a palindrome.

    **b) Sample Input/Output:**

    Input: `'racecar'`

    Output: `true`

    Input: `'abc'`

    Output: `false`

    Input: `121`

    Output: `true`

    **c) Explanation:**

    The function `isPalindrome` reverses the input and checks if it's the same as the original input. 


### 3. Check if Value/Target Exists in Ascending Array

    **a) Coding Question Statement:**

    Write a program to check if a target value exists in a sorted array using binary search.

    **b) Sample Input/Output:**

    Input: `[1,3,5,6,9,14,29,57,89], 29`

    Output: `true`

    **c) Explanation:**

    The function `customInArray` takes a sorted array and a key as arguments and performs a binary search to find the key. The time complexity is \(O(\log n)\).



### 4. Get the Total Vowel Count from the String

    **a) Coding Question Statement:**

    Write a program to count the total number of vowels in a string.

    **b) Sample Input/Output:**

    Input: `'hello how are you today programiz website?'`

    Output: `14`

    **c) Explanation:**

    The function `getVowelCount` iterates through each character of the input string and counts the vowels. 

