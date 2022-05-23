class NOVA extends Dobrar_Numeros{
    constructor (Executar, Congratulations_txt, Congratulations_gif) {
        super(Executar);
        this._congratulations_txt = Congratulations_txt;
        this._congratulations_gif = Congratulations_gif;
        

    }
    
    teste(Executar, Congratulations_txt, Congratulations_gif) {
        Executar.addEventListener("mouseup", end_click);

        function end_click(e) {

            e.preventDefault();
            
            Congratulations_txt.innerHTML = "Parabéns";
            Congratulations_gif.style.visibility = "visible";
            //não consegui realizar css dentro de uma classe no JS
        }
    }
}

let congratulations_txt = document.getElementById("congratulations_txt");
let congratulations_gif = document.querySelector("#congratulations_gif")
let nova = new NOVA(dobra_numeros._Executar, congratulations_txt, congratulations_gif);
nova.teste(dobra_numeros._Executar, nova._congratulations_txt, nova._congratulations_gif);



