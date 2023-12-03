const fs = require('fs');
const use = require('../module.js');

const caminho = __dirname + '\\games.txt';

fs.readFile(caminho, 'utf-8', (err, content) => {
    const myGames = content.split('\n');
    let sumAllItens = 0;
    myGames.forEach(linha => {
        //sumAllItens += use.calculateColors(use.returnTheRodate(linha));

        // if (use.calculateColors(use.returnTheRodate(linha)) == true) { USADO NA PARTE 01
        //     sumAllItens += use.returnTheGame(linha);

        //     console.log("ENTROU")
        // }
        sumAllItens += use.calculateColors(use.returnTheRodate(linha));
        console.log("MUDANDO LINHA ---")
    })
    console.log(sumAllItens);
})