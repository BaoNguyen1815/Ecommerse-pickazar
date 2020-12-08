module.exports = function (sequelize: any, DataTypes: any) {

  const orders = sequelize.define(
    "orders",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "user_id",
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "affiliate_amount",
      },
      payment_method: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "payment_type",
      },
      contact_number: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "payment_type",
      },
      delivery_address: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "shipping_address",
      },
      deliveryTime: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "date",
      },
      description: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "payment_type",
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "coupon_discount",
      },
      delivery_fee: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: "payment_details",
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "payment_status",
      },
      creation_date: {
        type: DataTypes.DATE,
        field: "created_at",
      },
    },
    {
      tableName: "orders",
      freezeTableName: true,
      timestamps: false,
    }
  );
  
 
  return orders;
};
