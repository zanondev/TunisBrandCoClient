import { IClient } from "../clients/client.model";
import { IProduct } from "../products/product.model";


export interface IOrder{
    id: number;
    client: number;
    product: number;
    productQuantity: number;
    totalPrice: number;
    orderDate: Date;
    status: number;
  }
  