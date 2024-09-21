import React from "react";
import { TMain, TProduct } from "../../types/types.data";

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
    </div>
  );
};

export default MainPage;
