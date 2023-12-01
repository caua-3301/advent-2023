const { default: test } = require("node:test");
const { isMainThread } = require("worker_threads");

let otherNumbs = 'onetwothreefourfivesixseveneightnine';

let str = 'afdbzgnxhmconetwo'

const requestNumber = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    nine: 9,
    get(name) {
        return this[name];
    }
}

const teste = () => {
    const strArrayada = Array.from(str);
    const other = Array.from(otherNumbs);

    let control = '';

    //Primeiro for percorre a string do txt
    for (let cont = 0; cont < strArrayada.length; cont ++) {

        //O segunfo for percorre a string com os números por extenso
        for (let aux = 0; aux < other.length; aux++) {

            //Caso as letras forem iguais, ele vai concatenando-as em uma string
            if (strArrayada[cont] === other[aux]) {
                let subAux = cont;
                let subAuxOther = aux;
                
                while (strArrayada[subAux] === other[subAuxOther]) {
                    control += other[subAuxOther];
                    subAux++;
                    subAuxOther++;
                    console.log(subAux)
                }

                if (control.length >= 3){
                    let a = requestNumber.get(control)
                    console.log(a)
                }
                console.log(control)
                control = '';

            }
        }
    }
}



teste();