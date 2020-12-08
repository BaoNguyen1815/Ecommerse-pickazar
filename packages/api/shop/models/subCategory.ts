module.exports = function (sequelize: any, DataTypes: any) {
    const scategories = sequelize.define("sub_categories",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
          type:{
            type : DataTypes.STRING,
            allowNull : true,
            field: 'name'
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            field: "meta_title",
        },
        slug:{
            type: DataTypes.STRING,
            allowNull:true,
        }
    },{
        tableName: "sub_categories",
        freezeTableName: true,
        timestamps: false,
    })
    return scategories
}