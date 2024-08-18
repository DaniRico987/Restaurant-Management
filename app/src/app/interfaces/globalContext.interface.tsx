import { Product } from "./containerProducts.inteface";

export interface GlobalContextProps {
  categoryId: string;
  setCategoryId: (id: string) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
}
