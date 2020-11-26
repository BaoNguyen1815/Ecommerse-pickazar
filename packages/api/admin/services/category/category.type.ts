import { Field, ID, ObjectType } from 'type-graphql';
import CategoryParent from './category_parent.type';

@ObjectType()
export default class Category {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  icon: string;

  @Field(type => CategoryParent)
  category: CategoryParent;

  @Field( { nullable: true })
  slug: string;
  // You should resolve this field by using @FieldResolver decorator within your Category Resolver Class.
  // @Field({ defaultValue: 0 })
  // number_of_product?: number;

  @Field({ nullable: true })
  creation_date: Date;
}
