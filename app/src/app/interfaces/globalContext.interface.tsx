import { Category } from "./category.interface";
import { Product } from "./containerProducts.inteface";

export interface GlobalContextProps {
  categoryId: string;
  setCategoryId: (id: string) => void;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
}
