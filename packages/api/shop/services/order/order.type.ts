import { ObjectType, Field } from 'type-graphql';
import OrderDetail from './orderDetail.type';
import OrderProduct from './orderProduct.type';
// import { OrderStatusEnum } from './orderStatusEnum';

@ObjectType()
export default class Order {
  @Field({nullable : true})
  id: number;

  @Field({nullable : true})
  userId: number;

  @Field(type => [OrderProduct],{nullable : true})
  products: OrderProduct[];
  
  // @Field(type=> [OrderDetail])
  // detail: OrderDetail;

  @Field(type => String,{nullable : true})
  status: number;

  @Field(type => String,{nullable : true})
  deliveryTime: string;

  @Field(type => String,{nullable : true})
  amount: number;

  @Field(type => String,{nullable : true})
  subtotal: number;

  @Field(type => String,{nullable : true})
  discount: number;

  @Field(type => String,{nullable : true})
  deliveryFee: number;

  @Field(type => String)
  deliveryAddress: string;

  @Field(type => String)
  date: string;
}
