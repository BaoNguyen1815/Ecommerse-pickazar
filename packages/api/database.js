var Sequelize = require('sequelize');
var db = {};

const sequelize = new Sequelize('pickbazar', 'root', '', {
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
  require('./admin/models/orders'),
  // require('./admin/models/product'),
  require('./admin/models/orderDetail'),
  require('./admin/models/orders'),
  require('./admin/models/coupons'),
  require('./admin/models/category/category_parent'),
  require('./admin/models/category/sub_category'),
  require('./admin/models/category/sub_sub_categories'),
  require('./admin/models/product/products'),
];

models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
});

db.orders.belongsToMany(db.products, {
  through: db.order_details,
  foreignKey: 'order_id',
  otherKey: 'product_id',
});

db.sub_categories.belongsTo(db.categories, { foreignKey: 'category_id' });
// db.sub_categories.hasMany(db.sub_sub_categories, { foreignKey: 'sub_category_id' });

db.products.belongsTo(db.sub_categories, { foreignKey: 'subcategory_id' });

Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
