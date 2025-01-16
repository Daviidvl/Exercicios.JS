function soma (){
    const primiroNumero = parseFloat(prompt("Digite o primeiro numero: "))
    const segundoNumero = parseFloat(prompt("Digite o segundo numero: "))
    return primiroNumero + segundoNumero
}

function sub (){
    const primiroNumero = parseFloat(prompt("Digite o primeiro numero: "))
    const segundoNumero = parseFloat(prompt("Digite o segundo numero: "))
    return primiroNumero - segundoNumero
}

function multi (){
    const primiroNumero = parseFloat(prompt("Digite o primeiro numero: "))
    const segundoNumero = parseFloat(prompt("Digite o segundo numero: "))
    return primiroNumero * segundoNumero
}

function divi (){
    const primiroNumero = parseFloat(prompt("Digite o primeiro numero: "))
    const segundoNumero = parseFloat(prompt("Digite o segundo numero: "))
    return primiroNumero / segundoNumero
}


do{
    const opcao = prompt(
        `Escolha a opção abaixo:
        1. Soma
        2. Subtração
        3. Divisão 
        4. Multiplicação
        5. Sair...`
    )
    let resultado;

    switch(opcao){
        case"1":
        resultado = soma();
        break
        case"2":
        resultado = sub();
        break
        case"3":
        resultado = multi();
        case"4":
        resultado = divi();
        break
        case"5":
        alert("Saindo....")
        break
        default:
            alert("Opção invalida")
    }

    if(resultado){
        alert(`Resultado: ${resultado}`)
    }
}while(opcao !=="5")
