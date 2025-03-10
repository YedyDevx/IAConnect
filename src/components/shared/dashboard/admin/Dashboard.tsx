import NavbarAdmin from "./navbar/NavbarAdmin";
import DashboardHeader from "./DashboardHeader";
import DashboardAside from "./DashboardAside";
import DashboardName from "./DashboardName";

export default function Dashboard() {
	return (
		<main className="absolute z-10 flex h-screen w-full  justify-center items-center p-5">
			<section className="w-full h-full bg-[#2c2c2cbb] flex p-5 rounded-2xl flex-col gap-5">
			<DashboardName/>
			<div className="w-full h-full flex gap-5">
				<NavbarAdmin/>
				<div className="flex-1 ">
					<DashboardHeader titulo="Seguimiento de Aprendicez"/>
					<div className="mt-4 bg-[#101010] p-4 rounded-lg text-white">
					</div>
				</div>
				<DashboardAside/>
				</div>
			</section>
		</main>
	)
}
