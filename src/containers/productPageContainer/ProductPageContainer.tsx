import { useEffect, useState } from "react";
import ProductPage from "../../components/productPage/ProductPage";
import {
  useGetProductsMutation,
  useGetProductQuery,
} from "../../store/webixApi";
import { TProduct } from "../../types/types.data";
import { useParams } from "react-router-dom";

const ProductPageContainer = () => {
  const { id } = useParams();
  const { data, isLoading: productLoader } = useGetProductQuery(Number(id));
  const [addRowProducts, { isLoading }] = useGetProductsMutation();

  const [product, setProduct] = useState<TProduct[]>([]);
  const [rowProducts, setRowProsucts] = useState<TProduct[]>([]);

  const getRowProducts = async () => {
    const { data } = await addRowProducts("");
    if (data) {
      setRowProsucts(data.items.slice(8, 12));
    }
  };

  useEffect(() => {
    if (data) setProduct(data.product);
    getRowProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data]);

  return <ProductPage product={product} rowProducts={rowProducts} />;
};

export default ProductPageContainer;
