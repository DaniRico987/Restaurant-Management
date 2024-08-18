export interface Product {
  productId: string;
  productName: string;
  productPrice: number;
  categoryId: string;
}

export interface CardProductProps {
  product: Product;
}
