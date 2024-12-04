let quantidadeDeDinheiro = parseFloat(
  prompt(" Saldo disponivel: ")
);
let opcao = "";

do {
  opcao = prompt(`Saldo disponivel ${quantidadeDeDinheiro}R$
        O que deseja fazer:
        1. Depositar
        2. Sacar
        3. Sair`);

  switch (opcao) {
    case "1":
      quantidadeDeDinheiro += parseFloat(prompt("Qual valor de deposito ?"));
      break;
    case "2":
      quantidadeDeDinheiro -= parseFloat(prompt("Qual o valor do saque? "));
      break;
    case "3":
      alert("Saindo...");
      break
    default:
      alert("Escolha uma opção");
      break
  }
} while (opcao !== "3");
