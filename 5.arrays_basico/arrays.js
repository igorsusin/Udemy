const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);
alunos.push('Fabio'); // adiciona no fim
console.log(alunos);
alunos.push('Luana'); // adiciona no fim
console.log(alunos);
alunos.unshift('Luiza'); // adiciona no inicio
console.log(alunos);
alunos.pop(); // remove o ultimo item do array
console.log(alunos);
alunos.shift(); // remove o primeiro item do array
console.log(alunos);
alunos.splice(0, 3, 'Igor') // alterar o array de um indice, nesse exemplo, ele substituiu do item 0 ao 3
console.log(alunos);
alunos.slice()
console.log(alunos);
console.log(alunos[0]); //mostrar item 0 do array
console.log(alunos[1]); //mostrar item 1 do array
console.log(alunos instanceof Array); // alunos é um array?


/*  *Outro metodo para adicionar nome no array:
    alunos[alunos.length] = 'Luiza';   
    alunos[alunos.length] = 'Fabio';
    alunos[alunos.length] = 'Luana'; */


