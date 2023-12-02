#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "../module.c"

int main() {

    char line[150];
    FILE * myTxt = openFile("calibre.txt", "r+");

    //Marcando execução para pegar o primeiro num
    int exec = 0;
    char concat[2];
    char lastNum;

    while(fgets(line, sizeof(line), myTxt) != NULL) {
        char * nullLine; //Ponteiro que vai apontar para linha a ser excluída

        if ((nullLine = strchr(line, '\n')) != NULL) { //retorna um ponteiro para o caractere desejado
            *nullLine = '\0'; //Referencia o endereco da linah vazia
        } 
        printf("%s \n", line);
    }

    //Fechando arquivo
    fclose(myTxt);



    // char * teste = "5";

    // int * receba = returnAscii(teste);
    // printf("%d == %d", receba[0], receba[1]);
    // return 0;
}


/*                                          ----------  USO FUTURO  ------------

char * next = strtok(line, "\n"); //Explicar processo para Rilcas, converção de tipos

Parametros para um fgets = (variavel para a linha, tamanho sa string (normalmente o da linha), e a entrada) 
*/