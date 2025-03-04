import Image from "next/image";
import itemBenefits from "./itemBenefits";

export default function Benefits() {
	return (
		<section className="w-full  flex flex-col">
			<h2 className="text-5xl font-semibold">Beneficios</h2>
			<div className="flex flex-wrap justify-center gap-6 px-6 w-full my-10">
				{itemBenefits.map((item) =>
					item.image ? (
						<div
							key={item.id}
							className="flex flex-row items-center w-full md:w-[650px] p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
						>
							<div className="flex flex-col justify-between w-full">
								<item.icon className="text-blue-600 text-5xl mb-4" />
								<h3 className="text-xl font-semibold">{item.title}</h3>
								<p className="text-gray-600">{item.description}</p>
							</div>
								<Image
									src={item.image}
									alt={item.title}
									width={300}
									height={150}
									className="rounded-lg mt-2"
								/>
						</div>
					) : (
						<div
							key={item.id}
							className="flex flex-col w-80 h-64 p-6 rounded-xl shadow-md bg-white justify-between hover:shadow-xl transition"
						>
							<item.icon className="text-blue-600 text-5xl mb-4" />
							<h3 className="text-xl font-semibold">{item.title}</h3>
							<p className="text-gray-600">{item.description}</p>
						</div>
					)
				)}
			</div>
		</section>
	);
}
