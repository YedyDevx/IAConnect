import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative flex justify-center items-center w-full h-screen overflow-hidden">
			<Image
				src="/images/bg-hero.svg"
				alt="Img-bg"
				fill
				className="object-cover md:object-contain"
			/>
			<div className="absolute flex flex-col justify-center items-center text-center px-4">
				<h2 className="text-5xl md:text-6xl xl:text-7xl font-bold text-[#151515]">
					Transformamos
				</h2>
				<h2 className="text-5xl md:text-6xl xl:text-7xl font-bold text-[#151515]">
					tu negocio
				</h2>
				<div className="p-10 flex flex-col md:flex-row gap-6">
					<button className="w-60 h-10 rounded-lg text-white bg-[#151515] cursor-pointer transition-all duration-300 transform hover:bg-[#262626] hover:scale-105">
						Ver Planes
					</button>
					<button className="w-60 h-10 rounded-lg text-white text-center bg-[#4e47ff] cursor-pointer transition-all duration-300 transform hover:bg-[#3b38d5] hover:scale-105">
						Contactanos
					</button>
				</div>
			</div>
		</section>
	);
}
