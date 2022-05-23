class Tipo_Numerico {
    
    constructor (L1_Number, i, Vezes, Par_Number, Impar_Number, Positive_Number, Negative_Number) {
        this._L1_Number = L1_Number;
        this._Par_Number = Par_Number;
        this._Vezes = Vezes;
        this._i = i;
        this._Positive_Number = Positive_Number;
        this._Impar_Number = Impar_Number;
        this._Negative_Number = Negative_Number;
  
    };


    seletor(Lista_escolhida, pares, i, repeticoes, impares, positivos, negativos) {
        ativar();
    
        function ativar () {
            const rodar = document.querySelector("#run");
            rodar.addEventListener("click", clicar);
        }
          
        function clicar(e) {
            e.preventDefault();

           
            for (i = 0; i < repeticoes; i++ ) {
                let number = Number(prompt("Digite o numero que irá analisar"));
                Lista_escolhida.push(number);
            };
            
            separar();
            function separar() {
                
                for (i = 0; i < repeticoes; i++) {
                    
                    if ( Lista_escolhida[i] >= 0 && Lista_escolhida[i]%2 == 0) {
                        pares.push(Lista_escolhida[i]);
                        positivos.push(Lista_escolhida[i]);
                        
                    }  else if (Lista_escolhida[i] >= 0 && Lista_escolhida[i]%2 != 0) {
                        impares.push(Lista_escolhida[i]);
                        positivos.push(Lista_escolhida[i]);

                    }   else if (Lista_escolhida[i] <= 0 && Lista_escolhida[i]%2 == 0) {
                        negativos.push(Lista_escolhida[i]);
                        pares.push(Lista_escolhida[i]);

                    }   else if (Lista_escolhida[i] <= 0 && Lista_escolhida[i]%2 != 0) {
                        negativos.push(Lista_escolhida[i]);
                        impares.push(Lista_escolhida[i]);

                    }       else {
                        console.log("ERRO");
                    
                    };  
                    
                    let lista_total = Lista_escolhida.join(", "); let par = pares.join(", "); let impar = impares.join(", "); let negativo = negativos.join(", "); let positvo = positivos.join(", "); 
                    let resultado = document.getElementById("res")
                    resultado.innerHTML = "<p>Numeros Escolhidos:</p>" + "[ " + lista_total + " ]" + "<p>Pares: </p>" + "[ " + par + " ]" + "<p>Impares: </p>" + "[ " + impar + " ]" +"<p>Positivos: </p>" + "[ " + positvo + " ]" + "<p>Negativos: </p>" + "[ " + negativo + " ]";              
                };         
            };
        };    
    };
};

const tipo_numerico = new Tipo_Numerico([], 0, 9, [], [], [], []);

const selet = tipo_numerico.seletor(tipo_numerico._L1_Number, tipo_numerico._Par_Number, tipo_numerico._i, tipo_numerico._Vezes, tipo_numerico._Impar_Number, tipo_numerico._Positive_Number, tipo_numerico._Negative_Number);

/*
function teste() {
    let lista = []
    
    for (c = 0; c < 4; c++ ) {

        let add = prompt("teste");
        lista.push(add);
        

    };
    return `${lista}`;
};

console.log(teste());
*/
/*
_run.addEventListener("click", function(e) {
    e.defaultPrevented;

    let L1_Number = new Array();
    let Par_Number = new Array();
    let Impar_Number = new Array();
    let Positive_Number = new Array();
    let Negative_Number = new Array();
    let i = 0

    function add_Num_List(L1_Number){
        for (i = 0; i < 1; i++ ) {
            let number = prompt("Digite o numero que irá analisar")
            L1_Number.push(number);
    
        }
    }

    function typeNumber(Numbers_List, par) {

            while (i < Numbers_List.length) {
                console.log(i);
                if (Numbers_List[i]%2 == 0 && Numbers_List[i] <= 0) {
                    par.push(Numbers_List[i]);
                    console.log("teste");
                    i++
                }
            }
    }

    
    typeNumber(L1_Number, Par_Number);
    add_Num_List(L1_Number);
    console.log(Par_Number);
})
*/