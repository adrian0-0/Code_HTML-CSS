var pdf2img = require('pdf-img-convert');
var fs = require('fs');
let _fileData__path = "";
let path_terminal = "";

async function convert (fileData__path) {

    // conversão do arquivo seguindo os dados de input    
        try {
        const page_array = await pdf2img.convert(fileData__path, {
            disableFontFace: true,
            width: 1200,
            height: 1200,
            page_numbers: [1]     
        });
    
    // escrita e nomeação dos arquivos em array
        for (i =0; i < page_array.length; i++) {
            fs.writeFile(i+".jpg", page_array[i], function(error) {
            
            if (error) {
                console.log("erro")
            }
            });
        };
        } catch (err) {
            console.log(err)
        };
    };

// Como passar parametros do node via script
// https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program
process.argv.forEach((path) => {
    convert(path);
    console.log(path)
    
});

