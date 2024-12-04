let senha = "0000";
let senhaDigitada;
do {
  senhaDigitada = (prompt("Digite sua senha"));
  if (senha === senhaDigitada) {
    alert("Senha correta");
  } else {
    alert("Senha invalida \ndigite a senha correta:");
  }
} while (senha !== senhaDigitada);
alert("Bem vindo");
