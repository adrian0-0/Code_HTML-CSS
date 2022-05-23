startar.addEventListener("click", function(e) {
    e.defaultPrevented;

    const ano = prompt("Quantos anos serão convertidos em dias");
    const mes = prompt("Quantos mêses serão convertidos em dias");
    let dias = (ano*365) + (mes*30)

    document.write("O Tempo escolhido de " + ano + " anos e " + mes + " mêses\nSerá equivalente a: " + dias + " dias.");
});


