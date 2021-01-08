import { Resolver, Query, Arg, Int, Mutation } from 'type-graphql';
import SignUp from './signUp.type';
import {loadSignUp} from '../../data/signUp.sample';
import { any } from 'sequelize/types/lib/operators';
const db = require('../../../database_client');
@Resolver()
export class SignUpResolver {
private readonly items: Promise<SignUp[]> = loadSignUp();
  @Mutation(() => SignUp, { description: 'Update User' })
  async signUp(@Arg('userInput') userInput: string): Promise<SignUp> {
    let items= await this.items;
    const input = JSON.parse(userInput);
    console.log(input, 'input')
    await db.users.create(input)
    return await items[0];
  }
}