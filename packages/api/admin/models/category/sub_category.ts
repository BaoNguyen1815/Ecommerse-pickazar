
module.exports = function(sequelize: any, DataTypes: any){
    const sub_category= sequelize.define('sub_categories',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING,
            field: 'name',
          },
          // type: {
          //   type: DataTypes.STRING,
            
          // },
          // icon: {
          //   type: DataTypes.INTEGER,
          //   field : '',
          // },
          slug: {
            type: DataTypes.STRING,
          },
          // number_of_product:{
          //   type: DataTypes.INTEGER,
          // },
          creation_date: {
            type: DataTypes.DATE,
            field : 'created_at',
          },

    },{
        tableName: 'sub_categories',
        freezeTableName: true,
        timestamps: false,
    })
    return sub_category;
}