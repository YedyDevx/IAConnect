import Header from "@/components/shared/Header/Header";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header nivel={3} titulo="Condicionales y Bucles" />
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

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">
            Pagina en mantenimiento
          </h2>
          <p className="text-gray-700">
            Estamos trabajando en esta pagina para que puedas aprender
            JavaScript, en breve estará disponible.
          </p>
        </div>

        <footer className="text-center flex justify-center w-full text-gray-600 mt-8 pb-6">
          <p>Desarollado por: SebastianDevp</p>
        </footer>
      </main>
    </div>
  );
}
