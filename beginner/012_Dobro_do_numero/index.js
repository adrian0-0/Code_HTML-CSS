class Dobrar_Numeros {
    
    constructor (Numero_escolhido, L_Num_Dobrados, Rodar, Lista_Final, Executar) {
        this._Numero_escolhido = Numero_escolhido;
        this._L_Num_Dobrados = L_Num_Dobrados;
        this._Rodar = Rodar;
        this._Lista_Final = Lista_Final;
        this._Executar = Executar;
    } 

    multiplicador(Numero_escolhido, L_Num_Dobrados, Rodar, Resultado, Executar) {

        
        Executar.addEventListener("click", click_start);

        function click_start (e) {
            e.preventDefault();

            const escolhido = Numero_escolhido.value;
            let i = 0;

            while (Rodar == true) {

                if (i >= L_Num_Dobrados.length) {
                    Rodar = false;

                } else { 
                    Resultado.push(L_Num_Dobrados[i]*escolhido);           
                    i++;
                };

                let Lista_organizada_res = Resultado.join(", ");
                let message = window.document.getElementById("resultado_do_dobro");
                message.innerHTML = "<h2>Os numeros dobrados são: </h2>" + "[" + Lista_organizada_res + "]";
            };
        };
    };
};

const rodar = document.querySelector("#submit");
const input_escolhido = document.querySelector("#escolhido");
const dobra_numeros = new Dobrar_Numeros(input_escolhido, [1,2,4,8,16,32,64,128,256,512], true, [], rodar);

dobra_numeros.multiplicador(dobra_numeros._Numero_escolhido, dobra_numeros._L_Num_Dobrados, dobra_numeros._Rodar, dobra_numeros._Lista_Final, dobra_numeros._Executar);