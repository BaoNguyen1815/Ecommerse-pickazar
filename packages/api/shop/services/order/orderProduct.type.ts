import { ObjectType, Field } from 'type-graphql';
import { ProductType } from '../product/product.enum';
import Category from '../category/category.type';
import OrderDetail from './orderDetail.type';

@ObjectType()
export default class OrderProduct {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  image: string;

  @Field(type => [OrderDetail])
  details : OrderDetail

  @Field(type => [Category])
  categories: Category[];

  @Field()
  price: number;

  @Field()
  weight: string;

  @Field()
  quantity: number;

  @Field()
  total: number;

  @Field(type => String)
  type: ProductType;
}
