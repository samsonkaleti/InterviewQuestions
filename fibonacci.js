

const fibonacciSeries = (n) => {
    const series = [0, 1] 
    for (let i = 2; i < n; i++) {
        let fibonacci = series[i - 2] + series[i - 1]
        series.push(fibonacci)
        
        
    }
    return series;
    
}


const n = 10 

const result = fibonacciSeries(n) 
console.log(result)

