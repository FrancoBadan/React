// "x" e "y" son números enteros .
// Devuelve el número más grande
// Si son iguales, devuelve cualquiera de los dos
// Tu código:
obtenerMayor = (x, y) => (x >= y ? console.log(x) : console.log(y));
obtenerMayor(5, 4);

//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
//Si es menor, devolver --> "Not allowed"
mayoriaDeEdad = (edad) =>
  edad >= 18 ? console.log("Allowed") : console.log("Not allowed");
mayoriaDeEdad(18);

//Recibimos un estado de conexión de un usuario representado por un valor numérico.
//Cuando el estado es igual a 1, el usuario está "Online"
//Cuando el estado es igual a 2, el usuario está "Away"
//De lo contrario, presumimos que el usuario está "Offline"
//Devolver el estado de conexión de usuario en cada uno de los casos.
conection = (status) =>
  status == 1
    ? console.log("Online")
    : status == 2
    ? console.log("Away")
    : console.log("Offline");
conection(1);

// Devuelve un saludo en tres diferentes lenguajes:
// Si "idioma" es "aleman", devuelve "Guten Tag!"
// Si "idioma" es "mandarin", devuelve "Ni Hao!"
// Si "idioma" es "ingles", devuelve "Hello!"
// Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
// Tu código:

saludo = (idioma) => {
  switch (idioma) {
    case "aleman": {
      console.log("Guten Tag!");
      break;
    }
    case "mandarin": {
      console.log("Ni Hao!");
      break;
    }
    case "ingles": {
      console.log("Hello!");
      break;
    }
    default:
      console.log("Hola!");
  }
};
saludo("aleman");

//La función recibe un color. Devolver el string correspondiente:
//En caso que el color recibido sea "blue", devuelve --> "This is blue"
//En caso que el color recibido sea "red", devuelve --> "This is red"
//En caso que el color recibido sea "green", devuelve --> "This is green"
//En caso que el color recibido sea "orange", devuelve --> "This is orange"
//Caso default: devuelve --> "Color not found"
//Usar el statement Switch.

colors = (color) => {
  switch (color) {
    case "blue": {
      console.log("this is blue");
      break;
    }
    case "red": {
      console.log("this is red");
      break;
    }
    case "green": {
      console.log("this is green");
      break;
    }
    case "orange": {
      console.log("this is orange");
      break;
    }
    default:
      console.log("Color not found");
  }
};
colors("rojo");

// Devuelve "true" si "numero" es 10 o 5
// De lo contrario, devuelve "false"
// Tu código:
esDiezOCinco = (numero) =>
  numero == 5 || numero == 10 ? console.log(true) : console.log(false);
esDiezOCinco(10);

// Devuelve "true" si "numero" es menor que 50 y mayor que 20
// De lo contrario, devuelve "false"
// Tu código:
estaEnRango = (numero) =>
  numero > 20 && numero < 50 ? console.log(true) : console.log(false);
estaEnRango(21);

// Devuelve "true" si "numero" es un entero (int/integer)
// Ejemplo: 0.8 -> false
// Ejemplo: 1 -> true
// Ejemplo: -10 -> true
// De lo contrario, devuelve "false"
// Pista: Puedes resolver esto usando `Math.floor`
// Tu código:
esEntero = (numero) =>
  numero == Math.floor(numero) ? console.log(true) : console.log(false);
esEntero(-11.5);

// Si "numero" es divisible entre 3, devuelve "fizz"
// Si "numero" es divisible entre 5, devuelve "buzz"
// Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
// De lo contrario, devuelve el numero
fizzBuzz = (numero) =>
  numero % 3 == 0 && numero % 5 == 0
    ? console.log("fizzbuzz")
    : numero % 5 == 0
    ? console.log("buzz")
    : numero % 3 == 0
    ? console.log("fizz")
    : console.log(numero);

fizzBuzz(30);

//La función recibe tres números distintos.
//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//Si no se cumplen ninguna de las condiciones anteriores, retornar false.

operadoresLogicos = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3 && num1 > 0) {
    console.log("Número 1 es mayor y positivo");
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    console.log("Hay negativos");
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3 + 1);
  } else if (num1 == 0 || num2 == 0 || num3 == 0) {
    console.log("Error");
  } else {
    console.log(false);
  }
};
operadoresLogicos(0, 0, 0);

// Devuelve "true" si "numero" es primo
// De lo contrario devuelve "falso"
// Pista: un número primo solo es divisible por sí mismo y por 1
// Pista 2: Puedes resolverlo usando un bucle `for`
// Nota: Los números 0 y 1 NO son considerados números primos

esPrimo = (numero) => {
  if (numero == 1 || numero == 0 || numero == 4) return console.log("falso");

  for (let i = 2; i < numero / 2; i++) {
    if (numero % i == 0) return console.log("falso");
  }
  return console.log("true");
};

esPrimo(17);

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
}
esVerdadero = (valor) =>
  valor == true ? console.log("soy verdadero") : console.log("soy falso");
esVerdadero(true);

//Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
//Escribe tu código aquí
tablaDelSeis = () => {
  seis = [];
  for (let i = 0; i <= 10; i++) {
    seis.push(i * 6);
  }
  seis.forEach((e) => console.log(e));
};
tablaDelSeis();

//Leer un número entero y determinar si tiene 3 dígitos.
//Escribe tu código aquí

tieneTresDigitos = (numero) =>
  numero.toString().length == 3
    ? console.log("Tiene tres digito")
    : console.log("No tiene tres digito");
tieneTresDigitos(000);

  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.

doWhile=numero=>{
  resultado=numero
  i=0
  do{
    i++
    resultado*=5
  }while(i<8)
  console.log(resultado)
}
doWhile(1)