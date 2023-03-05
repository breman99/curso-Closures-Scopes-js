const myGlobal = 0;

function myFunction() {
	const myNumber = 1;
	console.log(myGlobal);

	function parent() { // Funcion interna
		const inner = 2;
		console.log(myNumber, myGlobal);

		function child() {
			console.log(inner, myNumber, myGlobal);
		}

		return child();
	}

	return parent();
}

myFunction();

// El ambito lexico nos indica que la accesibilidad a las variables esta determinada, por la posicion de estas dentro de los ambitos anidados.


