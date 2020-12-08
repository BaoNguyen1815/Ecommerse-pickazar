import { Field, ObjectType } from "type-graphql";
import OrderProduct from "./orderProduct.type";


@ObjectType()
export default class OrderDetail{

    @Field()
    id : number;

    @Field()
    order_id: number;

    @Field()
    quantity: number;

    @Field()
    product_id: number;

    // @Field(type => [OrderProduct])
    // products : OrderProduct
}