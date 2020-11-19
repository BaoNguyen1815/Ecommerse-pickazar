import { ObjectType, Field, ID, Int } from 'type-graphql';

@ObjectType()
export default class OrderedProduct {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  weight: string;

  @Field()
  price: number;

  @Field()
  image: string;

  @Field(type => Int)
  quantity: number;
}
