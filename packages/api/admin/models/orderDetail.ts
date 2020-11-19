module.exports = function (sequelize: any, DataTypes: any) {
   
    
    const order_details = sequelize.define('order_details',{
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "order_id",
  
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id",
  
      },
    },{
        tableName: "order_details",
        freezeTableName: true,
        timestamps: false,
    })
   
    return order_details;
  };