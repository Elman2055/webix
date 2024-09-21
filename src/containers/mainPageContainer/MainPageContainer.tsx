import { useEffect, useState } from "react";
import MainPage from "../../components/mainPage/MainPage";
import { useGetProductsMutation } from "../../store/webixApi";
import { TProduct } from "../../types/types.data";

const MainPageContainer = () => {
  const [products, { isLoading }] = useGetProductsMutation();
  const [mainProduct, setMainProduct] = useState<TProduct[]>([]);
  const [firstRowProducts, setFirstRowProducts] = useState<TProduct[]>([]);
  const [secondRowProducts, setSecondRowProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    const { data } = await products("");
    if (data) {
      setMainProduct(data.items.slice(0, 1));
      setFirstRowProducts(data.items.slice(1, 5));
      setSecondRowProducts(data.items.slice(5, 9));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainPage
      mainProduct={mainProduct}
      firstRowProducts={firstRowProducts}
      secondRowProducts={secondRowProducts}
    />
  );
};

export default MainPageContainer;
