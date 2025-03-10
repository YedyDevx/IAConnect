import Image from "next/image"

export default function LoginSection() {
	return (
		<section className="flex flex-col gap-4 justify-center items-center px-6 md:w-[50%] text-center">
			<h5 className="text-white text-sm font-bold">
				Level Up Your Skills
			</h5>
			<h1 className="text-5xl text-white max-w-[480px]">
				Accede para poder ver el seguimiento de tu aprendizaje
			</h1>
			<p className="text-gray-300 text-sm font-light">
				Laboratorio Z es un equipo de desarrolladores en constante aprendizaje, donde creamos proyectos escalables y adquirimos experiencia real para la industria TI. Nuestro enfoque es la innovación, la colaboración y el crecimiento profesional, preparándonos para enfrentar los desafíos del mundo tecnológico.
			</p>
			<div className="flex gap-4">
				<button className="px-6 py-2 rounded-full border border-white text-white flex items-center gap-2 hover:bg-white/10 transition cursor-pointer">
					Ver Website
					<Image src="/images/mdi_wand.svg" alt="Arrow Right" width={20} height={20} />
				</button>
				<button className="relative px-6 py-2 rounded-full bg-white text-black hover:bg-transparent hover:border hover:border-white   hover:text-white transition-all flex items-center justify-center w-48 group overflow-hidden cursor-pointer ">
					<span className="relative transition-all group-hover:-translate-x-3">
						Crea una cuenta
					</span>
					<span className="absolute right-0 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300 mt-1">
						<Image src="/images/arrow.svg" alt="Arrow Right" width={15} height={15} />
					</span>
				</button>
			</div>
		</section>
	)
}
