import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class ListCategory {
    @Field(type => ID)
    id: number;

    @Field()
    type : string;

    @Field()
    slug: string;
}