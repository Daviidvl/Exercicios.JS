let opcao = "";

do {
  opcao = prompt(
    "Escolha uma opção:" +
      "\n1. Opção" +
      "\n2. Opção" +
      "\n3. Opção" +
      "\n4. Opção" +
      "\n5. Sair"
  );
  switch (opcao) {
    case "1":
      alert("Voce escolheu a opção 1");
      break;
    case "2":
      alert("Voce escolheu a opção 2");
      break;
    case "3":
      alert("Voce escolheu a opção 3");
      break;
    case "4":
      alert("Voce escolheu a opção 4");
      break;
    case "5":
      alert("Voce escolheu sair..");
      alert("Saindo.....");
      break;
    default:
      alert("Escolha uma opção");
  }
} while (opcao !== "5");
