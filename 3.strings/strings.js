//               01234567        strings são indexadas
let umaString = "Um texto";
let outraString = "O rato roeu a roupa do rei de roma";

console.log(umaString[4]);
console.log(umaString.charAt(4));
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

console.log(umaString.indexOf('texto')); //Retorna o numero onde a palavra texto começa (indice)
console.log(umaString.lastIndexOf('texto')); //Retorna o numero onde a palavra texto termina (indice)
console.log(umaString.replace('Um', 'Dois')); //Substituir a palavra "Um"
console.log(umaString.replace(/Um/, 'Dois')); //Substituir a palavra "Um"
console.log(outraString.replace(/r/, '#')); //Substituir a letra "r" por #
console.log(outraString.replace(/r/g, '#')); //Substituir todas letras "r" por # com uso do "g" após /r/
console.log(outraString.length); //Retorna a quantidade de caracteres da string
console.log(umaString.length); //Retorna a quantidade de caracteres da string
console.log(outraString.slice(2, 6)); //Retorna o que tiver escrito dentro da margem de caracter escolhida
console.log(outraString.slice(30)); //Retorna o que tiver escrito a partir do caracter numero 30
console.log(outraString.slice(-4)); //Retorna o que tiver escrito a partir do caracter numero -4 (de traz pra frente)
console.log(outraString.toUpperCase()); //Para deixar maisculo
console.log(outraString.toLowerCase()); //Para deixar minusculo