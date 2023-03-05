function greeting() {
	let userName = 'Ana';
	console.log(userName);

	if(userName === 'Ana') {
		console.log(`Hello ${userName}`);
	};
};

greeting();

console.log(userName);

// userName no es una variable global, ya que esta inicializada dentro de una funcion. Por ese motivo no se puede llamar por fuera de la funcion.