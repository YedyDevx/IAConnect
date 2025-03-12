"use client";
import Header from "@/components/shared/Header/Header";
import { useState } from "react";
import { ejercicios, respuestas } from "./usePage";

export default function Page() {
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header nivel={4} titulo="Funciones y Scope" />
      <main className="max-w-6xl mx-auto min-h-screen p-6 flex flex-col gap-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Aprende JavaScript
          </h1>
          <p className="text-gray-400">
            Ejercicios prácticos para dominar los fundamentos
          </p>
        </header>

        <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-500/20 backdrop-blur-sm">
          <p className="text-yellow-200 flex items-center gap-2">
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
            resueltos en tu editor de código.
          </p>
        </div>

        <div className="w-full flex flex-row gap-4">
          {/* Panel lateral mejorado */}
          <div className="w-[250px] flex-shrink-0 space-y-4">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 rounded-xl border border-blue-400/30 shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-lg"></div>
                <div className="relative">
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
                    <h3 className="text-xl font-bold text-white">Editor Online</h3>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed mb-4">
                    Usa PlayCode para practicar JavaScript sin instalar nada.
                  </p>
                  <a
                    href="https://playcode.io/javascript"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <span>Comenzar ahora</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

           {/* Progreso del nivel */}
           <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Progreso</h3>
                <span className="text-sm text-blue-400">
                  {ejercicioActual + 1}/{ejercicios.length}
                </span>
              </div>
              
              {/* Barra de progreso */}
              <div className="w-full h-2 bg-gray-700 rounded-full mb-6 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${((ejercicioActual + 1) / ejercicios.length) * 100}%` }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                {ejercicios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setEjercicioActual(index);
                      setMostrarRespuesta(false);
                    }}
                    className={`relative group ${
                      index === ejercicioActual
                        ? "bg-gradient-to-r from-blue-500 to-blue-600"
                        : "bg-gray-700/50 hover:bg-gray-700"
                    } rounded-lg transition-all duration-300`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                    <div className="relative p-3 flex flex-col items-center">
                      <span className={`text-sm font-medium ${
                        index === ejercicioActual ? "text-white" : "text-gray-300"
                      }`}>
                        {index + 1}
                      </span>
                      {index <= ejercicioActual && (
                        <div className="absolute -top-1 -right-1">
                          <span className="flex h-3 w-3">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                              index === ejercicioActual ? "bg-blue-400" : "bg-green-400"
                            } opacity-75`}></span>
                            <span className={`relative inline-flex rounded-full h-3 w-3 ${
                              index === ejercicioActual ? "bg-blue-500" : "bg-green-500"
                            }`}></span>
                          </span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="space-y-6 w-full">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Ejercicio {ejercicios[ejercicioActual].id}:{" "}
                {ejercicios[ejercicioActual].titulo}
              </h2>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <h3 className="font-medium mb-4 text-lg text-gray-200">
                  Instrucciones:
                </h3>
                <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-800/50 text-gray-300 p-4 rounded-lg border border-gray-700 overflow-auto">
                  {ejercicios[ejercicioActual].instrucciones}
                </pre>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setMostrarRespuesta(!mostrarRespuesta)}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 w-full mb-4 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  {mostrarRespuesta ? "Ocultar Respuesta" : "Ver Respuesta"}
                </button>

                {mostrarRespuesta && (
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                    <h3 className="font-medium mb-4 text-lg text-gray-200">
                      Solución Ejemplo:
                    </h3>
                    <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-800/50 text-gray-300 p-4 rounded-lg border border-gray-700 overflow-auto">
                      {respuestas[ejercicioActual].codigo}
                    </pre>
                    <div className="mt-4 bg-blue-900/30 p-4 rounded-lg border border-blue-500/20">
                      <pre className="whitespace-pre-wrap text-sm text-blue-200">
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
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Anterior
                </button>

                <button
                  onClick={() => {
                    setEjercicioActual((prev) =>
                      prev < ejercicios.length - 1 ? prev + 1 : prev
                    );
                    setMostrarRespuesta(false);
                  }}
                  disabled={ejercicioActual === ejercicios.length - 1}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  Siguiente
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
