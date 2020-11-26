import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
import loadProducts from '../../data/product.data';
import Product from './product.type';
import Products from './products.type';
import GetProductsArgs from './product.args_type';
import AddProductInput from './product.input_type';
import search from '../../helpers/search';
import shuffle from '../../helpers/shuffle';
import { sortByHighestNumber, sortByLowestNumber } from '../../helpers/sorts';
const db =require('../../../database.js')

@Resolver()
export default class ProductResolver {
  private readonly productsCollection: Promise<Product[]> = loadProducts();

  @Query((returns) => Products, { description: 'Get all the products' })
  async products(
    @Args()
    { limit, offset, sortByPrice, type, searchText, category }: GetProductsArgs
  ): Promise<Products> {
    let products = await loadProducts();
    // if (category) {
    //   products = products.filter((product) =>
    //     product.sub_category.find(
    //       (category_item) => category_item.slug === category
    //     )
    //   );
    // }
    if (type) {
      products = products.filter((product) => product.type === type);
    }
    if (sortByPrice) {
      if (sortByPrice === 'highestToLowest') {
        products = sortByHighestNumber(products, 'price');
      }
      if (sortByPrice === 'lowestToHighest') {
        products = sortByLowestNumber(products, 'price');
      }
    } else {
      products = shuffle(products);
    }

    // return await products.slice(0, limit);
    products = await search(products, ['name'], searchText);
    const hasMore = products.length > offset + limit;
    let product = await this.productsCollection;
    return {
      items: products.slice(offset, offset + limit),
      totalCount: product.length,
      hasMore,
    };
  }

  @Query(() => Product)
  async product(@Arg('slug') slug: string): Promise<Product | undefined> {
    let product = await this.productsCollection;
    return product.find((item) => item.slug === slug);
  }

  @Mutation(() => Product, { description: 'Create Product' })
  async createProduct(
    @Arg('product') product: AddProductInput
  ): Promise<Product> {
    await db.products.create(product)
    console.log(product, 'product');

    return product;
  }
}
