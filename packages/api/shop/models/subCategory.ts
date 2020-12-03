module.exports = function (sequelize: any, DataTypes: any) {
    const scategories = sequelize.define("sub_categories",{
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