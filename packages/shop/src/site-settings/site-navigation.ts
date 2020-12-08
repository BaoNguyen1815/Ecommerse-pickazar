export const HOME_PAGE = '/';
export const GROCERY_PAGE = '/Thucpham';
export const GROCERY_PAGE_TWO = '/Thucphamchucnang';
export const BAKERY_PAGE = '/Hoamipham';
export const MAKEUP_PAGE = '/Mevabe';
export const CLOTHING_PAGE = '/Dienmay';
export const BAGS_PAGE = '/Homelife';
export const BOOK_PAGE = '/Voucherdichvu';
export const FURNITURE_PAGE = '/Congnghe';
export const FURNITURE_PAGE_TWO = '/furniture-two';
export const MEDICINE_PAGE = '/medicine';
// export const RESTAURANT_PAGE = '/restaurant';
export const REQUEST_MEDICINE_PAGE = '/request-medicine';
export const CHECKOUT_PAGE = '/checkout';
export const CHECKOUT_PAGE_TWO = '/checkout-alternative';
export const PROFILE_PAGE = '/profile';
export const YOUR_ORDER_PAGE = '/order';
export const ORDER_RECEIVED_PAGE = '/order-received';
export const OFFER_PAGE = '/offer';
export const HELP_PAGE = '/help';
export const TERMS_AND_SERVICES_PAGE = '/terms';
export const PRIVACY_POLICY_PAGE = '/privacy';
// Mobile Drawer Menus

export const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE,
};

export const HELP_MENU_ITEM = {
  id: 'nav.help',
  defaultMessage: 'Help',
  href: HELP_PAGE,
};
export const OFFER_MENU_ITEM = {
  id: 'nav.offer',
  defaultMessage: 'Offer',
  href: OFFER_PAGE,
};
export const ORDER_MENU_ITEM = {
  id: 'nav.order',
  href: YOUR_ORDER_PAGE,
  defaultMessage: 'Order',
};
export const REQUEST_MEDICINE_MENU_ITEM = {
  id: 'nav.request_medicine',
  defaultMessage: 'Request Medicine',
  href: REQUEST_MEDICINE_PAGE,
};
export const PROFILE_MENU_ITEM = {
  id: 'nav.profile',
  defaultMessage: 'Profile',
  href: PROFILE_PAGE,
};
export const AUTHORIZED_MENU_ITEMS = [
  PROFILE_MENU_ITEM,
  {
    id: 'nav.checkout',
    defaultMessage: 'Checkout',
    href: CHECKOUT_PAGE,
  },
  {
    id: 'alternativeCheckout',
    href: CHECKOUT_PAGE_TWO,
    defaultMessage: 'Checkout Alternative',
  },
  ORDER_MENU_ITEM,
  {
    id: 'nav.order_received',
    href: ORDER_RECEIVED_PAGE,
    defaultMessage: 'Order invoice',
  },
  {
    id: 'nav.terms_and_services',
    defaultMessage: 'Terms and Services',
    href: TERMS_AND_SERVICES_PAGE,
  },
  {
    id: 'nav.privacy_policy',
    defaultMessage: 'Privacy Policy',
    href: PRIVACY_POLICY_PAGE,
  },
];
// category menu items for header navigation
export const CATEGORY_MENU_ITEMS = [
  {
    id: 'nav.Thực phẩm',
    href: GROCERY_PAGE,
    defaultMessage: 'Thực phẩm',
    icon: 'FruitsVegetable',
    dynamic: true,
  },
  {
    id: 'nav.Thực phẩm chức năng',
    href: GROCERY_PAGE_TWO,
    defaultMessage: 'Thực phẩm chức năng',
    icon: 'FruitsVegetable',
    dynamic: false,
  },
  {
    id: 'nav.Hóa mĩ phẩm',
    href: BAKERY_PAGE,
    defaultMessage: 'Hóa mĩ phẩm',
    icon: 'Bakery',
    dynamic: false,
  },
  {
    id: 'nav.Mẹ và bé',
    defaultMessage: 'Mẹ và bé',
    href: MAKEUP_PAGE,
    icon: 'FacialCare',
    dynamic: true,
  },
  {
    id: 'nav.Điện máy',
    defaultMessage: 'Điện máy',
    href: BAGS_PAGE,
    icon: 'Handbag',
    dynamic: true,
  },
  {
    id: 'nav.Homelife',
    defaultMessage: 'Homelife',
    href: CLOTHING_PAGE,
    icon: 'DressIcon',
    dynamic: true,
  },
  {
    id: 'nav.Voucher',
    defaultMessage: 'Voucher',
    href: FURNITURE_PAGE,
    icon: 'FurnitureIcon',
    dynamic: true,
  },
  {
    id: 'nav.Công nghệ',
    defaultMessage: 'Công nghệ',
    href: FURNITURE_PAGE_TWO,
    icon: 'FurnitureIcon',
    dynamic: false,
  },
  // {
  //   id: 'nav.book',
  //   defaultMessage: 'Book',
  //   href: BOOK_PAGE,
  //   icon: 'BookIcon',
  //   dynamic: true,
  // },
  // {
  //   id: 'nav.medicine',
  //   defaultMessage: 'Medicine',
  //   href: MEDICINE_PAGE,
  //   icon: 'MedicineIcon',
  //   dynamic: true,
  // },
  // {
  //   id: 'nav.foods',
  //   defaultMessage: 'Foods',
  //   href: RESTAURANT_PAGE,
  //   icon: 'Restaurant',
  // },
];

export const MOBILE_DRAWER_MENU = [
  HOME_MENU_ITEM,
  ...AUTHORIZED_MENU_ITEMS,
  HELP_MENU_ITEM,
  OFFER_MENU_ITEM,
];

export const PROFILE_SIDEBAR_TOP_MENU = [ORDER_MENU_ITEM, HELP_MENU_ITEM];
export const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM];

export const LANGUAGE_MENU = [
  {
    id: 'ar',
    defaultMessage: 'Arabic',
    icon: 'SAFlag',
  },
  {
    id: 'zh',
    defaultMessage: 'Chinese',
    icon: 'CNFlag',
  },
  {
    id: 'en',
    defaultMessage: 'English',
    icon: 'USFlag',
  },
  {
    id: 'de',
    defaultMessage: 'German',
    icon: 'DEFlag',
  },
  {
    id: 'he',
    defaultMessage: 'Hebrew',
    icon: 'ILFlag',
  },
  {
    id: 'es',
    defaultMessage: 'Spanish',
    icon: 'ESFlag',
  },
];
