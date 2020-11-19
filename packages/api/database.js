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
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
      },
  },
)

let models = [
    require('./admin/models/orders'),
    require('./admin/models/product'),
    require('./admin/models/orderDetail'),
   
]

models.forEach(model => {
    const seqModel = model(sequelize, Sequelize)
    db[seqModel.name] = seqModel
})

db.orders.belongsToMany(db.products,{through: db.order_details,foreignKey: 'order_id', otherKey: 'product_id'});

Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db