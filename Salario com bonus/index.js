let salario = parseFloat(prompt("Informe o seu salario base: "));
let horasExtras = parseFloat(
  prompt("Informe a quantidade de horas extras trabalhadas: ")
);
let salarioAtualizado = salario;

if (horasExtras < 10) {
  salarioAtualizado += salario * 0.05;
} else if (horasExtras >= 10 && horasExtras <= 20) {
  salarioAtualizado += salario * 0.1;
} else if (horasExtras > 20) {
  salarioAtualizado += salario * 0.15;
}

let salarioAnual = 0
for (let i=1; i<= 12; i++){
    salarioAnual+=salarioAtualizado;
    alert(`salario do mes ${i}: ${salarioAtualizado.toFixed(2)}`);
}

alert(`O seu salario mensal com horas extras é de ${salarioAtualizado.toFixed(2)}\nO total anual será: ${salarioAnual.toFixed(2)}`)