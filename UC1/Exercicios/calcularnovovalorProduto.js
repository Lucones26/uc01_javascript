//declarar variaveis
let valorProduto;
let desconto;
let novoValorProduto;

//declarar constantes
const taxaDesconto = 0.09;

//iniciar variaveis
valorProduto = 0.0;
desconto = 0.0;
novoValorProduto = 0.0;

//coleta ou entrada de dados
valorProduto = 1000.00;

//processamento
desconto = valorProduto * taxaDesconto;
novoValorProduto = ValorProduto - desconto;

//saida
console.log(novoValorProduto);

