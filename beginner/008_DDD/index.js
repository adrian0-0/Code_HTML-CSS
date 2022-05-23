enviar.addEventListener("click", function(e){
    e.defaultPrevented;

    const DDD_input = window.document.querySelector("#text_DDD");
    const DDD = DDD_input.value;
    let Brasilia = 61, Salvador = 71, Sao_Paulo = 11, Rio = 21, JF = 32, Campinas = 19, Vitoria = 27, BH = 31; 

    if (DDD == Brasilia) {
        console.log("Seu DDD é o de Brasilia");

    } else if (DDD == Salvador) {
        console.log("Seu DDD é o de Salvador");
        
    } else if (DDD == Sao_Paulo) {
        console.log("Seu DDD é o de São Paulo");
        
    } else if (DDD == Rio) {
        console.log("Seu DDD é do Rio de Janeiro");
        
    } else if (DDD == JF) {
        console.log("Seu DDD é o de Juiz de Fora");
        
    } else if (DDD == Campinas) {
        console.log("Seu DDD é o de Campinas");
        
    } else if (DDD == Vitoria) {
        console.log("Seu DDD é o de Vitoria");
        
    } else if (DDD == BH) {
        console.log("Seu DDD é o de Belo Horizonte");
        
    } else {
        console.log("DDD não encontrado");
    }
});