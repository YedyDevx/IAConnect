"use client";
import Link from "next/link";
import Image from "next/image";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { useHeader } from "./useHeader";

export default function Header() {
  const { isMenuOpen, toggleMenu } = useHeader();

  return (
    <header className="w-full bg-slate-500 p-4">
      <nav className="bg-slate-200 max-w-[1300px] mx-auto p-2 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-[18px] font-bold flex flex-row gap-1 items-center"
        >
          <Image src="/images/logo.svg" alt="logo" width={28} height={28} />
          IAConnect
        </Link>
        {/* Menu */}
        <div className="gap-4 hidden md:flex">
          <div className="text-sm">Inicio</div>
          <div className="text-sm">Beneficios</div>
          <div className="text-sm">Planes</div>
          <div className="text-sm">FAQ</div>
        </div>
        {/* Menu Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <IoClose className="text-3xl" />
            
          ) : (
            <IoMenuOutline className="text-3xl" />
          )}
        </div>
      </nav>
    </header>
  );
}
