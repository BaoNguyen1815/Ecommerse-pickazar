import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export default class CategoryParent {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  icon: string;

  @Field( { nullable: true })
  slug: string;
  
  @Field({ nullable: true })
  creation_date: Date;
}
