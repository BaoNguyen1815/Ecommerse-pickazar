module.exports = function( sequelize : any, DataTypes: any){
    const subsubCategories = sequelize.define(
        'sub_sub_categories',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            title:{
                type:DataTypes.STRING,
                allowNull : false,
                field: 'meta_title'
            },
            slug:{
                type: DataTypes.STRING,
                allowNull: false
            },
            type:{
                type:DataTypes.STRING,
                allowNull: false,
                field : 'name'
            },
        },
        {
            tableName: "sub_sub_categories",
            freezeTableName: true,
            timestamps: false,
        }
    )
    return subsubCategories;
}