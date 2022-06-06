


// var outputImages1 = pdf2img.convert('./assets/sample.pdf'); 
// outputImages1.then(function(outputImages) {
//   const inp_out = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });


    
var pdf2img = require('pdf-img-convert');
const readline = require('readline');
var fs = require('fs');
let fileData__path = "";
let fileData__type = "";

const inp_out = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
inp_out.question("File Path? ", function (path){
  fileData__path = path;

  inp_out.question("jpg or png? ", function(type__file) {
    fileData__type = type__file;
    console.log(`\nFile Path: ${path}\nYou select ${type__file}`);
    inp_out.close();

  });
});

inp_out.on("close", function() {
  console.log("\nEND");
  teste(fileData__path, fileData__type);
})

function teste(fileData__path, fileData__type) {

  var outputImages1 = pdf2img.convert(fileData__path);
  outputImages1.then(function(outputImages) {
  
    for (i = 0; i < outputImages.length; i++)
        fs.writeFile(i+ "." + fileData__type, outputImages[i], function (error) {
          if (error) { console.error("Error: " + error); }
        });
    });    
}


