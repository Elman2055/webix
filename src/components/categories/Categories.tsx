import { useState } from "react";
import { TCategories } from "../../types/types.data";
import ProductsCards from "../productsCards/ProductsCards";

const Categories = ({ title, quantity, products }: TCategories) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  return (
    <div className="w-[500px] max-w-[90%] laptop:w-[90%] mx-auto">
      <div className="flex flex-col laptop:flex-row gap-5">
        <div className="w-full laptop:w-[45%] bg-gray-100 p-5">
          <div className="flex items-center justify-between pb-5">
            <p className="text-2xl laptop:text-4xl desktop2:text-5xl font-medium mr-2">
              {title}
            </p>
            <p className="desktop2:text-2xl">{quantity} товара</p>
          </div>
          <p className="desktop2:text-2xl">
            Шаблоны для утилитарных сайтов обеспечивают идеальные решения для
            создания функциональных и эффективных онлайн-ресурсов
          </p>
        </div>
        <div className="bg-gray-300 w-px"></div>
        <div className="flex flex-col justify-between">
          <p className="text-xl font-bold desktop2:text-3xl laptop:font-medium mb-3">
            Выбрать по:
          </p>
          <div className="w-[500px] max-w-full flex flex-wrap gap-3">
            {["По популярности", "По возрастанию цены", "По убывании цены", "Новинки", "Скидки",].map((el, index) => (
              <button
                key={index}
                onClick={() => setActiveButton(index)}
                className={`bg-gray-100 p-3 text-[15px] laptop:text-lg hover:bg-green-500 hover:text-white transition-colors duration-300 desktop2:text-2xl ${activeButton === index ? 'bg-green-500 text-white' : ''}`}
              >
                {el}
              </button>
            ))}
          </div>
        </div>
      </div>
      <ProductsCards title="" rowProducts={products} />
    </div>
  );
};

export default Categories;
