class Pessoa{
    nome;
    username;
    senha;

    constructor(nome, username, senha){
        this.nome = nome;
        this.username = username;
        this.senha = senha;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

export default Pessoa;