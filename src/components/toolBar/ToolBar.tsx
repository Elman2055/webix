import { HiMiniBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import telegram from "../../../public/telegram.svg";
import instagram from "../../../public/instagram.svg";
import whatsapp from "../../../public/whatsapp.svg";

const ToolBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="w-[90%] mx-auto py-5 flex justify-between items-center border-b border-gray-300 mb-7 relative z-30">
        <NavLink
          to={"/"}
          className="mobile:hidden laptop:block hover:text-gray-500 transition-colors duration-300"
        >
          <p className="text-2xl desktop:text-3xl desktop2:text-4xl font-semibold">
            WEBIX
          </p>
        </NavLink>

        <div className="w-[60%] flex justify-between items-center laptop:hidden">
          <HiMiniBars3
            className="text-2xl cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <p className="text-3xl font-bold laptop:hidden">WEBIX</p>
        </div>

        <nav className="desktop:text-lg desktop2:text-2xl flex justify-between w-[60%] mobile:hidden laptop:flex">
          {["Финансы", "Утилиты", "Здоровье", "Игры", "Социальные сети", "Путешествия"].map((el: string) => (
            <NavLink key={el} to={`/categories/${el}`} className="hover:text-gray-500 transition-colors duration-300">
              <p>{el}</p>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center desktop:text-lg desktop2:text-2xl mobile:hidden laptop:flex">
          <NavLink
            to={"/"}
            className="hover:text-gray-500 transition-colors duration-300"
          >
            <p>О нас</p>
          </NavLink>
          <div className="bg-gray-100 p-3 ml-5 desktop:text-base desktop2:text-lg">
            <p>7 (701) 234 56 78</p>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 z-10 h-full w-full bg-white transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } laptop:hidden`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div className="w-[90%] mx-auto mt-20 flex flex-col">
          {["Финансы", "Утилиты", "Здоровье", "Игры", "Социальные сети", "Путешествия", "О нас"].map((el: string) => (
            <NavLink
              key={el}
              to={`/categories/${el}`}
              className="text-xl font-medium hover:text-gray-500 transition-colors duration-300 mb-3 border-b border-gray-300 py-2"
              onClick={() => setIsSidebarOpen(false)}
            >
              <p>{el}</p>
            </NavLink>
          ))}

        </div>
        <div className="absolute bottom-5 left-[5%] text-xl font-medium">
          <p>webix.office@gmail.com</p>
          <p className="mb-3">7 (725) 384-9106</p>
          <div className="flex gap-2">
            <img src={telegram} alt="telegram" className="cursor-pointer w-10"/>
            <img src={instagram} alt="instagram" className="cursor-pointer w-10"/>
            <img src={whatsapp} alt="whatsapp" className="cursor-pointer w-10"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolBar;
