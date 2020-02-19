const readline = require("readline");
const prettier = require("prettier");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("Insertar una ruta de archivo: ", (answer) => {
  let ultIndice = fs.readFile(answer, (err, file) => {    //readdir lee la ruta de un archivo
    if(err){
      console.log(err);
      return;
    }
    console.log(file.toString());
  });
})