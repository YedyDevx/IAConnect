export const ejercicios = [
  {
    id: 1,
    titulo: "Variables y Tipos Básicos",
    instrucciones: `
      Conceptos básicos de JavaScript:
  
      1. ¿Qué es una variable?
      2. ¿Cómo crear una variable con let?
      3. ¿Cómo crear una constante?
      4. ¿Cómo guardar un texto en una variable?
      5. ¿Cómo guardar un número en una variable?
      `,
  },
  {
    id: 2,
    titulo: "Operaciones Básicas",
    instrucciones: `
      Operaciones simples en JavaScript:
  
      1. ¿Cómo sumar dos números?
      2. ¿Cómo multiplicar dos números?
      3. ¿Cómo unir dos textos?
      4. ¿Cómo saber si un número es mayor que otro?
      5. ¿Cómo saber si dos valores son iguales?
      `,
  },
  {
    id: 3,
    titulo: "Trabajando con Arrays",
    instrucciones: `
      Arrays (listas) en JavaScript:
  
      1. ¿Cómo crear una lista vacía?
      2. ¿Cómo crear una lista con nombres?
      3. ¿Cómo agregar un elemento a una lista?
      4. ¿Cómo acceder al primer elemento?
      5. ¿Cómo saber cuántos elementos tiene una lista?
      `,
  },
];

// Agregamos las respuestas para cada ejercicio
export const respuestas = [
  {
    id: 1,
    codigo: `
  // 1. Una variable es como una caja donde guardamos información
  
  // 2. Crear una variable con let:
  let edad = 25;
  
  // 3. Crear una constante:
  const nombre = "Juan";
  
  // 4. Guardar un texto:
  let mensaje = "Hola mundo";
  
  // 5. Guardar un número:
  let precio = 99.99;
  
  // Ejemplos de uso:
  console.log(mensaje); // Muestra: Hola mundo
  console.log(precio); // Muestra: 99.99`,
    descripcion: `
  🔍 Conceptos utilizados:
  
  • let: Para crear variables que pueden cambiar su valor
  • const: Para crear variables que no cambiarán su valor
  • Tipos de datos: 
    - Texto (string): Se escribe entre comillas "..."
    - Números: Se escriben directamente sin comillas
  • console.log(): Para mostrar valores en la consola
      `,
  },
  {
    id: 2,
    codigo: `
  // 1. Sumar números:
  let suma = 5 + 3;  // resultado: 8
  
  // 2. Multiplicar números:
  let multiplicacion = 4 * 2;  // resultado: 8
  
  // 3. Unir textos:
  let nombre = "Juan";
  let saludo = "Hola " + nombre;  // resultado: "Hola Juan"
  
  // 4. Comparar si es mayor:
  let esMayor = 10 > 5;  // resultado: true
  
  // 5. Comparar si son iguales:
  let sonIguales = 5 === 5;  // resultado: true`,
    descripcion: `
  🔍 Conceptos utilizados:
  
  • Operadores aritméticos: + (suma), * (multiplicación)
  • Concatenación: + (para unir textos)
  • Operadores de comparación:
    - > (mayor que)
    - === (igual a)
  • Los resultados de las comparaciones son booleanos (true/false)
      `,
  },
  {
    id: 3,
    codigo: `
  // 1. Crear lista vacía:
  let miLista = [];
  
  // 2. Crear lista con nombres:
  let frutas = ["manzana", "pera", "plátano"];
  
  // 3. Agregar elemento a una lista:
  frutas.push("naranja");
  
  // 4. Acceder al primer elemento:
  let primeraFruta = frutas[0];  // resultado: "manzana"
  
  // 5. Contar elementos:
  let cantidad = frutas.length;  // resultado: 4`,
    descripcion: `
  🔍 Conceptos utilizados:
  
  • Arrays: Se crean usando corchetes []
  • Métodos de arrays:
    - push(): Agrega elementos al final
    - [0]: Accede al primer elemento (la posición 0)
  • Propiedades:
    - length: Indica cuántos elementos tiene el array
  • Los elementos se separan por comas
      `,
  },
];
