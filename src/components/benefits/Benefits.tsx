import Image from "next/image";
import itemBenefits from "./itemBenefits";

export default function Benefits() {
	return (
		<section className="w-full flex flex-col xl:px-24">
			<h2 className="text-4xl md:text-5xl ml-5 lg:ml-0  font-semibold">Beneficios</h2>
			<div className="flex flex-wrap justify-center gap-10 px-6 w-full my-10">
				{itemBenefits.map((item) =>
					item.image ? (
						<div
							key={item.id}
							className="flex flex-col md:flex-row items-center w-80  md:w-[670px] p-6  rounded-xl shadow-md hover:shadow-xl transition"
						>
							<div className="flex flex-col justify-between w-full gap-6">
								<div className="bg-gray-100 h-14 w-14 flex justify-center items-center rounded-xl shadow-md">
									<item.icon className="text-3xl text-gray-900" />
								</div>
								<h3 className="text-xl font-semibold text-center lg:text-left">{item.title}</h3>
								<p className="text-gray-600 text-center lg:text-left px-3">{item.description}</p>
							</div>
							<Image
								src={item.image}
								alt={item.title}
								width={250}
								height={150}
								className="rounded-lg mt-2"
							/>
						</div>
					) : (
						<div
							key={item.id}
							className="flex flex-col w-80 h-64 p-6 rounded-xl shadow-md bg-white justify-between hover:shadow-xl transition"
						>
							<div className="bg-gray-100 h-14 w-14 flex justify-center items-center rounded-xl shadow-md">
								<item.icon className="text-3xl text-gray-900" />
							</div>
							<h3 className="text-xl font-semibold">{item.title}</h3>
							<p className="text-gray-600 ">{item.description}</p>
						</div>
					)
				)}
			</div>
		</section>
	);
}
