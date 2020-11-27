import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';

import { filterItems } from '../../helpers/filter';
import User from './user.type';
import {loadUsers} from '../../data/user.sample';

@Resolver()
export class UserResolver {
  private readonly items: Promise<User[]> = loadUsers();

  @Query(() => User)
  async me(@Arg('id') id: string): Promise<User> {
    // as auth user. check from middleware.
    console.log(id, 'user_id');
    let items= await this.items;
    // console.log(items)
    return await items[0];
  }

  @Mutation(() => User, { description: 'Update User' })
  async updateMe(@Arg('meInput') meInput: string): Promise<User> {
    console.log(meInput, 'meInput');
    let items= await this.items;
    return await items[0];
  }

  @Mutation(() => User, { description: 'Add or Edit Address' })
  async updateAddress(
    @Arg('addressInput') addressInput: string
  ): Promise<User> {
    console.log(addressInput, 'addressinput');
    let items= await this.items;
    return await items[0];
  }

  @Mutation(() => User, { description: 'Add or Edit Contact' })
  async updateContact(
    @Arg('contactInput') contactInput: string
  ): Promise<User> {
    console.log(contactInput, 'contactinput');
    let items= await this.items;
    return await items[0];
  }

  @Mutation(() => User, { description: 'Delete Address' })
  async deleteAddress(@Arg('addressId') addressId: string): Promise<User> {
    console.log(addressId, 'address_id');
    let items= await this.items;
    return await items[0];
  }

  @Mutation(() => User, { description: 'Delete Contact' })
  async deleteContact(@Arg('contactId') contactId: string): Promise<User> {
    console.log(contactId, 'contact_id');
    let items= await this.items;
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
