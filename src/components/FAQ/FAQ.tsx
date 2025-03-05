"use client";
import { GoPlus, GoDash } from "react-icons/go";
import { useState } from "react";
import Image from "next/image";
import faqs from "./faqs";

export default function FAQs() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="w-full flex  h-[600px] flex-col md:flex-row items-center">
			<div className="relative w-full md:w-[500px] flex justify-center">
				<div className="absolute top-10 md:top-32 lg:top-52  sm:left-14 lg:left-32 xl:left-44  z-10  md:text-left  flex md:block gap-2 mf:gap-0">
					<h2 className="text-3xl md:text-5xl font-bold text-[#151515]">
						Preguntas
					</h2>
					<h2 className="text-3xl md:text-5xl font-bold text-[#151515]">
						Frecuentes
					</h2>
				</div>
				<Image
					src="/images/faqs.png"
					alt="Img-FAQs"
					width={800}
					height={800}
					className="rounded-lg w-[400px] md:w-[600px] -left-28  sm:-left-36 relative md:static mt-20 md:mt-0"
				/>
			</div>
			<div className="w-full md:w-[750px] mt-32 md:mt-0 md:ml-10 absolute md:static px-5">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="mb-4 md:mb-8 border border-gray-100 rounded-lg shadow-md"
					>
						<button
							className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-200 transition duration-300 rounded-lg cursor-pointer"
							onClick={() => toggleAccordion(index)}
						>
							<span className="font-semibold text-lg text-start">
								{faq.question}
							</span>
							{openIndex === index ? (
								<GoDash className="text-gray-950 transition-transform duration-300 text-2xl" />
							) : (
								<GoPlus className="text-gray-950 transition-transform duration-300 text-2xl" />
							)}
						</button>
						{openIndex === index && (
							<div className="p-5 text-gray-700 border-t border-gray-300">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
