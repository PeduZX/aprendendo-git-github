let h1 = document.querySelector("h1");
h1.innerHTML = 'Hora do Desafio';

function btnConsole(){
 alert("O botão foi clicado");
}
function btnAlert(){
   alert("Eu amo JS");
}
function btnPrompt(){
  let cidade = prompt("Qual a sua cidade?");
  alert(`Estive em ${cidade} e lembrei de você`)
}
function btnSoma(){
  let num1 = prompt("Digite o primeiro numero");
  let num2 = prompt("Digite o segundo numero");
  let soma = Number(num1) + Number(num2);
  alert(`A soma de ${num1} + ${num2} = ${soma}`);
}