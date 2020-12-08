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
            field: "meta_title",
        },
        slug:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        type:{
            type:DataTypes.STRING,
            allowNull: false,
            field : 'name'
        },
    },{
        tableName: "sub_sub_Categories",
        freezeTableName: true,
        timestamps: false,
    })
    return subsub_categories
}