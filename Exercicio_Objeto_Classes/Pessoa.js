

/*class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC() {
        const imc = this.calcularIMC()
        if (imc < 18.5) {
            return "abaixo do peso"
        } else if (imc >= 18.5 && imc < 25) {
            return "peso normal"
        } else if (imc >= 25 && imc < 30) {
            return "acima do peso"
        } else if (imc >= 30 && imc < 40) {
            return "obeso"
        } else {
            return "obesidade grave"
        }
    }

}

const jorge = new Pessoa("Jorge", 95, 1.80);
const jose = new Pessoa("José", 70, 1.75)


console.log(jorge.calcularIMC() + " " + jorge.classificarIMC());
console.log(jose.calcularIMC());*/
const dev = {
    nome: 'Renan',
    linguagemPreferida: 'JavaScript'
};

console.log(dev.linguagemPreferida);

