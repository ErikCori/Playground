//JavaScript Basics
console.log("Starting javascript...");

//Ejercicio 1
var myName = "Erik";
console.log(myName);

//Ejercicio 2
var age = 22;
console.log(age);

//Ejercicio 3
var ignasiAge = 32;
var ageDiff;

function calcularDiferenciaDeEdad(edad1, edad2){
	ageDiff = edad1 - edad2;
	console.log(ageDiff);
}
calcularDiferenciaDeEdad(age, ignasiAge);

//Ejercicio 4
function esMayorDe21(edad){
	if(edad>21){
		console.log("Ya es mayor de 21");
	}else{
		console.log("No tiene mas de 21");
	}
}
esMayorDe21(age);

//Ejercicio 5
function compararEdadConIgnasi(edad){
	if(edad < ignasiAge){
		return console.log("Ignasi es mas viejo que "+myName);
	}
	if(edad == ignasiAge){
		return console.log(myName+" tiene la misma edad que Ignasi");
	}
	else{
		return console.log("Ignasi es mas joven que "+myName);
	}
}
compararEdadConIgnasi(age);
//==================MATRICES==============================
//Ejercicio 1
var names = ['Silvana Darlik', 'Matías Guerrero', 'Hernán', 'Miriam', 'Agustina Oficialdegui', 'Alejandro Belo', 'Alejandro Raffo', 'Amad Saed', 'Cristian Cahe', 'Regina Molares', 'Nahuel Correa', 'Elizabeth Sainz', 'Federico Viola', 'Tomás Shiao', 'Genaro Di Martino', 'Iara Baya', 'Inés Ehulech', 'José Luis González', 'Joseph Flores', 'Leonardo López', 'Lighuen Gerónimo', 'Luz Marina Pereira', 'Marco A. López', 'Mateo Barreiros'];

//Ejercicio 2:Bucle sobre una matriz
var ages = [18, 20, 23, 30, 19, 22, 21, 24, 23, 22];
var cantidad = ages.length;

function mostrarEdades(coleccion){
	for(var i=0; i<cantidad; i++){
		console.log(ages[i]);
	}
}
function mostrarEdadesPares(coleccion){
	for(var i=0; i<cantidad; i++){
		if(esPar(coleccion[i])){
			console.log(ages[i]);
		}
	}	
}
function esPar(numero){
	if(numero%2 == 0)
		return true;
	else
		return false;
}

mostrarEdades(ages);
console.log("Mostrando edades pares")
mostrarEdadesPares(ages);

//Ejercicio 3: Elemento as chico
function elNumeroMasBajo(coleccion){
	var minimo = coleccion[0];
	var cantidad = coleccion.length;
	for(var i=1; i<cantidad; i++){
		if(coleccion[i]<minimo){
			minimo = coleccion[i];
		}
	}
	console.log("El numero mas bajo es: "+minimo);
}
elNumeroMasBajo(ages);

//Ejercicio 4: Elemento mas grande
function elNumeroMasAlto(coleccion){
	var maximo = coleccion[0];
	var cantidad = coleccion.length;
	for(var i=1; i<cantidad; i++){
		if(coleccion[i]>maximo){
			maximo = coleccion[i];	
		}
	}
	console.log("El numero mas alto es: "+maximo);
}

elNumeroMasAlto(ages);

//Ejercicio 5: Mostrar elemento especifico
function mostrarElemento(coleccion, indice){
	console.log("El elemento de la posicion "+indice+" es "+coleccion[indice-1]);
}

mostrarElemento(ages, 3);

//Ejercicio 6:Mostrar elementos repetidos
function mostrarElementosRepetidos(coleccion){
	
}
//Ejercicio 7:Mostrar elementos concatenados
function mostrarElementosConcatenados(coleccion){
	var fraseFinal = coleccion[0];
	for(var i=1; i<coleccion.length; i++){
		fraseFinal = fraseFinal+", "+coleccion[i];
	}
	console.log("Frase final: "+ fraseFinal);
}

mostrarElementosConcatenados(names);

//===================STRINGS==================================
//Ejercicio 1: Mostrar cadena en orden inverso
function mostrarCadenaAlRevez(cadena){
	
}

