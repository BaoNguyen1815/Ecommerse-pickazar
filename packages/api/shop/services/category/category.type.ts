import { ObjectType, Field, Int } from 'type-graphql';
import categoryType from './categoryType.type';

@ObjectType()
export default class Category {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  type: string;

  @Field(type => Int,{nullable : true})
  category_id: number;

  @Field(type => String)
  slug: string;

  @Field()
  title: string;

  @Field(type => [Category], { nullable: true })
  children?: Category[];

  @Field(type => [categoryType])
  typeinfor : categoryType;

  @Field(type => String, { nullable: true })
  icon?: string;

  @Field(type=> String,{nullable: true})
  meta_description:   string;

  @Field(type => Date,{nullable: true})
  create_at : Date

  @Field(type => Date,{nullable: true})
  update_at : Date
  
  @Field(type => Int, { nullable: true })
  itemCount: number;
}
