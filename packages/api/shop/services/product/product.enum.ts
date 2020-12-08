import { registerEnumType } from 'type-graphql';

export enum ProductType {
  BOOK = 'Voucherdichvu',
  BAGS = 'Homelife',
  GROCERY = 'Thucpham',
  GROCERY_TWO= "Thucphamchucnang",
  MEDICINE = 'medicine',
  CLOTH = 'cloth',
  CLOTHING = 'Dienmay',
  FURNITURE = 'Congnghe',
  FURNITURE_TWO = 'furniture-two',
  MAKEUP = 'Mevabe',
  BAKERY = 'Hoamipham',
}

registerEnumType(ProductType, {
  name: 'ProductType',
  description: 'The basic product types',
});
