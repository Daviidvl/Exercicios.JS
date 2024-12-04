const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let tentativa; 

do {
    tentativa = parseInt(prompt("Tente adivinhar o numero entre 1 e 10"));
  if (tentativa < numeroAleatorio) {
    alert("O numero é maior");
  } else if (tentativa > numeroAleatorio) {
    alert("O numero é menor");
  }
} while (tentativa !== numeroAleatorio); // só sai quando o numero for igual
alert("Voce ganhou");
