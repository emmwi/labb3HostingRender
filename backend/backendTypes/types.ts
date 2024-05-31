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

export interface Fields {
  image: FieldObject[];
  pdf: FieldObject[];
}
interface FieldObject {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

type uuid = string;
export interface RequestBody {
  sessionId: uuid;
  quantity: number;
  item_id: number;
  project_id: number;
  name: string;
  adminName: string;
  password: string | number;
  description: string;
  image: string;
  price: number;
  type: string;
  pdf: string;
}

export interface CartItem {
  cart_item_id: number;
  cart_id: number;
  item_id: number;
  quantity: number;
}

export interface Carts {
  cart_id: number;
  session_id: uuid;
  created_at: Date;
}
