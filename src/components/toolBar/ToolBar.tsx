import { NavLink } from "react-router-dom";

const ToolBar = () => {
  return (
    <header className="w-[80%] mx-auto py-5 flex justify-between items-center">
      <NavLink to={"/"}>
        <p className="text-3xl font-semibold">WEBIX</p>
      </NavLink>
      <nav className="text-[20px] flex justify-between w-[60%] hover:text-gray-500">
        <NavLink to={"/"}>
          <p>Финансы</p>
        </NavLink>
        <NavLink to={"/"}>
          <p>Утилиты</p>
        </NavLink>
        <NavLink to={"/"}>
          <p>Здоровье</p>
        </NavLink>
        <NavLink to={"/"}>
          <p>Игры</p>
        </NavLink>
        <NavLink to={"/"}>
          <p>Социальные сети</p>
        </NavLink>
        <NavLink to={"/"}>
          <p>Путешествия</p>
        </NavLink>
      </nav>
      <div className="w-[19%] flex justify-between items-center text-[20px]">
        <NavLink to={"/"}>
          <p>О нас</p>
        </NavLink>
        <div className="bg-gray-100 p-3 text-[17px]">
          <p>7 (701) 234 56 78</p>
        </div>
      </div>
    </header>
  );
};

export default ToolBar;
