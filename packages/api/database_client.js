var Sequelize = require('sequelize');
var db = {};

const sequelize = new Sequelize('store', 'root', '', {
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
  logging: false,
});

let models = [
  //   require('./admin/models/orders'),
  //   require('./admin/models/product'),
  //   require('./admin/models/orderDetail'),
  require('./shop/models/categories'),
  require('./shop/models/subCategories'),
  require('./shop/models/subsubCategories'),
  require('./shop/models/orders'),
  require('./shop/models/order_detail'),
  require('./shop/models/products'),
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
db.orders.hasMany(db.order_details, { foreignKey: 'order_id' });
db.products.hasOne(db.order_details, { foreignKey: 'product_id' });

db.categories.belongsToMany(db.sub_sub_categories, {
  through: db.sub_categories,
  foreignKey: 'category_id',
  otherKey: 'id',
});
db.sub_categories.hasMany(db.sub_sub_categories, {
  foreignKey: 'sub_category_id',
});
// db.categories.hasMany(db.sub_categories,{foreignKey: 'category_id'})
db.sub_categories.belongsTo(db.categories, { foreignKey: 'category_id' });
Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
