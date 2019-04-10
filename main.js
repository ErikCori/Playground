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
//==================ARRAYS==============================
//Ejercicio 1
var names = ['Silvana Darlik', 'Matías Guerrero', 'Hernán', 'Miriam', 'Agustina Oficialdegui', 'Alejandro Belo', 'Alejandro Raffo', 'Amad Saed', 'Cristian Cahe', 'Regina Molares', 'Nahuel Correa', 'Elizabeth Sainz', 'Federico Viola', 'Tomás Shiao', 'Genaro Di Martino', 'Iara Baya', 'Inés Ehulech', 'José Luis González', 'Joseph Flores', 'Leonardo López', 'Lighuen Gerónimo', 'Luz Marina Pereira', 'Marco A. López', 'Mateo Barreiros'];

function mostrarPrimerElemento(coleccion){
	ordenarArray(coleccion);
	return coleccion[0];
}
function mostrarUltimoElemento(coleccion){
	ordenarArray(coleccion);//porque es un metodo con efecto
	return coleccion[coleccion.length-1];
}
function ordenarArray(coleccion){
	 return coleccion.sort;
}
function mostrarArrayOrdenado(coleccion){
	
	for(var i=0; i<coleccion.length; i++){
		 console.log(ordenarArray(coleccion)[i]);
	}
}
console.log("Lista Ordenada: ")
mostrarArrayOrdenado(names);

console.log("Primer elemento: "+mostrarPrimerElemento(names));

console.log("Ultimo elemento: "+mostrarUltimoElemento(names));

//Ejercicio 2:Bucle sobre un array
var ages = [18, 20, 23, 30, 19, 22, 21, 24, 23, 22];
var cantidad = ages.length;

function mostrarEdades(coleccion){
	for(var i=0; i<cantidad; i++){
		console.log(coleccion[i]);
	}
}
function mostrarEdadesPares(coleccion){
	for(var i=0; i<cantidad; i++){
		if(esPar(coleccion[i])){
			console.log(coleccion[i]);
		}
	}	
}
function esPar(numero){
	if(numero%2 == 0)
		return true;
	else
		return false;
}

console.log("Mostrando edades:");
mostrarEdades(ages);
console.log("Mostrando edades pares:")
mostrarEdadesPares(ages);

//Ejercicio 3: Elemento mas chico

function elNumeroMasBajo(coleccion){
	var minimo = coleccion[0];
	var cantidad = coleccion.length;
	for(var i=1; i<cantidad; i++){
		if(coleccion[i]<minimo){
			minimo = coleccion[i];
		}
	}
	return minimo;
}
console.log("El numero mas bajo es: "+elNumeroMasBajo(ages));

//Ejercicio 4: Elemento mas grande

function elNumeroMasAlto(coleccion){
	var maximo = coleccion[0];
	var cantidad = coleccion.length;
	for(var i=1; i<cantidad; i++){
		if(coleccion[i]>maximo){
			maximo = coleccion[i];
		}
	}
	return maximo;
}

console.log("El numero mas alto es: "+elNumeroMasAlto(ages));

//Ejercicio 5: Mostrar elemento especifico
function mostrarElemento(coleccion, indice){
	return coleccion[indice];
}

console.log("Mostrando elemento: "+mostrarElemento(ages,3))

//Ejercicio 6:Mostrar elementos repetidos
function mostrarElementosRepetidos(coleccion){
	var repetidos =[];
	for(var i=0;i<coleccion.length-1;i++){
		for(var j=i+1;j<coleccion.length;j++){
			if(coleccion[i]==coleccion[j]){
				repetidos.push(coleccion[i]);
			}
		}
	}
	return repetidos
}
console.log("Elementos repetidos: "+mostrarElementosRepetidos(ages));

//Ejercicio 7:Mostrar elementos concatenados
function mostrarElementosConcatenados(coleccion){
	var fraseFinal = "'"+coleccion[0]+"'";
	for(var i=1; i<coleccion.length; i++){
		fraseFinal = fraseFinal+", '"+coleccion[i]+"'";
	}
	console.log("Frase final: "+ fraseFinal);
}

mostrarElementosConcatenados(names);

//===================STRINGS==================================
//Ejercicio 1: Mostrar cadena en orden inverso

function mostrarCadenaAlRevez(numero){
	var numeroString = numero.toString();
	var cadInv =[];
	var longitud = numeroString.length;
	var j=0;
	for(var i=longitud-1; i>=0; i--){
		cadInv[j] = numeroString[i];
		j++;
	}
	var cadInvNumero= cadInv[0];
	for(var i=1; i<cadInv.length; i++){
		cadInvNumero = cadInvNumero+cadInv[i];
	}
	return cadInvNumero;
}
console.log("Cadena inversa: "+mostrarCadenaAlRevez(1234));

//Ejericio 2: Mostrar cadena ordenada alfabeticamente
function mostrarCadenaOrdenada(cadena){
	var longitud=cadena.length;
	var cadenaOrdenada=[];
	for(var iteracion=1; iteracion <longitud; iteracion++){
		for(var valorIzq=0; valorIzq<(longitud-iteracion); valorIzq++){
			var valorDer=valorIzq+1;
			if(cadena[valorIzq]>cadena[valorDer]){
				cadenaOrdenada[valorIzq]=cadena[valorDer];
				cadenaOrdenada[valorDer]=cadena[valorIzq];
			}
		}
	}
	return cadenaOrdenada;
}
console.log("cadena ordenada: "+mostrarCadenaOrdenada("hola"));
//Ejercicio 3: Mostrar la cadena en la cual cada palabra empieza con mayuscula
function mostrarCadenaToppercase(){
		
}
//Ejercicio 4: Mostrar la palabra mas larga de la cadena


