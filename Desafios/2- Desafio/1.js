/* Desafio
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final. */

var numeros = [gets(),gets(),gets(),gets(),gets(),gets()];
var positivo = 0;
for (var i = 0; i <= numeros.length; i++) {
    if(numeros[i] > 0){
        positivo = positivo +1
    }
      
}
console.log(positivo+' valores positivos')
