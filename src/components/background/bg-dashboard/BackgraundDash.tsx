import Image from "next/image";

export default function BackgroundDash() {
	return (
		<div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden relative">
			<div className="bg-transparent shadow-[0px_0_450px_200px_rgba(128,128,128,0.9)]" />
			<div className="absolute top-32 left-44">
				<Image src="/images/start.svg" alt="Star" width={10} height={10} />
			</div>
			<div className="absolute top-60 left-96">
				<Image src="/images/start.svg" alt="Star" width={10} height={10} />
			</div>
			<div className="absolute top-1/6 left-3/4">
				<Image src="/images/start.svg" alt="Star" width={15} height={15} />
			</div>
			<div className="absolute bottom-1/6 left-1/7">
				<Image src="/images/start.svg" alt="Star" width={15} height={15} />
			</div>
			<div className="absolute bottom-1/7 left-2/3">
				<Image src="/images/start.svg" alt="Star" width={15} height={15} />
			</div>
			<div className="absolute top-10 left-1/4">
				<Image src="/images/start.svg" alt="Star" width={10} height={10} />
			</div>
			<div className="absolute top-1/3 right-10">
				<Image src="/images/start.svg" alt="Star" width={25} height={25} />
			</div>
			<div className="absolute bottom-20 right-1/5">
				<Image src="/images/start.svg" alt="Star" width={10} height={10} />
			</div>
		</div>
	)
}
