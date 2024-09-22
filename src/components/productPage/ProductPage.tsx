import { TProduct, TProductPage } from "../../types/types.data";
import ProductsCards from "../productsCards/ProductsCards";

const ProductPage = ({ product, rowProducts }: TProductPage) => {
  return (
    <div className="w-[90%] mx-auto ">
      {product.map((el: TProduct) => (
        <div
          key={el.product_id}
          className="laptop:h-[65vh] flex justify-between pb-5 border-b border-gray-300 mb-10"
        >
          <div className="h-[50vh] w-[40%] bg-gray-100 p-5 flex flex-col justify-between">
            <div>
              <p className="desktop2:text-2xl">{el.category}</p>
              <p className="text-2xl font-medium desktop2:text-4xl mb-3">{el.title}</p>
              <div className="flex items-center gap-3 mb-3">
                <p className="text-2xl font-medium desktop2:text-4xl">{el.price} ₸</p>
                {el.old_price ? (
                  <p className="line-through desktop2:text-xl">{el.old_price} ₸</p>
                ) : (
                  <></>
                )}
              </div>
              <p className="desktop:text-2xl">{el.description}</p>
            </div>
            <button className="w-full bg-green-500 py-3 desktop2:text-2xl">Купить</button>
          </div>
          <div className="h-full w-px bg-gray-300"></div>
          <div className="w-[55%]">
            <img
              src={`https://logohub.kz/api/products/previewImage/${el.image_preview}`}
              alt="product"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ))}
      <ProductsCards
        title="Продолжим с того, что вас заинтересовало"
        rowProducts={rowProducts}
      />
    </div>
  );
};

export default ProductPage;
