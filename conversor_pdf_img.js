//https://github.com/ol-th/pdf-img-convert.js
//testar isso: https://www.npmjs.com/package/pdf-export-images
var pdf2img = require('pdf-img-convert');

var outputImages1 = pdf2img.convert('/Users/maximize/Documents/Adrian/VS_CODE/conversor_pdf_html/assets/project_proposal.pdf');
var outputImages2 = pdf2img.convert('/Users/maximize/Documents/Adrian/VS_CODE/conversor_pdf_html/assets/meeting_notes.pdf');

// From here, the images can be used for other stuff or just saved if that's required:

var fs = require('fs');

outputImages1.then(function(outputImages) {
    for (i = 0; i < outputImages.length; i++)
        fs.writeFile("output"+i+".png", outputImages[i], function (error) {
          if (error) { console.error("Error: " + error); }
        });
    });
