"use client";
import Link from "next/link";
import Image from "next/image";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { useHeader } from "./useHeader";
import { BiCopyright } from "react-icons/bi";

export default function Header() {
  const { isMenuOpen, toggleMenu } = useHeader();

  return (
    <header className="w-full p-4">
      <nav className="max-w-[1300px] mx-auto p-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[19px] font-bold flex flex-row gap-1 items-center">
          <Image src="/images/logo.svg" alt="logo" width={28} height={28} />
          IAConnect
        </div>
        {/* Menu */}
        <div className="gap-10 bg-[#fbfcff] rounded-lg px-14 py-4 hidden md:flex">
          <div className="text-sm font-semibold cursor-pointer">Inicio</div>
          <div className="text-sm text-gray-400 cursor-pointer hover:text-[#4e47ff] transition-all duration-300">
            Beneficios
          </div>
          <div className="text-sm text-gray-400 cursor-pointer hover:text-[#4e47ff] transition-all duration-300">
            Planes
          </div>
          <div className="text-sm text-gray-400 cursor-pointer hover:text-[#4e47ff] transition-all duration-300">
            FAQ
          </div>
        </div>

        <button
          type="button"
          className="w-[153px] hidden md:block bg-[#4e47ff] text-white cursor-pointer hover:bg-[#4942f2] transition-all duration-300 py-2 rounded-lg"
        >
          Contactanos
        </button>

        {/* Menu Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {!isMenuOpen && <IoMenuOutline className="text-3xl cursor-pointer" />}
          {isMenuOpen && <IoClose className="text-3xl cursor-pointer" />}
        </div>

        <div
          className={`fixed transition-all duration-500 inset-0 bg-gray-800 ${
            isMenuOpen ? "opacity-25 z-40" : "opacity-0 -z-10"
          }`}
          onClick={toggleMenu}
        />
        {/* Menú lateral */}
        <div
          className={`fixed left-0 top-0 h-full w-1/2 flex flex-col justify-between bg-white p-4 shadow-lg transform transition-all duration-500 z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-8">
            <Link
              href="/"
              className="flex flex-row gap-2 items-center text-lg font-bold"
            >
              <Image src="/images/logo.svg" alt="logo" width={28} height={28} />
              IAConnect
            </Link>

            <div className="flex flex-col text-lg text-gray-600 gap-4">
              <Link
                href="/"
                className="font-semibold cursor-pointer transition-all duration-300"
              >
                Inicio
              </Link>
              <Link
                href="/beneficios"
                className="hover:text-[#4e47ff] cursor-pointer transition-all duration-300"
              >
                Beneficios
              </Link>
              <Link
                href="/planes"
                className="hover:text-[#4e47ff] cursor-pointer transition-all duration-300"
              >
                Planes
              </Link>
              <Link
                href="/faq"
                className="hover:text-[#4e47ff] cursor-pointer transition-all duration-300"
              >
                FAQ
              </Link>
            </div>
            <button
              type="button"
              className="w-full bg-[#4e47ff] text-white cursor-pointer hover:bg-[#4942f2] transition-all duration-300 py-1.5 rounded-lg"
            >
              Contactanos
            </button>
          </div>
          <h1 className="flex flex-row gap-2 items-center justify-center text-gray-500">
            <BiCopyright />
            <span>2025 IAConnect</span>
          </h1>
        </div>
      </nav>
    </header>
  );
}
