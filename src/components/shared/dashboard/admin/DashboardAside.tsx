import { TbDeviceDesktopCode } from "react-icons/tb";
import Image from "next/image"

export default function DashboardAside() {
	return (
		<aside className="w-60 flex flex-col justify-center gap-3 ">
			<Image
				src="/images/logo.svg"
				alt="Logo"
				className="w-full rounded-lg"
				width={20}
				height={20}
			/>
			<div className="w-full h-60 bg-gradient-to-br from-gray-700 to-[#101010] rounded-2xl p-5 flex flex-col gap-4">
				<div className="flex gap-2  justify-center items-center">
					<TbDeviceDesktopCode className="text-3xl text-gray-200" />
					<h3 className="text-center text-gray-200 font-medium text-xl">No tienes editor?</h3>
				</div>
					<p className="text-gray-200">Usa PlayCode, un editor en línea gratuito perfecto para practicar JavaScript. No necesitas instalar nada.</p>
				<button className="relative px-6 py-2 rounded-full bg-white text-black hover:bg-transparent hover:border hover:border-gray-200   hover:text-gray-200 transition-all flex items-center justify-center w-48 group overflow-hidden cursor-pointer ">
					<span className="relative transition-all group-hover:-translate-x-3">
						Comenzar ahora
					</span>
					<span className="absolute right-0 opacity-0 group-hover:opacity-100 group-hover:right-6 transition-all duration-300 mt-1">
						<Image src="/images/arrow.svg" alt="Arrow Right" width={15} height={15} />
					</span>
				</button>
			</div>
		</aside>
	)
}
