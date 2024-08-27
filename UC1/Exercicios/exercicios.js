let nome;
let nota;

nome = prompt ("Qual seu nome ?");
nota = prompt ("Qual sua nota em Portugues ?");
let notamat = prompt ("Qual sua nota em Matematica ?");
let notasgerais = prompt ("Qual sua nota em Conhecimentos) Gerais");

nota = parseFloat(nota);
notamat =parseFloat(notamat);;
notasgerais=parseFloat(notasgerais);

let media = (notaPor + notaMat + notaGerais)/3;

if (media >=5){
    console.log("Aprovado")
}
else{
    console.log("Reprovado")
}
