module.exports = function (sequelize: any, DataTypes : any){
    const subCategories = sequelize.define(
        'sub_categories',
        {
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
            // category_id:{
            //     type: DataTypes.INTEGER,
            //     allowNull: true,
            //     nullAble : true
            // },
            title:{
                type : DataTypes.STRING,
                allowNull : true,
                field: 'meta_title'
            },
            slug:{
                type : DataTypes.STRING,
                allowNull: true
            },
            

            // icon : {
            //     type: DataTypes.STRING,
            //     allowNull: true
            // }
        },
        {
            tableName: "sub_categories",
            freezeTableName: true,
            timestamps: false,
        }
    );
    return subCategories;
}