import { Resolver, Query, Arg, Int } from 'type-graphql';
import loadCategories from './category.sample';
import Category from './category.type';

@Resolver()
export class CategoryResolver {
  private readonly items: Promise<Category[]> = loadCategories();

  @Query(() => [Category], { description: 'Get all the categories' })
  async categories(
    @Arg('type', type => String) type: string = 'Thực phẩm'
  ): Promise<Category[]> {
    let result= await this.items;
    return await result.filter(item => item.type === type);
  }

  @Query(() => Category)
  async category(
    @Arg('id', type => Int) id: number
  ): Promise<Category | undefined> {
    let result = await this.items;
    console.log('id: ', id)
    return await result.find(item => item.id === id);
  }
}
