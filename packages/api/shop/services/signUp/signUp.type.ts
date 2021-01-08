import { ObjectType, Field, Int } from 'type-graphql';
@ObjectType()
export default class SignUp {
  @Field(type => Int)
  id: number;
  @Field()
  email: string;
  @Field()
  password: string;
}