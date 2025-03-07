export const ejercicios = [
  {
    id: 1,
    titulo: "Operadores Aritméticos y de Comparación",
    instrucciones: `
      Operadores en JavaScript:
  
      1. ¿Cómo usar los operadores aritméticos (+, -, *, /, %)?
      2. ¿Cómo incrementar y decrementar variables (++, --)?
      3. ¿Cómo usar operadores de comparación (>, <, >=, <=)?
      4. ¿Cómo verificar igualdad estricta (===) vs no estricta (==)?
      5. ¿Cómo usar el operador de desigualdad (!==)?
      `,
  },
  {
    id: 2,
    titulo: "Operadores Lógicos y Especiales",
    instrucciones: `
      Operadores avanzados en JavaScript:
  
      1. ¿Cómo usar los operadores AND (&&) y OR (||)?
      2. ¿Cómo usar el operador NOT (!)?
      3. ¿Cómo usar el operador ternario (condition ? true : false)?
      4. ¿Cómo usar el operador de encadenamiento opcional (?.)?
      5. ¿Cómo usar el operador de coalescencia nula (??)?
      `,
  },
  {
    id: 3,
    titulo: "Estructuras de Control",
    instrucciones: `
      Control de flujo en JavaScript:
  
      1. ¿Cómo usar if-else para tomar decisiones?
      2. ¿Cómo usar switch para múltiples casos?
      3. ¿Cómo usar el bucle for para iteraciones?
      4. ¿Cómo usar while y do-while?
      5. ¿Cómo iterar sobre arrays con forEach?
      `,
  },
];

export const respuestas = [
  {
    id: 1,
    codigo: `
  // 1. Operadores aritméticos
  let suma = 10 + 5;      // 15
  let resta = 10 - 5;     // 5
  let mult = 10 * 5;      // 50
  let div = 10 / 5;       // 2
  let modulo = 10 % 3;    // 1 (resto de la división)
  
  // 2. Incremento y decremento
  let contador = 1;
  contador++;             // 2
  contador--;             // 1
  
  // 3. Comparaciones
  let esMayor = 10 > 5;   // true
  let esMenor = 10 < 20;  // true
  let mayorIgual = 10 >= 10; // true
  let menorIgual = 5 <= 5;   // true
  
  // 4. Igualdad estricta vs no estricta
  console.log(5 === "5");  // false (diferentes tipos)
  console.log(5 == "5");   // true (conversión automática)
  
  // 5. Desigualdad
  console.log(5 !== "5");  // true
  console.log(5 != "5");   // false`,
    descripcion: `
  🔍 Conceptos utilizados:
  
  • Operadores aritméticos básicos: +, -, *, /, %
  • Operadores de incremento/decremento: ++, --
  • Operadores de comparación: >, <, >=, <=
  • Igualdad estricta (===) vs no estricta (==)
  • Desigualdad estricta (!==) vs no estricta (!=)
      `,
  },
  {
    id: 2,
    codigo: `
  // 1. Operadores AND y OR
  let edad = 25;
  let tienePermiso = true;
  let puedeAcceder = edad >= 18 && tienePermiso;  // true
  let esFinDeSemana = false;
  let esFeriado = true;
  let hayDescanso = esFinDeSemana || esFeriado;   // true
  
  // 2. Operador NOT
  let estaActivo = true;
  let estaInactivo = !estaActivo;  // false
  
  // 3. Operador ternario
  let edad2 = 20;
  let mensaje = edad2 >= 18 ? "Es adulto" : "Es menor";
  
  // 4. Encadenamiento opcional
  let usuario = {
    nombre: "Juan",
    direccion: null
  };
  let calle = usuario?.direccion?.calle;  // undefined
  
  // 5. Coalescencia nula
  let nombre = null;
  let nombrePorDefecto = nombre ?? "Anónimo";  // "Anónimo"`,
    descripcion: `
  🔍 Conceptos utilizados:
  
  • Operadores lógicos: && (AND), || (OR), ! (NOT)
  • Operador ternario: condition ? valorSiTrue : valorSiFalse
  • Encadenamiento opcional (?.) para evitar errores
  • Coalescencia nula (??) para valores por defecto
      `,
  },
  {
    id: 3,
    codigo: `
  // 1. if-else
  let edad = 18;
  if (edad >= 18) {
      console.log("Es mayor de edad");
  } else {
      console.log("Es menor de edad");
  }
  
  // 2. switch
  let dia = "Lunes";
  switch (dia) {
      case "Lunes":
          console.log("Inicio de semana");
          break;
      default:
          console.log("Otro día");
  }
  
  // 3. bucle for
  for (let i = 0; i < 5; i++) {
      console.log(i);  // 0,1,2,3,4
  }
  
  // 4. while y do-while
  let contador = 0;
  while (contador < 3) {
      console.log(contador++);
  }
  
  do {
      console.log("Se ejecuta al menos una vez");
  } while (false);
  
  // 5. forEach
  let frutas = ["manzana", "pera", "uva"];
  frutas.forEach(fruta => {
      console.log(fruta);
  });`,
    descripcion: `
  🔍 Conceptos utilizados:
  
  • Condicionales: if-else, switch
  • Bucles: for, while, do-while
  • Métodos de array: forEach
  • break para salir de switch/bucles
  • Funciones flecha en callbacks
      `,
  },
];
