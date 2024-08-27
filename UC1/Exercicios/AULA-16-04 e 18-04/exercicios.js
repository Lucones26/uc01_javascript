var salario

salario = 1500

if(salario < 2259.20){
    console.log("nao paga imposto")
}
else if(salario >= 2259.20 && salario >= 2826.65){
    console.log("7,5%");
//De 2259,21 até 2.826,65 _> 7,5%
} else if(salario <= 2826.66 && salario <= 3751.05){
    console.log("15%");
    //De 2.826,66 ate 3.751,05 _> 15%
} else {
    console.log("27,5%");
    //Acima de $4.664,68_> 27,5
}



