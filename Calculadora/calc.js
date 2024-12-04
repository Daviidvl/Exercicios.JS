let fistNumber = parseFloat(prompt("Digite o primeiro numero que quer calcular:"))
let secondNumber = parseFloat(prompt("Digite o segundo numero que quer calcular: "))

let calculo = prompt("Digite a opão cujo vc quer calcular \n" +
    "\n1- Adição"+
    "\n2- Subtração"+
    "\n3- Multiplicação"+
    "\n4- Divisão"
)
switch(calculo){
    case "1":
        alert(`a soma de ${fistNumber} + ${secondNumber} é: ${fistNumber + secondNumber}`)
        break
    case "2":
        alert(`a subtração de ${fistNumber} - ${secondNumber} é: ${fistNumber - secondNumber}`)
        break
    case "3":
        alert(`a multiplicação de ${fistNumber} * ${secondNumber} é: ${fistNumber * secondNumber}`)
        break
    case "4":
        alert(`a divisão de ${fistNumber} / ${secondNumber} é: ${fistNumber / secondNumber}`)
        break
        default:
            alert("Opção invalida")
}