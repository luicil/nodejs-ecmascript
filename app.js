const nome = "Luicil";

// nome = "fernandes";
//Global e local
var sobrenome = "Fernandes";
// Global, local e bloco
let pi = 3.14;

//Parametros opcionais. b é opcional
function soma(a, b = 1){
    console.log(a + b);
}

//JSON encurtado

var empresa ={
    nome: "é presa",
    cidade: "são paulo"
}


var user1 = {
    nome: nome,
    sobrenome: sobrenome,
    pi: pi,
    empresa
};

//SPREAD
var user2 = {
    u2Nome: "luicil",
    u2Sobrenome: "fernandes",
    u2Pi: 3.14,
    ...empresa
}

//DESESTRUTURAÇÃO
var { u2Nome,u2Pi } = user2;

//ARROW FUNCTIONS


//console.log(user1);
console.log(user2);
console.log(u2Nome);
console.log(u2Pi);