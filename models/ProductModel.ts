import type  ImageModel  from "./imageModel.ts";


export default interface ProductModel {
  id: number | null;
  created_at: string;
  name: string;
  price: number;
  type: string;
  category: string;
  material: string;
  weight_in_grams: number;
  presious_material_weight: number;
  item_number: number | null;
  stock_quantity: number;
  store_id: number | null;
  description: string;
  main_image: ImageModel; 
  image_list: ImageModel[]; 
  uuid: string | null;
  modified_date: string | null;
  subcategory_id: string | null;
  rating: number;
}