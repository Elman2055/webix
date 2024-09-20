import footerBg from "../../../public/FooterBg.png";
import telegram from "../../../public/telegram.svg";
import instagram from "../../../public/instagram.svg";
import whatsapp from "../../../public/whatsapp.svg";

const Footer = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="w-full flex justify-between pb-5 border-b border-b-gray-300 mb-10">
        <div className="w-[40%] flex flex-col justify-between">
          <p className="text-2xl font-medium mb-3 desktop2:text-4xl">
            Ваши мысли, наш ответ
          </p>
          <p className="mb-3 desktop2:text-2xl">
            Ваше мнение важно для нас! Оставьте вопросы или предложения, и мы
            свяжемся с вами как можно скорее, чтобы помочь вам
          </p>
          <input
            type="text"
            className="bg-gray-100 outline-none p-[2%] mt-2 desktop2:placeholder:text-2xl desktop2:text-2xl"
            placeholder="*ФИО"
          />
          <input
            type="tel"
            className="bg-gray-100 outline-none p-[2%] mt-2 desktop2:placeholder:text-2xl desktop2:text-2xl"
            placeholder="*Телефон"
          />
          <input
            type="email"
            className="bg-gray-100 outline-none p-[2%] mt-2 desktop2:placeholder:text-2xl desktop2:text-2xl"
            placeholder="*Email"
          />
          <input
            type="text"
            className="bg-gray-100 outline-none p-[2%] pb-20 mt-2 desktop2:placeholder:text-2xl desktop2:text-2xl"
            placeholder="Комментарий"
          />
          <div className="flex my-5 items-center">
            <input
              type="checkbox"
              id="custom-checkbox"
              className="w-7 h-7 text-blue-600 bg-green-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="custom-checkbox"
              className="ml-4 text-sm desktop2:text-lg"
            >
              Нажимая «Отправить», вы соглашаетесь с нашими Политикой
              конфиденциальности
            </label>
          </div>
          <button className="bg-gray-100 p-3 desktop2:text-2xl">
            Отправить
          </button>
        </div>
        <div className="w-px bg-gray-300 "></div>
        <div className="w-[55%]">
          <img
            src={footerBg}
            alt="background info"
            className="h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-gray-300 py-3 px-5 flex justify-between items-center">
        <p className="text-5xl font-bold desktop2:text-7xl">WEBIX</p>
        <p className="laptop:text-xl desktop:text-2xl desktop2:text-4xl font-medium">
          webix.office@gmail.com
        </p>
        <p className="laptop:text-xl desktop:text-2xl desktop2:text-4xl font-medium">
          7 (725) 384-9106
        </p>
        <div className="flex gap-2">
          <img src={telegram} alt="telegram" className="cursor-pointer" />
          <img src={instagram} alt="instagram" className="cursor-pointer" />
          <img src={whatsapp} alt="whatsapp" className="cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-between my-5">
        <p>© Copyright 2024 Webix. Все права защищены.</p>
        <div className="flex gap-5">
          <p>Политика конфиденциальности</p>
          <p>Публичная Оферта</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
