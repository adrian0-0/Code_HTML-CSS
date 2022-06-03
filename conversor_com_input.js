// //https://github.com/ol-th/pdf-img-convert.js
// //testar isso: https://www.npmjs.com/package/pdf-export-images
// var pdf2img = require('pdf-img-convert');

// var outputImages1 = pdf2img.convert('./assets/projeto_pratico.pdf');


// // From here, the images can be used for other stuff or just saved if that's required:

// var fs = require('fs');

// outputImages1.then(function(outputImages) {
//     for (i = 0; i < outputImages.length; i++)
//         fs.writeFile("sucesso"+i+".jpg", outputImages[i], function (error) {
//           if (error) { console.error("Error: " + error); }
//         });
//     });

var pdf2img = require('pdf-img-convert');
const readline = require('readline');
var fs = require('fs');
let path;
let format;

const inp_out = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inp_out.question("File Path? ", function (path){
    inp_out.question("jpg or png? ", function(type__file) {
        
        console.log(`\nFile Path: ${path}\nYou select ${type__file}`);
        inp_out.close();
    }); 
});

inp_out.on("close", function() {
    console.log("\nEND");
    process.exit(0)
})

async function convert () {
  try {
    const page_array = await pdf2img.convert(path)
  
    for (i =0; i < page_array; i++) {
      fs.writeFile(i+format, page_array)
    }
  } catch (err) {
      console.log(err.msg)
  }
}

convert();