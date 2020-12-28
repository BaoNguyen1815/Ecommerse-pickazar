import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';
import loadOrders from './order.sample';
import Order from './order.type';
import { filterOrder } from '../../helpers/filter';
import { take } from 'lodash';

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
    console.log(user)
    return await filterOrder(items, user, limit, text);
  }

  @Query(() => Order, { description: 'Get single order' })
  async order(@Arg('id', type => Int) id: number): Promise<Order | undefined> {
    let items = await this.items;
    return await items.find(item => item.id === id);
  }

  @Mutation(() => Order, { description: 'Add an Order' })
  async addOrder(@Arg('orderInput') orderInput: string): Promise<Order> {
    let items = await this.items;
    console.log(items,"aaa");
    
    console.log(orderInput, 'orderinput');
    return await items[0];
  }
}
