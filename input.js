const readline = require('readline');

const inp_out = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inp_out.question("File Path? ", function(name){
    inp_out.question("jpg or png? ", function(type__file) {
        
        console.log(`\nFile Path: ${name}\nYou select ${type__file}`);
        inp_out.close();
    }); 
});

inp_out.on("close", function() {
    console.log("\nEND");
    process.exit(0)
})
