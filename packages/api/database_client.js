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
  // require('./admin/models/orders'),
  // require('./admin/models/product'),
  // require('./admin/models/orderDetail'),
  require('./shop/models/products'),
  require('./shop/models/subCategory'),
  require('./shop/models/subsubCategory'),
  require('./shop/models/users'),
  require('./shop/models/address'),
  require('./shop/models/contact'),
  require('./shop/models/category'),
];

models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
});

// db.orders.belongsToMany(db.products,{through: db.order_details,foreignKey: 'order_id', otherKey: 'product_id'});
db.products.belongsTo(db.sub_categories, {
  as: 'categories',
  foreignKey: 'subcategory_id',
});
db.products.belongsTo(db.sub_sub_categories, {
  foreignKey: 'subsubcategory_id',
});
db.products.belongsTo(db.categories, {
  as: 'category',
  foreignKey: 'category_id',
});
db.users.hasMany(db.addresses, { as: 'address', foreignKey: 'user_id' });
db.users.hasMany(db.contact, { as: 'contact', foreignKey: 'user_id' });
// db.products.hasMany(db.sub_categories,{foreignKey:'subcategory_id'})

Object.keys(db).forEach((key) => {
  if ('associate' in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
