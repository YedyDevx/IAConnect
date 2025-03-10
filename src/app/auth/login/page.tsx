"use client";
import BackgroundAuth from "@/components/background/bg-auth";
import Login from "@/components/auth/login";

export default function LoginPage() {
	return (
		<main className="relative h-screen flex items-center justify-center">
			<BackgroundAuth />
			<Login />
		</main>
	);
}
