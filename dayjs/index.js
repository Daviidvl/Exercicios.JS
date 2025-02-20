const dayjs = require ('dayjs')

function aniversario (date){
    const aniversario = dayjs(date)
    const hoje = dayjs()
    
    const diferen = hoje.diff(aniversario, 'year')
    const proximoAniversario = aniversario.add(diferen + 1,'year')
    const diasF = proximoAniversario.diff(hoje, 'day')

    console.log(`Idade: ${diferen}`)
    console.log(`Proximo aniversario: ${proximoAniversario.format("DD/MM/YYYY")}`)
    console.log(`Faltam: ${diasF} dias para completar ${diferen + 1} anos`)
}
aniversario('2000/04/03')