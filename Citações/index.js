let citacoes = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A persistência realiza o impossível.",
    "A única maneira de fazer um ótimo trabalho é amar o que fazes.",
    "Não importa quão devagar vás, desde que não pares.",
    "Se podes sonhar, podes realizar.",
    "O fracasso é apenas a oportunidade de começar de novo, desta vez de forma mais inteligente.",
    "Acredite em si mesmo e tudo será possível.",
    "O maior erro que podes cometer é o medo de errar.",
    "A motivação é o que te faz começar. O hábito é o que te mantém no caminho.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "O segredo do sucesso não é prever o futuro, mas construir um presente sólido.",]

document.getElementById('btn').addEventListener("click", function(){
        const indice = Math.floor(Math.random()*citacoes.length)
        document.getElementById("citacao").innerHTML = citacoes[indice]

        let cor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        document.body.style.backgroundColor = cor; 
})
