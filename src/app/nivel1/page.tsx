"use client";
import Header from "@/components/shared/Header/Header";
import { useState } from "react";

const ejercicios = [
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
const respuestas = [
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

export default function Page() {
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header nivel={1} titulo="Variables y Tipos Básicos" />
      <main className="max-w-6xl mx-auto min-h-screen p-6 flex flex-col gap-6 bg-white">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Aprende JavaScript
          </h1>
          <p className="text-gray-600">
            Ejercicios prácticos para dominar los fundamentos
          </p>
        </header>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 ">
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
          <p>Desarollado por: SebastianDevp</p>
        </footer>
      </main>
    </div>
  );
}
