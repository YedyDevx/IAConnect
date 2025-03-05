'use client'
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import FAQ from "@/components/FAQ"
import Contact from "@/components/contact"

export default function Home() {
	return (
		<main className="w-full xl-w-[1200x] mx-auto ">
				<Hero />
				<Benefits />
				<FAQ/>
				<Contact/>
		</main>
	);
}
