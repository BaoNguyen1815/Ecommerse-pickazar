import { Field, ID, Int, Float, ObjectType } from 'type-graphql';
import Category from '../category/category.type';
import CategoryParent from '../category/category_parent.type';

@ObjectType()
export default class Product {
  @Field(type => ID)
  id: string;
  
  @Field(type => ID)
  category_id: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  unit: string;

  @Field(type => CategoryParent)
  category_parent: CategoryParent;

  @Field(type => Category)
  sub_category: Category;

  @Field(type => Float)
  price: number;

  @Field(type => Float,{ nullable: true })
  salePrice: number;

  @Field(type => Int,{ nullable: true })
  discountInPercent: number;

  @Field(type => Int, { defaultValue: 1 })
  per_unit: number;

  @Field(type => Int,{ nullable: true })
  quantity: number;

  @Field(type => Int, { nullable: true })
  views?: number;

  @Field(type => Int, { nullable: true })
  sales?: number;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creation_date: Date;

  @Field()
  slug: string;
}
