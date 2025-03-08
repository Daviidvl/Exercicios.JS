class Produto{
    constructor(nome, descricao, preco){
    this.nome = nome
    this.descricao = descricao
    this.preco = preco
    this.inStock = 0
}

addToStock(quantidade){
    this.inStock += quantidade
}

calcularDesconto(desconto){
    return this.preco * ((100 - desconto) / 100)
}

}
const relogio = new Produto ("Apple watch" , "Relogio de pulso", 50)
relogio.addToStock(20)
const precoComDesconto = relogio.calcularDesconto(10)

console.log(relogio)
console.log(precoComDesconto)
console.log(relogio.calcularDesconto(20))