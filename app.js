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

var user1 = {
    nome: nome,
    sobrenome: sobrenome,
    pi: pi
};

var user2 = {
    nome,
    sobrenome,
    pi
}

console.log(user1);
console.log(user2);
