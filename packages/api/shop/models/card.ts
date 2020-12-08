module.exports = function (sequelize: any, DataTypes: any) {
    const address = sequelize.define("wallets",{
        id:{
            type:DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field:"id",
        },
        type:{
            type: DataTypes.STRING,
            allowNull: true,
            field:"offline_payment",
            
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true,
            field:"name",
        },
        info:{
            type : DataTypes.STRING,
            allownull:true,
            field:"address"
        }
    },{
        tableName: "wallets",
        freezeTableName: true,
        timestamps: false,
    })
    return address;
};