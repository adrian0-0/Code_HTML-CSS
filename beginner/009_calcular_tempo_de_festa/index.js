calc.addEventListener("click", function(e){
    e.defaultPrevented;

    const begin = comeco.value;
    const end = fim.value;
    let calcular = begin.replace("T", "-").replace(":", "-").split("-").reverse();
    let data_formatada = begin.replace("T", "-").split("-").reverse();
    let calcular_end = end.replace("T", "-").replace(":", "-").split("-").reverse();
    let data_formatada_end = end.replace("T", "-").split("-").reverse();

    function mudarPosicao(begin, from, to){
        begin.splice(to, 0, begin.splice(from, 1)[0]);
        return begin;
    }
    mudarPosicao(calcular, 1, 0);
    mudarPosicao(calcular_end, 1, 0); 
 
    //muda a posição dos elementos de uma array

    let calcular_segundos = (calcular[0]*3600) + (calcular[1]*60) + (calcular[2]*86400) + (calcular[3]*2,628e+6) + (calcular[4]*3,154e+7);
    let calcular_segundos_end = (calcular_end[0]*3600) + (calcular_end[1]*60) + (calcular_end[2]*86400) + (calcular_end[3]*2,628e+6) + (calcular_end[4]*3,154e+7);
    let res = calcular_segundos_end - calcular_segundos;

    console.log("O tempo do evento será em segundos de: " + calcular_end + " segundos");
});