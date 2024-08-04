export interface Product {
    id: string;
    name: string;
    price: number;
  }
  
export interface DetailsCardProps {
    product: Product;
    isVisible: boolean;
    onClose: () => void;
  }