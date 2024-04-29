function fibonacciSeries(n) {
    if (n <= 1) {
        return n 
    } else {
        return fibonacciSeries(n-2) + fibonacciSeries(n-1)
    }
}

const n = 10 
let result = []
for (let i = 0; i < n; i++) {
    result.push(fibonacciSeries(i))
    
} 

console.log(result)