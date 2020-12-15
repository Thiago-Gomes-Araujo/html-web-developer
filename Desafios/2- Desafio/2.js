/* Desafios
Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

Entrada
Você receberá 1 valor inteiro N, onde N > 0.

Saída
Exiba todos os números pares até o valor de entrada, sendo um em cada linha.  */

var numeros = gets();
for (var i = 0; i <= numeros; i++){
    if(i%2 == 0 && i !=0){
        console.log(i) 
    }
}
