run.addEventListener("click", function(e) {
    e.defaultPrevented;

    let L_impar = new Array();

    function numero_Impar (max_impar) {
        do { 
             if (max_impar >= 1 && max_impar <=1000 && max_impar%2 == 1) {
                L_impar.push(max_impar); 
                max_impar-=1;
    
             } else if (max_impar >= 1 && max_impar <=1000 && max_impar%2 == 0) {
                max_impar-=1;

             }  else if (max_impar < 1 || max_impar > 1000) {
                 window.alert("Erro porfavor, informe um numero entre 1 a 1000");
                 max_impar = prompt("Digite até que numero você quer descobrir os impares");
             
            }   else {
                break;
            }
    
        } while (max_impar != 0);
    }
    
    const impar = prompt("Digite até que numero você quer descobrir os impares");
    numero_Impar(impar);

    console.log(L_impar);
    document.write("Os numeros impares são: " + "(" + L_impar +")");
    

})