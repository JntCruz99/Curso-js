const Pessoa = {
    nome:'Jonatas',
    idade:24,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

console.log(Pessoa.nome);
console.log(Pessoa.idade);
Pessoa.descrever();