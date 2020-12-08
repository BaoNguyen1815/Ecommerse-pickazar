import { InputType, Field, ID } from 'type-graphql';
import Category from './category.type';
import CategoryParentInput from './category_parent.input.type';
@InputType({ description: 'New Category Data' })
export default class AddCategoryInput implements Partial<Category> {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ defaultValue: null })
  value: string;

  @Field({ defaultValue: null })
  type: string;
   
  @Field(type => ID,{ nullable: true })
  category_id: string;

  @Field({ nullable: true })
  icon: string;

  @Field(type => CategoryParentInput, { nullable: true })
  category: CategoryParentInput;

  @Field({ nullable: true })
  slug: string;

  // @Field({ nullable: true })
  // number_of_product?: number;

  @Field({ nullable: true })
  creation_date: Date;
}
