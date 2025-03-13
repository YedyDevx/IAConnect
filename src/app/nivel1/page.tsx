"use client";
import Header from "@/components/shared/Header/Header";
import { useState } from "react";
import { ejercicios, respuestas } from "./usePage";

export default function Page() {
  const [ejercicioActual, setEjercicioActual] = useState(0);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header nivel={1} titulo="Variables y Tipos Básicos" />
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
          {/* Panel lateral con proporciones ajustadas */}
          <div className="w-[280px] flex-shrink-0">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              {/* Encabezado más compacto */}
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-500/20 p-2 rounded-lg">
                  <svg 
                    className="w-5 h-5 text-blue-400" 
                      fill="none"
                    stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                      />
                    </svg>
                  </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Nivel 1</h3>
                  <p className="text-sm text-gray-400">
                    {ejercicioActual + 1} de {ejercicios.length} ejercicios
                  </p>
                </div>
                </div>

              {/* Porcentaje circular más pequeño */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <svg className="w-24 h-24 transform -rotate-90">
                    <circle
                      className="text-gray-700"
                      strokeWidth="6"
                      stroke="currentColor"
                      fill="transparent"
                      r="42"
                      cx="48"
                      cy="48"
                    />
                    <circle
                      className="text-blue-500"
                      strokeWidth="6"
                      strokeDasharray={42 * 2 * Math.PI}
                      strokeDashoffset={42 * 2 * Math.PI * (1 - ((ejercicioActual + 1) / ejercicios.length))}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="42"
                      cx="48"
                      cy="48"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <span className="text-2xl font-bold text-white">
                      {Math.round(((ejercicioActual + 1) / ejercicios.length) * 100)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Grid de ejercicios más compacto */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {ejercicios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setEjercicioActual(index);
                      setMostrarRespuesta(false);
                    }}
                    className={`
                      aspect-square rounded-lg transition-all duration-300 relative
                      ${index === ejercicioActual 
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm shadow-blue-500/25' 
                        : index < ejercicioActual
                          ? 'bg-gradient-to-br from-green-500 to-green-600'
                          : 'bg-gray-700/50'
                      }
                      ${index > ejercicioActual ? 'hover:bg-gray-700' : ''}
                    `}
                  >
                    <span className={`text-sm font-medium ${
                      index <= ejercicioActual ? 'text-white' : 'text-gray-400'
                    }`}>
                      {index + 1}
                    </span>
                    {index < ejercicioActual && (
                      <svg className="w-3 h-3 text-white absolute bottom-1 right-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>

              {/* Leyenda más compacta */}
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-500 to-green-600"></div>
                  <span className="text-gray-400">Completado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600"></div>
                  <span className="text-gray-400">Actual</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                  <span className="text-gray-400">Pendiente</span>
                </div>
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
