export type TProduct = {
  product_id: number;
  title: string;
  old_price: string | null;
  price: string;
  description: string;
  image_preview: string;
  category: string;
};

export type TMain = {
  mainProduct: TProduct[];
  firstRowProducts: TProduct[];
  secondRowProducts: TProduct[];
};

export type TMainRowProducts = {
  title: string;
  rowProducts: TProduct[];
  isMainBtns?: boolean;
  border?: boolean;
};

export type TProductPage = {
  product: TProduct[];
  rowProducts: TProduct[];
};

export type TCategories = {
  title: string;
  quantity: number;
  products: TProduct[];
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
