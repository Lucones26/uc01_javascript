// entrada de dados
anofabricaçao = 1978;
ValorProduto = 10000.00;

//processameneto
if (valorProduto > 1000)
{
//se ano de fabricaçao for maior que 2000
if (anoFabricacao > 2000)  {
 desconto = valorProduto * taxaDesconto25;
} else {
    desconto = valorProduto * taxaDesconto20;
}
}else{
    desconto = valorProduto * taxaDesconto10;
}

// saida
console.log("Valor do Desconto: R$, desconto");