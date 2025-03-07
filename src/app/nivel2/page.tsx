"use client";
import Header from "@/components/shared/Header/Header";
import { useState } from "react";

const ejercicios = [
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

const respuestas = [
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

export default function Page() {
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header nivel={2} titulo="Operaciones Básicas" />
      <main className="max-w-6xl mx-auto min-h-screen p-6 flex flex-col gap-6 bg-white">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Aprende JavaScript
          </h1>
          <p className="text-gray-600">
            Ejercicios prácticos para dominar los fundamentos
          </p>
        </header>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-yellow-800 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <strong>Nota:</strong> Estos ejercicios están diseñados para ser
            resueltos en tu editor de código. Copia las instrucciones y
            desarrolla la solución en tu entorno de desarrollo preferido.
          </p>
        </div>

        <div className="w-full flex flex-row gap-4">
          {/* CTA mejorado para PlayCode */}
          <div className="w-[250px] flex-shrink-0">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 rounded-xl border border-blue-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* Efecto de brillo en el fondo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>

              <div className="flex flex-col gap-6 relative">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <h3 className="text-xl font-bold">¿No tienes un editor?</h3>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Usa PlayCode, un editor en línea gratuito perfecto para
                    practicar JavaScript. No necesitas instalar nada.
                  </p>
                </div>

                <a
                  href="https://playcode.io/javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-blue-50 text-blue-600 px-4 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Comenzar ahora</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6 w-full">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-4">
                Ejercicio {ejercicios[ejercicioActual].id}:{" "}
                {ejercicios[ejercicioActual].titulo}
              </h2>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-4 text-lg">Instrucciones:</h3>
                <pre className="whitespace-pre-wrap font-mono text-sm bg-white p-4 rounded border border-gray-300 overflow-auto">
                  {ejercicios[ejercicioActual].instrucciones}
                </pre>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setMostrarRespuesta(!mostrarRespuesta)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full mb-4"
                >
                  {mostrarRespuesta ? "Ocultar Respuesta" : "Ver Respuesta"}
                </button>

                {mostrarRespuesta && (
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="font-medium mb-4 text-lg">
                      Solución Ejemplo:
                    </h3>
                    <pre className="whitespace-pre-wrap font-mono text-sm bg-white p-4 rounded border border-gray-300 overflow-auto">
                      {respuestas[ejercicioActual].codigo}
                    </pre>
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <pre className="whitespace-pre-wrap text-sm text-blue-800">
                        {respuestas[ejercicioActual].descripcion}
                      </pre>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => {
                    setEjercicioActual((prev) => (prev > 0 ? prev - 1 : prev));
                    setMostrarRespuesta(false);
                  }}
                  disabled={ejercicioActual === 0}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Ejercicio Anterior
                </button>

                <button
                  onClick={() => {
                    setEjercicioActual((prev) =>
                      prev < ejercicios.length - 1 ? prev + 1 : prev
                    );
                    setMostrarRespuesta(false);
                  }}
                  disabled={ejercicioActual === ejercicios.length - 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente Ejercicio →
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center flex justify-center w-full text-gray-600 mt-8 pb-6">
          <p>Desarollado por: SebastianDevp & </p>
        </footer>
      </main>
    </div>
  );
}
