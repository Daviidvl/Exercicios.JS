const palavraa = prompt("Digite uma palavra")
let palavraInvertida = ""

for(let i = palavraa.length - 1; i>=0; i--){
    palavraInvertida += palavraa[i]
}

if(palavraa === palavraInvertida){
    alert(palavraa + " é um palindromo")
}else{alert(palavraInvertida + "não é um palindromo \n" + palavraa + " = " + palavraInvertida)}