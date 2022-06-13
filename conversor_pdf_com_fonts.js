// const pdf = require('pdf-poppler');


// let file = './assets/cabana.pdf'

// pdf.info(file)
//     .then(pdfinfo => {
//         console.log(pdfinfo);
//     });

const path = require('path');
const pdf = require('pdf-poppler');
const jsdom = require("jsdom");
const fs = require('fs');
const { Console } = require('console');
const { JSDOM } = jsdom;

const html__Content = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cárdapio Cabana do Sol</title>
</head>
<body>
    <section id="block"></section>
</body>
</html>
`
let dom = new JSDOM(`${html__Content}`);
let document = dom.window.document;
let i = 0
let c = 0


// Bibloteca usada: https://github.com/kb47/pdf-poppler

let file = './assets/cabana.pdf'

let opts = {
    format: 'png',
    out_dir: "./assets",
    out_prefix: "/cabana.pdf",
    page: null
}




async function convert () {
    // const page__array = await pdf.convert(file, opts)
    // .then(res => {
    //     console.log('Successfully converted');
    // })
    // .catch(error => {
    //     console.error(error);
    // })

    const pdf = require('pdf-poppler');

    let file = './assets/cabana.pdf'

    pdf.info(file, pdfinfo => {
        console.log(pdfinfo);

    })
} 

convert();


// var input = document.getElementById("files");
// var reader = new FileReader();
// reader.readAsBinaryString(input.files[0]);
// reader.onloadend = function(){
//     var count = reader.result.match(/\/Type[\s]*\/Page[^s]/g).length;
//     console.log('Number of Pages:',count );
// }

// function create__html() {
//     fs.writeFile("index.html", document.documentElement.innerHTML, function(error) {
//         console.log(document.documentElement.innerHTML)
//         if (error) throw error;
//     });
// }

// create__html();

// function edit__html() {
//     document.querySelector("#block").innerHTML += (`
//     <embed src="./assets/cabana.pdf" id ="pdf__file" type="">
// <br>`);
//     page__array();                  
// }

// edit__html();

// function page__array() {
//     console.log(document.querySelector("#pdf__file"))
//}
// async function convert () {
//     try {
//         const page_array = await pdf.convert("./assets/cabana.pdf", {
//             format: 'jpeg',
//             out_dir: path.dirname("./assets/cabana.pdf"),
//             out_prefix: path.baseName(function (file__base) {
//                 file__base = "./assets/cabana.pdf"
//             }, path.extname("./assets")),

//         })

//     } catch (err) {
//         console.log(err)
//     };
// };

// convert();