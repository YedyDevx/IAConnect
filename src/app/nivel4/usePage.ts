export const ejercicios = [
  {
    id: 1,
    titulo: "Declaración de Funciones y Parámetros",
    instrucciones: `
      Conceptos fundamentales de funciones:

      1. Crea una función llamada 'calcularPromedio' que:
         - Reciba un array de números como parámetro
         - Calcule y retorne el promedio de esos números
         
      2. Desarrolla una función 'saludarPersona' que:
         - Reciba nombre y edad como parámetros
         - La edad debe tener un valor por defecto de 18
         - Retorne un saludo personalizado incluyendo ambos datos
    `,
  },
  {
    id: 2,
    titulo: "Funciones Anónimas y Callbacks",
    instrucciones: `
      Trabajando con funciones avanzadas:

      1. Crea un array de números y utiliza una función anónima con .filter() para:
         - Filtrar solo los números pares
         - Mostrar el resultado en consola
         
      2. Implementa una función 'procesarTexto' que:
         - Reciba un texto y una función callback como parámetros
         - El callback debe transformar el texto (mayúsculas, minúsculas, etc.)
         - Muestra cómo llamar a esta función con diferentes callbacks
    `,
  },
  {
    id: 3,
    titulo: "Scope y Contexto",
    instrucciones: `
      Entendiendo el scope en JavaScript:

      1. Crea una función que demuestre el scope de variables:
         - Declara variables con let y const en diferentes niveles
         - Muestra cómo acceder (o no) a estas variables desde diferentes ámbitos
         
      2. Desarrolla un ejemplo práctico que:
         - Use variables globales y locales
         - Demuestre por qué debemos evitar variables globales
         - Muestre las mejores prácticas de scope
    `,
  },
];

export const respuestas = [
  {
    id: 1,
    codigo: `
// 1. Función calcularPromedio
function calcularPromedio(numeros) {
  // Validación del parámetro
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return "Por favor, proporciona un array válido de números";
  }

  // Cálculo del promedio
  const suma = numeros.reduce((total, num) => total + num, 0);
  return suma / numeros.length;
}

// Ejemplos de uso:
console.log(calcularPromedio([10, 20, 30]));  // 20
console.log(calcularPromedio([]));  // Mensaje de error
console.log(calcularPromedio([5]));  // 5

// 2. Función saludarPersona con parámetro por defecto
function saludarPersona(nombre, edad = 18) {
  return \`¡Hola - ! Tienes - años.\`;
}

// Ejemplos de uso:
console.log(saludarPersona("Ana"));  // ¡Hola Ana! Tienes 18 años.
console.log(saludarPersona("Juan", 25));  // ¡Hola Juan! Tienes 25 años.`,
    descripcion: `
🔍 Conceptos clave de funciones:

• Declaración de funciones usando la palabra clave 'function'
• Parámetros y argumentos
• Valores por defecto en parámetros (ES6+)
• Validación de parámetros
• Return y valor de retorno
• Uso del método reduce() para sumar valores
• Template literals para strings
    `,
  },
  {
    id: 2,
    codigo: `
// 1. Funciones anónimas con filter
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

// Versión con arrow function (más concisa)
const numerosParesArrow = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares);  // [2, 4, 6, 8, 10]

// 2. Función con callback
function procesarTexto(texto, callback) {
  // Validación
  if (typeof texto !== 'string') {
    return 'Por favor, proporciona un texto válido';
  }
  
  // Ejecutar el callback
  return callback(texto);
}

// Diferentes callbacks para usar
const aMayusculas = texto => texto.toUpperCase();
const aMinusculas = texto => texto.toLowerCase();
const invertirTexto = texto => texto.split('').reverse().join('');

// Ejemplos de uso:
console.log(procesarTexto("Hola Mundo", aMayusculas));  
// "HOLA MUNDO"

console.log(procesarTexto("Hola Mundo", aMinusculas));  
// "hola mundo"

console.log(procesarTexto("Hola Mundo", invertirTexto));  
// "odnuM aloH"`,
    descripcion: `
🔍 Conceptos clave de funciones anónimas y callbacks:

• Funciones anónimas: funciones sin nombre
• Arrow functions: sintaxis moderna y concisa
• Callbacks: funciones como argumentos
• Métodos de array: filter, map, reduce
• Higher-order functions: funciones que reciben o retornan funciones
• Transformación de datos usando callbacks
    `,
  },
  {
    id: 3,
    codigo: `
// 1. Demostración de Scope
let variableGlobal = "Soy global";

function ejemploScope() {
  let variableLocal = "Soy local";
  const constanteLocal = "Soy constante local";

  console.log(variableGlobal);  // Accesible
  console.log(variableLocal);   // Accesible
  console.log(constanteLocal);  // Accesible

  if (true) {
    let variableBloque = "Soy de bloque";
    console.log(variableBloque);  // Solo accesible aquí
  }
  // console.log(variableBloque);  // Error: no definida
}

// 2. Ejemplo práctico de scope
// ❌ Mal uso de scope global
let contador = 0;  // Variable global (evitar)

function incrementarContador() {
  contador++;  // Modifica variable global (mala práctica)
}

// ✅ Buen uso de scope
function crearContador() {
  let contador = 0;  // Variable local (encapsulada)
  
  return {
    incrementar: function() {
      contador++;
      return contador;
    },
    obtenerValor: function() {
      return contador;
    }
  };
}

const miContador = crearContador();
console.log(miContador.incrementar());  // 1
console.log(miContador.incrementar());  // 2
console.log(miContador.obtenerValor()); // 2`,
    descripcion: `
🔍 Conceptos clave de scope:

• Scope global vs local
• Block scope (let y const)
• Closure y encapsulamiento
• Variables privadas vs públicas
• Mejores prácticas:
  - Evitar variables globales
  - Usar closure para datos privados
  - Preferir const sobre let cuando sea posible
  - Mantener el scope lo más reducido posible
    `,
  },
];
