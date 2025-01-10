function somarElementos(array){
let soma = 0
for (let numero of array){
    soma += numero
}
return soma

}

console.log(somarElementos([1,49,9,86,2]))
