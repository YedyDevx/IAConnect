'use client'
import LoginSection from "./LoginSection"
import LoginForm from "./LoginForm"

export default function Login () {
	return (
		<section id="login" className="absolute z-10 flex h-screen w-full gap-8 justify-center items-center">
			<LoginSection/>
			<LoginForm/>
		</section>
	)
}
