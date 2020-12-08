
module.exports = function(sequelize: any, DataTypes: any){
    return sequelize.define('sub_sub_categories',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING,
            field: 'name',
          },
          sub_category_id:{
            type: DataTypes.INTEGER,
            field : 'sub_category_id'
          },
        //   type: {
        //     type: DataTypes.STRING,
            
        //   },
          slug: {
            type: DataTypes.STRING,
          },

    },{
        tableName: 'sub_sub_categories',
        freezeTableName: true,
        timestamps: false,
    })
}