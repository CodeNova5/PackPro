export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
