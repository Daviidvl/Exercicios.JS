const numero = parseFloat(prompt("Digite o numero que dejesa calcular a tabuada"))
let resultado = ""

for(let indice =1 ; indice <= 10; indice++){
    resultado += numero + "x" + indice + "=" + (numero*indice) +"\n"
}

alert("o resultado é \n" + resultado)