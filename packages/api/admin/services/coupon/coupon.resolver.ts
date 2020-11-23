import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import loadCoupons from '../../data/coupon.data';
import Coupon from './coupon.type';
import AddCouponInput from './coupon.input_type';
import search from '../../helpers/search';
@Resolver()
export default class CouponResolver {
  private readonly couponsCollection: Promise<Coupon[]> = loadCoupons();

  @Query(returns => [Coupon], { description: 'Get All Coupons' })
  async coupons(
    @Arg('status', { nullable: true }) status?: string,
    @Arg('searchBy', { nullable: true }) searchBy?: string
  ): Promise<Coupon[] | undefined> {
    let coupons = await this.couponsCollection;
    // console.log("coupons",coupons);

    if (status) {
      coupons = await coupons.filter(coupon => coupon.status === status);
    }
    return await search(coupons, ['title', 'code'], searchBy);
  }

  @Mutation(returns => Coupon)
  async createCoupon(
    @Arg('coupon') coupon: AddCouponInput
  ): Promise<Coupon | undefined> {
    console.log(coupon, 'coupon');

    return await coupon;
  }
}
