module.exports = function (sequelize: any, DataTypes: any) {
    const coupons = sequelize.define("coupons",{
        id:{
            type:DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field:"id",
        },
        title:{
            type: DataTypes.STRING,
            allowNull: true,
            field:"type",
        },
        code:{
            type: DataTypes.STRING,
            allowNull: true,
            field:"code",
        },
        discountInPercent:{
            type: DataTypes.INT,
            allowNull: true,
            field:"discount",
        },
        
    },{
        tableName: "coupons",
        freezeTableName: true,
        timestamps: false,
    })
    return coupons;
};