// declarar variaveis
let idade;
let idadeMedia;
let altura;
let alturaMedia;
let somaAltura;
let qtdIdade;
let qtdAltura;

// iniciar variaveis
idade = 0;
idadeMedia = 0;
altura = 0;
alturaMedia = 0;
qtdIdade = 0;
qtdAltura = 0;
somaIdade = 0;
SomaAltura = 0;

// entrada de dados
for(var i=0; i<50; i++) {
idade = (Math.random() * 100);
console.log(idade);
}

altura = prompt ("Informe a altura do aluno");
altura = parseFloat (altura);

// processamento
// verifica a idade do aluno
if (altura < 1.70) {
    qtdIdade = qtdIdade + 1; // qtdIdade += ou qtdIdade++
    somaIdade = somaIdade + idade; // somaIdade += idade
}

// verifica a altura do aluno
if (idade > 20) {
    qtdAltura = qtdAltura + 1;
    somaAltura = somaAltura + altura;
}

// calcular medias de idade e de altura
idadeMedia = somaIdade / qtdIdade;
alturaMedia = somaAltura / qtdAltura;

// saida de dados
console.log("A idade media dos alunos menores que 1.70m é " + Math.round(idadeMedia).toFixed(2));
console.log("A idade media dos alunos maior que 1.70m é " + Math.round(idadeMedia).toFixed(2));
