

class Carro {
    marca;
    cor;
    consumoMedioKm;

    constructor(marca, cor, consumoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedioKm = consumoMedioKm;
    }
    calcularCustoViagem(kmRodado, preçoCombustivel) {
        return kmRodado * this.consumoMedioKm * preçoCombustivel;
    }
}

const gol = new Carro("Gol", "Preta", 1 / 12);
const tr4 = new Carro("Pajero", "Preta", 1/6)

console.log(gol.calcularCustoViagem(70,5));
console.log(tr4.calcularCustoViagem(100,4.44))