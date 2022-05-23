enviar.addEventListener("click", function(e){
    e.defaultPrevented;

    const opcao1 = produto1.value;
    const opcao2 = produto2.value;

    let preco1 = parseFloat(12.00);
    let preco2 = parseFloat(20.00);

    const conta = preco1*opcao1 + preco2*opcao2;

    document.write("Você deve pagar R$:" + conta.toFixed());
})