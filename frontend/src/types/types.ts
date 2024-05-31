export interface Project {
  project_id: number;
  name: string;
  description: string;
  image: string;
}
//interface för mönster och knitwear
export interface Item {
  item_id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  type: string;
  pdf: string;
}

//interface för cartitem i cartcontext
export interface CartItem {
  image: string;
  name: string;
  price: number;
  quantity: number;
  item_id: number;
  type: string;
}
//interface till cartcontext
export interface CartContextProps {
  cartItems: CartItem[];
  setCartItems: (items: CartItem[]) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  getCartTotal: () => number;
  doesCartExists: () => void;
  getCartItems: () => void;
  outOfStock: CartItem[];
}
