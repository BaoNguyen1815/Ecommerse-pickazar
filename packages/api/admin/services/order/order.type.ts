import { Field, ID, Int, ObjectType, Float } from 'type-graphql';
import OrderedProduct from './ordered_product.type';

@ObjectType()
export default class Order {
  @Field(type => ID)
  id: string;

  @Field(type => ID)
  customer_id: string;
  
  @Field()
  deliveryTime: string;

  @Field(type => Float)
  amount: number;

  @Field({ nullable: true })
  payment_method: string;

  @Field({ nullable: true })
  contact_number: string;
  
  @Field(type => Float)
  subtotal: number;

  @Field({ nullable: true })
  delivery_address: string;

  @Field({ nullable: true })
  status: string;

  @Field(type => [OrderedProduct],{ nullable: true })
  products: OrderedProduct[];

  @Field({ nullable: true })
  description?: string;

  @Field(type => Int, { nullable: true })
  discount: number;

  @Field(type => Int,{ nullable: true })
  delivery_fee: number;

  @Field()
  creation_date: Date;
}
