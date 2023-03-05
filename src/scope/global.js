// variables

var a; // declarando
var b = 'v' // declaramos y asignamos
b = 'cv' // reinicializar
var a = 'aa' // redeclaracion

// Global Scope
// Las variables que se encuentre en el documento, pasan a ser variables globales. y podemos acceder en cualquier lado a estas variables

var fruit = 'Apple' // Global Scope

function bestFruit() {
	console.log(fruit);
}

bestFruit();

function countries() {
	country = 'Colombia';
	console.log(country)
};

countries();
console.log(country);