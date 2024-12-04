let nameTurist = prompt("Eai turista!! Qual seu nome ??")
let cidades = ""
let contagem = 0

let continuação = prompt(`Eai ${nameTurist}!! voce ja viajou para alguma cidade?? (Sim/Não)`)
while (continuação === "Sim"){
    let cidade = prompt("para qual cidade voce viajou ?")
    cidades += " > " + cidade + contagem++
    continuação = prompt("você viajou para mais alguma ciade ?? (Sim/Não)")
}

alert(`Voce viajou muito em ${nameTurist} \n Foram ${contagem} destinos, sendo eles: \n ${cidades}`)