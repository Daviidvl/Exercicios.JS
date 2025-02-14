const average = (...numbers) =>{
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`A média aritmedica simples: ${average(3,4,7,9,6,10)}`)

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, {number,weigth}) => accum + (number *(weigth ?? 1)),0)
    const wheithSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / wheithSum
}

console.log(`Média ponderada ${weightedAverage(
    {number: 9, weight: 3},
    {number: 5, weight: 2},
    {number: 8, weight: 4},
)}`)

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a,b) => a-b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if(orderedNumbers.length %2 !==0){
        return orderedNumbers[middle]
    }

const firstMidian = orderedNumbers[middle - 1]
const secondMidian = orderedNumbers[middle]
return average (firstMidian, secondMidian) 
}

console.log(`Mediana: ${median(2,5,6,7,9,5)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers) =>{
    const quantities = numbers.map(num =>[
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a,b) =>b[1]-a[1])
    return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)