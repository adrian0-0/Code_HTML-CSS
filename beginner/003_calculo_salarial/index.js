const enviar = document.querySelector("#enviar");

let bonus = 1.20;
enviar.addEventListener("click", function(e) {
    e.preventDefault();

    const salario_input = salario.value*bonus;
    console.log("Seu salario com Bonus é R$:" + salario_input);
})

