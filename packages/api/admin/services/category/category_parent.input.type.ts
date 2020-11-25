import { InputType, Field, ID } from 'type-graphql';
import CategoryParent from './category_parent.type';
@InputType({ description: 'New Category Parent' })
export default class CategoryParentInput implements Partial<CategoryParent> {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ defaultValue: null })
  value: string;

  @Field({ defaultValue: null })
  type: string;

  @Field({ nullable: true })
  icon: string;

  @Field({ nullable: true })
  slug: string;

  // @Field({ nullable: true })
  // number_of_product?: number;

  @Field({ nullable: true })
  creation_date: Date;
}
