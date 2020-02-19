const readline = require("readline");
const fs = require("fs");
const js_bf = require("js-beautify");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("Insertar una ruta de archivo: ", (answer) => {
  let split = answer.split('.');
  let extension = split[split.length-1];
  let archivo = fs.readFile(answer, (err, file) => {    //readdir lee la ruta de un archivo
    if(err){
      console.log(err);
      return;
    }
    return file;
  });
  switch (extension){
    case 'html':
      console.log('holis');
      break;
    case 'css':
      console.log('holis');
      break;
    case 'js':
      js_bf(archivo, {indent_size: 2, space_in_empty_paren: true});
      break;
    default:
      console.log('default');
  }
  
  });