import { ReactNode } from "react";
import NavbarAdmin from "@/components/shared/dashboard/admin/DashboardNavbar";
import DashboardHeader from "@/components/shared/dashboard/admin/DashboardHeader";
import DashboardAside from "@/components/shared/dashboard/admin/DashboardAside";
import DashboardName from "@/components/shared/dashboard/admin/DashboardName";
import BackgroundDash from "@/components/background/bg-dashboard";

interface DashboardLayoutProps {
	children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<body className="relative flex h-screen w-full justify-center items-center p-5">
			<div className="absolute inset-0 -z-10">
				<BackgroundDash />
			</div>
			<section className="w-full h-full bg-[#2c2c2cbb] flex p-5 rounded-2xl flex-col gap-5 relative z-10">
				<DashboardName />
				<div className="w-full h-full flex gap-5">
					<NavbarAdmin />
					<div className="flex-1">
						<DashboardHeader titulo="Seguimiento de Aprendices" />
						<main className="mt-4 bg-[#101010] p-4 rounded-lg text-white">
							{children}
						</main>
					</div>
					<DashboardAside />
				</div>
			</section>
		</body>
	);
}
