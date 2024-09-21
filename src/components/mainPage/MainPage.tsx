import { TMain, TProduct } from "../../types/types.data";
import mainBg from "../../../public/mainBg.png";

const MainPage = ({
  mainProduct,
  firstRowProducts,
  secondRowProducts,
}: TMain) => {
  return (
    <div className="w-[90%] mx-auto">
      {mainProduct.map((el: TProduct) => (
        <div
          key={el.product_id}
          className="flex justify-between border-b border-gray-300 pb-3 h-[50vh]"
        >
          <div className="w-[45%] bg-gray-100 p-4 flex flex-col justify-between">
            <div className="">
              <p className="text-2xl font-medium">{el.title}</p>
              <p>{el.description}</p>
            </div>
            <button className="w-full py-3 bg-green-500 text-white hover:bg-green-400 transition-colors duration-300">
              Посмотреть
            </button>
          </div>
          <div className="bg-gray-300 w-px"></div>
          <div className="w-[50%]">
            <img
              className="h-full w-full object-cover cursor-pointer"
              src={`https://logohub.kz/api/products/previewImage/${el.image_preview}`}
              alt="product"
            />
          </div>
        </div>
      ))}
      <div className="flex justify-between my-5">
        <p className="text-3xl font-medium">Шаблоны для здоровья и медицины</p>
        <button className="bg-gray-100 p-2">Смотреть все</button>
      </div>
      <div className="grid grid-cols-4 gap-5 border-b border-gray-300 pb-4">
        {firstRowProducts.map((el: TProduct) => (
          <div key={el.product_id} className="flex flex-col justify-between">
            <img
              className="cursor-pointer object-cover"
              src={`https://logohub.kz/api/products/previewImage/${el.image_preview}`}
              alt="product"
            />
            <p className="text-lg mt-2">{el.title}</p>
            <div className="flex gap-3">
              <p className="font-bold">{el.price}₸</p>
              {el.old_price ? <p className="line-through">{el.old_price}₸</p> : <></>}
            </div>
            <button className="w-full py-2 bg-gray-100 hover:bg-green-500 hover:text-white transition-colors duration-300 mt-3">Купить</button>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 p-7 mt-10">
        <p className="text-4xl font-medium">Знакомьтесь с нами</p>
        <img src={mainBg} alt="info background" className="my-5"/>
        <div className="flex gap-3">
          <p>
            Мы — ведущий цифровой магазин, специализирующийся на продаже готовых
            сайтов. Наша миссия — предоставить вам качественные, профессионально
            разработанные решения, которые помогут вашему бизнесу выделиться
            онлайн.
          </p>
          <p>
            Мы предлагаем широкий выбор шаблонов для различных ниш и целей, от
            корпоративных сайтов до интернет-магазинов. Наша команда постоянно
            обновляет и улучшает наши предложения, чтобы соответствовать самым
            современным требованиям и трендам.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
