module.exports = function (sequelize: any, DataTypes: any) {

    const products = sequelize.define("products", {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: true,
          field: "name",
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: true,
          field: "unit_price",
        },
        slug:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        weight:{
            type: DataTypes.STRING,
            allowNull : false,
            field: 'weight'
        },
        unit:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        description:{
            type: DataTypes.STRING,
            allowNull:true,
            field:"meta_description"
        },
        image:{
          type: DataTypes.STRING,
            allowNull:true,
            field:"thumbnail_img"
        }
      }, {
        tableName: "products",
        freezeTableName: true,
        timestamps: false,
      })
      return products;
    };
