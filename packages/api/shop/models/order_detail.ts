module.exports = function(sequelize: any, DataTypes : any){
    const orderDetail = sequelize.define(
        'order_details',{
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field:"id",
            },
            order_id:{
                type : DataTypes.INTEGER,
                allowNull: false,
                field: 'order_id'
            },
            product_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "product_id",
            },
            quantity:{
                type: DataTypes.INTEGER,
                allowNull : false,
                field: 'quantity'
            }
        },{
        tableName: "order_details",
        freezeTableName: true,
        timestamps: false,
    }
    )
    return orderDetail;
}