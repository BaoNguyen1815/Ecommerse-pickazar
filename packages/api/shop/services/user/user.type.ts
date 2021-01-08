import { ObjectType, Field, Int } from 'type-graphql';
import Address from './address.type';
import Contact from './contact.type';
import Card from './card.type';

@ObjectType()
export default class User {
  @Field(type => Int)
  id: number;
  @Field({nullable : true})
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field(type => [Address],{nullable : true})
  address: Address[];

  @Field(type => [Contact],{nullable : true})
  contact: Contact[];

  @Field(type => [Card],{nullable : true})
  card: Card[];
}
