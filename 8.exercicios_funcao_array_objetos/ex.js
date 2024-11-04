function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    //const pessoas = [];
    

    function recebeEventoForm (evento) {
        evento.preventDefault (); //preventDefault() pode evitar que ele seja enviado automaticamente.
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {
            nome,sobrenome,peso,altura
        }
        console.log({pessoa})

        pessoas.push(pessoa)
        console.log({pessoas})

        console.log (nome.value,sobrenome.value, peso.value, altura.value);
    }

    form.addEventListener ('submit', recebeEventoForm); //Se você quiser escutar eventos de um formulário, você deve adicionar o addEventListener ao elemento do formulário
}
meuEscopo ();