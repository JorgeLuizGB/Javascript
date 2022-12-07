

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function converteIMC(imc) {

}




function main() {

    const peso = 95;
    const altura = 1.80;
    
    const imc = calcularIMC(peso, altura);
    console.log(converteIMC(imc))
}

main();