let unidade = prompt(
  "Qual unidade de medida deseja converter ?\n" +
    "\n1- Metros para quilometros" +
    "\n2- Gramas para quilogramas" +
    "\n3- Minutos para Horas" +
    "\n4- Dolar para real" +
    "\n5- Sair"
);

switch (unidade) {
  case "1":
    let metros = parseFloat(prompt("Digite a quantidade em Metros:"));
    alert(`${metros}m em km/h é = ${metros / 1000}km`);
    break;
  case "2":
    let grama = parseFloat(prompt("Digite a quantidade em Gramas:"));
    alert(`${grama}(g) em (kg) é ${grama / 1000}kg`);
    break;
  case "3":
    let min = parseFloat(prompt("Digite quantos minutos deseja converter: "));
    alert(`${min} minutos é = ${min / 60} horas`);
    break;
  case "4":
    let dolar = parseFloat(
      prompt("Digite quantos dolares gostaria de converter para real: "));
    alert(`${dolar} USD é = ${dolar * 5.8}BRL`);
    break;
  case "5":
    alert("Saindo....");
    break;
  default:
    alert("Opção invalida");
}
