"use client";
import Link from "next/link";

interface HeaderProps {
  nivel?: number;
  titulo?: string;
}

export default function Header({ nivel, titulo }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 ">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-700 flex items-center gap-2 font-medium"
            >
              <svg
                className="w-6 h-6"
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
              <span>Inicio</span>
            </Link>
            {nivel && (
              <>
                <span className="text-gray-400">/</span>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Nivel {nivel}
                  </span>
                </div>
              </>
            )}
          </div>
          
          {titulo && (
            <h1 className="text-xl font-semibold text-gray-800">{titulo}</h1>
          )}
          
          <div className="flex items-center gap-4">
            <a
              href="https://playcode.io/javascript"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              Abrir Editor
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}