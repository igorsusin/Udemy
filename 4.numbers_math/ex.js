/* const numero = prompt ('Digite um número:'); 

O que for digitado no prompt vira string. 
Isso virá a ser um problema na hora de usar a variavel "numero" para algum calculo.
Então é necessário alterar o tipo de variavel de const para let
Conforme abaixo */


/* Pode ser feito como a seguir:
let numero = prompt ('Digite um número:');
numero = Number(numero) */

const numero = Number(prompt('Digite um número:')); // o melhor dos três jeitos é ser feito assim


const numeroTitulo = document.getElementById('numero-titulo'); //
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> Raiz quadrada: ${numero **0.5}</p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p> ${numero} é NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p> Arredendando para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p> Arredendando para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)} </p>`;