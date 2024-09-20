import { NavLink } from "react-router-dom";

const ToolBar = () => {
  return (
    <header className="w-[90%] mx-auto py-5 flex justify-between items-center border-b border-gray-300 mb-7">
      <NavLink to={"/"} className="hover:text-gray-500 transition-colors duration-300">
        <p className="text-2xl desktop:text-3xl desktop2:text-4xl font-semibold">WEBIX</p>
      </NavLink>
      <nav className="desktop:text-lg desktop2:text-2xl flex justify-between w-[60%]">
        <NavLink to={"/"} className="hover:text-gray-500 transition-colors duration-300">
          <p>Финансы</p>
        </NavLink>
        <NavLink to={"/"} className="hover:text-gray-500 transition-colors duration-300">
          <p>Утилиты</p>
        </NavLink>
        <NavLink to={"/"} className="hover:text-gray-500 transition-colors duration-300">
          <p>Здоровье</p>
        </NavLink>
        <NavLink to={"/"} className="hover:text-gray-500 transition-colors duration-300">
          <p>Игры</p>
        </NavLink>
        <NavLink to={"/"} className="hover:text-gray-500 transition-colors duration-300">
          <p>Социальные сети</p>
        </NavLink>
        <NavLink to={"/"} className="hover:text-gray-500 transition-colors duration-300">
          <p>Путешествия</p>
        </NavLink>
      </nav>
      <div className="flex items-center desktop:text-lg desktop2:text-2xl">
        <NavLink to={"/"} className="hover:text-gray-500 transition-colors duration-300">
          <p>О нас</p>
        </NavLink>
        <div className="bg-gray-100 p-3 ml-5 desktop:text-base desktop2:text-lg">
          <p>7 (701) 234 56 78</p>
        </div>
      </div>
    </header>
  );
};

export default ToolBar;
