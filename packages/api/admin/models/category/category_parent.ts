
module.exports = function(sequelize: any, DataTypes: any){
    return sequelize.define('category',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING,
            field: 'name',
          },
        //   type: {
        //     type: DataTypes.STRING,
            
        //   },
        //   slug: {
        //     type: DataTypes.STRING,
        //   },

    },{
        tableName: 'categories',
        freezeTableName: true,
        timestamps: false,
    })
}