const fs = require('fs');

const caminho = __dirname + '/calibre.txt';

let sumAll = 0;
let lastNum = 0;

let concat = '';

let otherNunbs = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

fs.readFile(caminho, 'utf-8', (err, content) => {
    const myFile = content.split('\n');

    myFile.forEach(item => {
        let exec = 0;

        for (let char of item) {
            if (exec === 0 && char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
                concat += char
                exec++
            } 
            if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
                lastNum = parseInt(char);
            }
        }
        concat += lastNum;
        sumAll+= parseInt(concat)
        concat = '';
        exec = 0;
        console.log(sumAll)

    })
})