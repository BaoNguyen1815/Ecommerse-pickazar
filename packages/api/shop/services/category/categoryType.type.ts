import { Field, Int, ObjectType } from "type-graphql";
import Category from "../../../admin/services/category/category.type";


@ObjectType()
export default class categoryType{
    @Field(type => Int)
    id: number;

    @Field(type=> String)
    type: string;

    @Field(type=> String)
    slug: string;

    // @Field(type => [Category])
    // category : Category[]
}