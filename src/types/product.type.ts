export type TProduct = {
    _id: string;
    name: string;
    brand: string;
    price: number;
    image: string;
    type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
    description: string;
    quantity: number;
    inStock: boolean;
  }