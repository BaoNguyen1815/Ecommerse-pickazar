var Sequelize = require('sequelize');
var db= {

}


const sequelize = new Sequelize(
  'ecommerce',
  'root',
  '',
  {
      host: 'localhost',
      port: '3306',
      dialect: 'mysql',
      define: {
          freezeTableName: true,
      },
      pool: {
          max: 10,
          min: 0,
          acquire: 30000,
          idle: 10000,
      },
  },
)

let models = [
    require('./admin/models/order/orders'),
    require('./admin/models/order/ordered_products'),
    require('./admin/models/order/orderDetail'),
    require('./admin/models/customer/customers'),
    require('./admin/models/customer/addresses'),
    require('./admin/models/customer/contacts'),
]

models.forEach(model => {
    const seqModel = model(sequelize, Sequelize)
    db[seqModel.name] = seqModel
})



db.orders.belongsToMany(db.ordered_products, {as: 'products',through: db.order_details,foreignKey: 'order_id', otherKey: 'product_id'});
db.customers.hasMany(db.addresses,{foreignKey: 'customer_id'});
db.customers.hasMany(db.orders, {foreignKey: 'customer_id'} )
db.customers.hasMany(db.contacts, {foreignKey: 'customer_id'} )

Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
