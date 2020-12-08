var Sequelize = require('sequelize');
var db = {};

const sequelize = new Sequelize('ecommerce', 'root', '', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

let models = [
  require('./admin/models/coupons'),
  require('./admin/models/category/category_parent'),
  require('./admin/models/category/sub_category'),
  require('./admin/models/category/sub_sub_categories'),
  require('./admin/models/product/products'),

  require('./admin/models/order/orders'),
  require('./admin/models/order/ordered_products'),
  require('./admin/models/order/orderDetail'),
  require('./admin/models/customer/customers'),
  require('./admin/models/customer/addresses'),
  require('./admin/models/customer/contacts'),
  require('./admin/models/staff/staffs')
];

models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
});

db.orders.belongsToMany(db.ordered_products, {as: 'products',through: db.order_details,foreignKey: 'order_id', otherKey: 'product_id'});
db.customers.hasMany(db.addresses,{foreignKey: 'customer_id'});
db.customers.hasMany(db.orders, {foreignKey: 'customer_id'} )
db.customers.hasMany(db.contacts, {foreignKey: 'customer_id'} )
db.staffs.hasMany(db.contacts, {foreignKey: 'customer_id'} )
db.products.belongsTo(db.sub_categories, { foreignKey: 'subcategory_id' });
db.products.belongsTo(db.category, {
  as: 'category_parent',
  foreignKey: 'category_id',
});
db.sub_categories.belongsTo(db.category, { foreignKey: 'category_id' });

// db.orders.belongsToMany(db.ordered_products, {
//   as: 'products',
//   through: db.order_details,
//   foreignKey: 'order_id',
//   otherKey: 'product_id',
// });
// db.customers.hasMany(db.addresses, { foreignKey: 'customer_id' });
// db.customers.hasMany(db.orders, { foreignKey: 'customer_id' });
// db.customers.hasMany(db.contacts, { foreignKey: 'customer_id' });

Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
