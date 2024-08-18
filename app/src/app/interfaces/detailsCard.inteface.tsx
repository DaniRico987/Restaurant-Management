export interface Product {
  productId: string;
  productName: string;
  productPrice: number;
}
  
export interface DetailsCardProps {
    product: Product;
    isVisible: boolean;
    onClose: () => void;
  }