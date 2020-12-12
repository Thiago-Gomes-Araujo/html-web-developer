/* var nome = "Thiago Gomes";
var idade = 29
alert("Bem Vindo "+ nome +" Sua idade é "+idade)
const frase = "A melhor linguagem de Programação é Python";
console.log(frase.replace("Python","Java")); */

/* function soma(n1, n2){
    return n1+n2
}
alert(soma(3,3)) */

/* const soma = (n1,n2) =>{
    return n1 + n2;
}
alert(soma(3,3))

const troca = (frase, nome, novo_nome)=>{
    return frase.replace(nome, novo_nome);
}
alert(troca("Vai Mengo","Mengo","Curintia")) */

const button = ()=>{
    /* alert ("Obrigado por Clicar"); */
    document.getElementById('teste').innerHTML ="<h1><br>Obrigado por Clicar</br></h1>"
}

const redirect = () =>{
    window.open("https://www.google.com.br"); // Abrir uma nova guia no navegador
    // window.location.href ="https://www.google.com.br"// Abrir na mesma guia no navegador
}
const trocar = (elemento)=>{
    /* document.getElementById("teste1").innerHTML = "Obrigado por Passa o Mouse"; */
    /* alert("trocar Texto"); */
    elemento.innerHTML = "Obrigado por Passa o Mouse";
}

const voltar = (elemento)=>{
    /* document.getElementById("teste1").innerHTML = "Passa o Mouse aqui"; */
    /* alert("trocar Texto"); */
    elemento.innerHTML = "Passa o Mouse aqui";
}

const load = () =>{
    alert("Página Carregada")
}
const change = (elemento) =>{
    alert(elemento.value)
    console.log(elemento.value)
}