let num1 = 1;
let num2 = 2.5;
let num3 = 1500;
let num4 = 10.5789551255547;
let num5 = 0.1;

console.log(num1.toString() + num2); 
/* O uso do toString() fará com que ao inves de somar as variaveis, seja concatenado, 
portanto o valor será 12,5 não 3,5. */

num1 += num5; // é a mesma coisa que "num1 = num1 + num5;"
console.log(num1.toFixed(1)); //para imprimir no console com 1 numero apos a virgula
num1 += num5; // é a mesma coisa que "num1 = num1 + num5;"
console.log(num1.toFixed(1)); //para imprimir no console com 1 numero apos a virgula
num1 += num5; // é a mesma coisa que "num1 = num1 + num5;"
console.log(num1.toFixed(1)); //para imprimir no console com 1 numero apos a virgula
num1 += num5; // é a mesma coisa que "num1 = num1 + num5;"
console.log(num1.toFixed(1)); //para imprimir no console com 1 numero apos a virgula
num1 += num5; // é a mesma coisa que "num1 = num1 + num5;"
console.log(num1.toFixed(1)); //para imprimir no console com 1 numero apos a virgula

console.log(typeof num1); // retorna o tipo da variavel, no caso number

num1 = num1.toString(); // alterado num1 para uma string
console.log(num3.toString(2)); //transformando em numero binário
console.log(num4.toFixed(3)); // para definir quantos numeros após a virgula irão aparecer
console.log(Number.isInteger(num1)); // Número é inteiro? (True/False)
console.log(Number.isNaN()); // Numero é um NaN? (Not a Number, verificação se é um numero ou não)





