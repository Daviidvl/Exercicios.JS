let cadastro = [];
let opcao;
do {
  opcao = prompt(
    "Digite a opção desejada: \n" +
      "1- Novo paciente \n" +
      "2- Consultar paciente \n" +
      "3- Sair"
  );

  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Digite o nome e o sobrenome do paciente: ");
      cadastro.push(novoPaciente);
      alert(`paciente ${novoPaciente} cadastrado com sucesso`);
      break;
    case "2":
      let consultar = prompt("Digite o nome do paciente que deseja consular");
      if (cadastro.includes(consultar)) {
        alert(`Paciente ${consultar} esta na lista`);
      } else {
        alert(`Paciente ${consultar} não esta na lista`);
      }
      break;
    case "3":
      alert("Saindo");
      break;
    default:
      alert("Opção invalida tente novamente");
      break;
  }
} while (opcao !== "3");
