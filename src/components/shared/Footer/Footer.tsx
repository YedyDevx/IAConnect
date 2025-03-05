import Image from "next/image";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
  IoHeartOutline,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full max-w-[1300px] mx-auto flex flex-col gap-6 p-6 md:p-20 rounded-4xl bg-slate-500">
      {/* Logo */}
      <div className="text-[19px] font-bold flex flex-row gap-1 items-center justify-start select-none">
        <Image src="/images/logo.svg" alt="logo" width={28} height={28} />
        IAConnect
      </div>
      <div className="flex flex-col md:justify-between md:flex-row gap-4 mb-4">
        <p className="text-sm font-light text-gray-400 w-[280px] ">
          Ready to elevate your online presence? Contact us today to discuss
          your project and discover how we can bring your vision to life.
        </p>
        {/* Menu */}
        <div className="gap-6 flex flex-row md:flex-row items-end">
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
      </div>
      <div className="flex flex-col-reverse md:justify-between md:flex-row gap-4">
        <div className="flex flex-row gap-2 items-center">
          <IoHeartOutline className="text-gray-400" />
          <p className="text-sm text-gray-400">
            Hecho por YediDevx & SebastianDev
          </p>
        </div>
        {/* Social */}
        <div className="flex flex-row gap-4 pr-6">
          <IoLogoInstagram className="w-8 h-8 p-2 rounded-full text-gray-700 hover:scale-105 transition-all duration-300 text-xl bg-[#f5f8ff] cursor-pointer" />
          <IoLogoLinkedin className="w-8 h-8 p-2 rounded-full text-gray-700 hover:scale-105 transition-all duration-300 text-xl bg-[#f5f8ff] cursor-pointer" />
          <IoLogoGithub className="w-8 h-8 p-2 rounded-full text-gray-700 hover:scale-105 transition-all duration-300 text-xl bg-[#f5f8ff] cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
