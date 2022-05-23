
enviar.addEventListener("click", function(e) {
    e.defaultPrevented;

    const p1 = parseInt(nota1.value);
    const p2 = parseInt(nota2.value);
    var media = (p1*3.5 + p2*7) / 3;

    document.write("A media é: " + media)

    console.log("A sua media é: " + media);
})