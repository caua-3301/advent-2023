#include <stdio.h>
#include <stdlib.h>
#include <string.h>

FILE * openFile(char fileName[15], char openMode[3]) {
    //Alocando memória para o ponteiro
    FILE * myFile = (FILE *)malloc(sizeof(FILE));
    //Abrindo arquivo .txt
    myFile = fopen(fileName, openMode);
    return myFile;
}

//Retorna o valor em inteiro e retornar o numero ASCII em int também [1] e [0] no array respetivamente
int parseInt(char myChar) {
    //"Metodo que converte para string"
    return myChar - '0';  
}

int executar = 0;
int aux = 0;

int retornar[2];

int * returnAscii(char *car) {
    
    FILE * ascii = openFile("ascii.txt", "r+");

    char line[100];

    while(fgets(line, sizeof(line), ascii) != NULL) {   
        char * nullLine; //Ponteiro que vai apontar para linha a ser excluída

        if ((nullLine = strchr(line, '\n')) != NULL) { //retorna um ponteiro para o caractere desejado
            *nullLine = '\0'; //Referencia o endereco da linah vazia
        } 

    //Ajustar
        if (executar == 1) {
            executar = 0;
            retornar[0] = atoi(line);
            retornar[1] = aux;
            aux = 0;
            return retornar;
        }   

        if (strcmp(car, line) == 0) {
           executar++; 
           aux = car[0] - '0';
        }

    }
}

char retornarCaractre(int numero) {
    switch(numero){
        case 0: return '0';
            break;
        case 1: return '1';
            break;
        case 2: return '2';
            break;
        case 3: return '3';
            break;
        case 4: return '4';
            break;
        case 5: return '5';
            break;
        case 6: return '6';
            break;
        case 7: return '7';
            break;
        case 8: return '8';
            break;
        case 9: return '9';
            break;
        default: return 0;
    }
}