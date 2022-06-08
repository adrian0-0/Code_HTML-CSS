const pdf2img = require('pdf-img-convert');
const jsdom = require("jsdom");
const fs = require('fs');
const { create } = require('domain');
const { JSDOM } = jsdom;
const html__Content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cárdapio Cabana do Sol</title>
    <link rel="icon" href="assets/favicon.ico">
</head>
<body>
    <section id="block">
        <p>Hello World</p>
        <img src="assets/top.jpg?=0522" alt="" style="width: 100%; max-width: none;">
        <br>
    </section>
</body>
</html>`
let dom = new JSDOM(`${html__Content}`);
let document = dom.window.document;
// document.querySelector("#block").outerHTML = `<section>
//         <p>OPA</p>
//     </section>
// `;

async function convert () {

    // conversão do arquivo seguindo os dados de input    
        try {
        const page_array = await pdf2img.convert("./assets/sample.pdf", {
            disableFontFace: true,
            width: 1200,
            height: 1200,
            scale: 10      
        });
    
    // escrita e nomeação dos arquivos em array
        for (i =0; i < page_array.length; i++) {
            console.log()
            fs.writeFile(i+".jpg", page_array[i], function(error) {
            
            if (error) {
                console.log("erro")
            }
            });
            
            for (c = 0; c <= i; c++) {
                document.querySelector("#block").innerHTML = `<section>
                <p>OPA EAE</p>
                <br>
            </section>`;
                    document.querySelector("br").insertAdjacentHTML("afterend", 
                    `
                <img src="${c}.jpg" alt="">
                <br>`)        
            }
        

    //         document.querySelector("#block").outerHTML = `<section>
    //     <p>OPA EAE</p>
    //     <img src="${i}.jpg" alt="">
    //     <br>
    // </section>`;
    //         document.querySelector("br").insertAdjacentHTML("afterend", 
    //         `
    //     <img src="${i}.jpg" alt="">
    //     <br>`)
    //         console.log("teste")
        };
        create__html();
        } catch (err) {
            console.log(err)
        };
    };    

function create__html() {
    fs.writeFile("1.html", document.documentElement.innerHTML, function(error) {
        console.log(document.documentElement.innerHTML)
        if (error) throw error;
    });
}


// function edit__html(page_array) {
//     for (c = 0; i < page_array.length; ++) {
//         console.log(i)
//         document.querySelector("#block").innerHTML = `<section>
//         <p>OPA EAE</p>
//         <br>
//     </section>`;
//             document.querySelector("br").insertAdjacentHTML("afterend", 
//             `
//         <img src="${i}.jpg" alt="">
//         <br>`)        
//     }
// }


convert();

// function edit__crate() {
//     for (i =0; i < 2; i++) {
//        document.querySelector("body").outerHTML = `
//     <body>
//        <img src="assets/${i}.jpg" alt="" style="width: 100%; max-width: none;">
//        <br>
//    </body>`;
//     };
// }

