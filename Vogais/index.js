const palavra = prompt("Digite uma palavra:");
const vogais = ["a", "e", "i", "o", "u"];
let contagem = 0;

for (let char of palavra.toLocaleLowerCase()) {
    if (vogais.includes(char)){
        contagem++;
    }
}
alert(`A palavra "${palavra}" tem ${contagem} vogais.`);