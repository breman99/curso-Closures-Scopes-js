function fruits() {
	if(true) {
		var fruit1 = 'Apple'; // Function Scope
		let fruit2 = 'Kiwi'; // Block Scope
		const fruit3 = 'Banana'; // Block Scope
	};
	console.log(fruit1);
	console.log(fruit2);
	console.log(fruit3);
};
fruits();

console.log(fruit1);

//La palabra reservada var, cuando es utilizada dentro de un bloque permite llamar a la variable fuera del bloque, pero solo en la funcion en la que se encuentra dicho bloque y no de manera global. Las palabrar reservadas const, y let, solo pueden ser llamadas dentro del bloque en que fueron inicializadas.
