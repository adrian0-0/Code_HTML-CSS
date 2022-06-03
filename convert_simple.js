//https://github.com/ol-th/pdf-img-convert.js
//testar isso: https://www.npmjs.com/package/pdf-export-images
var pdf2img = require('pdf-img-convert');

var outputImages1 = pdf2img.convert('./assets/3.pdf');

var fs = require('fs');

outputImages1.then(function(outputImages) {
     for (i = 0; i < outputImages.length; i++)
         fs.writeFile(+i+".jpg", outputImages[i], function (error) {
            conversion_config[i]  = {
              width: 100, 
              height: 100, 
              page_numbers: [1], 
              base64: true
              
            }
           if (error) { console.error("Error: " + error); }
         });
     });

