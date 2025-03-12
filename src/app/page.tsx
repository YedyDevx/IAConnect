"use client";
import Header from "@/components/shared/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header titulo="Laboratorio de codigo" />
      <main id="home" className="relative">
        {/* Fondo con overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-16 space-y-6">
            <h5 className="text-blue-400 text-sm font-medium tracking-wider uppercase">
              Laboratorio de Código Z
            </h5>
            <h1 className="text-6xl font-bold text-white mb-4 bg-clip-text  bg-gradient-to-r from-white to-gray-300">
              Aprende JavaScript
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Una guía interactiva para dominar los fundamentos de JavaScript
              a través de ejercicios prácticos y ejemplos reales.
            </p>
            {/* <div className="flex items-center justify-center gap-4">
              <a
                href="https://playcode.io/javascript"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-2 group"
              >
                Comenzar ahora
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/tu-usuario/tu-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Ver en GitHub
              </a>
            </div> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Nivel 1 Card */}
            <Link href="/nivel1" className="group">
              <div className="h-[280px] bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 p-6 border border-gray-800 group-hover:border-blue-500/50 flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-3 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                      Nivel 1
                    </span>
                    <h3 className="text-lg font-medium text-white">Fundamentos</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-4 flex-grow">
                  Variables, tipos de datos y operaciones básicas en JavaScript.
                </p>

                <div className="mt-auto pt-4 flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  Comenzar
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Nivel 2 Card */}
            <Link href="/nivel2" className="group">
              <div className="h-[280px] bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-green-500/20 transition-all duration-300 p-6 border border-gray-800 group-hover:border-green-500/50 flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-3 shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-green-400 tracking-wider uppercase">
                      Nivel 2
                    </span>
                    <h3 className="text-lg font-medium text-white">Operaciones Matemáticas</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-4 flex-grow">
                  Operaciones matemáticas y manipulación de datos en JavaScript.
                </p>

                <div className="mt-auto pt-4 flex items-center text-green-400 font-medium group-hover:text-green-300 transition-colors">
                  Explorar
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Nivel 3 Card */}
            <Link href="/nivel3" className="group">
              <div className="h-[280px] bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 p-6 border border-gray-800 group-hover:border-purple-500/50 flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-3 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">
                      Nivel 3
                    </span>
                    <h3 className="text-lg font-medium text-white">Estructuras de Control</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-4 flex-grow">
                  Trabajando con estructuras de control y ciclos en JavaScript.
                </p>

                <div className="mt-auto pt-4 flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                  Descubrir
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Nivel 4 Card */}
            <Link href="/nivel4" className="group">
              <div className="h-[280px] bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 p-6 border border-gray-800 group-hover:border-yellow-500/50 flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg p-3 shadow-lg group-hover:shadow-yellow-500/50 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-yellow-400 tracking-wider uppercase">
                      Nivel 4
                    </span>
                    <h3 className="text-lg font-medium text-white">Funciones y Scope</h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-4 flex-grow">
                  Trabajando con funciones y scope.
                </p>

                <div className="mt-auto pt-4 flex items-center text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors">
                  Descubrir
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Sección de características */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="bg-blue-500/10 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ejercicios Prácticos</h3>
              <p className="text-gray-400 text-sm">Aprende haciendo con ejercicios interactivos y ejemplos del mundo real.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="bg-green-500/10 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Aprendizaje Progresivo</h3>
              <p className="text-gray-400 text-sm">Avanza a tu propio ritmo con contenido estructurado por niveles.</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="bg-purple-500/10 p-3 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Soluciones Detalladas</h3>
              <p className="text-gray-400 text-sm">Accede a explicaciones paso a paso y mejores prácticas.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
