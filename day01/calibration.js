const fs = require('fs');
const use = require('../module.js');

const caminho = __dirname + '/calibre.txt';

let sumAll = 0;


fs.readFile(caminho, 'utf-8', (err, content) => {
    const myFile = content.split('\n');

    myFile.forEach(item => {
        sumAll += use.charFun(item); 
    })
    console.log(sumAll);
})