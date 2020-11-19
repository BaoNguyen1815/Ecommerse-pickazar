import { Resolver, Query, Arg, Int, Mutation, ID } from "type-graphql";
import loadOrders from "../../data/order.data";
import Order from "./order.type";
import search from "../../helpers/search";
// import * as db from "../../../database"
const db = require('../../../database')
@Resolver()

export default class OrderResolver {
  // private readonly ordersCollection: Order[] =  db.orders.findAll();
  private readonly ordersCollection: Promise<Order[]> = loadOrders();
  @Query(returns => [Order], { description: "Get all the Orders" })
  async orders(
    @Arg("status", type => String, { nullable: true }) status: string,
    @Arg("limit", type => Int, { defaultValue: 50 }) limit: number,
    @Arg("searchText", type => String, { defaultValue: "" }) searchText: string
  ): Promise<Order[] | undefined> {
    let orders = await  this.ordersCollection;
    console.log(orders);
    // console.log (orders.map(order => {
    //   return order.products.map(product=>{
    //     return{
    //       id:product.id,
    //       title:product.title,
    //       weight:product.weight,
    //       price:product.price,
    //     }
    //   });
    // }))
    
    if (status) {
      orders = await orders.filter(order => order.status === status);

    }
    return await search(
      orders.slice(0, limit),
      ["delivery_address"],
      searchText
    );
  }

  // @Query(returns => Order, { description: "Get single order" })
  // async order(@Arg("id", type => ID) id: string): Promise<Order | undefined> {
  //   return await this.ordersCollection.find(item => item.id === id);
  // }

  // @Mutation(returns => Order, { description: 'Add an Order' })
  // async addOrder(@Arg('orderInput') orderInput: Order): Promise<Order> {
  //   console.log(orderInput, 'orderinput');
  //   return await orderInput;
  // }
}
