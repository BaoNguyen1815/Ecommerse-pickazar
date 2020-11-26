import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql';
import loadCategories from '../../data/category.data';
import Category from './category.type';
import AddCategoryInput from './category.input_type';
import search from '../../helpers/search';
const db = require('../../../database')

@Resolver()
export default class CategoryResolver {
  private readonly categoriesCollection: Promise<Category[]> = loadCategories();

  @Query(returns => [Category], { description: 'Get all the categories' })
  async categories(
    @Arg('type', { nullable: true }) type?: string,
    @Arg('searchBy', { defaultValue: '' }) searchBy?: string
  ): Promise<Category[]> {
    let categories =await loadCategories();
    // console.log("jhgfd",categories)
      
    if (type) {
      categories = await categories.filter(category => category.type === type);
    }
    return await search(categories, ['name'], searchBy);
  }

  @Query(returns => Category)
  async category(
    @Arg('id', type => ID) id: string
  ): Promise<Category | undefined> {
    let categories = await this.categoriesCollection;
     return categories.find(category => category.id === id)
  }

  @Mutation(() => Category, { description: 'Create Category' })
  async createCategory(
    @Arg('category') category: AddCategoryInput
  ): Promise<Category> {
    const addCate = await db.sub_categories.create(category);
    console.log(category, 'category');
    return await category;
  }
}
