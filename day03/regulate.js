const fs = require('fs');
const use = require('../module.js');

const caminho = __dirname + '/regulate.txt';

fs.readFile(caminho, 'utf-8', (err, content) => {
    use.checkLine(content);
})