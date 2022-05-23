class Calculadora {
    constructor(Input, Res) {
        this._input = Input;
        this._res = Res;
    };

    show_var(Input, Res) {
        function insert(Input) {
            Res.innerHTML;
            Res.innerHTML = Res + Input;

        };
    };
};

let input = 0;
let res = document.getElementById("res");
let click_CE = document.getElementById("CE");
const calculadora = new Calculadora(input, res);
calculadora.show_var(calculadora._input, calculadora._res);

click_CE.addEventListener("click", input_var);

function input_var(e) {
    e.preventDefault();

    res = click_CE.value;
};