function criaPessoa(nome, sobrenome, idade) {
    return{nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Silva', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 30);
const pessoa3 = criaPessoa('João', 'Santos', 35);
const pessoa4 = criaPessoa('Junior', 'Rocha', 40);
const pessoa5 = criaPessoa('Jean', 'Gomes', 50);

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);



//Incluir função dentro do objeto:
const pessoa6 = {
    nome: 'Igor',
    sobrenome: 'Susin',
    idade: 27,

    incrementaIdade() {
        this.idade++;
    }, // virgula separa as funções

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    fala2() {
        console.log(`A minha idade atual é ${this.idade}.`);
    }
};

pessoa6.fala();

pessoa6.fala2();
pessoa6.incrementaIdade();
pessoa6.fala2();
pessoa6.incrementaIdade();
pessoa6.fala2();
pessoa6.incrementaIdade();
pessoa6.fala2();
pessoa6.incrementaIdade();
pessoa6.fala2();
pessoa6.incrementaIdade();
pessoa6.fala2();
pessoa6.incrementaIdade();
pessoa6.fala2();