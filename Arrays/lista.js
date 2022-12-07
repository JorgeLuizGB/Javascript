
const notas = [];
notas.push(3);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);
notas.push(10);


let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}
const media = soma / notas.length;
console.log(notas+' '+soma+' '+' '+media);




const alunos = ['João', 'Vitor', 'Marina']


alunos.push('Jorge');
alunos[5] = 'Cristiane';
alunos[4] = 'Liz'

console.log(alunos)
console.log(alunos[4] + ', nós te amamos')


const notas = [];

notas.push(3);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(0);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}


console.log(soma / 6);