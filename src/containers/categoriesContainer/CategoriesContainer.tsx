import { useParams } from "react-router-dom";
import Categories from "../../components/categories/Categories";
import { useGetProductsMutation } from "../../store/webixApi";
import { useEffect, useState } from "react";
import { TProduct } from "../../types/types.data";

const CategoriesContainer = () => {
  const { id } = useParams();
  const [products, { isLoading }] = useGetProductsMutation();
  const [allProducts, setAllProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    const { data } = await products(String(id));
    if (data) {
      setAllProducts(data.items);
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <Categories
      title={String(id)}
      quantity={allProducts.length}
      products={allProducts}
    />
  );
};

export default CategoriesContainer;
