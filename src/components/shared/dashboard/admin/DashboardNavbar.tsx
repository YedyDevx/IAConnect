'use client'

import { useState } from "react";
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2";
import { RiHome2Line, RiStackLine, RiCheckboxCircleLine, RiBarChart2Line, RiCalendarLine } from "react-icons/ri";

export default function NavbarAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  const icons = [
    { icon: <RiHome2Line />, label: "Inicio" },
    { icon: <RiStackLine />, label: "Avances " },
    { icon: <RiCheckboxCircleLine />, label: "Asistencia" },
    { icon: <RiBarChart2Line />, label: "Estadísticas" },
    { icon: <RiCalendarLine />, label: "Calendario" },
  ];

  return (
    <nav className="w-20">
      <div
        className={`fixed top-24 left-10 h-[500px] rounded-xl p-4 flex flex-col justify-between items-center z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? "w-64 bg-opacity-80 backdrop-blur-sm bg-[#101010]/60"
            : "w-20 bg-opacity-100 bg-[#101010]"
        } `}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex flex-col space-y-2 w-full">
          {icons.map((item, index) => (
            <div
              key={index}
              className="flex items-center rounded-md text-gray-300 transition duration-300 cursor-pointer hover:text-blue-700 hover:bg-[#20232d] p-2"
            >
              <div className="w-10 h-10 flex justify-center items-center text-3xl">
                {item.icon}
              </div>
              {isOpen && (
                <span className="ml-3 font-medium transition-opacity duration-300">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-6 flex items-center rounded-md text-gray-300 transition duration-300 cursor-pointer hover:text-blue-700 hover:bg-[#20232d] p-2 w-full"
        >
          <div className="w-10 h-10 flex justify-center items-center text-3xl">
            <HiOutlineArrowLeftOnRectangle />
          </div>
          {isOpen && (
            <span className="ml-3 font-medium transition-opacity duration-300">
              Salir
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
