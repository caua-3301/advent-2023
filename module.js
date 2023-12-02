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
        if (checkIsNum(strArrayada[cont]) && exec) {
            numbers[0] = parseInt(strArrayada[cont]);
            exec = false;
        }
        if (checkIsNum(strArrayada[cont])) {
            last = parseInt(strArrayada[cont]);
        }

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
                        if (requestNumber.get(control) != undefined) {
                            subAuxOth = 41;
                        }
                        subAux += 1;
                        subAuxOth += 1;
                    }
                }
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

module.exports = { charFun, checkIsNum }