let baralho = [];
let opçao = "";

do {
  opçao = prompt(`Cartas no baralho ${baralho.length}
    1. Adicionar carta
    2. Puxar uma carta
    3. Sair`);

  switch (opçao) {
    case "1":
      let novaCarta = prompt("Qual carta deseja adicionar");
      baralho.push(novaCarta);
      break;
    case "2":
      let puxarCarta = baralho.pop();
      if (!puxarCarta) {
        alert("Não ha nenhuma carta no baralho");
      } else {
        alert(`Voce puxou um(a)${puxarCarta}`);
      }
      break;
    case "3":
      alert("Voce escolheu sair...");
      break;
    default:
      alert("Selecione uma opção");
  }
} while (opçao !== "3");
