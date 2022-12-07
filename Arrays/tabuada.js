
//cria a lista
const numero = [];
//define um valor para uma posição da lista
numero.push(9);
//cria uma variável para receber o resultado da multiplicação
let resultado = 0
//cria a estrutura de repetição
for (let i = 0; i <= 10; i++) {
    //atribue o resultado da multiplicação do valor da lista à variável
    resultado = numero * i;
    //imprime o resultado a cada repetição
    //console.log(resultado)
}


//cria a lista
const numeroPar = [];
const numeroImpar = [];
//define um valor para uma posição da lista
//numeros.push(9);
//cria uma variável para receber o resultado da multiplicação
let par = 0
//cria a estrutura de repetição
for (let i = 0; i <= 10; i++) {
    
    if (i % 2 === 0) {
        numeroPar.push(i);
    } else { numeroImpar.push(i);
        
    }
    console.log(numeroPar + ' é par')
    console.log(numeroImpar + ' é impar')
}
