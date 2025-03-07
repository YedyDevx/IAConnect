import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center h-screen">
      <Image
        src="/images/bg-hero.svg"
        alt="Img-bg"
        width={650}
        height={300}
        className="absolute"
      />
	  <div className="absolute flex flex-col justify-center items-center">
			<h2 className="text-6xl font-bold text-[#151515]">Transformamos</h2>
			<h2 className="text-6xl font-bold text-[#151515]">tu negocio</h2>
			<div className="p-10 flex gap-6">
				<button className="w-40 h-10 rounded-lg text-white bg-[#151515] cursor-pointer transition-all duration-300 transform hover:bg-[#262626] hover:scale-105 ">
					Ver Planes
				</button>
				<button className="w-40 h-10 rounded-lg text-white bg-[#4e47ff] cursor-pointer transition-all duration-300 transform hover:bg-[#3b38d5] hover:scale-105">
					Comprar
				</button>
			</div>
		</div>
    </section>
  );
}


