import type { Metadata } from "next";
import Header from "../components/shared/Header"
import Footer from "@/components/shared/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "IAConnect",
	description: "Automatiza tus procesos con nuestro chatbots",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="font-sans antialiased" style={{ fontFamily: "Arial, sans-serif" }}>
				<Header/>
				{children}
				<Footer/>
			</body>
		</html>
	);
}
