module.exports = function (sequelize: any, DataTypes: any) {
    const subsub_categories = sequelize.define("sub_sub_categories",{
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
        tableName: "sub_sub_Categories",
        freezeTableName: true,
        timestamps: false,
    })
    return subsub_categories
}