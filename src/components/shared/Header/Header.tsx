"use client";
import Link from "next/link";

interface HeaderProps {
  nivel?: number;
  titulo?: string;
}

export default function Header({ nivel, titulo }: HeaderProps) {
  return (
    <header className="bg-gray-900/50 border-b border-gray-800 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium transition-colors group"
            >
              <div className="bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <span>Inicio</span>
            </Link>
            {nivel && (
              <>
                <span className="text-gray-600">/</span>
                <div className="flex items-center">
                  <span className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium border border-blue-500/20">
                    Nivel {nivel}
                  </span>
                </div>
              </>
            )}
          </div>
          
          {titulo && (
            <h1 className="text-xl font-semibold text-white bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-2 rounded-full border border-gray-800">
              {titulo}
            </h1>
          )}
          
          <div className="flex items-center gap-4">
            <a
              href="https://playcode.io/javascript"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
            >
              <div className="bg-blue-500/20 p-1 rounded mr-2 group-hover:bg-blue-500/30 transition-colors">
                <svg
                  className="w-4 h-4"
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
              Abrir Editor
              <svg 
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}