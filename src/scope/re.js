//La asignacion de variables siempre se hizo con la palabra reservada "var", en la ultima version de JS, ECMAScript 6 se incorporaron las palabras reservadas "let" y "const" para declarar variables.

// VAR

var firstName; // Undefined
firstName = 'Oscar'
console.log(firstName);

var lastName = 'David'; // Declarar / Asignar
lastName = 'Ana'; // Reasignar
console.log(lastName);

var secondName = 'David'; // Declarar / Asignar
var secondName = 'Ana'; // Redeclarar / Reasignar
console.log(lastName);

// Con "var" es posible es posible redeclarar, y reasignar o reinicializar las variables.

// LET

let fruit = 'Apple' // Declalar / Asignar
fruit = 'Kiwi'; // Reasignar
console.log(fruit);
let fruit = 'Banana'
console.log(fruit);

// Con la palabra "let" es posible reasignar un valor a la variable, pero no redeclarla. Una vez que esta declarada solo se puede cambiar su valor.

// CONST

const animal = 'Dog'; // Declalar / Asignar
animal = 'Cat'; // Reasignar
const animal = 'Snake';
console.log(animal);

const vehicles = [];
vehicles.push('Car');
console.log(vehicles);
vehicles.pop();
console.log(vehicles);

// Con la palabra "const", no se puede reasignar ni redeclarar la variable. Una vez decladara solo se puede usar y no modificar. Si se puede agregar o quitar informacion sobre un arreglo o un objeto que este creado en esa variable. 