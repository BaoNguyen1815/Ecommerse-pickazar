import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';

import { filterItems } from '../../helpers/filter';
import User from './user.type';
import {loadUsers} from '../../data/user.sample';
import { any } from 'sequelize/types/lib/operators';
const db = require('../../../database_client');
@Resolver()
export class UserResolver {
  private readonly items: Promise<User[]> = loadUsers();

  @Query(() => User)
  async me(@Arg('userInput') userInput: string): Promise<User|undefined> {
    console.log(userInput, 'userInput');
    let items= await this.items;
    const input = JSON.parse(userInput);
    return await items.find((item) => item.email === input.email && item.password === input.password);
  }

  @Mutation(() => User, { description: 'Update User' })
  async updateMe(@Arg('meInput') meInput: string): Promise<User> {
    console.log(meInput, 'meInput');
    let items= await this.items;
    const input = JSON.parse(meInput);
    const a =Object.assign({},input)
  
    const user = await db.users.update(a,{
    where: {
      id: items[0].id
    }});
    console.log("aaaa",a)
    // console.log("aaaa",item)
    return await items[0];
  }

  @Mutation(() => User, { description: 'Add or Edit Address' })
  async updateAddress(
    @Arg('addressInput') addressInput: string
  ): Promise<User> {
    let items= await this.items;
    const a ={
      user_id: items[0].id,
    }
    const input = JSON.parse(addressInput);
    const add = Object.assign(a,input)
    if(input.id==null){
      await db.addresses.create(add);
    }else{
      await db.addresses.update(add,{
        where:{
          id : input.id
        }
      });
    }
    // console.log("aaaa",add);
   ;
    return await items[0];
  }

  @Mutation(() => User, { description: 'Add or Edit Contact' })
  async updateContact(
    @Arg('contactInput') contactInput: string
  ): Promise<User> {
    console.log(contactInput, 'contactinput');
    let items= await this.items;
    const a ={
      user_id: items[0].id,
    }
    const input = JSON.parse(contactInput);
    console.log("input",input)
    const add = Object.assign(a,input)
    if(input.id==null){
      console.log(add.type,"add")
      console.log(input,"input")
      await db.contact.create(add);
    }else{
      await db.contact.update(add,{
        where:{
          id : input.id
        }
      });
    }
    return await items[0];
  }

  @Mutation(() => User, { description: 'Delete Address' })
  async deleteAddress(@Arg('addressId') addressId: string): Promise<User> {
    console.log(addressId, 'address_id');
    let items= await this.items;
    const input = JSON.parse(addressId)
    console.log(input)
    await db.addresses.destroy({
      where:{
        id:input
      }
    })
    return await items[0];
  }

  @Mutation(() => User, { description: 'Delete Contact' })
  async deleteContact(@Arg('contactId') contactId: string): Promise<User> {
    console.log(contactId, 'contact_id');
    let items= await this.items;
    const input = JSON.parse(contactId)
    await db.contact.destroy({
      where:{
        id:input
      }
    })
    return await items[0];
  }

  @Mutation(() => User, { description: 'Add Payment Card' })
  async addPaymentCard(@Arg('cardInput') cardInput: string): Promise<User> {
    console.log(cardInput, 'cardInput');
    let items= await this.items;
    return await items[0];
  }

  @Mutation(() => User, { description: 'Delete Payment Card' })
  async deletePaymentCard(@Arg('cardId') cardId: string): Promise<User> {
    console.log(cardId, 'card_id');
    let items= await this.items;
    return await items[0];
  }
}
