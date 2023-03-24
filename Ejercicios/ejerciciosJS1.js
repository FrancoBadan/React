/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */


// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "null";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;



devolverString = str => console.log(str);

devolverString("Cadena de texto")


// "x" e "y" son números
// Suma "x" e "y" juntos y devuelve el valor
// Tu código:
suma = (x, y)=> x + y;




  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  resta = (x, y)=> x - y;



  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  multiplica = (x, y)=> x * y;



  // Divide "x" entre "y" y devuelve el valor
   // Tu código:
   dividir = (x, y)=> x / y;



  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  sonIguales = (x, y) => x==y? console.log(true) : console.log(false);

sonIguales(5,6)


  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  tienenMismaLongitud = (str1, str2) => str1.length==str2.length? console.log(true) : console.log(false);
 

  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  menosQueNoventa = num => num<90? console.log(true) : console.log(false);



  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  menosQueNoventa = num => num>50? console.log(true) : console.log(false);


  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  obtenerResto = (x, y)=> console.log(x % y);
  obtenerResto(10,5)



  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  esPar = num => num%2? console.log(false) : console.log(true);
  esPar(8)
  


  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  esImpar = num => num%2? console.log(true) : console.log(false);
  esImpar(3)


  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  elevarAlCuadrado = num => console.log(num*num);
  elevarAlCuadrado(5)


  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  elevarAlCubo = num => console.log(num*num*num)
  elevarAlCubo(3)


  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
elevar = (num, exponent) => console.log(Math.pow(num,exponent))
elevar(2,5)



  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
redondearNumero = num => console.log(Math.round(num))
redondearNumero(1.5)

  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
redondearHaciaArriba = num => console.log(Math.floor(num))
redondearHaciaArriba(5.4)



  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
numeroRandom = () => console.log(Math.floor( Math.random()*11));
numeroRandom()

  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
esPositivo =numero=> numero>0? console.log("Es positivo"):numero==0?console.log("Es cero"):console.log("es negativo")
esPositivo(0)

  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
agregarSimboloExclamacion = str => console.log(str+"!")
agregarSimboloExclamacion("hola mundo")


  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
combinarNombres = (nombre,apellido) => console.log(`${nombre} ${apellido}`)
combinarNombres("franco","badan")


  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
obtenerSaludo=nombre=>console.log(`Hola ${nombre}!`)
obtenerSaludo("franco")

  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
obtenerAreaRectangulo=(alto, ancho)=>console.log(alto*ancho)


  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  retornarPerimetro=(lado)=>console.log(lado*4)



  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
areaDelTriangulo=(base,altura)=>console.log(base*altura/2)



  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
deEuroAdolar=euro=>console.log(euro*1.2)
deEuroAdolar(3)



  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
esVocal = letra => letra.length!==1?console.log("Dato incorrecto"):letra==/[aeiou]/g?console.log("Es vocal"):console.log("No es vocal")
esVocal("a")

