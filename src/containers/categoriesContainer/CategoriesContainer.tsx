import { useParams } from "react-router-dom";
import Categories from "../../components/categories/Categories";
import { useGetProductsMutation } from "../../store/webixApi";
import { useEffect, useState } from "react";
import { TProduct } from "../../types/types.data";
import { categoryMapping } from "./CategoryContainerData";
import Loader from "../../components/loader/Loader";

const CategoriesContainer = () => {
  const { id } = useParams();

  const [products, { isLoading }] = useGetProductsMutation();
  const [allProducts, setAllProducts] = useState<TProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentProducts, setCurrentProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    if (id) {
      const { data } = await products(categoryMapping[id] || "");
      setAllProducts(data.items);
      setCurrentPage(1);
    }
  };

  const getCurrentProducts = () => {
    const cardsLength = window.innerWidth > 1024 ? 20 : 8;

    const totalPages = Math.ceil(allProducts.length / cardsLength);
    setTotalPages(totalPages);
    const currentProducts = allProducts.slice(
      (currentPage - 1) * cardsLength,
      currentPage * cardsLength
    );
    setCurrentProducts(currentProducts);
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  useEffect(() => {
    getCurrentProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [allProducts, currentPage]);

  return (
    <>
      <Loader isOpen={isLoading} />
      <Categories
        title={String(id)}
        quantity={allProducts.length}
        products={currentProducts}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default CategoriesContainer;
