/*  Função sem return

function saudacao (nome) {
console.log (`Bom dia, ${nome}!`);    
}

saudacao('Luizinho');*/

//-----------------------------------------------------

//Função com returnoutro modo de realizar a mesma coisa de maneira mais comum:
function saudacao (nome) {
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao ('Luiz');
console.log(variavel);

//-----------------------------------------------------

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));

//------------------------------------------------------