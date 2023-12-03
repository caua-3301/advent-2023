const { default: test } = require("node:test");
const { resourceUsage } = require("process");
const { start } = require("repl");
const { isMainThread } = require("worker_threads");

let otherNumbs = 'zeroonetwothreefourfivesixseveneightnine';

const requestNumber = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    get(name) {
        return this[name];
    }
}

const checkIsNum = char => {
    if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
        return true;
    }
    return false;
}

const toArray = str => {
    return Array.from(str);
}

const cocateToNumber = array => {
    let newString = '';
    newString += array[0];
    newString += array[1];

    return parseInt(newString);
}

function charFun(str) {
    let numbers = [];
    const strArrayada = toArray(str);
    const other = toArray(otherNumbs);

    let control = '';
    let last = 0;
    let exec = true;

    //Primeiro for percorre a string do txt
    for (let cont = 0; cont < strArrayada.length; cont++) {
        //Os dois if's em sequnecia verificam se o char da vez é um numeros
        if (checkIsNum(strArrayada[cont]) && exec) {
            numbers[0] = parseInt(strArrayada[cont]);
            exec = false;
        }
        if (checkIsNum(strArrayada[cont])) {
            last = parseInt(strArrayada[cont]);
        }
        //Realizando testes para descobrir o numero por extenso
        else {
            //O segundo for percorre a string com os números por extenso
            for (let aux = 0; aux < other.length; aux++) {
                let subAux = cont, subAuxOth = aux;
                if (strArrayada[subAux] === other[subAuxOth]) {
                    control += other[subAuxOth];

                    subAux += 1;
                    subAuxOth += 1;

                    while (strArrayada[subAux] === other[subAuxOth] && subAuxOth < 40) {
                        control += strArrayada[subAux];
                        //Se um numero por extenso for encrotado ele encerra a execução
                        if (requestNumber.get(control) != undefined) {
                            subAuxOth = 41;
                        }
                        subAux += 1;
                        subAuxOth += 1;
                    }
                }
                //Se o numero por extenso for maior que tres, ele armazena
                if (control.length >= 3) {
                    let auxx = requestNumber.get(control);
                    if (Number.isInteger(auxx)) {
                        if (exec) {
                            numbers[0] = auxx;
                            exec = false;
                        }
                        last = auxx;
                    }
                }
                control = '';
            }
        }
        numbers[1] = last;
    }
    let preAnswer = cocateToNumber(numbers);
    return preAnswer;

}


// -------------------------------------------------------------------------------------------------
const returnTheGame = line => {
    let divGames = line.split(':'); //Dividindo a linha entre "Game x:" e o conteudo das rodadas [0] = game, [1] = list;
    let array = [];
    array = divGames[0].split(' ');
    return parseInt(array[1])
}

const returnTheRodate = line => {
    let divGames = line.split(':'); //Dividindo a linha entre "Game x:" e o conteudo das rodadas [0] = game, [1] = list;
    return divGames[1].split(';');
}

const justColor = rodateGame => {
    return rodateGame.split(',');
}

const valueColor = color => {
    let numberAndColor = [];
    numberAndColor.push(parseInt((color.slice(0, 3).trim()), 10));  //trim remove os espcos vazios
    numberAndColor.push(color.slice(3, 10).trim());

    return numberAndColor;
}

//Classe do meu objeto
function creatSum() {
    return {
        red: 0,
        blue: 0,
        green: 0,
        get: function (color, value) {
            if (value > this[color]) {
                this[color] = value;
            }
        }
    };
}

const checkItemValue = objeto => {
    if (objeto.red <= 12 && objeto.green <= 13 && objeto.blue <= 14) {
        return true;
    }
    return false;
}

const checkIsValid = (array, idGame) => {
    for (let c = 0; c < array.length; c++) {
        let checkItem = creatSum();
        justColor(array[c]).forEach(item => {
            checkItem.get(valueColor(item)[1], valueColor(item)[0]);
        })
        console.log(checkItem)
        if (checkItemValue(checkItem) != true) {
            return false;
        }
    }
    return true;
}

const calculateColors = arrayGame => {
    let sumAll = 0;
    // if (checkIsValid(arrayGame)) { //USAOD NA PARTE 01
    //     return true;
    // }
    // valueSum.get(numberColor[1], parseInt(numberColor[0]));

    let upperToLine = creatSum();
    arrayGame.forEach(item => {
        justColor(item).forEach(solo => {
            upperToLine.get(valueColor(solo)[1], valueColor(solo)[0])
        })
        sumAll = (upperToLine.red * upperToLine.blue * upperToLine.green);
    })
    
    return sumAll

    // sumAll += checkIsValid(valueSum, numberColor[0]);
    // return sumAll;
}

module.exports = { charFun, checkIsNum, returnTheRodate, calculateColors, returnTheGame }