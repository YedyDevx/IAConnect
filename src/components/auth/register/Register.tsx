import RegisterForm from "./RegisterForm"
import RegisterSection from "./RegisterSection"

export default function Register () {
	return (
		<section className="absolute z-10 flex h-screen w-full gap-8 justify-center items-center">
			<RegisterSection/>
			<RegisterForm/>
		</section>
	)
}
