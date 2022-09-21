export interface Item {
  id: string;
  title: string;
  categoryId: string;
  description: string;
  price: number;
  oldprice: number;
  stock: number;
  image: string;
  imageb: string;
  imagec: string;
}

export interface ItemsListProps {
  title: string;
  title2: string;
  categoryId: string;
  isCheckedPlacas: boolean;
  isCheckedProcesadores: boolean;
  isCheckedDiscos: boolean;
  data: string;
}
