module.exports = function(sequelize :any, DataTypes: any) {
    const categories = sequelize.define(
        'categories',
        {
            id: {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true
            },
            type:{
                type : DataTypes.STRING,
                allowNull: false,
                field : 'name'
            },
            slug:{
                type : DataTypes.STRING,
                allowNull : false
            },
            title:{
                type: DataTypes.STRING,
                allowNull: false,
                field: 'meta_title'
            }
        },{
            tableName :'categories',
            freezeTableName : true,
            timestamps : false
        }
    );
    return categories;
};