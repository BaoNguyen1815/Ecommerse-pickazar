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
                type : DataTypes.SRING,
                allowNull: false,
                field : 'name'
            },
            slug:{
                type : DataTypes.STRING,
                allowNull : false
            }
        },{
            tableName :'categories',
            freezeTableName : true,
            timestamps : false
        }
    );
    return categories;
};