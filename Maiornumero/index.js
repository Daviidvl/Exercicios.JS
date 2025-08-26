const numeros = []

function MaiorNumero(...agrs) {
    for (let num of agrs){
        numeros.push(num)
    }
}

MaiorNumero(9,7,6,5,4,3)

let maior = Math.max(...numeros)

console.log(`O Maior numero é ${maior}`)
