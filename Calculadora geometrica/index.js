function calcularAreaTriangulo() {
  const base = parseFloat(prompt(`Informe a base do triangulo`));
  const altura = parseFloat(prompt(`Informe a altura do triangulo`));
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = parseFloat(prompt(`Informe a base do retangulo`));
  const altura = parseFloat(prompt(`Informe a alura do retangulo`));
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = parseFloat(prompt(`Informe o lado do quadrado`));
  return Math.pow(lado, 2);
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt(`Informe a base maior do trapezio`));
  const baseMenor = parseFloat(prompt(`Informe a base mmenor do trapezio`));
  const altura = parseFloat(prompt(`Informe a altura do trapezio`));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = parseFloat(prompt(`Informe o raio do circulo`));
  return 3.14 * Math.pow(raio, 2);
}

function exibirMenu() {
  return prompt(
    `Calculadora geométrica
  Escolha uma opção abaixo:
  1. Calcular Area do Triangulo
  2. Calcular Area do Retangulo
  3. Calcular Area do Quadrado
  4. Calcular Area do Trapézio
  5. Calcular o Raio do Circulo
  6. Sair`
  );
}
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Escolha uma opção");
    }
    if(resultado){
      alert(`Resultado ${resultado}`)
    }
  } while (opcao !== "6");
}

executar();
