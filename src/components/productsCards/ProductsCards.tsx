import { TMainRowProducts, TProduct } from "../../types/types.data";
import { useNavigate } from "react-router-dom";

const ProductsCards = ({
  title,
  rowProducts,
  isMainBtns,
  border
}: TMainRowProducts) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[500px] max-w-full mx-auto laptop:w-full m-0 flex justify-start laptop:justify-between my-5">
        <p className="text-2xl laptop:text-3xl font-medium desktop2:text-4xl">
          {title}
        </p>
        {isMainBtns && (
          <button className="hidden laptop:block bg-gray-100 p-2 desktop2:text-2xl hover:bg-gray-200 hover:text-slate-500 transition-colors duration-300">
            Смотреть все
          </button>
        )}
      </div>
      <div className={`grid w-[500px] max-w-full mx-auto grid-cols-1 laptop:w-full laptop:mb-5 laptop:grid-cols-4 gap-5 ${border ? "" : 'border-b border-gray-300'} pb-4`}>
        {rowProducts.map((el: TProduct) => (
          <div key={el.product_id} className="flex flex-col justify-between">
            <img
              className="cursor-pointer object-cover"
              src={`https://logohub.kz/api/products/previewImage/${el.image_preview}`}
              onClick={() => navigate({pathname: `/product/${el.product_id}`})}
              alt="product"
            />
            <p className="text-lg mt-2 desktop2:text-3xl desktop2:font-medium">
              {el.title}
            </p>
            <div className="flex gap-3 desktop2:text-2xl">
              <p className="font-bold">{el.price}₸</p>
              {el.old_price ? (
                <p className="line-through">{el.old_price}₸</p>
              ) : (
                <></>
              )}
            </div>
            <button className="w-full py-2 bg-gray-100 hover:bg-green-500 hover:text-white transition-colors duration-300 mt-3 desktop2:text-2xl">
              Купить
            </button>
          </div>
        ))}
        {isMainBtns && (
          <div className="flex justify-center">
            <button className="bg-gray-100 py-2 px-4 hover:bg-gray-200 hover:text-slate-500 transition-colors duration-300 laptop:hidden">
              Смотреть все
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsCards;
