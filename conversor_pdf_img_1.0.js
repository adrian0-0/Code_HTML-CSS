var pdf2img = require('pdf-img-convert');
const readline = require('readline');
var fs = require('fs');
let _fileData__path = "";
let _fileData__type = "";
let _style__width = 1200;
let _style__height = 1200;


const inp_out = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
inp_out.question("File Path? ", function (path){
  _fileData__path = path;

  inp_out.question("jpg or png? ", function(type__file) {
    _fileData__type = type__file;
    console.log(`\nFile Path: ${path}\nYou select ${type__file}`);

    inp_out.question("\nDeseja estilizar, s ou n ?", function(style) {
        if (style == "s") {
        
            inp_out.question("\nInforme o width? ", function(style__width){
                _style__width = style__width

                inp_out.question("\nInforme a height? ", function(style__height){
                    _style__height = style__height
                    inp_out.close();
                });
            });
           
            console.log(_style__height, _style__width);

        }  else if (style == "n") {
            inp_out.close();

        }   else {
            console.log("Responda com s ou n");
        }
    });
  });
});

inp_out.on("close", function() {
  console.log("\nEND");
  convert(_fileData__path, _fileData__type);
});

async function convert (fileData__path, fileData__type) {
    try {
    const page_array = await pdf2img.convert(fileData__path, {
        disableFontFace: true,
        width: _style__width,
        height: _style__height,
        scale: 10      
    });

    
    for (i =0; i < page_array.length; i++) {
        fs.writeFile(i+"." + fileData__type, page_array[i], function(error) {
        
        if (error) {
            console.log("erro")
        }
        });
    };
    } catch (err) {
        console.log(err)
    };
};
    
