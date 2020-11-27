module.exports = function(sequelize : any, DataTypes : any){
    const products = sequelize.define(
        'products',{
            id: {
                type: DataTypes.INTEGER,
                primaryKey : true,
                allowNull : false
            },
            title:{
                type : DataTypes.STRING,
                allowNull : false,
                field: 'name'
            },
            weight:{
                type: DataTypes.STRING,
                allowNull : false,
                field: 'weight'
            },
            price:{
                type : DataTypes.INTEGER,
                allowNull: false,
                field: 'unit_price'
            },
            image:{
                type: DataTypes.STRING,
                allowNull : true,
                field: 'photos'
            }
        },
        {
            tableName : 'products',
            freezeTableName: true,
            timestamps: false
        }
    )
    return products;
}