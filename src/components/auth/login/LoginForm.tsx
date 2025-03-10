import Link from "next/link"

export default function LoginForm() {
	return (
		<section className="bg-[#10101085] flex flex-col justify-center items-center w-[450px] py-10 rounded-2xl">
			<div className="w-80 flex flex-col gap-2">
				<h2 className="text-3xl font-light text-white text-center mb-2">
					Accede a tu cuenta
				</h2>
				<p className="text-gray-400 text-sm text-center">
					Sigue aprendiendo con Laboratorio de CodigoZ
				</p>

				<form className="space-y-4 mt-4">
					<div className="relative">
						<input
							type="email"
							placeholder="Correo electrónico"
							className="w-full px-4 py-3 rounded-lg bg-[#101010] text-white border border-gray-600 focus:border-blue-500 focus:outline-none pl-10"
						/>
						<svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</div>

					<div className="relative">
						<input
							type="password"
							placeholder="••••••••"
							className="w-full px-4 py-3 rounded-lg bg-[#101010] text-white border border-gray-600 focus:border-blue-500 focus:outline-none pl-10"
						/>
						<svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
						</svg>
					</div>

					<div className="text-right">
						<a href="#" className="text-gray-400 text-sm hover:text-gray-300">
							¿Olvidaste tu contraseña?
						</a>
					</div>

					<button type="submit" className="w-full py-3 rounded-lg bg-[#4461F2] hover:bg-[#5044f2db] hover:font-medium hover:shadow-lg hover:shadow-[#4461f23c]  text-white cursor-pointer transition ">
						Iniciar sesión
					</button>

					<div className="text-center">
						<p className="text-gray-400 text-sm">
							¿No tienes cuenta?{" "}
							<Link href="/auth/register" className="text-[#4461F2] hover:text-[#7790ff]">
							 Regístrate aquí
							</Link>
						</p>
					</div>
				</form>
			</div>
		</section>
	)

}
