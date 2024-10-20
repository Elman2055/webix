import { TMain, TProduct } from "../../types/types.data";
import mainBg from "../../../public/mainBg.png";
import mobileMainBg from "../../../public/mobileMainBg.png";
import ProductsCards from "../productsCards/ProductsCards";
import { useNavigate } from "react-router-dom";

const MainPage = ({
  mainProduct,
  firstRowProducts,
  secondRowProducts,
}: TMain) => {
  const navigate = useNavigate();

  return (
    <div className="w-[90%] mx-auto">
      {mainProduct.map((el: TProduct) => (
        <div
          key={el.product_id}
          className="flex flex-col-reverse w-[500px] max-w-full mx-auto laptop:w-full laptop:flex-row justify-between border-b border-gray-300 pb-10 laptop:pb-3 laptop:h-[50vh]"
        >
          <div className="laptop:w-[45%] bg-gray-100 p-4 flex flex-col justify-between">
            <div>
              <p className="text-2xl font-medium desktop2:text-4xl mb-3">
                {el.title}
              </p>
              <p className="mb-5 laptop:m-0 desktop2:text-2xl">
                {el.description}
              </p>
            </div>
            <button
              className="w-full py-3 bg-green-500 text-white hover:bg-green-400 transition-colors duration-300 desktop2:text-2xl"
              onClick={() =>
                navigate({ pathname: `/product/${el.product_id}` })
              }
            >
              Посмотреть
            </button>
          </div>
          <div className="bg-gray-300 w-px mobile:hidden laptop:block"></div>
          <div className="laptop:w-[50%]">
            <img
              className="mb-5 laptop:m-0 h-full w-full object-cover cursor-pointer"
              src={`https://webix.webshop2.kz/api/product/previewImage/${el.image_preview}`}
              onClick={() => navigate({pathname: `/product/${el.product_id}`})}
              alt="product"
            />
          </div>
        </div>
      ))}
      <ProductsCards
        title="Шаблоны для здоровья и медицины"
        rowProducts={firstRowProducts}
        isMainBtns={true}
      />
      <div className="w-[500px] max-w-full mx-auto laptop:w-full laptop:bg-gray-100 laptop:p-7 my-10">
        <p className="mb-5 laptop:m-0 text-4xl font-medium desktop2:text-5xl">
          Знакомьтесь с нами
        </p>
        <img
          src={mainBg}
          alt="info background"
          className="hidden laptop:block my-5 object-cover"
        />
        <img
          src={mobileMainBg}
          alt="info background"
          className="mb-5 laptop:hidden"
        />
        <div className="flex flex-col gap-3 desktop2:text-2xl">
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
      <ProductsCards
        title="Сайты для игровых проектов"
        rowProducts={secondRowProducts}
        isMainBtns={true}
      />
    </div>
  );
};

export default MainPage;
