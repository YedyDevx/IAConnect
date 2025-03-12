export const ejercicios = [
  {
    id: 1,
    titulo: "Estructuras Condicionales: if-else",
    instrucciones: `
      Conceptos fundamentales de if-else:

      1. ¿Qué es una estructura if-else en programación?
      2. ¿Cuándo se debe usar if-else en un programa?
      3. Escribe un programa que determine si un número es par o impar.
      4. Desarrolla un programa que clasifique edades en categorías:
         - Menor de 13 → "Eres un niño"
         - Entre 13 y 17 → "Eres un adolescente"
         - 18 o más → "Eres un adulto"
    `,
  },
  {
    id: 2,
    titulo: "Estructuras de Control Avanzadas",
    instrucciones: `
      Estructuras de control en JavaScript:

      1. ¿Cuándo usar switch en lugar de if-else?
      2. ¿Cuál es la diferencia entre while y do-while?
      3. ¿Qué ventajas tiene forEach sobre un bucle for tradicional?
      4. ¿Cuándo usar .map en lugar de forEach?
      5. Implementa ejemplos de cada tipo de bucle.
    `,
  },
  {
    id: 3,
    titulo: "Ejercicios Prácticos de Control de Flujo",
    instrucciones: `
      Resuelve los siguientes ejercicios:

      1. Crea un programa que use switch para convertir números (1-7) a días de la semana.
      2. Implementa un bucle while que cuente regresivamente desde 10 hasta 1.
      3. Usa forEach para sumar todos los números de un array.
      4. Utiliza .map para duplicar todos los números de un array.
      5. Combina if-else con bucles para encontrar el número más grande en un array.
    `,
  },
];

export const respuestas = [
  {
    id: 1,
    codigo: `
// 1. ¿Qué es una estructura if-else en programación?
/*
Una estructura if-else es una estructura de control que permite que un programa 
tome decisiones y ejecute diferentes bloques de código basándose en condiciones.
La sintaxis básica es:
*/
if (condicion) {
  // código que se ejecuta si la condición es verdadera
} else {
  // código que se ejecuta si la condición es falsa
}

// 2. ¿Cuándo se debe usar if-else en un programa?
/*
Se debe usar if-else cuando necesitamos que nuestro programa:
- Tome decisiones basadas en condiciones
- Ejecute diferentes códigos según una condición
- Valide datos o entradas de usuario
Ejemplo práctico:
*/
function validarEdad(edad) {
  if (edad >= 18) {
    return "Puede ingresar al sitio";
  } else {
    return "Acceso denegado: debe ser mayor de edad";
  }
}

// 3. Programa para determinar si un número es par o impar
function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return "Es par";
  } else {
    return "Es impar";
  }
}

// 4. Programa de clasificación de edades
function clasificarEdad(edad) {
  if (edad < 13) {
    return "Eres un niño";
  } else if (edad >= 13 && edad <= 17) {
    return "Eres un adolescente";
  } else {
    return "Eres un adulto";
  }
}

// Ejemplos de uso:
console.log(esParOImpar(4));  // "Es par"
console.log(esParOImpar(7));  // "Es impar"
console.log(clasificarEdad(8));   // "Eres un niño"
console.log(clasificarEdad(15));  // "Eres un adolescente"
console.log(clasificarEdad(25));  // "Eres un adulto"`,
    descripcion: `
🔍 Conceptos clave de if-else:

• Estructura de control condicional
• Toma de decisiones en el código
• Uso de operadores de comparación (>, <, >=, <=, ===)
• Operadores lógicos (&&, ||)
• Bloques de código y scope
• Buenas prácticas de indentación y comentarios
    `,
  },
  {
    id: 2,
    codigo: `
// 1. ¿Cuándo usar switch en lugar de if-else?
/*
Switch es mejor cuando:
- Comparamos una variable contra valores específicos
- Tenemos múltiples casos posibles
- Queremos mejor legibilidad que múltiples if-else
*/
function ejemploSwitch(opcion) {
  switch (opcion) {
    case 1: return "Primera opción";
    case 2: return "Segunda opción";
    case 3: return "Tercera opción";
    default: return "Opción no válida";
  }
}

// 2. Diferencia entre while y do-while
// While: evalúa la condición antes de ejecutar
let contador = 5;
while (contador > 0) {
  console.log(contador);
  contador--;
}

// Do-while: ejecuta al menos una vez
let numero = 0;
do {
  console.log("Se ejecuta al menos una vez");
} while (numero > 0);

// 3 y 4. forEach vs map
const numeros = [1, 2, 3, 4, 5];

// forEach: para efectos secundarios (no devuelve nada)
console.log("forEach:");
numeros.forEach(num => console.log(num * 2));

// map: para transformar datos (devuelve nuevo array)
const duplicados = numeros.map(num => num * 2);
console.log("map:", duplicados);

// 5. Ejemplos de cada tipo de bucle
// For tradicional
for (let i = 0; i < 3; i++) {
  console.log("For:", i);
}

// While
let i = 0;
while (i < 3) {
  console.log("While:", i);
  i++;
}

// Do-while
let j = 0;
do {
  console.log("Do-while:", j);
  j++;
} while (j < 3);`,
    descripcion: `
🔍 Conceptos clave de estructuras de control:

• Switch: Alternativa elegante a múltiples if-else
• While: Bucle que evalúa antes de ejecutar
• Do-while: Bucle que ejecuta al menos una vez
• forEach: Para iterar sin retornar valores
• map: Para transformar arrays
• Diferencias y casos de uso de cada estructura
    `,
  },
  {
    id: 3,
    codigo: `
// 1. Switch para días de la semana
function obtenerDia(numero) {
  switch (numero) {
    case 1: return "Lunes";
    case 2: return "Martes";
    case 3: return "Miércoles";
    case 4: return "Jueves";
    case 5: return "Viernes";
    case 6: return "Sábado";
    case 7: return "Domingo";
    default: return "Número inválido";
  }
}

// 2. Cuenta regresiva con while
function cuentaRegresiva() {
  let numero = 10;
  while (numero > 0) {
    console.log(numero);
    numero--;
  }
}

// 3. Suma con forEach
function sumarArray(numeros) {
  let suma = 0;
  numeros.forEach(numero => {
    suma += numero;
  });
  return suma;
}

// 4. Duplicar con map
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(numero => numero * 2);

// 5. Encontrar el mayor número
function encontrarMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}`,
    descripcion: `
🔍 Conceptos avanzados:

• Uso práctico de switch
• Bucles while para conteo
• forEach para iteración simple
• map para transformación de datos
• Combinación de estructuras de control
    `,
  },
];
