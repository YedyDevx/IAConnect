"use client";

import Image from "next/image";

export default function Login() {
  return (
    <>
      <div
        id="login"
        className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-black to-gray-900"
      >
        {/* Hero */}
        <div className="flex flex-col gap-4 justify-center items-center px-8 md:w-1/2">
          <div className="flex flex-col items-center">
            <h5 className="text-white text-2sm font-light">
              Level Up Your Skills
            </h5>
            <h1 className="text-5xl font-light text-white text-center max-w-[520px]">
              Accede para poder ver el seguimiento de tu aprendizaje
            </h1>
          </div>
          <p className="text-gray-400 text-center max-w-[686px] text-2sm font-light ">
            Laboratorio Z es un equipo de desarrolladores en constante
            aprendizaje, donde creamos proyectos escalables y adquirimos
            experiencia real para la industria TI. Nuestro enfoque es la
            innovación, la colaboración y el crecimiento profesional,
            preparándonos para enfrentar los desafíos del mundo tecnológico.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="px-6 py-2 rounded-full border border-white text-white cursor-pointer  flex items-center gap-2"
            >
              Ver Website
              <Image
                src="/images/mdi_wand.svg"
                alt="Arrow Right"
                width={20}
                height={20}
                className="select-none"
              />
            </button>
            <button
              type="button"
              className="px-6 py-2 rounded-full bg-white cursor-pointer text-black hover:bg-gray-100 transition"
            >
              Crea una cuenta
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center items-center px-8 md:w-1/2">
          <div className="w-full max-w-md">
            <div className="bg-[#101010] backdrop-blur-sm bg-opacity-90 rounded-2xl p-8 relative">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-light text-white mb-2">
                  Accede a tu cuenta
                </h2>
                <p className="text-gray-400 text-sm">
                  Sigue aprendiendo con el Laboratorio de CodigoZ
                </p>
              </div>

              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3 rounded-lg bg-[#101010] text-white border border-gray-800 focus:border-blue-500 focus:outline-none pl-10"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-3 top-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg bg-[#101010] text-white border border-gray-800 focus:border-blue-500 focus:outline-none pl-10"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-3 top-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>

                <div className="text-right">
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-gray-300"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#4461F2] text-white font-medium hover:bg-[#4461F2]/90 transition"
                >
                  Iniciar sesión
                </button>

                <div className="text-center">
                  <p className="text-gray-400 text-sm">
                    ¿No tienes cuenta?{" "}
                    <a
                      href="#"
                      className="text-[#4461F2] hover:text-[#4461F2]/90"
                    >
                      Regístrate aquí
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
