import footerBg from "../../../public/FooterBg.png";
import telegram from "../../../public/telegram.svg";
import instagram from "../../../public/instagram.svg";
import whatsapp from "../../../public/whatsapp.svg";
import { IoMdCheckmark } from "react-icons/io";
import { ChangeEvent, useState } from "react";

const Footer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    tel: "",
    email: "",
    commit: "",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const getInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      userInfo.name.trim() !== "" &&
      userInfo.tel.trim() !== "" &&
      userInfo.email.trim() !== "" &&
      isChecked
    );
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="w-full flex justify-between pb-5 laptop:border-b border-b-gray-300 my-10">
        <div className="mobile:w-[500px] mobile:max-w-full mx-auto laptop:m-0 laptop:w-[40%] flex flex-col justify-between border-b border-gray-300 pb-10 laptop:border-none laptop:p-0">
          <p className="text-2xl font-medium mb-3 desktop2:text-4xl">
            Ваши мысли, наш ответ
          </p>
          <p className="mb-3 desktop2:text-2xl">
            Ваше мнение важно для нас! Оставьте вопросы или предложения, и мы
            свяжемся с вами как можно скорее, чтобы помочь вам
          </p>
          {(["name", "tel", "email", "commit"]  as Array<keyof typeof userInfo>).map((el) => (
            <input
              key={el}
              type={el === "tel" ? "tel" : el === "email" ? "email" : "text"}
              placeholder= {el === "name" ? "*ФИО" : el === "tel" ? "*Телефон" : el === "email" ? "*Email" : "Комментарий"}
              name={el}
              className={`bg-gray-100 outline-none p-[2%] mt-2 desktop2:placeholder:text-2xl desktop2:text-2xl ${el === 'commit' ? 'pb-20' : ''}`}
              value={userInfo[el]}
              onChange={getInputsChange}
            />
          ))}
          <div className="flex my-5 items-center">
            <button onClick={() => setIsChecked(!isChecked)} className={ isChecked ? 'bg-[#44CD8D] w-7 h-7 rounded-lg flex justify-center items-center hover:opacity-50' : 'border-[2.5px] border-[#44CD8D] w-7 h-7 rounded-lg flex justify-center items-center hover:opacity-50' }>
                <IoMdCheckmark className='text-white text-xl'/>
            </button>
            <label className="ml-4 text-sm desktop2:text-lg">
              Нажимая «Отправить», вы соглашаетесь с нашими Политикой
              конфиденциальности
            </label>
          </div>
          <button
            className={`p-3 desktop2:text-2xl ${
              isFormValid() ? "bg-green-500 text-white" : "bg-gray-100 cursor-not-allowed"
            }`}
            disabled={!isFormValid()}
          >
            Отправить
          </button>
        </div>
        <div className="mobile:hidden laptop:block w-px bg-gray-300"></div>
        <div className="mobile:hidden laptop:block w-[55%]">
          <img
            src={footerBg}
            alt="background info"
            className="h-full object-cover"
          />
        </div>
      </div>

      <div className="laptop:bg-gray-300 flex flex-col mobile:items-start laptop:flex-row laptop:items-center justify-between w-[500px] max-w-full mx-auto laptop:py-3 laptop:px-5 laptop:w-auto">
        <p className="text-4xl font-bold laptop:text-5xl desktop2:text-7xl">WEBIX</p>
        <p className="text-xl desktop:text-2xl desktop2:text-4xl font-medium">
          webix.office@gmail.com
        </p>
        <p className="mb-3 laptop:m-0 text-xl desktop:text-2xl desktop2:text-4xl font-medium">
          7 (725) 384-9106
        </p>
        <div className="flex gap-2 mb-5 laptop:m-0">
          <img src={telegram} alt="telegram" className="cursor-pointer" />
          <img src={instagram} alt="instagram" className="cursor-pointer" />
          <img src={whatsapp} alt="whatsapp" className="cursor-pointer" />
        </div>
      </div>

      <div className="text-center flex-col laptop:flex laptop:flex-row justify-between my-5">
        <p className="mobile:hidden laptop:block text-sm desktop:text-base desktop2:text-xl">
          © Copyright 2024 Webix. Все права защищены.
        </p>
        <div className="flex-col laptop:flex laptop:flex-row gap-5">
          <p className="text-sm desktop:text-base desktop2:text-xl">
            Политика конфиденциальности
          </p>
          <p className="my-2 laptop:m-0 text-sm desktop:text-base desktop2:text-xl">
            Публичная Оферта
          </p>
        </div>
        <p className="block laptop:hidden text-sm desktop:text-base desktop2:text-xl">
          © Copyright 2024 Webix. Все права защищены.
        </p>
      </div>
    </div>
  );
};

export default Footer;
