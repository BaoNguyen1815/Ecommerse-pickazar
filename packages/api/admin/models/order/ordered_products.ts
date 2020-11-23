module.exports = function (sequelize: any, DataTypes: any) {

const products = sequelize.define("ordered_products", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "name",
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "variant_product",
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "purchase_price",
    }
  }, {
    tableName: "products",
    freezeTableName: true,
    timestamps: false,
  })
  return products;
};