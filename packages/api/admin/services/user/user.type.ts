import { Field, ID, ObjectType } from 'type-graphql';
import Contact from './contact/contact.type';
import Address from './address/address.type';
import Card from './card/card.type';

@ObjectType()
export default class User {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({nullable: true})
  image: string;

  @Field()
  email: string;

  @Field(type => [Address],{nullable: true})
  addresses: Address[];

  @Field(type => [Contact],{nullable: true})
  contacts: Contact[];

  @Field(type => [Card],{nullable: true})
  card: Card[];

  password: string;

  @Field({nullable: true})
  creation_date: Date;
}
