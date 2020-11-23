
module.exports = function(sequelize: any, DataTypes: any){
  const products = sequelize.define('products',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
          category_id : {
              type : DataTypes.INTEGER,
              field : 'category_id'
          },
          name: {
            type: DataTypes.STRING,
            field: 'name',
          },
          image: {
            type: DataTypes.STRING,
            field : 'thumbnail_img'
          },
          unit: {
            type: DataTypes.STRING,
            field : 'unit'
          },
          price: {
            type: DataTypes.INTEGER,
            field : 'unit_price'
          },
          discountInPercent: {
            type: DataTypes.INTEGER,
            field : 'discount'
          },
          per_unit: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field : 'num_of_sale'
          },
          quantity: {
              type : DataTypes.INTEGER,
              // allowNull: true,
              field :'unit_price'
          },
          // salePrice: {
          //   type: DataTypes.INTEGER,
          // },
          description : {
              type : DataTypes.STRING,
                field : 'meta_description'
          },
          creation_date :{
            type : DataTypes.DATE,
            field : 'created_at'
          },
          slug : {
              type : DataTypes.STRING,
              field : 'slug'
          }
    },{
        tableName: 'products',
        freezeTableName: true,
        timestamps: false,
    })
    return products;
}
