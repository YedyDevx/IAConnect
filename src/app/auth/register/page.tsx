"use client";
import BackgroundAuth from "@/components/background/bg-auth";
import Register from "@/components/auth/register";

export default function RegisterPage() {
	return (
		<main className="relative h-screen flex items-center justify-center">
			<BackgroundAuth />
			<Register/>
		</main>
	);
}
