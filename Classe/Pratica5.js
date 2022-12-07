class Pessoa {
    nome;
    idade;
    apelido;
    anoNascimento;

    constructor(nome, idade, apelido) {
        this.nome = nome;
        this.idade = idade;
        this.apelido = apelido;
        this.anoNascimento = 2022 - idade;

    }

    descrever() {
        console.log('Meu nome é' + { this: nome } + 'e minha idade é' + { this: idade })
    }
}

function compararPessoas(p1,p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else{console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)}
}

const p1 = new Pessoa('Davi', 13);
const p2 = new Pessoa('Nina', 16);
compararPessoas(p1,p2);