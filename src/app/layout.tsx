import type { Metadata } from "next";
import "../styles/globals.css";
export const metadata: Metadata = {
  title: "Laboratorio de codigo",
  description: "Aprende a programar con nuestros ejercicios",
  icons: {
    icon: "/images/logoz.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans bg-white">{children}</body>
    </html>
  );
}
