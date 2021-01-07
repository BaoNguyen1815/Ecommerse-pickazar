module.exports = function(sequelize: any, DataTypes: any){
    const orders= sequelize.define(
        'orders',
        {
            id:{
                type : DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field:"id",
            },
            userId:{
                type : DataTypes.INTEGER,
                allowNull : false,
                field: 'user_id'
            },
            deliveryTime: {
                type: DataTypes.STRING,
                allowNull : false,
                field: 'code'
            },
            amount:{
                type: DataTypes.DOUBLE,
                allowNull : false,
                field: 'grand_total'
            },
            date:{
                type: DataTypes.DATE,
                allowNull: false,
                field: 'created_at'
            },
            deliveryAddress:{
                type : DataTypes.STRING,
                allowNull : false,
                field: 'shipping_address'
            },
            subtotal:{
                type : DataTypes.INTEGER,
                allowNull : false,
                field : 'sub_total'
            },
            discount:{
                type : DataTypes.DOUBLE,
                allowNull: true,
                field : 'coupon_discount'
            },
            deliveryFee:{
                type : DataTypes.INTEGER,
                allowNull : false,
                field : 'delivery_fee'
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull : true,
                field : 'payment_status'
            }
        },
        {
            tableName:'orders',
            freezeTableName: true,
            timestamps: false
        }
    )
    return orders;
};