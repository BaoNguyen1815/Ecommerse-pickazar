import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';
import loadOrders from './order.sample';
import Order from './order.type';
import { filterOrder } from '../../helpers/filter';
import { take } from 'lodash';
const db = require('../../../database_client');
@Resolver()
export class OrderResolver {
  private readonly items: Promise<Order[]> = loadOrders();

  @Query(() => [Order], { description: 'Get all the Orders' })
  async orders(
    @Arg('user', type => Int) user: number,
    @Arg('text', type => String, { nullable: true }) text: string,
    @Arg('limit', type => Int, { defaultValue: 7 }) limit: number
  ): Promise<Order[]> {
    let items = await this.items;
    // console.log(items);
    // let userid = 17
    // return await take(this.items.filter(item => item.userId === user), limit);
    return await filterOrder(items, user, limit, text);
  }

  @Query(() => Order, { description: 'Get single order' })
  async order(@Arg('id', type => Int) id: number): Promise<Order | undefined> {
    let items = await this.items;
    return await items.find(item => item.id === id);
  }

  @Mutation(() => Order, { description: 'Add an Order' })
  async addOrder(@Arg('orderInput') orderInput: string): Promise<Order|undefined> {
    let items = await this.items;
    // console.log(orderInput, 'orderinput');
    let input = JSON.parse(orderInput);
    delete input.id,
    console.log(input)
    const order = await db.orders.create(input)
    console.log(order.id,"id")
    setTimeout(()=>{
      input.products.map((e: any)=>{
          let orderInput = {
            order_id:order.id,
            product_id:e.id,
            quantity:e.quantity,
          }
          db.order_details.create(orderInput)
      })  
    }, 3000)
    return await items[0];
  }
}
